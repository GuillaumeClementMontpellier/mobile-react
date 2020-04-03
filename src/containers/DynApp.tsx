import {connect} from 'react-redux'
import {State} from "../state";
import App, {AppProps} from "../components/App";

const mapStateToProps = (state: State): AppProps => {
    const index = state.params.activeUser;
    if (index) {
        return {
            admin: state.entities.Users[index].isAdmin
        }
    } else {
        return {
            admin: false
        }
    }
};

const DynApp = connect(mapStateToProps, {})(App);

export default DynApp