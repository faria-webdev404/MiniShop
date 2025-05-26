import React from "react";

const AdminDashboard = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

          /* Scrollbar for sidebar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #fff7ed; /* orange-50 */
          }
          ::-webkit-scrollbar-thumb {
            background-color: #d97706; /* orange-600 */
            border-radius: 10px;
            border: 2px solid #fff7ed;
          }
        `}
      </style>

      <div
        style={{ fontFamily: "'Poppins', sans-serif" }}
        className="flex h-screen bg-orange-50"
      >
        {/* Sidebar */}
        <aside className="bg-orange-600 text-white w-64 p-8 flex flex-col space-y-8 shadow-lg overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6 tracking-wide drop-shadow-md">
            Admin Panel
          </h1>
          <nav className="flex flex-col space-y-4 text-lg font-semibold">
            {[
              "Dashboard",
              "Products",
              "Orders",
              "Users",
              "Analytics",
              "Settings",
              "Logout",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-md px-5 py-3 hover:bg-orange-700 hover:shadow-lg transition duration-300 cursor-pointer drop-shadow-md"
                onClick={
                  item === "Logout"
                    ? () => alert("Logging out...")
                    : undefined
                }
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-10 overflow-y-auto">
          <h2 className="text-4xl font-semibold text-orange-700 mb-12 drop-shadow-sm">
            Welcome, Admin!
          </h2>

          {/* Dashboard Overview */}
          <section id="dashboard" className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-orange-400 pb-2">
              Dashboard Overview
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  Total Sales
                </h4>
                <p className="text-3xl font-bold text-orange-600">$12,450</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  Total Orders
                </h4>
                <p className="text-3xl font-bold text-orange-600">340</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  Total Users
                </h4>
                <p className="text-3xl font-bold text-orange-600">1250</p>
              </div>
            </div>
          </section>

          {/* Product Management */}
          <section id="products" className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-orange-400 pb-2">
              Product Management
            </h3>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <p className="text-gray-700 text-lg">
                Manage your products here (add, edit, delete).
              </p>
            </div>
          </section>

          {/* Order Management */}
          <section id="orders" className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-orange-400 pb-2">
              Order Management
            </h3>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <p className="text-gray-700 text-lg">
                View and process orders from customers.
              </p>
            </div>
          </section>

          {/* User Management */}
          <section id="users" className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-orange-400 pb-2">
              User Management
            </h3>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <p className="text-gray-700 text-lg">
                Manage customers and admin users.
              </p>
            </div>
          </section>

          {/* Analytics & Reports */}
          <section id="analytics" className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-orange-400 pb-2">
              Analytics & Reports
            </h3>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <p className="text-gray-700 text-lg">
                Track sales, revenue, and user activity.
              </p>
            </div>
          </section>

          {/* Settings */}
          <section id="settings">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-orange-400 pb-2">
              Settings
            </h3>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <p className="text-gray-700 text-lg">
                Manage your admin profile and preferences.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
