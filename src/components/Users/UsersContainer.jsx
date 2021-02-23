import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Users from './Users';
import { Preloader } from '../common';

import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  toggleIsFetchingAC,
} from '../../redux/reducers/users';

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, setUsers, pageSize, setTotalUsersCount, toggleIsFetching } = this.props;

    toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
      )
      .then((res) => {
        toggleIsFetching(false);
        setUsers(res.data.items);
        setTotalUsersCount(res.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    const { setCurrentPage, setUsers, toggleIsFetching } = this.props;

    setCurrentPage(pageNumber);
    toggleIsFetching(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
      )
      .then((res) => {
        toggleIsFetching(false);
        setUsers(res.data.items);
      });
  };

  render() {
    const {
      users,
      follow,
      unfollow,
      totalUsersCount,
      pageSize,
      currentPage,
      isFetching,
    } = this.props;

    return (
      <>
        {isFetching ? <Preloader /> : ''}
        <Users
          users={users}
          follow={follow}
          unfollow={unfollow}
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChanged={this.onPageChanged}
          isFetching={isFetching}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  pageSize: state.users.pageSize,
  totalUsersCount: state.users.totalUsersCount,
  currentPage: state.users.currentPage,
  isFetching: state.users.isFetching,
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

  toggleIsFetching: (toggleIsFetching) => {
    dispatch(toggleIsFetchingAC(toggleIsFetching));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
