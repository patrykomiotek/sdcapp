import { Component, ErrorInfo } from 'react';

interface State {
  hasError: boolean;
}

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
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
      return (
        <div
          style={{ fontWeight: 'bold', margin: 10 }}
          onClick={() => this.setState({ hasError: false })}
        >
          <p>{this.props.fallback ? this.props.fallback : <h3>Something went wrong 🤔</h3>}</p>
        </div>
      );
    }

    return this.props.children;
  }
}