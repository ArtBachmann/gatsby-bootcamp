import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/Layout'



const IndexPage = () => {
  return (
    <Layout>
      <h2>Hello, I'm Art and I'm using Layout now.</h2>
      <h3>I am learning Gatsby now.</h3>
      <h4>Need another developer??? <Link to='/contact/'>Contact Me!!!</Link></h4>
    </Layout>
  )
}

export default IndexPage
