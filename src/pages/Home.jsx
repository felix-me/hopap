import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
 } from 'reactstrap';
import * as styles from '../styling/styles';
import CustomMapContainer from '../components/CustomMapContainer';

import joeImage from '../images/joeImage.jpg';
import melissaImage from '../images/melissaImage.jpg';
import berniceImage from '../images/berniceImage.jpg';

const contactInfo = [
  {
    name: 'joe',
    mobile: '(000)-000-0000',
    email: 'joe@gmail.com',
  },
  {
     name: 'melissa',
      mobile: '(000)-000-0000',
      email: 'melissa@gmail.com',
  },
  {
      name: 'bernice',
      mobile: '(000)-000-0000',
      email: 'bernice@gmail.com',
  },
];

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.displayContactInfo = this.displayContactInfo.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  displayContactInfo(contactInfo) {
    return (
      <ListGroup>
        <ListGroupItem>
          Mobile Phone Number: {contactInfo.mobile}
        </ListGroupItem>
        <ListGroupItem>
          Email Address: {contactInfo.email}
        </ListGroupItem>
      </ListGroup>
    );
  }

  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/" style={styles.navbarBrandStyle}>House of Prayer and Promise</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Our Church</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Our Community</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="mainBody">
          <Card style={styles.welcomeCardStyle}>
            <CardTitle>
              Our Local Church
            </CardTitle>
            <CardText>
              Situated in Rickman, TN, the church of prayer and promise is run by Pastor Joe Cox.
            </CardText>
          </Card>
          <Container>
            <Row>
              <Col>
                <div style={styles.mapContainerStyle}>
                  <h5 style={styles.h5Style}>
                    Where we are
                  </h5>
                  <CustomMapContainer />
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col lg={12}>
                <div style={styles.contactContainerStyle}>
                  <h5 style={styles.h5Style}>
                    Contact us
                  </h5>
                </div>
              </Col>
              <Col lg={4}>
                <Card style={styles.welcomeCardStyle}>
                  <CardTitle>
                    Pastor Joe Cox
                    <br />
                    <img src={joeImage} alt="Pastor Joe Cox" style={styles.idImageStyle}/>
                  </CardTitle>
                  <CardText>
                  {this.displayContactInfo(contactInfo[0])}
                  </CardText>
                </Card>
              </Col>
              <Col lg={4}>
                <Card style={styles.welcomeCardStyle}>
                  <CardTitle>
                    Guest Pastor Melissa Cox
                    <br />
                    <img src={melissaImage} alt="Pastor Melissa Cox" style={styles.idImageStyle}/>
                  </CardTitle>
                  <CardText>
                    {this.displayContactInfo(contactInfo[1])}
                  </CardText>
                </Card>
              </Col>
              <Col lg={4}>
                <Card style={styles.welcomeCardStyle}>
                  <CardTitle>
                    Secretary Bernice Cox
                    <br />
                    <img src={berniceImage} alt="Secretary Bernice Cox" style={styles.idImageStyle}/>
                  </CardTitle>
                  <CardText>
                  {this.displayContactInfo(contactInfo[2])}
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
