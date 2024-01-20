import { lazy } from 'react';
import Chat from '../pages/Apps/Chat';
import Mailbox from '../pages/Apps/Mailbox';
import Notes from '../pages/Apps/Notes';
import Scrumboard from '../pages/Apps/Scrumboard';
import Profile from '../pages/Users/Profile';
import AccountSetting from '../pages/Users/AccountSetting';
const Index = lazy(() => import('../pages/Index'));
const Todolist = lazy(() => import('../pages/Apps/Todolist'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Index />,
        layout: 'default',
    },
    {
        path: '/apps/todolist',
        element: <Todolist />,
    },
    {
        path: '/apps/notes',
        element: <Notes />,
    },
    {
        path: '/apps/mailbox',
        element: <Mailbox />,
    },
    {
        path: '/apps/chat',
        element: <Chat />,
    },
    {
        path: '/apps/scrumboard',
        element: <Scrumboard />,
    },
    {
        path: '/users/profile',
        element: <Profile />,
    },
    {
        path: '/users/user-account-settings',
        element: <AccountSetting />,
    },

];

export { routes };
