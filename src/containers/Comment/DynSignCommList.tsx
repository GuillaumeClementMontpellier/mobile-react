import {State} from "../../state";
import {connect} from "react-redux";
import CommentList from "../../components/Comment/CommentList";
import {Comment} from "../../state/entities"

const getVisibleComments = (comms: any, signaled: string[]): Comment[] => {
    let c: Comment[] = [];

    for (const key in comms) {
        if (comms.hasOwnProperty(key) && signaled.includes(key)) {
            c.push(comms[key]);
        }
    }

    return c
};

const mapStateToProps = (state: State) => {
    let comments = getVisibleComments(state.entities.Comments, state.params.signaledComments);

    return {
        comments,
        className: "comment-signaled_list",
        name: "Signaled Comments"
    }
};

export default connect(mapStateToProps, {})(CommentList)