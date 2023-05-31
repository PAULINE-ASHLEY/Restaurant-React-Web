import { FOOD, DRINK } from 'navigation/constants';
export const links = [
  {
    name: 'MENU',
    submenu: true,
    sublinks: [
      {
        sublink: [
          { name: 'Food', link: FOOD },
          { name: 'Drink', link: DRINK },
        ],
      },
    ],
  },
];
