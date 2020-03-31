import {Post} from "../../state/entities";
import {PostFilter} from "../../state/UI";
import {State} from "../../state";
import {push} from "connected-react-router";
import {connect} from "react-redux";
import PostList from "../../components/Posts/PostsList";
import {fetchPosts} from "../../actions/async_action";

const getVisiblePosts = (posts: any, filter: PostFilter) => {
    let p: Post[] = [];

    for (const key in posts) {
        if (posts.hasOwnProperty(key)) {
            p.push(posts[key]);
        }
    }

    switch (filter) {
        case PostFilter.PUBLICATIONS:
            return p.filter(t => !t.isDiscussion);
        case PostFilter.DISCUSSIONS:
            return p.filter(t => t.isDiscussion);
        case PostFilter.ALL_POSTS:
        default:
            return p
    }
};

const mapStateToProps = (state: State) => {
    return {
        name: "Posts",
        posts: getVisiblePosts(state.entities.Posts, state.UI.postFilter),
        className: ""
    }
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        onClick: (id: string) => {
            dispatch(push("/post/" + id))
        },
        loadPosts: () => {
            dispatch(fetchPosts())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList)