// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout'
import {
  Subtitle,
  Title,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionTitleGroup,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup>
            <Subtitle>Welcome To</Subtitle>
            <Title>Progression at CrowdProperty 🎉</Title>
          </DescriptionTitleGroup>
          <Description>
            <DescriptionText>
              This is where we keep the progression frameworks we use at
              CrowdProperty. Progression frameworks are tools that help people
              understand how to progress in their work.
            </DescriptionText>
            <DescriptionText>
              Big Thanks to <a href="https://monzo.com/">Monzo</a> for open
              sourcing their{' '}
              <a href="https://github.com/monzo/progression-framework">
                Progression Framework
              </a>, on which, ours is heavily based.
            </DescriptionText>
            <DescriptionText>
              This site, along with all our progression frameworks, are open
              source. That means you can contribute to the development of this
              site or our progression frameworks, and use both as inspiration
              for your own projects!
            </DescriptionText>
            <DescriptionText>
              To get involved, go to{' '}
              <a href="https://github.com/crowdproperty/progression-framework">
                <FontAwesomeIcon icon={faGithub} />{' '}
                @crowdproperty/progression-framework.
              </a>
            </DescriptionText>
            <DescriptionText>
              You can find out more about Monzos progresson framework in this{' '}
              <a href="https://monzo.com/blog/2019/01/07/progression">
                blog post.
              </a>
            </DescriptionText>
            <DescriptionText>
              Take a look around and let us know what you think! 🚀
            </DescriptionText>
          </Description>
        </DescriptionView>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            sidebarTitle
            sidebarGroup
          }
        }
      }
    }
  }
`
