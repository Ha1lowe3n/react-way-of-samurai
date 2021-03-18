import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Profile from "./Profile";

import { setUserProfile } from "../../redux/reducers/profile";
import { usersAPI } from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;

        usersAPI.getProfile(userId).then((res) => {
            this.props.setUserProfile(res.data);
        });
    }

    render() {
        return <Profile {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profileInfo,
});

const WIthUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
    WIthUrlDataContainerComponent
);
