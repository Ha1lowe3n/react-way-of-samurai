import { connect } from 'react-redux';

import { followAC, unfollowAC, setUsersAC } from '../../redux/reducers/users';

import Users from './Users';

const mapStateToProps = (state) => ({
  users: state.users.users,
  pageSize: state.users.pageSize,
  totalUsersCount: state.users.totalUsersCount,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => {
    dispatch(followAC(userId));
  },

  unfollow: (userId) => {
    dispatch(unfollowAC(userId));
  },

  setUsers: (users) => {
    dispatch(setUsersAC(users));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
