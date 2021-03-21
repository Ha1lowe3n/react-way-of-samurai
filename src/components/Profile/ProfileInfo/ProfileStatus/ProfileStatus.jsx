import React from "react";

import classes from "./ProfileStatus.module.scss";

function ProfileStatus({ status }) {
    const [editMode, setEditMode] = React.useState(false);
    const [textStatus, setTextStatus] = React.useState("Hello friends");

    // переключаем span и input
    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const changeTextStatus = (e) => {
        setTextStatus(e.currentTarget.value);
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            setTextStatus(e.currentTarget.value);
            toggleEditMode();
        }
    };

    return (
        <>
            {!editMode ? (
                textStatus === "" ? (
                    <div>
                        <span
                            className={classes.set_status_message}
                            onDoubleClick={toggleEditMode}
                        >
                            set a status message
                        </span>
                    </div>
                ) : (
                    <div>
                        <span onDoubleClick={toggleEditMode}>{textStatus}</span>
                    </div>
                )
            ) : (
                <div>
                    <input
                        onBlur={toggleEditMode}
                        value={textStatus}
                        autoFocus={true}
                        onChange={changeTextStatus}
                        onKeyPress={onKeyPress}
                    />
                </div>
            )}
        </>
    );
}

// class ProfileStatus extends React.Component {
//     state = {
//         editMode: false,
//     };
//
//     toggleEditMode = () => {
//         this.setState({
//             editMode: !this.state.editMode,
//         });
//     };
//
//     render() {
//         return (
//             <>
//                 {!this.state.editMode ? (
//                     <div>
//                         <span onDoubleClick={this.toggleEditMode}>
//                             {this.props.status}
//                         </span>
//                     </div>
//                 ) : (
//                     <div>
//                         <input
//                             onBlur={this.toggleEditMode}
//                             value={this.props.status}
//                             autoFocus={true}
//                         />
//                     </div>
//                 )}
//             </>
//         );
//     }
// }

export default ProfileStatus;
