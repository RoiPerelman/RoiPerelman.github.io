import React, { ReactNode } from "react";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./header";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "main";
  background-color: white;
  height: 100vh;
  width: 100vw;
`;

const GridArea = styled.div<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};
`;

type IndexLayoutProps = {
  children: ReactNode;
};
const IndexLayout = ({ children }: IndexLayoutProps) => {
  return (
    <>
      <CssBaseline />
      <Grid>
        <GridArea gridArea={"header"}>
          <Header />
        </GridArea>
        <GridArea gridArea={"main"}>
          <main>{children}</main>
        </GridArea>
      </Grid>
    </>
  );
};

export default IndexLayout;
