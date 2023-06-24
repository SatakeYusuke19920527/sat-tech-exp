import { Routes } from '@/lib/routes';
import { theme } from '@/styles/theme';
import { css } from '@emotion/react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { Accordion } from '../Accordion';
import { Link } from '../Link';

type Props = {
  routes: Routes;
};

export const RoutesNav = ({ routes }: Props) => {
  return (
    <Box component="nav" aria-labelledby="site-table-of-components-heading">
      <List sx={{ p: 0 }}>
        {routes.map((route) => {
          if (route.path) {
            return (
              <ListItem key={route.label}>
                <Link href={route.path}>
                  <Typography>{route.label}</Typography>
                </Link>
              </ListItem>
            );
          }
          if (route.pages) {
            return (
              <ListItem key={route.label}>
                <Accordion summary={route.label}>
                  <List sx={{ p: 0 }}>
                    {route.pages.map((page) => (
                      <ListItem key={page.label}>
                        <Link href={page.path}>
                          <Typography>{page.label}</Typography>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Accordion>
              </ListItem>
            );
          }
        })}
      </List>
    </Box>
  );
};

const NavItemStyle = css`
  padding: 0;
`;

const NavLinkStyle = css`
  width: 100%;
  padding: ${theme.spacing(2, 4)};
  border-radius: 999px;
  text-decoration: 'none';
  transition-duration: 200ms;
  :hover {
    background-color: ${theme.palette.grey[100]};
  }
`;

const NavTextStyle = css`
  font-size: 0.9rem;
  color: ${theme.palette.grey[800]};
`;
