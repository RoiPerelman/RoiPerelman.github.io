import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
// import styled from "styled-components";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// type SidebarProps = {
//   children: ReactNode;
// };
const Sidebar = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `);
  console.log(data);
  const items = data.allMarkdownRemark.edges.map(
    (edge: any) => edge.node.frontmatter
  );
  return (
    <List>
      {items.map(({ path, title }: { path: string; title: string }) => (
        <ListItem
          button
          key={title}
          onClick={() => {
            navigate(path);
          }}
        >
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
