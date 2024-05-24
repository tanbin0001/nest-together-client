'use client';
import DashboardDrawer from '@/components/Dashboard/DashboardDrawer/DashboardDrawer';
import { isLoggedIn } from '@/services/auth.services';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !isLoggedIn()) {
      router.push('/login');
    }
  }, [isClient, router]);

  if (!isClient) {
    return null;  
  }

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
