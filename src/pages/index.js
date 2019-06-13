import React from "react";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import SEO from "../components/seo";

import { menuItems } from "../data";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu items={menuItems} />
  </Layout>
);

export default IndexPage;
