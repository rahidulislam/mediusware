import React, { Component, Fragment } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Table,
  Button,
  ButtonGroup,
  Pagination,
  Form,
  InputGroup,
} from "react-bootstrap";
export default class AllProduct extends Component {
  render() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }

    const paginationBasic = (
      <div>
        <Pagination className="float-end">
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
      </div>
    );
    return (
      <Fragment>
        <Container fluid={true} className="mt-5">
          <h3 className="text-primary">Product List</h3>

          <Row>
            <Col lg={12} md={12} sm={12}>
              <Card>
                <Card.Header>
                  <Row>
                    <Col>
                      <Form.Control type="text" placeholder="Product Title" />
                    </Col>

                    <Col>
                      <Form.Control as="select">
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="black">Black</option>
                        <option value="orange">Orange</option>
                      </Form.Control>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroup.Text>Price Range</InputGroup.Text>
                        <Form.Control type="text" placeholder="From" />
                        <Form.Control type="text" placeholder="To" />
                      </InputGroup>
                    </Col>
                    <Col>
                      <Form.Control type="date"  />
                      
                    </Col>
                    <Col>
                    <Button className="float-end" variant="success">Search</Button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Variant</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                          <ButtonGroup>
                            <Button variant="info">View</Button>
                            <Button variant="success">Edit</Button>
                            <Button variant="danger">Delete</Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                          <ButtonGroup>
                            <Button variant="info">View</Button>
                            <Button variant="success">Edit</Button>
                            <Button variant="danger">Delete</Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>abcd</td>
                        <td>
                          <ButtonGroup>
                            <Button variant="info">View</Button>
                            <Button variant="success">Edit</Button>
                            <Button variant="danger">Delete</Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="mt-3">
          {paginationBasic}
        </Container>
      </Fragment>
    );
  }
}
