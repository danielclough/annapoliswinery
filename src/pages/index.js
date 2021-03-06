import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Wine from "../components/sections/wine"
import Calendar from "../components/sections/calendar"
import About from "../components/sections/about"
import Weddings from "../components/sections/weddings"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Wine />
    <About />
    <Weddings />
    <Calendar />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
