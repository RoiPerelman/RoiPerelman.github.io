import React from "react"
import styled from 'styled-components';
import { graphql } from "gatsby"
import Layout from "../components/layout";

const ContainerDiv = styled.div`
  display: grid;
  justify-items: center
`
// section {

// }
// h1 {
//   text-align: center;
//   font-size: 2rem;
//   text-transform: uppercase;
//   letter-spacing: 15px;
//   line-height: 1;
//   font-weight: 400;
//   margin: 3em 0;
// }

// h2 {
//   font-weight: 400;
//   text-transform: uppercase;
//   font-size: 1rem;
//   margin-bottom: 3em;
//   letter-spacing: 8px;
//   text-align: center;
//   color: #8BBEB2;
// }
const Section = styled.section`
  background: white;
  box-shadow: 0 0 20px rgba(0,0,0,.25);
  width: 80%;
  padding: 50px;
  font-family: 'Crimson Text', serif;
`;

const H1 = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 15px;
  font-weight: 400;
  font-family: 'Crimson Text', serif;
  margin: 3rem 0;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <ContainerDiv className="blog-post-container">
        <H1>{frontmatter.title}</H1>
        {/* <h2>{frontmatter.date}</h2> */}
        <Section>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Section>
      </ContainerDiv>
    </Layout>
  )
}

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
`

// import React from "react"
// import { graphql } from "gatsby"


// export const Template = ({ data }) => {
//   const { markdownRemark } = data // data.markdownRemark holds our post data
//   const { frontmatter, html } = markdownRemark
//   return (
//     <Layout>
//       <ContainerDiv className="blog-post-container">
//         <div className="blog-post">
//           <h1>{frontmatter.title}</h1>
//           <h2>{frontmatter.date}</h2>
//           <div
//             dangerouslySetInnerHTML={{ __html: html }}
//           />
//         </div>
//       </ContainerDiv>
//     </Layout>
//   )
// }

// //  date(formatString: "MMMM DD, YYYY")
// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         path
//         title
//       }
//     }
//   }
// `