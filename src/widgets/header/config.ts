import { RouterEnum } from 'shared/model/router';
import { MenuItem } from 'shared/ui';

export const headerHeight = 64;

export const menuItems: MenuItem[] = [
  {
    label: 'О нас',
    routeName: RouterEnum.Main,
    hash: '#about',
  },
  {
    label: 'Работы',
    routeName: RouterEnum.Main,
    hash: '#works',
  },
  {
    label: 'Контакты',
    routeName: RouterEnum.Main,
    hash: '#contacts',
  },
];
