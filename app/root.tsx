/** @format */

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/node'
import type { MetaFunction, LinksFunction } from 'remix'

import styles from './styles/app.css'
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const meta: MetaFunction = () => {
    return { title: 'New Remix App', charset: "utf-8", viweport: "width=device-width,inicial-scale=1" }
}

export default function App() {
    return (
        <html lang='en'>
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}
