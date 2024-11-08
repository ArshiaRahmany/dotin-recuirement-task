import React, { Suspense, lazy, ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page404 from "components/common/page404/Page404";
import Loading from "components/common/loading/Loading";
import LoginPage from "pages/auth/Login";
import { getLocalStorage } from "utils/localStorage";

const DataTable = lazy(() => import("pages/dataTable/DataTable"));

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = getLocalStorage("token");
  const isAuthenticated = !!token;
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/data-table"
            element={
              <Suspense fallback={<Loading />}>
                <ProtectedRoute>
                  <DataTable />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route path="/*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Routers;
