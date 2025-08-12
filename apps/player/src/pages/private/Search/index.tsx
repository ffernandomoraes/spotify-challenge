import { useQuery } from '@tanstack/react-query';

import { SearchService } from '@/services/search';

const Search = () => {
  const { data } = useQuery({
    queryKey: ['search'],
    queryFn: () => SearchService.filter('justin')
  });

  console.log(data);

  return <h1>Search</h1>;
};

export default Search;
