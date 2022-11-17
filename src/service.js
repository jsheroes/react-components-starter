export const fetchMostPopularRepos = () => {
  return fetch("https://api.github.com/search/repositories?q=stars:>10000")
    .then((res) => res.json())
    .then((res) => res.items);
};

export const searchReposByName = (name) => {
  return fetch(`https://api.github.com/search/repositories?q=${name}`)
    .then((res) => res.json())
    .then((res) => res.items);
};

export const fetchRepoDetails = (owner, repo) => {
  return fetch(`https://api.github.com/repos/${owner}/${repo}`).then((res) =>
    res.json()
  );
};
