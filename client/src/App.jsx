import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AppLoader from "./components/AppLayout/Loaders";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));
let user = true;
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/group" element={<Group />} />
          </Route>

          <Route element={<ProtectedRoute user={!user} redirect="/" />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
