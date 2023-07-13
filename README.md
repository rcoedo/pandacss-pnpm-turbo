# PandaCSS Monorepo - HMR config recipe bug

The repo has three packages:

* `packages/design-system-react`: A component library & design system. It contains the recipes, exports a preset and a
  button component. This package also contains `.stories.tsx` files that are loaded by the workshop application.
* `apps/front`: A Vite frontend application. It renders the button from `@mono/design-system-react`.
* `apps/workshop`: A storybook application that picks the stories from the component library.

## Installation

1. Run `pnpm install` :)

## Steps to reproduce

1. Install the dependencies
2. Run `pnpm dev` to start the `front` and `workshop` applications.
3. Open [workshop](http://localhost:6006/) and [front](http://localhost:5173/) in your browser.
4. Edit `packages/design-system-react/src/button/button.recipe.ts`. Change the `funky` visual from `red.300` to
   `blue.300`. Notice that neither applications will update.
6. Run `touch ./apps/front/panda.config.ts`. Notice that `front` recipes were properly reloaded. You can also check the
   logs and you'll see a message regarding the new configuration.
7. Run `touch ./apps/workshop/panda.config.ts`. Notice that `workshop` recipes were reloaded. The logs will show the config reload message, but the configuration is outdated. In the browser, `workshop` still shows the old color.
