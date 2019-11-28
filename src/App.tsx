/** @jsx jsx */
import { ThemeProvider, jsx } from "theme-ui";
import theme from "./theme";
import React from "react";
import Layout from "./Layout";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <h1>Appy</h1>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
