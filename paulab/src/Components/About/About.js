import React, { Component } from 'react';
import Pic from '../../images/paula2019.jpg'
import './About.css'
import Header_lrg from '../Header/Header_lrg'
import Header_md from '../Header/Header_md'
class About extends Component {
    render() {
        return (
            <div>
                <Header_lrg title="About"></Header_lrg>
                <section className="profile">
            <article>
            <img src={Pic}/>
            </article>
            <article className="Statement">
            Creative and thirsty for knowledge, I am an artistic software engineer who combines the technical background of code with the flavor of art. I see beyond the screen to bring ideas, concepts, and canvas’ to life. <br></br> 
            <p>
            - PAULA BANNERMAN
            </p>
           
            </article>
                </section>

                <section id="skills">
                <Header_md title="Skills"></Header_md>
                
                </section>
                
            </div>
        );
    }
}

export default About;