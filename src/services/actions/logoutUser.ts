import { authKey } from '@/contants/authkey';
import { deleteCookies } from './deleteCookies';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const logoutUser = async (router: AppRouterInstance) => {
   localStorage.removeItem(authKey);
   await deleteCookies([authKey, 'accessToken']);
   // router.push('/');
   window.location.href = '/';

   router.refresh();
};
