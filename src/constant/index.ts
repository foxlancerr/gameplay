import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { INavLinksItem, IsocialLinks } from "@/types";
import { FiGithub } from 'react-icons/fi';

export const navLinksItem: INavLinksItem[] = [
  { id: 0, name: "Home", path: "/", children: [] },
  { id: 1, name: "About", path: "/about", children: [] },
  { id: 2, name: "News", path: "/news", children: [] },
  { id: 3, name: "Portfolio", path: "/portfolio", children: [] },
];

export const socialLinks:IsocialLinks[] = [
  {
    id: 1,
    name: "GitHub",
    path: "https://github.com",
    icon: FiGithub 
  },
  {
    id: 2,
    name: "Twitter",
    path: "https://twitter.com",
    icon: FaTwitter
  },
  {
    id: 3,
    name: "LinkedIn",
    path: "https://linkedin.com",
    icon: FaLinkedinIn
  },
  {
    id: 4,
    name: "Facebook",
    path: "https://facebook.com",
    icon: FaFacebookF
  }
];
