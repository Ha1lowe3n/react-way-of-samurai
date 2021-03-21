import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
    function RedirectComponent(props) {
        return (
            <>
                {!props.isAuth ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )}
            </>
        );
    }

    return connect(mapStateToProps)(RedirectComponent);
};
