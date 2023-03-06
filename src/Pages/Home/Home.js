import React from 'react';
import classes from './Home.module.css'
const summary = <p className={classes.Summary}>Hello, My name is Ian Shinbrot. I am currently a Senior Consultant at CapTech Ventures.
<br/>
Welcome to my site.
Feel free to click any of the links in the navigation bar, and check out some of my Poetry, which I have started during the 2020 pandemic and continue to this day
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