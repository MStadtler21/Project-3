import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
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
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
            <Jumbotron>
              <h3>Enter items that need to be prepped</h3>
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
              <TextArea
                onChange={handleInputChange}
                name="notes"
                placeholder="Notes (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Add to list
              </FormBtn>
            </form>
          </Col>
          <Col size="md-5 sm-12">
            <Jumbotron>
              <h3>prep list</h3>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
              
            ) : (
              <h3>Nothing to prep</h3>
            )}
          </Col>
          <Col size="md-4 sm-12">
          <Jumbotron>
            <h3>In this area we can expand the item to see requirements</h3>
          </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
