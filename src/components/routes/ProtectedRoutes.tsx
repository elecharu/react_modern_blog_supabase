import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthStore } from "../../stores/authStore";

// 로그인 한 사용자만 접근 가능
export default function ProtectedRoutes() {
  const location = useLocation();

  const isLoading = useAuthStore((state) => state.isLoading);
  const claims = useAuthStore((state) => state.claims);

  if (isLoading) return null; // 로딩중일 떄 아무것도 표시 X

  if (!claims) {
    const to = location.state?.from.pathname ?? "/login";
    return <Navigate to={to} replace state={{ from: location }} />;
  }

  return <Outlet />;
}
