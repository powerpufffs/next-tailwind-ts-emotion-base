import * as React from "react";
import Listings from "../views/listings";
import Layout from "../components/layout";

interface Props {}

const ListingsPage: React.FC<Props> = ({}) => {
  return (
    <Layout>
      <Listings />;
    </Layout>
  );
};

export default ListingsPage;
