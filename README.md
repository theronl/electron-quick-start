# electron-quick-start

**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start) within the Electron documentation.

This branch has the drag and drop gist additions from [Tim Pulver's page](https://gist.github.com/timpulver/452670e4a0ec9619a06347ff61c3f60c).

**Use this app along with the [Electron API Demos](http://electron.atom.io/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/theronl/electron-quick-start
# Go into the repository
cd electron-quick-start
# Check out this branch
git checkout dragdrop
# Install dependencies
npm install
# Run the app
npm start
```

```bash
# Install Devtron
$ npm install --save-dev devtron
```

```javascript
// Run the following from the Console tab of your app's DevTools
require('devtron').install()
// You should now see a Devtron tab added to the DevTools
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/).

## Other Example Apps

For more example apps, see the
[list of boilerplates](http://electron.atom.io/community/#boilerplates)
created by the awesome electron community.





#### License [CC0 1.0 (Public Domain)](LICENSE.md)
