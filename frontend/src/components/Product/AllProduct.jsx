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
import AppUrl from "../../RestAPI/AppUrl";
import RestClient from "../../RestAPI/RestClient";

export default class AllProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: [],
      variants: [],
    };
  }
  componentDidMount() {
    RestClient.getRequest(AppUrl.products).then((result) => {
      this.setState({ myData: result });
    });
    
  }

  render() {
    const myList = this.state.myData;
    const myView = myList.map((product) => {
      return (
        <tr>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>{product.description}</td>
          <td>
            <Table borderless>
              {product.product_variant_price.map((item) => {
                return (
                  <tr>
                    <td>
                      {item.variant.map((v) => {
                        return <span>{v.varint_name}/</span>;
                      })}
                    </td>
                    <td>Price: {item.price}</td>
                    <td>inStock: {item.stock}</td>
                  </tr>
                );
              })}
            </Table>
          </td>
          <td>
            <ButtonGroup>
              <Button variant="info">View</Button>
              <Button variant="success">Edit</Button>
              <Button variant="danger">Delete</Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });

    return (
      <Fragment>
        <Container className="mt-3">
          <h3 className="text-primary text-center">Product List</h3>

          <Row>
            <Col lg={12} md={12} sm={12}>
              <Card className="shadow p-3 mb-5 bg-body rounded">
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
                      <Form.Control type="date" />
                    </Col>
                    <Col>
                      <Button className="float-end" variant="success">
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Table striped>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Variant</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>{myView}</tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className="mt-2">
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Next />
           
          </Pagination>
        </Container>
      </Fragment>
    );
  }
}
