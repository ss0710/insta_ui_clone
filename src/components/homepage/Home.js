import React from 'react';
import Navbar from '../navBar/Navbar';
import Stories from '../stories/Stories';
import Timeline from '../posts/Timeline';

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
            <div className="status-div">
            <Timeline />
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