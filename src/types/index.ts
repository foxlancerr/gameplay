import { IconType } from "react-icons";

export interface INavLinksItem {
    name:string,
    id:string | number,
    path:string,
    children:any
}

export interface IsocialLinks{
    id: number;
    name: string;
    path: string;
    icon: IconType;
}[]