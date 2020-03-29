import React from 'react';
import classes from './Home.module.css'
const summary = <p className={classes.Summary}>Hello, My name is Ian Shinbrot. I am currently an Software Developer at Equisoft.
<br/>
Welcome to my site. This site is continuously getting updated. (Last updated March 2020) If you have any feedback feel free to let me know so I can improve the site.
Feel free to click any of the links above or from the navigation drawer to find more information.</p>;

const Home = props => {
    return (
        <div>
            {summary}
        </div >
    );
}
export default Home;