import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>Questions Answer</h3>
            <h2>1. How useState works?</h2>

            <p>In React, useState() allow us to show the state changes in UI easily. It allow to have state variables in functional components. </p>
            <strong>const [state, setState] = useState(initialstate)</strong>
            <p>It takes initialstate as the initial value which will be change. It returns array of two entries. One is the current state value and another one is funtion that update the value. Here, state is the current state value and setState is the function. setState work as asynchronous.</p>

            <h2>2. Props VS State</h2>

            <p>Differences between props and state:</p>
            <li>Props are immutable that is it cannot be change whereas state is mutable.</li>
            <li>Props allow to pass data from one component to other component as an arguments whereas state holds the information about the components.</li>
            <li>Props can be accessed by the child component. But state cannot be accessed by the child component.</li>
            <li>Stateless component can have props, but it cannot have state.</li>
        </div>
    );
};

export default Blog;