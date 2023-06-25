export type NearYouItemType = {
  id: string;
  resortName: string;
  location: string;
  star: number;
  pricePerNight: number;
  imageUrl: string;
};

export type ExploreItemType = {
  id: string;
  name: string;
  imageUrl: string;
};

export type MainListType = {
  id: number;
  data: ExploreItemType[];
};
