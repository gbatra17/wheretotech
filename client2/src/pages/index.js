import React from "react"
import { Link } from "gatsby"
import Typist from "react-typist"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "react-typist/dist/Typist.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Typist
      className="TypistExample-header"
      avgTypingDelay={40}
      startDelay={1000}
    >
      where do you want to tech?
    </Typist>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
