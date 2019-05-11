import React, { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./header";
import Sidebar from "./sidebar";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". header"
    "sidebar main";
  background-color: white;
`;

const GridArea = styled.div<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};
`;

type LayoutProps = {
  children: ReactNode;
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
  return (
    <>
      <CssBaseline />
      <Grid>
        <GridArea gridArea={"header"}>
          <Header title={site.siteMetadata.title} />
        </GridArea>
        <GridArea gridArea={"sidebar"}>
          <Sidebar />
        </GridArea>
        <GridArea gridArea={"main"}>
          <main>{children}</main>
        </GridArea>
      </Grid>
    </>
  );
};

export default Layout;
