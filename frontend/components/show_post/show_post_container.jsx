import { connect } from 'react-redux';
import ShowPost from './show_post';
import { signup } from '../../actions/session_actions';
import { fetchPost, deletePost } from '../../actions/post_actions';
import { createComment, deleteComment, editComment
} from '../../actions/comment_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({session, post}) => ({
  currentUser: session.currentUser,
  post: post
});

const mapDispatchToProps = (dispatch, { location }) => ({
  processForm: (user) => dispatch(signup(user)),
  fetchPost: (title) => dispatch(fetchPost(title)),
  deletePost: (id) => dispatch(deletePost(id)),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  editComment: (comment) => dispatch(editComment(comment)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost);
