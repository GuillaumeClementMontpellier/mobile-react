import {State} from "../state";
import {connect} from "react-redux";
import {fetchPost} from "../actions/async_action/posts";
import PostDetail from "../components/Posts/PostDetail";
import {Comment, Post} from "../state/entities";
import {CommentFilter} from "../state/UI";
import {fetchComments, postComment} from "../actions/async_action/comments";

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

    // If display edit options
    let canEdit = false;
    const activeUser = state.params.activeUser;
    if (activeUser) {
        let user = state.entities.Users[activeUser];
        if (user.isAdmin) {
            canEdit = true;
        } else if (post && activeUser === post.publicationAuthor._id) {
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
        token: state.params.authToken
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
        postComment: (id: string, content: string) => {
            dispatch(postComment(id, content))
        },
        delete: (id: string) => {

        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)