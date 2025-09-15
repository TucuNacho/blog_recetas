import { Navigate, Outlet } from "react-router";

const Protector = ({isAdmin}) => {
    if(!isAdmin.token) {
        return <Navigate to={"/"}/>
    }
    return <Outlet/>
};

export default Protector;
