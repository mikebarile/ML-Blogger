import { receivePosts, receivePost, clearPost,
  FETCH_POST, FETCH_POSTS, CREATE_POST, DELETE_POST, EDIT_POST
} from '../actions/post_actions';

import {fetchPost, fetchPosts, createPost, deletePost,
  editPost, fetchCoords, fetchSearchPosts, fetchTopPosts
} from '../util/post_api_util';

export default ({ getState, dispatch }) => next => action => {
  const receivePostSuccess = post => {
    dispatch(receivePost(post));
  };

  const receivePostsSuccess = posts => {
    dispatch(receivePosts(posts));
  };

  const removePostSuccess = id => {
    dispatch(clearPost(id));
  };

  switch(action.type) {
    case FETCH_POST:
      fetchPost(action.title, receivePostSuccess);
      return next(action);
    case FETCH_POSTS:
      fetchPosts(receivePostsSuccess);
      return next(action);
    case CREATE_POST:
      createPost(action.post);
      return next(action);
    case DELETE_POST:
      deletePost(action.id, removePostSuccess);
      return next(action);
    case EDIT_POST:
      editPost(action.post, receivePostSuccess);
      return next(action);
    default:
      return next(action);
  }
};
