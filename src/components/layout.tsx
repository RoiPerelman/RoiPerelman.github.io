/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

type LayoutProps = {
  children: ReactNode,
};
const Layout = ({ children }: LayoutProps) => {
  const { site } = useStaticQuery(
    graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
    `
  );
  console.log(site);
  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          footer
        </footer>
      </div>
    </>
  )
}

export default Layout
