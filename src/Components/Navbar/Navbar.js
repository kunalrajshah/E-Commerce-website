import React, { Fragment,useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../Store/CartContext";
import '../../Components/Navbar/MusicHead.css';
import './style.css';

const Navbars = (props) => {
  const ctxt=useContext(CartContext);
  return (
    <Fragment>
      <Navbar className="w-full" bg="dark">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto text-center text-base md:text-xl z-1 bg-dark">
              <Nav.Link href="#/" className="text-white px-3 md:px-3 py-2 nav-link">
                HOME
              </Nav.Link>
              <Nav.Link href="#/" className="text-white px-3 md:px-3 py-2 ">
                STORE
              </Nav.Link>
              <Nav.Link href="#/" className="text-white px-3 md:px-3 py-2 ">
                ABOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ml-auto">
              <div className="flex items-center border border-red-600 rounded p-2 text-white cursor-pointer">
                <FaShoppingCart size={25} onClick={props.cartHandler} />
                <span className="mx-1 md:mx-2 text-base md:text-xl text-white" onClick={props.cartHandler}>
                  Cart <span className="text-white bg-black rounded">{ctxt.item.length}</span>
                </span>
              </div>
          </Nav>
        </Container>
      </Navbar>
      <div className="mt-1">
        <h1 className="p-5 md:p-10 text-4xl md:text-8xl text-center bg-red-200">The Generics</h1>
      </div>
      <div>
        <h1 className="text-center font-bold music-heading">Music</h1>
      </div>
    </Fragment>
  );
};

export default Navbars;
