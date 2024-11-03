import { Outlet } from "react-router-dom";
import Header from "../header";

function CommonLayout() {
  return (
    <div className="flex flex-col flex-auto">
      <div className="flex flex-auto">
        <main className="flex flex-col w-full min-w-0 min-h-screen bg-white border-gray-300">
          <Header />
          <div className="flex flex-col justify-between flex-auto h-[calc(100%-64px)]">
            <div className="h-full">
              <div className="flex flex-col flex-auto h-full px-4 py-4 sm:px-6 md:px-6 sm:py-6">
                <div className="container h-full p-0 mx-auto">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CommonLayout;
