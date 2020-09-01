import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Todos() {
  // Setting our component's initial state
  const [todos, setTodos] = useState([])
  const [formObject, setFormObject] = useState({})

  
 
  // Loads all todos and sets them to todos
  function loadTodos() {
    API.getTodos()
      .then(res => 
        setTodos(res.data)
      )
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadTodos()
  }, [])
  // Deletes a todo from the database with a given id, then reloads books from the db
  function deleteTodos(id) {
    API.deleteTodos(id)
      .then(res => loadTodos())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.user && formObject.item) {
      API.saveTodos({
        user: formObject.user,
        item: formObject.item,
        quantity: formObject.quantity,
        cost: formObject.cost,
        produce: formObject.produce,
        meat: formObject.meat,
        driedGoods: formObject.driedGoods,
        notes: formObject.notes
      })
        .then(res => loadTodos())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
            <Jumbotron>
              <h4>Enter items that need to be prepped</h4>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="user"
                placeholder="Designate task to employee (required)"
              />
              <Input
                onChange={handleInputChange}
                name="item"
                placeholder="Item (required)"
              />
              <Input
                onChange={handleInputChange}
                name="quantity"
                placeholder="Quantity (required)"
              />
              <Input
                onChange={handleInputChange}
                name="cost"
                placeholder="Cost (required)"
              />
              <Input
                onChange={handleInputChange}
                name="produce"
                placeholder="Produce (required)"
              />
              <Input
                onChange={handleInputChange}
                name="meat"
                placeholder="Meat (required)"
              />
              <Input
                onChange={handleInputChange}
                name="driedGoods"
                placeholder="Dried goods (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="notes"
                placeholder="Notes (Optional)"
              />
              <FormBtn
                disabled={!(formObject.user && formObject.item)}
                onClick={handleFormSubmit}
              >
                Add to list
              </FormBtn>
            </form>
          </Col>
          <Col size="md-5 sm-12">
            <Jumbotron>
              <h4>prep list</h4>
            </Jumbotron>
            {todos.length ? (
              <List>
                {todos.map(todo => (
                  <ListItem key={todo._id}>
                    <Link to={"/todos/" + todo._id}>
                      <strong>
                        {todo.user} by {todo.item}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteTodos(todo._id)} />
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
