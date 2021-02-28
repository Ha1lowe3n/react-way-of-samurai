import { connect } from 'react-redux';

import { addPost, updateNewPostText } from '../../../redux/reducers/profile';

import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  addPost,
  updateNewPostText,
})(MyPosts);
