  import React from 'react';
 import { useAuth0 } from '@auth0/auth0-react';
 
 function LogoutButton() {
   const {
    //  isAuthent00icated,
     logout,
   } = useAuth0();
 
   return  (
     <button onClick={() => {
       logout({ returnTo: window.location.origin });
     }}>Log out</button>
   );
 }
 
 export default LogoutButton;