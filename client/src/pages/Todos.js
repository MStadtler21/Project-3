import React, { useState, useEffect, useCallback } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

import ExternalApi from "../pages/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading";

// https://community.auth0.com/t/getting-logged-out-after-refreshing-on-localhost-react-js-spa/28474
// https://community.auth0.com/t/react-with-auth0-spa-looses-login-after-refresh/35461/2
// https://community.auth0.com/t/persisting-login-between-refreshes/22675


function Todos() {

  

  const { user: { picture, name, email, sub }, isAuthenticated, isLoading, error } = useAuth0();

  const [todos, setTodos] = useState([])
  const [formObject, setFormObject] = useState({})

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

  function deleteTodo(id) {
    API.deleteTodo(id)
      .then(res => loadTodos())
      .catch(err => console.log(err));
  }


  function handleInputChange(event) {
    const { name, value } = event.target;

    console.log(formObject);

    setFormObject({ ...formObject, [name]: value})
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    API.saveTodos({ ...formObject, userId: sub })
      .then(res => loadTodos())
      .catch(err => console.log(err));
  };


  if (error) {
      return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
   return <Loading />;
  }
  return (
  isAuthenticated ? (
      
    <Container>
      
        <Row>
          { isAuthenticated ? <Col size="md-3">
            <Jumbotron>
              <h4>Enter item</h4>
            </Jumbotron>
            <form>
              <Input onChange={handleInputChange} name="user" placeholder="Designate task to employee (required)" />
              <Input onChange={handleInputChange} name="item" placeholder="Item (required)" />
              <Input onChange={handleInputChange} name="quantity" placeholder="Quantity (required)" />
              <Input onChange={handleInputChange} name="cost" placeholder="Cost (required)" />
              <Input onChange={handleInputChange} name="produce" placeholder="Produce (required)" />
              <Input onChange={handleInputChange} name="meat" placeholder="Meat (required)" />
              <Input onChange={handleInputChange} name="driedGoods" placeholder="Dried goods (required)" />
              <TextArea onChange={handleInputChange} name="notes" placeholder="Notes (Optional)" />
              <FormBtn disabled={!(formObject.user && formObject.item)} onClick={handleFormSubmit}> Add to list </FormBtn>
            </form> 
          </Col> : 'Please log in'}
          <Col size="md-4 sm-12">
            <Jumbotron>
              <h4>Prep list</h4>
            </Jumbotron>
            {todos.length ? (
              <List>
                {todos.map(todo => (
                  <ListItem key={todo._id}>
                    <Link to={"/todos/" + todo._id}>
                      <strong>
                        User: {todo.user}
                        <br />
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
      
    ) : (
      <div>
       <ExternalApi />
      </div>
   )
  );
};

export default Todos;
