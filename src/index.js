(function () {  console.log("hello world");}());


import ReactDOM from "react-dom";
import "index.scss";

import React, { useState, Component } from 'react';



export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by error boundary:', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI in case of an error
      return <div>Something went wrong. Please try again later.</div>;
    }

    // Render the child components normally
    return this.props.children;
  }
}

// ParentComponent.js

export function ParentComponent() {
  return (
    <div>
      <h1>Parent Component</h1>
      {/* Wrap the Counter component with ErrorBoundary */}
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </div>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  // Simulate an error condition
  if (count === 5) {
    throw new Error('Counter component crashed!');
  }

  return (
    <div>
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}



let HelloWorld = () => {  
    console.log("hey");
    return <h1>Hello there World!</h1>}; 

ReactDOM.render(  <ParentComponent/>,  document.getElementById("root"));


