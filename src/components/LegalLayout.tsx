import { Scale, ScrollText, Shield } from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";

export const LegalLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Privacy Policy", href: "/legallayout/privacy", icon: Shield },
    { name: "Terms of Use", href: "/legallayout/termsofuse", icon: ScrollText },
    { name: "Legal Information", href: "/legallayout/legal", icon: Scale },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <div
                    onClick={() => navigate(`${item.href}`)}
                    key={item.name}
                    className={`${
                      isActive
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    } group flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer`}
                  >
                    <Icon
                      className={`${
                        isActive
                          ? "text-gray-500"
                          : "text-gray-400 group-hover:text-gray-500"
                      } flex-shrink-0 -ml-1 mr-3 h-6 w-6`}
                    />
                    <span className="truncate">{item.name}</span>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
