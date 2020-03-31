import {State} from "../state";
import {connect} from "react-redux";
import {fetchPosts} from "../actions/async_action";
import PostDetail from "../components/Posts/PostDetail";

const mapStateToProps = (state: State) => {
    const id = state.router.location.pathname.split("/")[2];
    const post = state.entities.Posts[id];

    // console.log(post);
    return {
        post,
        className: "post-detail"
    }
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        load : () => {
            dispatch(fetchPosts())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)