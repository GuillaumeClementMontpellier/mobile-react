import {State} from "../../state";
import {connect} from "react-redux";
import {Post} from "../../state/entities";
import {fetchComments} from "../../actions/async_action/comments";
import PostPreview from "../../components/Posts/PostPreview";
import {push} from "connected-react-router";
import {fetchAuthor} from "../../actions/async_action/user";
import {signalPost} from "../../actions/async_action/posts";


const mapStateToProps = (state: State, ownProps: any) => {

    let post : Post = ownProps.post;

    let author = state.entities.Users[post.publicationAuthor];

    return {
        post,
        className: ownProps.className,
        token: state.params.authToken,
        author
    }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        onClick: (id: string) => {
            dispatch(fetchComments(id));
            dispatch(push("/post/" + id))
        },
        loadAuthor : (idUser: string) => {
            dispatch(fetchAuthor(idUser))
        },
        signal: (id: string, token: string) => {
            dispatch(signalPost(id, token))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPreview)