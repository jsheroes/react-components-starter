# JSHeroes Bootcamp - React components starter

This is the basic starter for learning React components. It consists of some config files and the src folder:
- App.jsx
- App.css
- main.jsx
 
Everything is wired together with [vite](https://vitejs.dev/), so to run the project you have to run in a terminal:
```
yarn
yarn dev
```

## What we build

The goal of the bootcamp is for everyone to build a GitHub explorer web application. We'll be using the GitHub API (link coming soon) to fetch data and implement the following functionality on top of this starter:
- Build your first React component (RepositoryCard)
- Fetch data from the GitHub API (link coming soon)
- Add search form and connect with the fetching feature
- Create a second page to show more details for each repository

## Checklist

Here's the complete checklist of the concepts you'll be learning while doing this workshop: 

- React basics
  - JSX syntax
  - Split UI in components
  - Props
  - React devtools
  - State (useState)
  - Integrate async call (useEffect)
- Connect multiple components
  - Lifting state
  - Controlled vs Uncontrolled
  - Dependencies in useEffect
  - Conditional render (loading state)
- Multi page application
  - react-router & Link component
  - Custom hooks (reuse fetch)
  - Integrate external libraries (mentor's choice)
  - Write unit testing

## Github api documentation

### Fetch github repos 

Find repositories via various criteria. This method returns up to 100 results per page.

**Docs page** : https://docs.github.com/en/rest/search#search-repositories

**URL** : `https://api.github.com/search/repositories`

**Method** : `GET`

**Response example**: src/mocks/projects.json
