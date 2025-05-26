import React from "react";

const UserDashboard = () => {
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
            background: #f9fafb; /* very light gray */
          }
          ::-webkit-scrollbar-thumb {
            background-color: #d97706; /* orange-600 */
            border-radius: 10px;
            border: 2px solid #f9fafb;
          }
        `}
      </style>

      <div
        style={{ fontFamily: "'Poppins', sans-serif" }}
        className="flex flex-col h-screen bg-orange-50"
      >
        {/* Header */}
        <header className="flex justify-between items-center bg-orange-600 text-white px-8 py-4 shadow-[0_4px_8px_rgba(255,127,0,0.6),0_8px_20px_rgba(255,115,0,0.4)]">
          <div className="text-2xl font-semibold tracking-wide drop-shadow-md">
            User Dashboard
          </div>

          <div className="flex items-center space-x-5">
            <img
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              className="rounded-full w-11 h-11 object-cover shadow-lg"
            />
            <span className="font-semibold text-lg drop-shadow-sm">John Doe</span>
            <button
              className="bg-orange-700 hover:bg-orange-800 shadow-lg hover:shadow-xl px-5 py-2 rounded-md transition duration-300 font-medium"
              onClick={() => alert("Logging out...")}
            >
              Logout
            </button>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="bg-orange-600 text-white w-64 p-8 flex flex-col space-y-8 overflow-y-auto shadow-[4px_0_15px_rgba(255,127,0,0.7),8px_0_30px_rgba(255,115,0,0.5)]">
            <nav className="flex flex-col space-y-5 text-lg font-semibold sticky top-0">
              {["Profile", "Orders", "Settings", "Logout"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-md px-5 py-3 hover:bg-orange-600 hover:shadow-lg transition duration-300 drop-shadow-md cursor-pointer"
                  onClick={item === "Logout" ? () => alert("Logging out...") : undefined}
                >
                  {item}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-10 bg-white rounded-tr-xl rounded-br-xl shadow-inner overflow-y-auto">
            <h2 className="text-4xl font-semibold text-orange-700 mb-10 tracking-wide drop-shadow-sm">
              Welcome, John Doe!
            </h2>

            {/* User Info Section */}
            <section id="profile" className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-5 border-b-2 border-orange-400 pb-3">
                Account Information
              </h3>
              <div className="bg-gray-50 p-8 rounded-xl shadow-md text-gray-700 space-y-3">
                <p>
                  <strong>Name:</strong> John Doe
                </p>
                <p>
                  <strong>Email:</strong> johndoe@example.com
                </p>
              </div>
            </section>

            {/* Order History Section */}
            <section id="orders">
              <h3 className="text-2xl font-semibold text-gray-800 mb-5 border-b-2 border-orange-400 pb-3">
                Order History
              </h3>
              <div className="bg-gray-50 p-8 rounded-xl shadow-md text-gray-700">
                <p>No orders yet.</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
