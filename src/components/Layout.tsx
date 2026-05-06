import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <main className="min-h-screen w-full flex flex-col bg-background text-foreground">
            <Navbar />
            <div className="flex grow">
                <Outlet />
            </div>
        </main>
    );
}
