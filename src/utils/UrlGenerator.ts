export class UrlGenerator {
  static BASE_IMAGE_URL = "https://media2.pianotrax.com";
  static BASE_URL = "https://api.pianotrax.com/api";

  static subscription = "";

  static generateShowImage = (showId: number) =>
    `https://media2.pianotrax.com/art/group/300/${showId}.jpg`;

  static generateTrackPreviewUrl = (trackId: number) =>
    `https://media2.pianotrax.com/m/${trackId}.mp3`;

  static getTipsProviderImage = (blogId: string) =>
    `${UrlGenerator.BASE_IMAGE_URL}/blog/${blogId}/featured.jpg`;

  static getAllCategory = () => `${UrlGenerator.BASE_URL}/categories`;

  static getAllShows = () => `${UrlGenerator.BASE_URL}/shows`;

  static getSongsByCategory = (slug: string, page: number, pageSize = 35) =>
    `${UrlGenerator.BASE_URL}/songs/${slug}/${page * pageSize}/${pageSize}`;

  static getSongDetailsUrl = (songSlug: string) =>
    `${UrlGenerator.BASE_URL}/tracks/${songSlug}`;

  static getSearchQueryUrl = (queryString: string) =>
    `${UrlGenerator.BASE_URL}/search?q=${queryString}`;

  static getShowDetailsUrl = (showId: number) =>
    `${UrlGenerator.BASE_URL}/showsongs/${showId}`;

  static getTopTipsUrl = () => `${UrlGenerator.BASE_URL}/toptendetail`;

  static getTopTipsDetailsUrl = (tipsSlug: string) =>
    `${UrlGenerator.BASE_URL}/toptendetail/${tipsSlug}`;

  static getFaqCategories = () => `${UrlGenerator.BASE_URL}/faq`;

  static getFaqDetails = (faqId: number) =>
    `${UrlGenerator.BASE_URL}/faqdetail/${faqId}`;

  static signIn = () => `${UrlGenerator.BASE_URL}/login`;

  static register = () => `${UrlGenerator.BASE_URL}/register`;

  static forgotPassword = () => `${UrlGenerator.BASE_URL}/forgot`;

  static resetPassword = () => `${UrlGenerator.BASE_URL}/forgotreset`;

  static myOrders = () => `${UrlGenerator.BASE_URL}/myacctpage`;

  static myTracks = () => `${UrlGenerator.BASE_URL}/mypage`;

  static getTotalTrackCount = () => `${UrlGenerator.BASE_URL}/trackcount`;

  static getAllTopTracks = () => `${UrlGenerator.BASE_URL}/topsongsall`;

  static getTopFiveSongOfCategory = (categorySlug: string) =>
    `${UrlGenerator.BASE_URL}/top5/${categorySlug}`;

  static getPurchaseUrl = () => `${UrlGenerator.BASE_URL}/purchase`;

  static getPurchaseWithPaypalUrl = () =>
    `${UrlGenerator.BASE_URL}/paypalpurchase`;

  static getStripeInfoUrl = () => `${UrlGenerator.BASE_URL}/getstripeinfo`;

  static getTrackDownloadUrl = (trackId: number) =>
    `${UrlGenerator.BASE_URL}/trackurl?track=${trackId}`;

  static getCouponCodeDiscount = (couponCode: string) =>
    `${UrlGenerator.BASE_URL}/checkcoupon?couponcode=${couponCode}`;

  static getTotal = () => `${UrlGenerator.BASE_URL}/total`;

  static getAllSongsUrl = () => `${UrlGenerator.BASE_URL}/allsongs`;

  static getUserSubscription = () => `${UrlGenerator.BASE_URL}/usersubs`;

  static getMyAccountDetails = (http_x_auth_token: string) =>
    `${UrlGenerator.BASE_URL}/userdetails?http_x_auth_token=${http_x_auth_token}`;

  static resetUserCC = () => `${UrlGenerator.BASE_URL}/resetcc`;
}
