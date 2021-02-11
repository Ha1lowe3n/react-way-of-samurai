import { connect } from 'react-redux';

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/reducers/profile';

import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: () => {
    dispatch(addPostActionCreator());
  },

  updateNewPostText: (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
