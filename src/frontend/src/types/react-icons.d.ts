declare module 'react-icons/si' {
  import { IconType } from 'react-icons';
  export const SiX: IconType;
  export const SiFacebook: IconType;
  export const SiLinkedin: IconType;
  export const SiInstagram: IconType;
  export const SiGithub: IconType;
  export const SiYoutube: IconType;
  export const SiDiscord: IconType;
  export const SiWhatsapp: IconType;
}

declare module 'react-icons' {
  import { ComponentType, SVGAttributes } from 'react';
  export type IconType = ComponentType<SVGAttributes<SVGElement>>;
}
