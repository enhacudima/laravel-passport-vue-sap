import Welcome from './components/Welcome.vue';
import Home from './components/Home.vue';
import Login from './components/Auth/Login.vue';
import Register from './components/Auth/Register.vue';
import UserEdit from './components/Auth/UserEdit.vue';
import ForgotPassword from './components/Auth/ForgotPassword.vue';
import RegisterResult from './components/Auth/RegisterResult.vue';
import VerifyResult from './components/Auth/VerifyResult.vue';

export const routes = [
    {
        name: 'welcome',
        path: '/',
        component: Welcome
    },
    {
        name: 'register/result',
        path: '/registerResult',
        component: RegisterResult
    },
    {
        name: 'verifyResult',
        path: '/verifyResult',
        component: VerifyResult
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        props: true,
        meta: {
            antLoginLayout: true,
        },
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        props: true,
        meta: {
            antLoginLayout: true,
        },
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
        props: true,
        meta: {
            antMasterLayout: true,
            auth: true,
        },
    }
];



