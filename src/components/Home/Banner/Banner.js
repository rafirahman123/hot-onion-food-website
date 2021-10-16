import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner" >
            <h1>Best Food Waiting For your Belly</h1>
            <br />
            <InputGroup className="mb-3 pb-5 w-50 mx-auto ">
                <FormControl
                    placeholder="Search food items"
                    aria-label="Search food items"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-danger" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
        </div>
    );
};

export default Banner;