import { connect } from 'react-redux';

import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from '../../redux/reducers/users';

import Users from './Users';

const mapStateToProps = (state) => ({
  users: state.users.users,
  pageSize: state.users.pageSize,
  totalUsersCount: state.users.totalUsersCount,
  currentPage: state.users.currentPage,
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

  setCurrentPage: (pageNumber) => {
    dispatch(setCurrentPageAC(pageNumber));
  },

  setTotalUsersCount: (totalUsersCount) => {
    dispatch(setTotalUsersCountAC(totalUsersCount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
