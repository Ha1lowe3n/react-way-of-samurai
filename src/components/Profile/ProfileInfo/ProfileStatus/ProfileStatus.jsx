import React from "react";

import classes from "./ProfileStatus.module.scss";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode,
        });
    };

    updateTextStatus = () => {
        this.toggleEditMode();
        this.props.updateStatus(this.state.status);
    };

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.toggleEditMode();
            this.updateTextStatus();
        }
    };

    render() {
        return (
            <>
                {!this.state.editMode ? (
                    <div>
                        {this.props.status === "" ? (
                            <span
                                className={classes.set_status_message}
                                onDoubleClick={this.toggleEditMode}
                            >
                                set a status message
                            </span>
                        ) : (
                            <span onDoubleClick={this.toggleEditMode}>
                                {this.state.status}
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
