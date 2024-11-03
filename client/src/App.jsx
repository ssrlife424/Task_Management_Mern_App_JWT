import { Route, Routes } from "react-router-dom";
import "./App.css";
import CommonLayout from "./components/common-layout";
import AuthPage from "./pages/auth";
import ScrumBoardPage from "./pages/scrum-board";
import TaskPage from "./pages/tasks";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/tasks" element={<CommonLayout />}>
        <Route path="list" element={<TaskPage />} />
        <Route path="scrum-board" element={<ScrumBoardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
