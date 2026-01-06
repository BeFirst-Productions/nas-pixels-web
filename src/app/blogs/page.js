import BlogPage from '@/components/BlogPage/Blogs'
import ShowcaseSection from '@/components/ProductsPage/Products'
import Herosection from '@/components/TitleBanner/TitleBanner'
import ContactSection from '@/components/ui/contact/ContactSection'
import React from 'react'

const page = () => {
    return (
        <div>
            <Herosection
                title={"BLOGS"} />
         <BlogPage/>

        </div>
    )
}

export default page