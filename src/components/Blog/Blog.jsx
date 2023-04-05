import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h2>Questions Answer</h2>
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

            <h2>3. Purpose of useEffect other than fetching data.</h2>

            <p>The `useEffect` hook in React is used to perform side effects in a functional component. Fetching data is one of the purpose of useEffect. Other purposes are: UseEffect is use to add and remove event listeners</p>

            <h2>4. How Does React work?</h2>

            <p>ReactJS is JavaScript libraries for mobile and web application development. Using React JS we can infuse HTML code with JavaScript. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. <br /> DOM is an application programming interface (API) for HTML and XML documents which shows the logical structure of documents and how a document is manipulated and accessed. To make it faster, React implements a virtual DOM which is a DOM tree representation in JavaScript. When there is a need to read and write to the DOM, it uses its virtual representation of it. Following this, the virtual DOM will attempt to locate the most effective manner to update the DOM of the browser. </p>
        </div>
    );
};

export default Blog;