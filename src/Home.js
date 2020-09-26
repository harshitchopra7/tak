import React from 'react';
import campus from './campus.jpg';
import './Home.css';

function Home() {
    return (
        <div>
            <div className="image-div">
                <img className="image" alt="" src={campus} />
            </div>
            <div className="courses">
                <div className="courses-left">
                    <h1>UG Courses</h1>
                    <div>
                        <span>Ba</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;