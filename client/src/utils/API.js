import axios from "axios";

export default {
  // Gets all books
  getTodos: function() {
    return axios.get("api/inventories");
  },
  // Gets the book with the given id
  getTodo: function(id) {
    return axios.get("/api/todos/" + id);
  },
  // Deletes the book with the given id
  deleteTodo: function(id) {
    console.log("Hit");
    return axios.delete("/api/inventories" + id);
  },
  // Saves a book to the database
  saveTodos: function(todoData) {
    return axios.post("/api/inventories", todoData);
  }
};
