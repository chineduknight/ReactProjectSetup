import React from "react";
import { Center, Button, Text } from "@chakra-ui/react";

class ErrorBoundary extends React.Component<{ children: any }, { hasError: boolean }> {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    // Send myself an email here
    console.log({ error, errorInfo });
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Center minH="70vh" flexDir="column">
          <h2>Oops, an error occured</h2>
          <Text display="block"> Please reach out to the developers ! Thanks!</Text>
          <Button
            type="button"
            onClick={() => {
              this.setState({ hasError: false });

              window.location.href = "/";
            }}
          >
            To Dashboard
          </Button>
        </Center>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
