import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Quizzes',
    icon: 'nb-keypad',
    link: '/pages/addquiz',
    children: [
      {
        title: 'Create a Quiz',
        link: '/pages/addquiz',
      },
        // link: '/pages/ui-features/grid',
     /*
      {
        title: 'Test',
        link: '/pages/mylogin/mylogin',
      },
      /*{
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },/*
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      }, */
      {
        title: 'Take a Quiz',
        link: '/pages/takequiz',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      /*{
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },*/
    ],
  },
];
