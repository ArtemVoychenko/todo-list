import React, {Component, Fragment} from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError() {

    return {hasError: true};
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    const {hasError} = this.state;

    if (hasError) return <div>Упсс возникла ошибка, презагружаемся..</div>;

    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default ErrorBoundary;
