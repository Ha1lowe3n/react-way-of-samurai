import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import Profile from "./Profile";
import { getUserProfile } from "../../redux/reducers/profile";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        this.props.getUserProfile(userId);
    }

    render() {
        return <Profile profile={this.props.profile} />;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profileInfo,
});

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
