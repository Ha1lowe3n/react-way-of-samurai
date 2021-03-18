import { connect } from "react-redux";

import { addMessage, onChangeMessage } from "../../redux/reducers/dialogs";

import Dialogs from "./Dialogs";

const mapStateToProps = (state) => ({
    dialogs: state.dialogs,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
    addMessage,
    onChangeMessage,
})(Dialogs);
