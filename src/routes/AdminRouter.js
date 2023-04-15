import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks";
import { AdminLayout } from "../layouts";
import { Auth, Blog, Menu, Perfiles, Users, Zona } from "../pages/admin";

export function AdminRouter() {
  const { user } = useAuth();

  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>
      {!user ? (
        <Route path="/admin/*" element={loadLayout(AdminLayout, Auth)} />
      ) : (
        <>
          {/* {["/admin", "/admin/blog"].map((path) => {
                <Route 
                  key= {path}
                  path= {path} 
                  element={loadLayout(AdminLayout, Users)} /> 
              })} */}

          <Route path="/admin" element={loadLayout(AdminLayout, Blog)} />
          <Route path="/admin/blog" element={loadLayout(AdminLayout, Blog)} />
          <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />
          <Route path="/admin/menu" element={loadLayout(AdminLayout, Menu)} />
          <Route path="/admin/zona" element={loadLayout(AdminLayout, Zona)} />
          <Route
            path="/admin/perfiles"
            element={loadLayout(AdminLayout, Perfiles)}
          />
        </>
      )}
    </Routes>
  );
}
