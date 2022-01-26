// Import the global style enabling tailwind classes
import '../styles/globals.css'
import { RouterContext } from "next/dist/shared/lib/router-context"; // next 12

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    nextRouter: {
        Provider: RouterContext.Provider,
    },
    grid: {
        gridOn: true,
        columns: 12,
        gap: '20px',
        gutter: '50px',
        maxWidth: '1024px',
    },
    iframe: {
        url: 'https://opensea.io/assets/0x1301566b3cb584e550a02d09562041ddc4989b91/28',
        timeout: 1000,
    },
}