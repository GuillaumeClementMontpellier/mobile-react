import {connect} from 'react-redux'
import {State} from "../state";
import NavBar from "../components/NavBar";

const mapStateToProps = (state: State) => {
    return {
        active: !state.params.activeUser,
        admin: !!state.params.isAdmin
    }
};

const mapDispatchToProps = (dispatch : any) => {
    return {
        logoutCallback: () => {
            console.count("logout")
        }
    }
};

const DynNavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default DynNavBar