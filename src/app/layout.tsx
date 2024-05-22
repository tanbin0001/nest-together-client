import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Providers from '@/lib/Providers/Providers';
import { Toaster } from 'sonner';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: 'PH Health Care',
   description: 'Dashboard',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <Providers>
         <html lang='en'>
            <body className='mx-10'>
               <AppRouterCacheProvider>
                  <>
                     <Toaster position='top-center' />
                     {children}
                  </>
               </AppRouterCacheProvider>
            </body>
         </html>
      </Providers>
   );
}
