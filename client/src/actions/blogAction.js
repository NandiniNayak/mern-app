import { NEW_BLOG, DELETE_BLOG, SET_BLOGS } from "./types";

// action creators are functions that return a javascript object which specifies what action should occur and what value should be passed
export const handleNewBlog = (blog) => {
    return{
        type: NEW_BLOG,
        val: blog
    }
}

export const handleBlogs = (blogs) => {
    return {
        type: SET_BLOGS,
        val: blogs
    }
}

export const handleDeletedBlog = (id) => {
    return {
        type: DELETE_BLOG,
        val: id
    }
}

