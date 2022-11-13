export const fetchMostPopularRepos = () => {
  return fetch("https://api.github.com/search/repositories?q=stars:>10000")
    .then((res) => res.json())
    .then((res) => res.items);
};
