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
4. Notice that the `Edgy` story is missing its styles.
5. Edit `packages/design-system-react/src/button/button.stories.ts`, comment out the Edgy args story, uncomment the Edgy
   render story.
6. Restart the servers.
7. Notice that `Edgy` is now correctly styled.
