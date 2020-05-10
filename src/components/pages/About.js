import React from 'react';

function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>
                This is live todo app created with React.
                <br />
                Version: 1.0.0
                <br />
                Created By:{' '}
                <a href="https://github.com/shivaprasad-bhat">
                    {' '}
                    Shivaprasad Bhat
                </a>
                <br />
                Courtesy: Traversy Media
            </p>
        </React.Fragment>
    );
}
export default About;
