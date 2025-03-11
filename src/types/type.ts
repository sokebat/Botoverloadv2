import { JSX } from "react";

export interface ContactItemProps {
  icon: JSX.Element;
  title: string;
  detail: string;
}

export interface SocialLinkProps {
  url: string;
  icon: JSX.Element;
}
