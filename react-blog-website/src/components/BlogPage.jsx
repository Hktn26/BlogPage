// BlogPage.jsx
import { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9; // blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

            // Filter by category
            if(selectedCategory) {
                url += `&category=${selectedCategory}`;
            }

            try {
                const response = await fetch(url);
                if(response.ok) {
                    const data = await response.json();
                    setBlogs(data);
                } else {
                    console.error('Failed to fetch blogs:', response.status);
                }
            } catch(error) {
                console.error('An error occurred while fetching blogs:', error);
            }
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory]);

    // Kategoriye göre filtrelenmiş blogları al
    const filteredBlogs = selectedCategory ? blogs.filter(blog => blog.category === selectedCategory) : blogs;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    };

    return (
        <div className='mx-14' id='okumaya-basla'>
            {/* Category section */}
            <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
            
            {/* BlogCards section */}
            <div className='flex flex-col lg:flex-row gap-20'>
                {/* Blog Cards Component */}
                <BlogCards blogs={filteredBlogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

                {/* Sidebar component */}
                <div>
                    <SideBar />
                </div>
            </div>

            {/* Pagination section */}
            <div>
                <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={filteredBlogs} pageSize={pageSize} selectedCategory={selectedCategory} />
            </div>
        </div>
    );
};

export default BlogPage;
