import * as React from "react";
import Home from "../views/home";
import Layout from "../components/layout";

interface Props {}

const Index: React.FC<Props> = ({}) => {
  return (
    <Layout>
      <Home />;
    </Layout>
  );
};

export default Index;
