import {Post} from "../../state/entities";
import {PostFilter} from "../../state/UI";
import {State} from "../../state";
import {push} from "connected-react-router";
import {connect} from "react-redux";
import PostList from "../../components/Posts/PostsList";
import {fetchComments} from "../../actions/async_action/comments";
import {fetchSignaled} from "../../actions/async_action/posts";

const getVisiblePosts = (posts: any, filter: PostFilter, signaled: string[]): Post[] => {
    let p: Post[] = [];

    for (const key in posts) {
        if (posts.hasOwnProperty(key) && signaled.includes(key)) {
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
    let visiblePosts = getVisiblePosts(state.entities.Posts, state.UI.postFilter, state.params.signaledPosts);
    return {
        name: "Signals",
        posts: visiblePosts,
        className: "signals-list",
        token: state.params.authToken,
        loaded: !!visiblePosts,
        fetching : state.UI.fetching
    }
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        onClick: (id: string) => {
            dispatch(fetchComments(id));
            dispatch(push("/post/" + id))
        },
        loadPosts: (token?: string) => {
            if (token) {
                dispatch(fetchSignaled(token))
            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList)