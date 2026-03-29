import React from 'react';
import { Link } from 'react-router-dom';
import classes from './PhillySchvitzers.module.css';

const PhillySchvitzers: React.FC = () => {
  return (
    <div>
      <p className={classes.Summary}>
        <strong>The Philly Schvitzers</strong> is a running club I started in Philadelphia—built around
        group runs, good company, and embracing the schvitz (the sweat that comes with putting in the
        miles). Whether you are training for Broad Street, a half marathon, or just want a regular crew
        to run with, you are welcome to join us.
      </p>
      <section className={classes.Section}>
        <h2>What we are about</h2>
        <p>
          We meet up to run together, hold each other accountable, and enjoy Philly’s neighborhoods on
          foot. The vibe is supportive: show up as you are, run your pace, and stay for the post-run
          stories when the schedule allows.
        </p>
      </section>
      <section className={classes.Section}>
        <h2>Get in touch</h2>
        <p>
          Follow{' '}
          <a
            href="https://www.instagram.com/thephillyschvitzers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Philly Schvitzers on Instagram
          </a>{' '}
          for updates, runs, and photos.
        </p>
      </section>
    </div>
  );
};

export default PhillySchvitzers;
