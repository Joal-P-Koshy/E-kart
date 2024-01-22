import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  // to access data inside a store : useSelector hook
  const WishListArray = useSelector((state) => state.wishListReducer);
  // console.log("=======wishlist arr or header");
  // console.log(WishListArray);
  const CartArray = useSelector((state) => state.cartReducer)
  return (
    <div>
      <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100 " style={{ zIndex: "1" }}>
        <Container>
          <Navbar.Brand href="/">
            <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-royal-brites-poster-foam-board-photo-paper-royal-lace-19.png" height={"40px"} className='me-3' />
            E Kart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='btn border rounded me-3'>
                <Link to={'/wishlist'} style={{ color: "white", textDecoration: 'none' }} >
                  Wishlist <Badge bg="secondary">{WishListArray.length}</Badge>
                </Link></Nav.Link >
              <Nav.Link className='btn border rounded me-3' style={{ width: '75px' }}>
                <Link to={'/cart'} style={{ color: "white", textDecoration: 'none' }}>
                  Cart <Badge bg="secondary">{CartArray.length}</Badge>
                </Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  )
}

export default Header