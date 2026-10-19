# Context API Practice

A small React + Vite project from the bootcamp to understand **prop drilling** and why the **Context API** exists.

## What it shows

`App` holds a `message` object (`{ familyName: "Gogo" }`) and passes it down through every level of a component tree, even though only the bottom components display it:

```
App
 └─ Family
     └─ Parent
         └─ Child
             ├─ GrandDaughter
             └─ GrandSon
```

- `Family`, `Parent` and `Child` receive `message` only to pass it on. This is **prop drilling**.
- `Parent`, `Child`, `GrandDaughter` and `GrandSon` render `message.familyName`.
- Each component logs when it receives the message, so you can see the data pass through the tree in the console.

## Things learned

- What prop drilling is and why it gets painful as the tree grows
- Passing an object as a prop and reading it in child components
- Default vs named exports and imports
- Setting up Tailwind CSS in a new Vite project (`tailwindcss`, `@tailwindcss/vite`, plugin in `vite.config.js`, `@import "tailwindcss"` in `index.css`)
- Logs appear twice in development because `<StrictMode>` renders components twice. This is expected and doesn't happen in production.

## Next

- Replace the prop drilling with the **Context API** (`createContext`, a provider in `App`, and `useContext` in the components that need the data)

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Project structure

```
src/
  prop-drilling/
    Family.jsx
    Parent.jsx
    Child.jsx
    GrandDaughter.jsx
    GrandSon.jsx
  App.jsx          # holds the message and renders Family
  App.css          # box styles for each level
```
