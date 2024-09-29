import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { INavLinksItem, IsocialLinks, ItrendingCardItem } from "@/types";
import { FiGithub } from "react-icons/fi";

export const navLinksItem: INavLinksItem[] = [
  { id: 0, name: "Home", path: "/", children: [] },
  { id: 1, name: "About", path: "/about", children: [] },
  { id: 2, name: "News", path: "/news", children: [] },
  { id: 3, name: "Portfolio", path: "/portfolio", children: [] },
];

export const socialLinks: IsocialLinks[] = [
  {
    id: 1,
    name: "GitHub",
    path: "https://github.com",
    icon: FiGithub,
  },
  {
    id: 2,
    name: "Twitter",
    path: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    id: 3,
    name: "LinkedIn",
    path: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    name: "Facebook",
    path: "https://facebook.com",
    icon: FaFacebookF,
  },
];

export const trendingCardItem: ItrendingCardItem[] = [
  {
    id: 1,
    card_url: "/assets/dashboard/trending/trending1.png",
    content: {
      text: "40k followers",
      icon_url: "/assets/icons/fire-icon.png",
    },
  },
  {
    id: 2,
    card_url: "/assets/dashboard/trending/trending2.png",
    content: {
      text: "50k followers",
      icon_url: "/assets/icons/fire-icon.png",
    },
  },
  {
    id: 3,
    card_url: "/assets/dashboard/trending/trending3.png",
    content: {
      text: "60k followers",
      icon_url: "/assets/icons/fire-icon.png",
    },
  },
  {
    id: 4,
    card_url: "/assets/dashboard/trending/trending4.png",
    content: {
      text: "70k followers",
      icon_url: "/assets/icons/fire-icon.png",
    },
  },
];
