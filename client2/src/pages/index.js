import React from "react"
import Typist from "react-typist"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Typist className="TypistExample-header">
      <span> > where do you want to : code?</span>
      <Typist.Backspace count={5} delay={200} />
      <span> do UX?</span>
      <Typist.Backspace count={6} delay={200} />
      <span> be a software engineer?</span>
      <Typist.Backspace count={25} delay={200} />
      <span>tech? </span>
    </Typist>
  </Layout>
)

export default IndexPage
