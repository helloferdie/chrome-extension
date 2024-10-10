# Chrome Extension

Here is the boilerplate source code to build a Chrome Extension using React, Typescript & TailwindCSS for assist form filling.

## Run

To run this project make sure you have install pnpm with

```
npm install -g turbo

corepack enable pnpm

pnpm install --frozen-lockfile
```

Then run with

```
pnpm dev
```

This command will generate a build version under folder `/dist`.

After that, go to your Chrome, then find Extension menu or you can type this on the browser address `chrome://extensions/`.

Then turn on `Developer Mode` toggle, usually on the top right corner and click on `Load unpacked` button and select the location for the `/dist` directory on your local machine.

Now the Chrome extension will load and you can pinned it beside your address bar.
