import React from "react";
import Header from "../Header/Header";
import about from './about.css'

const About = () => {
    return (
        <div className="about">
            <Header />
            <div className="section-head">
                <p>Home / About</p>
            </div>
            <section>
                <h2>Our History</h2>
                <div className="about-content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
                </div>
            </section>
        </div>
    )
}
export default About;