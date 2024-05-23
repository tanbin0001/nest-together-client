import { USER_ROLE } from '@/contants/role';
import { DrawerItem, UserRole } from '@/types';

//icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ReviewsIcon from '@mui/icons-material/Reviews';
 
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import PostAddIcon from '@mui/icons-material/PostAdd';
export const drawerItems = (role: UserRole): DrawerItem[] => {
   const roleMenus: DrawerItem[] = [];

   const defaultMenus = [
      {
         title: 'Profile',
         path: `${role}/profile`,
         icon: PersonIcon,
      },
      {
         title: 'Change Password',
         path: `change-password`,
         icon: KeyIcon,
      },
   ];

   switch (role) {
      // case USER_ROLE.SUPER_ADMIN:
      //    roleMenus.push(
      //       {
      //          title: 'Dashboard',
      //          path: `${role}`,
      //          icon: DashboardIcon,
      //       },
      //       {
      //          title: 'Manage Users',
      //          path: `${role}/manage-users`,
      //          icon: GroupIcon,
      //       }
      //    );
      //    break;

      case USER_ROLE.ADMIN:
         roleMenus.push(
            {
               title: 'Dashboard',
               path: `${role}`,
               icon: DashboardIcon,
            },
            
            {
               title: 'Reviews',
               path: `${role}/reviews`,
               icon: ReviewsIcon,
            }
         );
         break;

 

      case USER_ROLE.USER:
         roleMenus.push(
            {
               title: 'Post Flat Info to Share ',
               path: `${role}/post-flat-info-to-share`,
               icon: PostAddIcon,
            },
            {
               title: 'My Flat Posts',
               path: `${role}/my-flat-posts`,
               icon: ApartmentIcon,
            },
            {
               title: 'My Requests on Flat Posts',
               path: `${role}/my-requests-on-flat-posts`,
               icon: DomainAddIcon,
            },
            
         );
         break;

      default:
         break;
   }

   return [...roleMenus, ...defaultMenus];
};
