import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
  return (
    <>
      <CssBaseline />
      <Grid>
        <GridArea gridArea={'header'}>
          <AppBar position='relative'>
            <Toolbar>
              <Typography variant="h6" noWrap>
                {site.siteMetadata.title}
              </Typography>
            </Toolbar>
          </AppBar>
        </GridArea>
        <GridArea gridArea={'sidebar'}>
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </GridArea>
        <GridArea gridArea={'main'}>
          <main>{children}</main>
        </GridArea>
      </Grid>
    </>
  )
}

export default Layout
