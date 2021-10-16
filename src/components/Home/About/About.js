import React from 'react';
import about1 from '../../../images/Image/about1.png';
import about2 from '../../../images/Image/about2.png';
import about3 from '../../../images/Image/about3.png';
import './About.css';

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h4 className="text-center text-danger">Why you chose us?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minima provident voluptatem doloremque eum, at est non nesciunt veritatis illum, dolorem delectus quod natus sunt maiores quibusdam qui omnis modi.</p>
                </div>
            </div>

            <div className="about-image">

                <div>
                    <img className="image-1" src={about1} alt="" />
                    <h6>Fast delivary</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, excepturi.</p>
                </div>
                <div>
                    <img className="image-2" src={about2} alt="" />
                    <h6>A good auto responder</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eum.</p>
                </div>
                <div>
                    <img className="image-3" src={about3} alt="" />
                    <h6>Home delivary</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, recusandae?</p>
                </div>

            </div>



        </div>
    );
};

export default About;