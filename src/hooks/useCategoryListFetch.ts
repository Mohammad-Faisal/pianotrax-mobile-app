import { HttpUtility } from "../utils/HttpUtility";
import useSWR from "swr";
import { UrlGenerator } from "../utils/UrlGenerator";
import { TypeCategory } from "../constants/Types";

const useCategoryListFetch = () => {
  const { data, error } = useSWR<TypeCategory[]>(
    UrlGenerator.getAllCategory(),
    HttpUtility.fetcher
  );

  return {
    categories: data ? data : [],
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCategoryListFetch;
