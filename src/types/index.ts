import { IconType } from "react-icons";

export interface INavLinksItem {
  name: string;
  id: string | number;
  path: string;
  children: any;
}

export interface IsocialLinks {
  id: number;
  name: string;
  path: string;
  icon: IconType;
}
[];

export interface ItrendingCardItem {
  id: number;
  card_url: string;
  content: {
    text: string;
    icon_url: string;
  };
}
[];
