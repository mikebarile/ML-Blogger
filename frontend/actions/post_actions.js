export const FETCH_POST = "FETCH_POST";
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const CLEAR_POST = "CLEAR_POST";

export const fetchPost = (title) => ({
  type: FETCH_POST,
  title
});

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const createPost = (post) => ({
  type: CREATE_POST,
  post
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  id
});

export const editPost = (post) => ({
  type: EDIT_POST,
  post
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});


export const clearPost = (id) => ({
  type: CLEAR_POST,
  id
});
