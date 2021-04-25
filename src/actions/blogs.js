import { v4 as uuidv4 } from "uuid"

export const addBlog = ({ title = "", description = "", dateAdded = 0 }) => ({
  type: "ADD_BLOG",
  blog: {
    id: uuidv4(),
    title: title,
    description: description,
    dateAdded: dateAdded
  }
})

export const removeBlog = ( id ) => ({
  type: "REMOVE_BLOG",
  id: id
})

export const updateBlog = (id, updates) => ({
  type: "UPDATE_BLOG",
  id,
  updates
})