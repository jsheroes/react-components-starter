import { useFetch } from "../hooks/useFetch";
import { fetchMostPopularRepos, searchReposByName } from "../service";

import RepositoryCard from "./RepositoryCard";

function Repositories({ searchTerm }) {
  const [isLoading, repositories] = useFetch(
    searchTerm ? () => searchReposByName(searchTerm) : fetchMostPopularRepos,
    [searchTerm]
  );

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <ul className="repo-cards">
      {repositories.map((repository, index) => (
        <RepositoryCard repository={repository} key={index} />
      ))}
    </ul>
  );
}

export default Repositories;
