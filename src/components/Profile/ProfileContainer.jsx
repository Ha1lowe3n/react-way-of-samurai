import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Profile from "./Profile";
import {
    getUserProfile,
    getStatus,
    updateStatus,
} from "../../redux/reducers/profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                updateStatus={this.props.updateStatus}
                status={this.props.status}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profileInfo,
    status: state.profile.status,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
