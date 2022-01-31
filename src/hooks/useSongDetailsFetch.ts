import { HttpUtility } from "../utils/HttpUtility";
import useSWR from "swr";
import { UrlGenerator } from "../utils/UrlGenerator";

const useSongDetailsFetch = (songSlug: string) => {
  const { data, error } = useSWR(
    UrlGenerator.getSongDetailsUrl(songSlug),
    HttpUtility.fetcher
  );

  return {
    songDetails: data ? data[0] : [],
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSongDetailsFetch;
