import {connect} from 'react-redux'
import {State} from "../../state"
import {clearDisplay} from "../../actions/action";
import Message from "../../components/Utils/Message";

const mapStateToProps = (state: State) => {
    return {
        active: !!state.UI.message,
        className: "message-display",
        message: state.UI.message
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        dismiss: () => {
            dispatch(clearDisplay())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);