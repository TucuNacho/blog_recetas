import { Navigate, Outlet } from "react-router";

const Protector = ({isAdmin}) => {
    if(!isAdmin) {
        return <Navigate to={"/"}/>
    }
    return <Outlet/>
};

export default Protector;
