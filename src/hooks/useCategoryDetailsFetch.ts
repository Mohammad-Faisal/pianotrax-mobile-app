import { HttpUtility } from "../utils/HttpUtility";
import useSWR from "swr";
import { UrlGenerator } from "../utils/UrlGenerator";

const useCategoryDetailsFetch = (categorySlug: string, page: number) => {
  const { data, error } = useSWR(
    UrlGenerator.getSongsByCategory(categorySlug, page),
    HttpUtility.fetcher
  );

  return {
    songs: data ? data : [],
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCategoryDetailsFetch;
