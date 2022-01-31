// import { LocalStorageConstants } from "./GeneralConstants";
export class HttpUtility {
  static fetcher = (url: string) =>
    fetch(url, {
      //   headers: {
      //     http_x_auth_token: localStorage.getItem(
      //       LocalStorageConstants.JWT_TOKEN
      //     ),
      //   },
    }).then((res) => res.json());
}
