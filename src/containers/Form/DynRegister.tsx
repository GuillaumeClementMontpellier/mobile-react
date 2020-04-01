import {connect} from 'react-redux'
import {State} from "../../state";
import Form from "../../components/Utils/Form"
import {register} from "../../actions/async_action/auth";
import {displayError} from "../../actions/action_creator/display";

const mapStateToProps = (state: State) => {
    return {
        name: "Register",
        fields: [{name: "FirstName", type: "text"},
            {name: "LastName", type: "text"},
            {name: "Pseudo", type: "text"},
            {name: "Mail", type: "email"},
            {name: "Password", type: "password"},
            {name: "Confirm Password", type: "password"}],
        submitName: "Register",
        className: "Register"
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        callback: (data: any) => {

            // Verifie que password == confirm password
            if(data["Confirm Password"].value !== data.Password.value){
                dispatch(displayError({message: "Password must match the confirmation"}));
                return ;
            }

            const userInfo = {
                userName: data.LastName.value,
                userFirstName: data.FirstName.value,
                userPseudo: data.Pseudo.value,
                userMail: data.Mail.value,
                userPassword: data.Password.value
            };

            dispatch(register(userInfo))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);