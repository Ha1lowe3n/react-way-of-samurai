import { connect } from "react-redux";
import { compose } from "redux";

import { addMessage, onChangeMessage } from "../../redux/reducers/dialogs";

import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => ({
    dialogs: state.dialogs,
});

export default compose(
    connect(mapStateToProps, {
        addMessage,
        onChangeMessage,
    }),
    withAuthRedirect
)(Dialogs);
