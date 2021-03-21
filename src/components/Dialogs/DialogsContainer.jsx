import { connect } from "react-redux";

import { addMessage, onChangeMessage } from "../../redux/reducers/dialogs";

import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => ({
    dialogs: state.dialogs,
});

export default withAuthRedirect(
    connect(mapStateToProps, {
        addMessage,
        onChangeMessage,
    })(Dialogs)
);
