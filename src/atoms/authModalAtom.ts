import {atom} from 'recoil';

type AuthModalstate={
    isOpen: boolean;
    type: 'Login' | 'register' | 'forgot password';
};

const initalAuthModalstate: AuthModalstate={
    isOpen:false,
    type: 'Login',
};
export const authModalstate=atom<AuthModalstate>({
    key:'authModalstate',
    default:initalAuthModalstate,

});