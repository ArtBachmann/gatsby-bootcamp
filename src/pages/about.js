import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const AboutPage = () => {
  return (
    <Layout>
      <h3>AboutPage</h3>
      <Link to='/contact/'>Contact</Link>
    </Layout>
  )
}

export default AboutPage
