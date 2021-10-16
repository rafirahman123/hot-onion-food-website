import React, { useEffect, useState } from 'react';
import Lunch from '../Lunch/Lunch';

const Lunches = () => {
    const [lunchs, setLunchs] = useState([]);

    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setLunchs(data))
    }, [])
    return (
        <div id="lunches" className="breakfasts-container mt-5 mb-5">
            {
                lunchs.map(lunch => <Lunch
                    key={lunch.id}
                    lunch={lunch}
                ></Lunch>)
            }
        </div>
    );
};

export default Lunches;