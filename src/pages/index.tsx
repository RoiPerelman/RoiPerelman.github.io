import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import IndexLayout from "../components/IndexLayout";
import Image from "../components/image";

const ContainerDiv = styled.div`
  display: grid;
  justify-items: center;
`;

const IndexPage = () => (
  <IndexLayout>
    <ContainerDiv className="blog-post-container">
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div
        style={{
          height: 200,
          width: 200
        }}
      >
        <Image />
      </div>
      <Link to="/cheatsheet/GITsheet/">Go to GITsheet</Link>
    </ContainerDiv>
  </IndexLayout>
);

export default IndexPage;
