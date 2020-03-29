import {Post} from "../state/entities";
import {PostFilter} from "../state/UI";

const getVisiblePost = (posts: Post[], filter: PostFilter) => {
    switch (filter) {
        case PostFilter.PUBLICATIONS:
            return posts.filter(t => t.isPublication)
        case PostFilter.DISCUSSIONS:
            return posts.filter(t => !t.isPublication)
        case PostFilter.ALL_POSTS:
        default:
            return posts
    }
};