import React from 'react';
import { connect } from 'react-redux';

import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/reducers/dialogs';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogs: state.dialogs,
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: () => {
    dispatch(sendMessageActionCreator());
  },

  onChangeMessage: (text) => {
    dispatch(updateNewMessageTextActionCreator(text));
  },
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
