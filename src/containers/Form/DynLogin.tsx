import {connect} from 'react-redux'
import {State} from "../../state";
import Form from "../../components/Utils/Form"
import {login} from "../../actions/async_action";

const mapStateToProps = (state: State) => {
    return {
        name: "Login",
        fields: [{name: "Mail", type: "text"}, {name: "Password", type: "password"}],
        submitName: "Log in",
        className: "Login"
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        callback: (data: any) => {
            dispatch(login({userMail : data.Mail.value, userPassword : data.Password.value}))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);