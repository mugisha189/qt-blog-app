import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "./hooks/useUser";
import Home from "./pages/Home";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Blogs from "./pages/Blogs";
import ABlog from "./pages/ABlog";
import Users from "./pages/app/Users";
import AddEditBlog from "./pages/app/AddEditBlog";
function App() {
  const { user } = useUser();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/users"
            element={
              !user || user.role !== "Admin" ? <Navigate to="/" /> : <Users />
            }
          />
          <Route path="/blogs/:id" element={<ABlog />} />
          <Route
            path="/blogs/create"
            element={!user ? <Navigate to="/" /> : <AddEditBlog />}
          />
          <Route
            path="/blogs/edit/:id"
            element={!user ? <Navigate to="/" /> : <AddEditBlog />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
