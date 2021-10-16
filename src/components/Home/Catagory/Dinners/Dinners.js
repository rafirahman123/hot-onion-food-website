import React, { useEffect, useState } from 'react';
import Dinner from '../Dinner/Dinner';

const Dinners = () => {
    const [dinners, setDinners] = useState([]);

    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinners(data))
    }, [])
    return (
        <div id="dinner" className="breakfasts-container mt-5 mb-5">
            {
                dinners.map(dinner => <Dinner
                    key={dinner.id}
                    dinner={dinner}
                ></Dinner>)
            }
        </div>
    );
};

export default Dinners;