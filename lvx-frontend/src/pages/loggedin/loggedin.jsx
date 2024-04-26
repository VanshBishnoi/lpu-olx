import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./loggedin.css"
function Loggedin() {

  const navigate = useNavigate()

  const handleLogout=()=>{
    sessionStorage.removeItem('user')
    navigate('/')
    window.location.reload()
  }
  return (
    <>
    <button className='logout' onClick={handleLogout}>Logout</button>
    <div>Hello</div>
    </>
  )
}

export default Loggedin;

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const Loggedin = () => {
//   const { logout } = useAuth0();

//   return (
//     <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//       Log Out
//     </button>
//   );
// };

// export default Loggedin;