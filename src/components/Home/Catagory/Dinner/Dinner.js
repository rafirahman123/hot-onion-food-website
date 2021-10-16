import React from 'react';
import { Link } from 'react-router-dom';

const Dinner = ({ dinner }) => {
    const { name, price, description, img, id } = dinner;
    return (
        <div>

            <div class="col">
                <div class="card">
                    <img src={img} class="card-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <h5>{price}</h5>
                        <Link to={`/booking/${id}`}>
                            <button type="button" class="btn btn-outline-danger m-2">Book:
                                {name.toLowerCase()}</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dinner;