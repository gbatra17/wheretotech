import React from "react"
import Typist from "react-typist"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Signature from "../components/signature"
import { Input } from "./_index.elements"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="command_line">
      <Signature directory="Documents" />
      <Typist
        className="typist_command"
        cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
      >
        cd jobs
      </Typist>
    </div>
    <div className="command_line_2">
      <Signature directory="jobs" />
      <Typist
        className="typist_command"
        startDelay="1500"
        avgTypingDelay={100}
        cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
      >
        <span> where do you want to code?</span>
        <Typist.Backspace count={5} delay={200} />
        <span> do UX?</span>
        <Typist.Backspace count={6} delay={200} />
        <span> be a software engineer?</span>
        <Typist.Backspace count={25} delay={200} />
        <span>tech? </span>
      </Typist>
    </div>
    <span className="TypistExample-header">
      <Input />
    </span>
  </Layout>
)

export default IndexPage
