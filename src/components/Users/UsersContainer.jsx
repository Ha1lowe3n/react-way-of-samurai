import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Users from './Users';

import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from '../../redux/reducers/users';

class UsersContainer extends React.Component {
  componentDidMount() {
    const { users, currentPage, setUsers, pageSize, setTotalUsersCount } = this.props;

    if (users.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        )
        .then((res) => {
          setUsers(res.data.items);
          setTotalUsersCount(res.data.totalCount);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
      )
      .then((res) => this.props.setUsers(res.data.items));
  };

  render() {
    const { users, follow, unfollow, totalUsersCount, pageSize, currentPage } = this.props;
    return (
      <Users
        users={users}
        follow={follow}
        unfollow={unfollow}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
