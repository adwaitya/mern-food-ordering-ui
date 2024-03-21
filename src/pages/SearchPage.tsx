import { useSearchRestaurants } from "@/api/SearchApi";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};
const SearchPage = () => {
  const { city } = useParams();

  const { results } = useSearchRestaurants(city);

  return <div>User Searched for {city}</div>;
};

export default SearchPage;
