import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayout";
import MainApp from "./components/layouts/MainAppLayout";
import Dashboard from "./pages/app/Dashboard";
import Users from "./pages/app/Users";
import Categories from "./pages/app/Categories";
import Login from "./pages/auth/Login";
import { useUser } from "./hooks/useUser";
import Home from "./pages/Home";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Blogs from "./pages/Blogs";
import AddBlog from "./pages/app/AddBlog";
// import SignUp from "./pages/auth/Signup";

function App() {
  const { user } = useUser();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/blogs/create"
          element={!user ? <Navigate to="/" /> : <AddBlog />}
        />
        {/* <Route
          path="/auth"
          element={user ? <Navigate to="/" /> : <AuthLayout />}
        >
          <Route path="/auth/" element={<Navigate to="/auth/login" />} />
          <Route path="/auth/login" element={<Login />} />
        </Route>
        <Route
          path="/"
          element={!user ? <Navigate to="/auth/login" /> : <MainApp />}
        >

          <Route path="/users" element={<Users />} />
          <Route path="/categories" element={<Categories />} />
        </Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
