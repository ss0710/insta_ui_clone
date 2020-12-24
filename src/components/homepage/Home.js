import React from 'react';
import Navbar from '../navBar/Navbar';
import Stories from '../stories/Stories';

const Home = () => {
    return(
        <div>
            <Navbar />
            <div className="timeline-div">
            <div className="timeline-container">
            <div className="posts">

            <div className="stories">
            <Stories />
            </div>

            </div>
            <div className="suggestions">

            </div>
            </div>
            </div>
        </div>
    );
}

export default Home;