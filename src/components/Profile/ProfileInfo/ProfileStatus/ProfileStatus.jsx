import React from "react";

import classes from "./ProfileStatus.module.scss";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode,
        });
    };

    updateTextStatus = (e) => {
        if (this.state.status !== e.currentTarget.value) {
            this.props.updateStatus(this.state.status);
        }
        this.toggleEditMode();
    };

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.toggleEditMode();
            this.updateTextStatus(e);
        }
    };

    render() {
        return (
            <>
                {!this.state.editMode ? (
                    <div>
                        {this.props.status ? (
                            <span onDoubleClick={this.toggleEditMode}>
                                {this.state.status}
                            </span>
                        ) : (
                            <span
                                className={classes.set_status_message}
                                onDoubleClick={this.toggleEditMode}
                            >
                                set a status message
                            </span>
                        )}
                    </div>
                ) : (
                    <div>
                        <input
                            autoFocus={true}
                            value={this.state.status}
                            onBlur={this.updateTextStatus}
                            onChange={this.onChangeStatus}
                            onKeyPress={this.onKeyPress}
                        />
                    </div>
                )}
            </>
        );
    }
}

export default ProfileStatus;
