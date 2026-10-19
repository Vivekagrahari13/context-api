# Context API Practice

A small React + Vite project from the bootcamp to understand **prop drilling** and how the **Context API** solves it.

## What it shows

`App` holds a `message` object (`{ familyName: "Gogo" }`) and shares it with a component tree where only some components display it:

```
App  (Context Provider)
 └─ Family
     └─ Parent
         └─ Child
             ├─ GrandDaughter
             └─ GrandSon
```

### Before: prop drilling

`message` was passed as a prop through every level, so `Family` and every component in between received it only to pass it on.

### After: Context API

- `FamilyContext.jsx` creates the context with `React.createContext()`.
- `App.jsx` wraps the tree in `<FamilyContext.Provider value={familyMessage}>`.
- `Parent`, `Child`, `GrandDaughter` and `GrandSon` read the value directly with `useContext(FamilyContext)`.
- `Family` no longer takes any props, and nothing is passed between levels.

## Things learned

- What prop drilling is and why it gets painful as the tree grows
- Creating a context, providing a value, and consuming it with `useContext`
- Components only read the context if they need it, so middle components stay clean
- Default vs named exports and imports
- Setting up Tailwind CSS in a new Vite project (`tailwindcss`, `@tailwindcss/vite`, plugin in `vite.config.js`, `@import "tailwindcss"` in `index.css`)
- Logs appear twice in development because `<StrictMode>` renders components twice. This is expected and doesn't happen in production.

## Next

- Apply Context to CineScope to share the watchlist state across pages

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
    FamilyContext.jsx   # createContext
    Family.jsx
    Parent.jsx
    Child.jsx
    GrandDaughter.jsx
    GrandSon.jsx
  App.jsx               # provides the context value and renders Family
  App.css               # box styles for each level
```
