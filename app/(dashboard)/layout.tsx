import Navbar from "./_components/_navbar";
import Sidebar from "./_components/sidebar";
import { OrgSidebar } from "./_components/sidebar/org-sidebar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <main className="h-full">
            <Sidebar />
            <div className="pl-[60px] h-full">
                <div className="flex gap-x-3 h-full">
                   <OrgSidebar/>
                   <div className="h-full flex-1">
                    <Navbar />
                     {children}
                   </div>
                </div>

            </div>
        </main>
    );
};

export default DashBoardLayout;