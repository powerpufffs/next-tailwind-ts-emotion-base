import * as React from "react";
import Listing from "../views/listing";
import Layout from "../components/layout";

interface Props {}

const ListingPage: React.FC<Props> = ({}) => {
  return (
    <Layout>
      <Listing />;
    </Layout>
  );
};

export default ListingPage;
