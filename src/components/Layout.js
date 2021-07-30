import React from "react";
import Footer from "./Footer";

const Layout = ({ children, isActive }) => {
  const tabs = [
    { name: "Accueil", href: "/", current: !isActive },
    { name: "Formulaire", href: "/add", current: isActive },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 relative">
        <div className="sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-6" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-3xl mx-auto pt-16">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
