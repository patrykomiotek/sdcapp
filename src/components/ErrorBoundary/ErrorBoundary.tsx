import { Component, ErrorInfo } from 'react';

interface State {
  hasError: boolean;
}

interface Props {
  children: React.ReactNode;
}

export class ErrorBoundary extends Component<Props, State> {

  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    // this.setState({ hasError: true });
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log('error: ', error, 'errorInfo: ', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}