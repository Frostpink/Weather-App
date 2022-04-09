import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import { Center, MantineProvider, Paper, Switch } from "@mantine/core";

import styles from "./styles/app.css"
import { useState } from "react";

// export function links() {
//   return [{ rel: "stylesheet", href: styles }]
// }
export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  const [dark, setDark] = useState<'light'|'dark'>('light')
  let theme = {
    colorScheme: dark,
    primaryColor: 'grape',
//     colors: {
//       dark: 
// [ 
//    '#f4e5ff',
//    '#d6b5ff',
//    '#b984fc',
//    '#9d54f8',
//    '#8123f5',
//    '#686868',
//    '#5107ac',
//    '#747474',
//    '#23014c',
//    '#0e001e',
//  ],
//     },
  }
  return (
    <MantineProvider theme={theme}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Paper padding='xl' radius='xs'>
            <Center>
          <Switch
            checked={dark === 'dark'}
            onChange={(event) => setDark(event.target.checked ? 'dark' : 'light')}
  size="md"
/></Center>
          <Outlet /></Paper>
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </body>
      </html>
    </MantineProvider>
  );
}
