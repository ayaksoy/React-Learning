import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import Service from "./pages/Service";
import ServiceDetail from "./pages/ServiceDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from './features/serviceSlice';
import { fetchBlogs } from './features/blogSlice';
import { fetchGalleries } from './features/gallerySlice';
import { fetchProjects } from './features/projectSlice';

function App() {
  const dispatch = useDispatch();

  const serviceStatus = useSelector((state) => state.service.status);
  const blogStatus = useSelector((state) => state.blog.status);
  const galleryStatus = useSelector((state) => state.gallery.status);
  const projectStatus = useSelector((state) => state.project.status);

  useEffect(() => {
    if (serviceStatus === 'idle') {
      dispatch(fetchServices());
    }
    if (blogStatus === 'idle') {
      dispatch(fetchBlogs());
    }
    if (galleryStatus === 'idle') {
      dispatch(fetchGalleries());
    }
    if (projectStatus === 'idle') {
      dispatch(fetchProjects());
    }
  }, [serviceStatus, blogStatus, galleryStatus, projectStatus, dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
