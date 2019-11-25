// reducers are the functions that take current state and an action and returns a new state
import {SET_BLOGS, NEW_BLOG, DELETE_BLOG} from '../actions/types';
const initialState = {
    blogs: []
}

// export const blogReducer = (state= initialState, action ){
//     return newState
// }
const blogReducer = (state = initialState, action) => {
    // allways take a copy of the state  and also array and objects
    // never mutate original state
    var newState = { ...state };
    var newBlogs = [...newState.blogs];
    if (action.type === SET_BLOGS) {
        newBlogs = action.val;
    }
    if (action.type === NEW_BLOG) {
        newBlogs.push(action.val);
    }
    if (action.type === DELETE_BLOG) {
        // create a copy of the existing blogs array
        const index = newBlogs.findIndex(blog => blog._id === action.val);
        const blogs = [...newBlogs];
        blogs.splice(index, 1);
        newBlogs = blogs;
    }
    newState.blogs = newBlogs;
    return newState;
};
export default blogReducer;