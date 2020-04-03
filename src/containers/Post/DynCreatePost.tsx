import {State} from "../../state";
import {connect} from "react-redux";
import CreatePost from "../../components/Posts/CreatePost";
import {User} from "../../state/entities";
import {createPost} from "../../actions/async_action/posts";

const mapStateToProps = (state: State) => {

    let idUser = state.params.activeUser;

    if (!idUser){
        return {
            className: "post-create",
            author : undefined,
            token: undefined
        }
    }

    return {
        className: "post-create",
        author : state.entities.Users[idUser],
        token: state.params.authToken
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        submit: (user : User, data: any, token: string) => {
            let post = {
                publicationTitle: data.publicationTitle.value,
                publicationDescription: data.publicationDescription.value,
                publicationAuthor : user._id,
                isDiscussion: data.isDiscussion.checked,
                isAnonymous: data.isAnonymous.checked
            };
            dispatch(createPost(post, user, token));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)