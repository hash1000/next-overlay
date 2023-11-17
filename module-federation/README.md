## How to run project

```
  npm install
  npm run start 
```

# Next.js 13 with Module Federation

Module Federation in Next.js depends on <a href="https://www.npmjs.com/package/@module-federation/nextjs-mf">@module-federation/nextjs-mf</a>

NOTE: There seems to be a problem with css-in-js sharing between federated modules. This is likely due to some internal module not being shared as a singleton. PR is welcome

## Context

We have three next.js applications

- `yApp` - port 3000
- `xApp` - port 3001

The applications utilize omnidirectional routing and pages or components are able to be federated between applications like a SPA

I am using hooks here to ensure multiple copies of react are not loaded into scope on server or client.

```js
const config = {
  shared: {
    react: {
      eager: true,
      singleton: true,
    },
  },
};
```

However, in the case of Next.js - you need to use <a href="https://www.npmjs.com/package/@module-federation/nextjs-mf">@module-federation/nextjs-mf</a>