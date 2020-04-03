import {State} from "../../state";
import {connect} from "react-redux";
import {Comment} from "../../state/entities";
import {fetchAuthor} from "../../actions/async_action/user";
import CommentDetail from "../../components/Comment/CommentDetail";
import {deleteComment, signalComment} from "../../actions/async_action/comments";


const mapStateToProps = (state: State, ownProps: any) => {

    let comment: Comment = ownProps.comment;

    let author = state.entities.Users[comment.commentAuthor];

    let canEdit = false;
    const activeUser = state.params.activeUser;

    if (activeUser) {
        let user = state.entities.Users[activeUser];
        if (user.isAdmin) {
            canEdit = true;
        } else if (comment && activeUser === comment.commentAuthor) {
            canEdit = true;
        }
    }

    return {
        comment,
        author,
        className : ownProps.className,
        token: state.params.authToken,
        canEdit
    }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        loadAuthor : (idUser: string) => {
            console.log(idUser);
            dispatch(fetchAuthor(idUser))
        },
        signal: (id: string, token: string) => {
            dispatch(signalComment(id, token))
        },
        deleteComment: (id: string, token: string) => {
            dispatch(deleteComment(id, token))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentDetail)