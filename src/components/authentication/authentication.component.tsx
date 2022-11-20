import { Fragment, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/user";
import { Routes } from "../../utils/api/routes";

export const Authentication = ({ children }: { children: any }) => {
    const { user } = useContext(UserContext);
    debugger
    if (!user.logged) {
        return <Navigate to={Routes.LOGIN} />;
    }
    return (
        <Fragment>
            {children}
        </Fragment>
    );
};
