import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";

type HeaderProps = {
  title: string;
};
const Header = () => {
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
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" noWrap>
          {site.siteMetadata.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
