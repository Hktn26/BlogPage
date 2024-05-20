// eslint-disable-next-line no-unused-vars
import React from 'react'
import Banner from '../components/Banner'
import BlogPage from '../components/BlogPage'

// Ekrem Burasi Boş kalmasın diye böyle yaptım, main siteye yönlendirmek için burayı kullanabilirsin

const Home = () => {
  return (
    <div>
      <Banner/>
      <div className='max-w-7xl mx-auto'>
        <BlogPage/>
      </div>
    </div>
  )
}

export default Home