import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Inicio',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Inicio',
        type: 'item',
       // url: '/auth/signin',
        url: '/dashboard/default',
        icon: 'feather icon-home',
        classes: 'nav-item'
      }
    ]
  },
  {
    id: 'forms',
    title: 'Registro & Listas',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'forms-element',
        title: 'Registro Usuario',
        type: 'item',
        url: '/forms/basic',
        icon: 'feather icon-users',
        classes: 'nav-item'
      },
      {
        id: 'tables',
        title: 'Listas',
        type: 'item',
        url: '/tables/bootstrap',
        icon: 'feather icon-list',
        classes: 'nav-item'
      }
    ]
  },
  {
    id: 'pages',
    title: 'Eventos',
    type: 'group',
    icon: 'icon-pages',
    children: [
      /*{
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Signup',
            type: 'item',
            url: '/auth/signup',
            target: true
          },
          {
            id: 'signin',
            title: 'Signin',
            type: 'item',
            url: '/auth/signin',
            target: true
          }
        ]
      },*/
      {
        id: 'sample-page',
        title: 'Registro de Eventos',
        type: 'item',
        url: '/sample-page',
        icon: 'feather icon-sidebar',
        classes: 'nav-item'
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
