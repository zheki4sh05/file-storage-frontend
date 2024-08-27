import { Outlet } from "react-router-dom";

function RootPage() {
    
    return ( <div style={{height:"100vh",width:"100vw"}} ><Outlet/></div> );
}

export default RootPage;