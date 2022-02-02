import React, { Component, Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import AppUrl from "../../RestAPI/AppUrl";
import RestClient from "../../RestAPI/RestClient";

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state={
      variants:[],
      color:[],
      size:[]
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    RestClient.getRequest(AppUrl.variants).then((result)=>{
      this.setState({variants:result});
    })
  }
  handleChange(event){
    console.log(event.target.value)
    //this.setState({variantOption: event.target.value})
  }
  render() {
    const myVariantList = this.state.variants
    const myVariant=myVariantList.map((variantItem)=>{
      return <Row>
      <Form.Text className="text-primary my-2">
        {variantItem.title}
      </Form.Text>
      <Col>
        <Form.Control as="select" onChange={this.handleChange}>
          {variantItem.item_variant.map((item, index)=>{
            return <option value={item.varint_name}>{item.varint_name} (index}</option>
          })}
          
        </Form.Control>
      </Col>
      <Col>
        <Form.Control placeholder="Color"/>
      </Col>
    </Row>
    })
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col>
              <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Header>
                  <h5> Create Product</h5>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <Card className="shadow p-3 mb-5 bg-body rounded">
                          <Card.Body>
                            <Form.Group className="mb-3">
                              <Form.Label>Product Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Product Name"
                              />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Product SKU</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Product SKU"
                              />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Description</Form.Label>
                              <Form.Control as="textarea" />
                            </Form.Group>
                          </Card.Body>
                        </Card>

                        <Card className="shadow p-3 mb-5 bg-body rounded">
                          <Card.Header>
                            <h6 className="text-primary">Media</h6>
                          </Card.Header>
                          <Card.Body>
                            <Form.Control type="file" />
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <Card className="shadow p-3 mb-5 bg-body rounded">
                          <Card.Header className="bg-success">
                            <h6 className="text-white text-center mb-0">Varriant</h6>
                          </Card.Header>
                          <Card.Body>
                            {myVariant}
                            
                            <Row className="mt-5">
                              <h6>Priview</h6>
                              <Col>
                                <Table responsive>
                                  <thead>
                                    <tr>
                                      <th>Variant</th>
                                      <th>Price</th>
                                      <th>Stock</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><Form.Text className="text-primary my-2">Otto</Form.Text></td>
                                      <td><Form.Control type="number" value="0" /></td>
                                      <td><Form.Control type="number" value="0" /></td>
                                    </tr>
                                    <tr>
                                    <td><Form.Text className="text-primary my-2">Otto</Form.Text></td>
                                      <td><Form.Control type="number" value="0" /></td>
                                      <td><Form.Control type="number" value="0" /></td>
                                    </tr>
                                    <tr>
                                    <td><Form.Text className="text-primary my-2">Otto</Form.Text></td>
                                      <td><Form.Control type="number" value="0" /></td>
                                      <td><Form.Control type="number" value="0" /></td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                    <Button variant="primary">Save</Button>
                    <Button variant="secondary" className="mx-2">Cancel</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
