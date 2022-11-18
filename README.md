# JSHeroes Bootcamp - React components starter

This is the basic starter for learning React components. It consists of some config files and the src folder:
- App.jsx
- App.css
- App.test.jsx
- main.jsx
 
Everything is wired together with [vite](https://vitejs.dev/), so to run the project you have to run in a terminal:
```
yarn
yarn dev
```

If you prefer running the repo in the cloud:

[![Open in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/jsheroes/react-components-starter/main)

## What we build

The goal of the bootcamp is for everyone to build a GitHub explorer web application. We'll be using the [GitHub REST API](https://docs.github.com/en/rest) to fetch data and implement the following functionality on top of this starter:
- Build your first React components: RepositoryCard, SearchForm
- Fetch data from the [GitHub REST API](https://docs.github.com/en/rest)
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

## Useful Information

### GitHub API documentation

#### Get most popular repositories
When you don't have a search term, you can use this request to get the most popular repos on GitHub.
* **Docs** : https://docs.github.com/en/rest/search#search-repositories
* **URL** : `https://api.github.com/search/repositories?q=stars:>10000"`
* **Method** : `GET`
* **Response example**: `src/mocks/projects.json`

#### Search repositories
The same request can be used to search by a term (eg: "react").
* **Docs** : https://docs.github.com/en/rest/search#search-repositories
* **URL** : `https://api.github.com/search/repositories?q=react`
* **Method** : `GET`
* **Response example**: `src/mocks/projects.json`

#### Get repository details:
* **Docs** : https://docs.github.com/en/rest/repos/repos#get-a-repository
* **URL** : `https://api.github.com/repos/facebook/react`
* **Method** : `GET`

### How to setup your CodeSandbox account

https://www.loom.com/share/602ac8392ad247428bd96f9b34daf512

### How to create your GitHub API token

https://www.loom.com/share/3ee61ca2012b45f1a560535ff4bc41ed
