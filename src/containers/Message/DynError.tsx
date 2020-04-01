import {connect} from 'react-redux'
import {State} from "../../state"
import Error from "../../components/Utils/Error"
import {clearError} from "../../actions/action_creator/display";

const mapStateToProps = (state: State) => {
    let message;
    if (state.UI.error) {
        message = state.UI.error.message
    }
    return {
        active: !!state.UI.error,
        className: "error-display",
        message
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        dismiss: () => {
            dispatch(clearError())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);