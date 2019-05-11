import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";

const ContainerDiv = styled.div`
  display: grid;
  justify-items: center;
`;

const IndexPage = () => (
  <Layout>
    <ContainerDiv className="blog-post-container">
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/cheatsheet/GITsheet/">Go to GITsheet</Link>
    </ContainerDiv>
  </Layout>
);

export default IndexPage;
