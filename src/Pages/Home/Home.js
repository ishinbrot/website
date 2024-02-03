import React from 'react';
import classes from './Home.module.css'
const summary = <p className={classes.Summary}>Hello, My name is Ian Shinbrot. I am currently a Senior Consultant at CapTech Ventures.
<br/>
Welcome to my site. This site is continuously getting updated and has recently been updated using React and Material-UI (Last updated February 2024).
I am in the process of migrating to typescript.
Feel free to click any of the links in the navigation bar.
<br/> If you have any feedback feel free to let me know so I can improve the site.
</p>;

const Home = props => {
    return (
        <div>
            {summary}
        </div >
    );
}
export default Home;