import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title 
              date
            }          
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(data);


  return (
    <Layout>
      <h3>Blog Page</h3>
      <ol>
        {data.allMarkdownRemark.edges.map((edge, i) => {
          return (
            <li key={i}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h4>{edge.node.frontmatter.title}</h4>
              </Link>
              <p>{edge.node.frontmatter.date}</p>
              {/* <p>{edge.node.html}</p>
                <p>{edge.node.excerpt}</p> */}
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
