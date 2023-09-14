import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state when an error occurs
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error tracking service here
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render an error message or a fallback UI
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>{this.state.error.toString()}</p>
        </div>
      );
    }
    // If there's no error, render the child components
    return this.props.children;
  }
}

export default ErrorBoundary;
