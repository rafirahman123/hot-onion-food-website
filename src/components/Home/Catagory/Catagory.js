import React from 'react';
import Breakfasts from './Breakfasts/Breakfasts';
import Lunches from './Lunches/Lunches';
import { Nav, Navbar } from 'react-bootstrap';
import Dinners from './Dinners/Dinners';



const Catagory = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Collapse className="justify-content-center">
                    <Nav.Link href="#breakfast">Breakfast</Nav.Link>
                    <Nav.Link href="#lunches">Lunches</Nav.Link>
                    <Nav.Link href="#dinner">Dinner</Nav.Link>
                </Navbar.Collapse>
            </Navbar>


            <div>
                <div>
                    <h1 className="text-danger p-5">Breakfast</h1>
                    <Breakfasts></Breakfasts>
                    <button type="button" class="btn btn-outline-danger">Check Out Your Food</button>
                </div>
                <div>
                    <h1 className="text-danger p-5">Lunch</h1>
                    <Lunches></Lunches>
                    <button type="button" class="btn btn-outline-danger">Check Out Your Food</button>
                </div>
                <div>
                    <h1 className="text-danger p-5">Dinner</h1>
                    <Dinners></Dinners>
                    <button type="button" class="btn btn-outline-danger mb-5">Check Out Your Food</button>
                </div>

            </div>
        </div>
    );
};

export default Catagory;