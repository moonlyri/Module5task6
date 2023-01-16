// pages
import Resource from "./pages/Resource";
import User from "./pages/Home/User";
import ResourcePage from "./pages/Resource";
import UserCreate from "./pages/CreateUpdate/UserCreate/components/UserCreate";
import CreateUserPage from "./pages/CreateUpdate/UserCreate/CreateUserPage";
import UpdateUserPage from "./pages/CreateUpdate/UserUpdate/UpdateUserPage";
import UserUpdate from "./pages/CreateUpdate/UserUpdate/components/UserUpdate";
import Auth from "./pages/Authentification/Auth";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'user-route',
        title: 'User',
        path: '/users/',
        enabled: true,
        component: User
    },
    {
        key: 'resource-route',
        title: 'Resource',
        path: '/unknown/',
        enabled: true,
        component: Resource
    },
    {
        key: 'user-page-route',
        title: 'User',
        path: '/user/:id',
        enabled: false,
        component: User
    },
    {
        key: 'resource-page-route',
        title: 'Resource',
        path: '/unknown/:id',
        enabled: false,
        component: ResourcePage
    },
    {
        key: 'create-user-page-route',
        title: 'Create new user',
        path: '/user/created',
        enabled: true,
        component: CreateUserPage
    },
    {
        key: 'show-created-user-page-route',
        title: 'Show created user page',
        path: '/user/created/:id',
        enabled: false,
        component: UserCreate
    },
    {
        key: 'update-user-page-route',
        title: 'Update user',
        path: '/user/updated',
        enabled: true,
        component: UpdateUserPage
    },
    {
        key: 'show-updated-user-page-route',
        title: 'Show updated user page',
        path: '/user/updated/:id',
        enabled: false,
        component: UserUpdate
    },
    {
        key: 'show-authentication-page-route',
        title: 'Authentication',
        path: '/authentication',
        enabled: false,
        component: Auth
    },
]