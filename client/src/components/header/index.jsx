import { TaskManagerContext } from "@/context";
import { callLogoutApi } from "@/services";
import { LogOut } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const { setUser } = useContext(TaskManagerContext);
  const navigate = useNavigate();
  async function handleLogout() {
    const response = await callLogoutApi();

    if (response?.success) {
      setUser(null);
      navigate("/auth");
    }
  }
  return (
    <header className="border-b border-gray-200">
      <div className="container h-16 mx-auto">
        <div className="flex items-center h-[64px] justify-between w-full">
          <div className="w-auto">
            <h1>Task Manager</h1>
          </div>
          <div className="flex gap-4">
            <Link className="text-xl font-bold text-black" to={"/tasks/list"}>
              Tasks
            </Link>
            <Link
              className="text-xl font-bold text-black"
              to={"/tasks/scrum-board"}
            >
              Scrum Board
            </Link>
          </div>
          <div>
            <LogOut
              onClick={handleLogout}
              color="#000"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
