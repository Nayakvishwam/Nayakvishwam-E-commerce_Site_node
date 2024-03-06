import { Route, Routes } from "react-router-dom";
import UsersView from "../features/manageadmin/usersview";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="users/" element={<UsersView />} />
        </Routes>
    )
}