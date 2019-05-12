import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ContainerDiv = styled.div`
  display: grid;
  justify-items: center;
`;
const Section = styled.section`
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  width: 70vw;
  height: calc(100vh - 64px - 45px - 1rem - 45px - 1rem);
  padding: 50px;
  font-family: "Crimson Text", serif;
  overflow: scroll;
  position: inline;
`;

const H1 = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 15px;
  font-weight: 400;
  font-family: "Crimson Text", serif;
  margin: 1rem 0;
`;

const Template = ({ data }: any) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <ContainerDiv className="blog-post-container">
        <H1>{frontmatter.title}</H1>
        <Section>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Section>
      </ContainerDiv>
    </Layout>
  );
};

//  date(formatString: "MMMM DD, YYYY")
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

export default Template;
