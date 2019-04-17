import React from "react"
import PropTypes from 'prop-types';
import Layout from "../components/layout"
import Gallery from "../components/gallery"
import Stats from "../components/stats"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import styles from "../styles/index.module.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Gallery items={data.homeJson.gallery} />

    <Stats items={data.gitHub.user.commitContributionsByRepository} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    github {
    user(login: "rserur") {
      contributionsCollection(from: $startDate to: $endDate) {
        totalCommitContributions
        commitContributionsByRepository {
          repository {
            name
            createdAt
            description
            isPrivate
            url
            defaultBranchRef {
              target {
                ... on GitHub_Commit {
                  history(since: $startDate) {
                    totalCount
                    edges {
                      node {
                        ... on GitHub_Commit {
                          message
                          committedDate
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        vertical
        image {
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
