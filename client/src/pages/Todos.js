import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { useAuth0 } from "@auth0/auth0-react";

// https://community.auth0.com/t/getting-logged-out-after-refreshing-on-localhost-react-js-spa/28474
// https://community.auth0.com/t/react-with-auth0-spa-looses-login-after-refresh/35461/2
// https://community.auth0.com/t/persisting-login-between-refreshes/22675


// For SPAs, you still need to use checkSession() to remain logged in. 
// Have a look at the following blog post which provides a detailed example of a React app. Scroll down to the “Keeping Users Signed In after a Refresh” section, about 3/4s of the way down the page.


// store tokens in the local storage, cookies 
function Todos() {
  const { user: { picture, name, email, sub }, isAuthenticated, isLoading } = useAuth0();

  // Setting our component's initial state
  const [todos, setTodos] = useState([])
  const [formObject, setFormObject] = useState({})

  // Loads all todos and sets them to todos
  const loadTodos = () => {
    console.log("Loading Todos")
    API.getTodos()
      .then(res => setTodos(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadTodos();

    console.log(todos);
  }, [])
  // Deletes a todo from the database with a given id, then reloads books from the db
  function deleteTodo(id) {
    API.deleteTodo(id)
      .then(res => loadTodos())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;

    console.log(formObject);

    setFormObject({ ...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // {{{{ finding an NPM module for validation }}}}
    API.saveTodos({ ...formObject, userId: sub })
      .then(res => loadTodos())
      .catch(err => console.log(err));
  };

  console.log(todos);

    return (
      <Container>
        <Row>
          { isAuthenticated ? <Col size="md-3">
            <Jumbotron>
              <h4>Enter item</h4>
            </Jumbotron>
            <form>
              <Input onChange={handleInputChange} name="item" placeholder="Item (required)" />
              <Input onChange={handleInputChange} name="quantity" placeholder="Quantity (required)" />
              <Input onChange={handleInputChange} name="cost" placeholder="Cost (required)" />
              <Input onChange={handleInputChange} name="produce" placeholder="Produce (required)" />
              <Input onChange={handleInputChange} name="meat" placeholder="Meat (required)" />
              <Input onChange={handleInputChange} name="driedGoods" placeholder="Dried goods (required)" />
              <TextArea onChange={handleInputChange} name="notes" placeholder="Notes (Optional)" />
              <FormBtn onClick={handleFormSubmit}> Add to list </FormBtn>
            </form> 
          </Col> : 'Please log in'}
          <Col size="md-5 sm-12">
            <Jumbotron>
              <h4>Prep list</h4>
            </Jumbotron>
            {todos.length ? (
              <List>
                {todos.map(todo => (
                  <ListItem key={todo._id}>
                    <Link to={"/todos/" + todo._id}>
                      <strong>
                        Item: {todo.item}
                        <br />
                        Quantity: {todo.quantity}
                        <br />
                        Cost: {todo.cost}
                        <br />
                        Produce: {todo.produce}
                        <br />
                        Meat: {todo.meat}
                        <br />
                        DriedGoods: {todo.cost}
                        <br />
                        <br />
                        Notes: {todo.notes}
                        <br />
                      </strong>
                    </Link>
                    {sub === todo.userId && <DeleteBtn onClick={() => deleteTodo(todo._id)} />} 
                  </ListItem>
                ))}
              </List>
              
            ) : (
              <h5>Nothing to prep</h5>
            )}
          </Col>
          <Col size="md-4 sm-12">
          <Jumbotron>
            <h4>Details</h4>
          </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }

export default Todos;
