export type TypeCategory = {
  count: number;
  id: string;
  name: string;
  slug: string;
  seq: string;
};

type TypeSong = {
  id: number;
  name: string;
  slug: string;
  hfnumber: string;
  publisher: string;
};

type TypeGroup = {
  id: number;
  name: string;
  slug: string;
  type: string;
};

type TypeParent = { type: string; name: string };

export type TypeSongDetails = {
  id: number;
  uuid: string;
  song: TypeSong;
  note: string;
  key: string;
  type: string;
  length: number;
  isEdit: boolean;
  isAudition: boolean;
  genderM: boolean;
  genderF: boolean;
  isDuet: boolean;
  version: number;
  params: string;
  original_file: string;
  available: boolean;
  hidden: boolean;
  created_at: string;
  hfNumber: string;
  publisher: string;
  group: TypeGroup;
  parent: TypeParent;
  parentslug: string;
  credits: string[];
  groups: string[];
  lists: string[];
  price: number;
  selected: boolean;
};

export type TypeSongPreview = {
  created_at: string;
  credits: any[];
  group: TypeGroup;
  group_ex: string;
  hfnumber: string;
  id: number;
  name: string;
  parent: TypeParent;
  publisher: string;
  search: string;
  slug: string;
  tempo: string;
  tracks: TypeSongDetails[];
};

export type TypeCard = {
  address: string;
  city: string;
  expmonth: number;
  expyear: number;
  last4: string;
  state: string;
  type: string;
  zip: number;
};

export type TypeTips = {
  post_id: string;
  post_slug: string;
  post_title: string;
};

export type TypeTipsDetails = {
  post_id: string;
  post_title: string;
  post_slug: string;
  post_bio: string;
  post_details: TypeSingleTip[];
};

export type TypeSingleTip = {
  content: string;
  line: string;
  title: string;
};

export type TypeFaqQuestion = {
  id: string;
  content: string;
  title: string;
};

export type TypeFaqCategory = {
  category: string;
  catid: string;
  faqs: TypeFaqQuestion[];
};

export type TypeFaqAnswer = {
  id: string;
  title: string;
  content: string[];
};

export type TypeSearchResult = {
  id: number;
  name: string;
  show_name: string;
  image: string;
  type: string;
  slug: string;
};

export type TypeShow = {
  id: string;
  name: string;
  slug: string;
  type: string;
  created_at: string;
  hidden: string;
};
