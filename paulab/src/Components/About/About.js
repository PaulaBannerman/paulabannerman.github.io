import React, { Component } from 'react';
import Pic from '../../images/paula2019.jpg'
import './About.css'
class About extends Component {
    render() {
        return (
            <div>
                About information
                <section className="profile">
            <article>
            <img src={Pic}/>
            </article>
            <article>
            Creative and thirsty for knowledge, I am an artistic software engineer who combines the technical background of code with the flavor of art. I see beyond the screen to bring ideas, concepts, and canvas’ to life.

- PAULA BANNERMAN
            </article>
                </section>
                <section id="skills">
                    
                </section>
                
            </div>
        );
    }
}

export default About;