import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { setUserProfile } from '../../redux/reducers/profile';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { setUserProfile } = this.props;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((res) => {
      console.log(res.data);
      setUserProfile(res.data);
    });
  }

  render() {
    console.log(this.props.profile);
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.profileInfo,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
