import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

import Profile from "./Profile";

import { getUserProfile } from "../../redux/reducers/profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <>
                {!this.props.isAuth ? (
                    <Redirect to={"/login"} />
                ) : (
                    <Profile {...this.props} />
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profileInfo,
    isAuth: state.auth.isAuth,
});

const WIthUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
    WIthUrlDataContainerComponent
);
