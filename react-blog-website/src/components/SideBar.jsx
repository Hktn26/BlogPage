// SideBar.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Link bileşenini doğru şekilde içe aktardığınızdan emin olun
import { FaArrowRight } from "react-icons/fa6";

const SideBar = () => {
  const [populerBlogs, setPopulerBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopulerBlogs(data.slice(0, 15)));
  }, []);

  return (
    <div>
      {/* popular blog */}
      <div>
        <h3 className="text-2xl font-semibold px-16">Popüler Yazılarımız</h3>
        <div>
          {populerBlogs.slice(0, 5).map((blog) => (
            <div key={blog.id} className="my-5 border-b-2 border-spacing-2">
              <h4 className="font-medium mb-2">{blog.title}</h4>
              {/* Link bileşeninin 'to' prop'unu doğru sayfa yoluna ayarlayın */}
              <Link
                to={`/blogs/${blog.id}`} // Her blogun sayfa yolunu dinamik olarak ayarlayın
                key={blog.id}
                className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
              >
                Daha Fazlası
                <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
