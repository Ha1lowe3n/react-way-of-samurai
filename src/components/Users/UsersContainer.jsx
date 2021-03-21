import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Users from "./Users";
import { Preloader } from "../common";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    followUser,
    unfollowUser,
} from "../../redux/reducers/users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : ""}
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
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
    followingInProgress: state.users.followingInProgress,
});

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
        followUser,
        unfollowUser,
    }),
    withAuthRedirect
)(UsersContainer);
