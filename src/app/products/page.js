import Footer from '@/components/common/Footer/Footer'
import ShowcaseSection from '@/components/ProductsPage/Products'
import Herosection from '@/components/TitleBanner/TitleBanner'
import ContactSection from '@/components/ui/contact/ContactSection'
import React from 'react'

const page = () => {
    return (
        <div>
            <Herosection
                title={"PRODUCTS"} />
            <ShowcaseSection />
            <ContactSection />
            <Footer />

        </div>
    )
}

export default page