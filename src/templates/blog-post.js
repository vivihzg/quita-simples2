import * as React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import * as styles from "../components/index.module.css"
import { SEO } from "../components/seo"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <Header />
      <main>
        <article className={styles.blogPost}>
          <Link to="/blog/" className={styles.blogBackLink}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Voltar para o blog</span>
          </Link>
          <h1>{post.frontmatter.title}</h1>
          <span className={styles.blogDate}>{post.frontmatter.date}</span>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </main>
      <Footer />
    </>
  )
}

export default BlogPostTemplate

export const Head = ({ data }) => (
  <SEO
    title={`${data.markdownRemark.frontmatter.title} – Quita Simples`}
    description={data.markdownRemark.excerpt}
    pathname={`/blog${data.markdownRemark.fields.slug}`}
  />
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 155)
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
      fields {
        slug
      }
    }
  }
`
