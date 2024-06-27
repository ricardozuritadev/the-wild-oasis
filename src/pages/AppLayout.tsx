import { Outlet } from "react-router-dom";
import GlobalStyles from "styles/global-styles";

export default function AppLayout() {
    return (
        <>
            <GlobalStyles />
            <main>
                <Outlet />
            </main>
        </>
    );
}
