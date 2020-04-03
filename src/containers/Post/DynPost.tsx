import {State} from "../../state";
import {connect} from "react-redux";
import {deletePost, fetchPost, signalPost} from "../../actions/async_action/posts";
import PostDetail from "../../components/Posts/PostDetail";
import {Comment, Post} from "../../state/entities";
import {CommentFilter} from "../../state/UI";
import {fetchComments, postComment} from "../../actions/async_action/comments";
import {fetchAuthor} from "../../actions/async_action/user";

const getComments = (comments: any, filter: CommentFilter, postId: string): Comment[] => {
    let c: Comment[] = [];

    for (const key in comments) {
        if (comments.hasOwnProperty(key) && comments[key].idParent === postId) {
            c.push(comments[key]);
        }
    }

    if (filter.category) {
        c = c.filter(comm => comm.category === filter.category)
    }

    return c
};

const mapStateToProps = (state: State) => {
    const id = state.router.location.pathname.split("/")[2];
    const post: Post = state.entities.Posts[id];

    let author;
    if (post) {
        author = state.entities.Users[post.publicationAuthor];
    }

    // If display edit options
    let canEdit = false;
    const activeUser = state.params.activeUser;

    if (activeUser) {
        let user = state.entities.Users[activeUser];
        if (user.isAdmin) {
            canEdit = true;
        } else if (post && activeUser === post.publicationAuthor) {
            canEdit = true;
        }
    }

    const comments = getComments(state.entities.Comments, state.UI.commentFilter, id);

    return {
        post,
        _id: id,
        className: "post-detail",
        canEdit,
        comments,
        fetching: state.UI.fetching,
        token: state.params.authToken,
        author
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        load: (id: string) => {
            dispatch(fetchPost(id))
        },
        loadComments: (id: string) => {
            dispatch(fetchComments(id))
        },
        postComment: (id: string, data: any) => {
            let comment = {
                commentDescription: data.comment.value,
                isAnonymous: data.isAnonymous.checked
            };
            console.log(comment);
            dispatch(postComment(id, comment))
        },
        delete: (id: string, token: string) => {
            dispatch(deletePost(id, token))
        },
        loadAuthor: (idUser: string) => {
            dispatch(fetchAuthor(idUser))
        },
        signal: (id: string, token: string) => {
            dispatch(signalPost(id, token))
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)