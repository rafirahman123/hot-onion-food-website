import React, { useEffect, useState } from 'react';
import Brkfast from '../Brkfast/Brkfast';
import './Breakfasts.css';

const Breakfasts = () => {
    const [breakfasts, setBreakfasts] = useState([]);

    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfasts(data))
    }, [])

    return (
        <div id="breakfast" className="breakfasts-container mt-5 mb-5">
            {
                breakfasts.map(breakfast => <Brkfast
                    key={breakfast.id}
                    breakfast={breakfast}
                ></Brkfast>)
            }
        </div>
    );
};

export default Breakfasts;