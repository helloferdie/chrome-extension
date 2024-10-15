# Chrome Extension

Here is the boilerplate source code to build a Chrome Extension using React, Typescript & TailwindCSS for assist form filling.

![Screenshot](https://raw.githubusercontent.com/helloferdie/chrome-extension/main/screenshot.jpg)

## Run

To run this project make sure you have install node

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

nvm install 20

node -v

npm -v
```

Then install pnpm with

```
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
