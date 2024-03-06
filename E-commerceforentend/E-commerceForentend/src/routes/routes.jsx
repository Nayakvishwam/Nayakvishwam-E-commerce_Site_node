import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from "react-router-dom";
import { history } from "../app/history";
import App from "../app/App";
export default function Router() {
    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route path="app/*" element={<App />}>
                </Route>
            </Routes>
        </HistoryRouter>
    )
}