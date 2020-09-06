import axios from "axios";

export default {
  // Gets all books
  getTodos: function() {
    return axios.get("http://localhost:3001/orders");
  },
  // Gets the book with the given id
  getTodo: function(id) {
    return axios.get("/api/todos/" + id);
  },
  // Deletes the book with the given id
  deleteTodo: function(id) {
    console.log("Hit");
    return axios.delete("http://localhost:3001/orders/" + id);
  },
  // Saves a book to the database
  saveTodos: function(todoData) {
    return axios.post("http://localhost:3001/orders", todoData);
  }
};
//push