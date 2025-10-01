import { Navigate, Route, Routes } from "react-router";
import Default from "./layouts/Default";
import LoginSocial from "./pages/auth/LoginSocial";
import BlogList from "./pages/blog/BlogList";
import BlogDetail from "./pages/blog/BlogDetail";
import Profile from "./pages/profile/Profile";
import BlogCreate from "./pages/blog/BlogCreate";
import ProfileSetup from "./pages/auth/ProfileSetup";
// import { useEffect, useState } from "react";
// import supabase from "./utils/supabase";
import PublicOnlyRoute from "./components/routes/PublicOnlyRoute";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";

export default function App() {
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   async function getTodos() {
  //     const { data: todos } = await supabase.from("todos").select();
  //     console.log(todos);
  //     // if (!todos) {
  //     //   console.log("todos 없음");
  //     //   return;
  //     // }
  //     // if (todos!.length > 0) {
  //     //   console.log(todos);
  //     // }
  //   }
  //   getTodos();
  // }, []);

  return (
    <>
      <Routes>
        <Route element={<Default />}>
          <Route index element={<Navigate to="/blog" />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="profile-setup" element={<ProfileSetup />} />

          <Route element={<PublicOnlyRoute />}>
            <Route path="login" element={<LoginSocial />} />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="blog/create" element={<BlogCreate />} />
            <Route path="profile" element={<Profile />} />
            <Route path="edit/:id" element={<BlogCreate />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
