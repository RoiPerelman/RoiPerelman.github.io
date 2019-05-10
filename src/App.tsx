import React, { lazy, Component, Suspense } from "react"
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import { importMDX } from 'mdx.macro';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 64px 1fr;
  grid-template-areas: 
    ". header"
    "sidebar main";
  background-color: white;
  height: 100vh;
`;

const GridArea = styled.div<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};
`;

const App = (props: RouteComponentProps<{}>) => {
  console.log('cheatsheet name:', (props.match.params as any).cheatsheet);
  // const Content = lazy(() => importMDX('./Content.mdx'));
  return (
    <>
      <CssBaseline />
      <Grid>
        <GridArea gridArea={'header'}>
          <AppBar position='relative'>
            <Toolbar>
              <Typography variant="h6" noWrap>
                hi
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
          <main>
          <Suspense fallback={<div>Loading...</div>}>
            hi
            {/* <Content /> */}
          </Suspense>
          </main>
        </GridArea>
      </Grid>
    </>
  );
}

export default App;