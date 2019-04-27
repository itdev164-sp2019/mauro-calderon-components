import React from 'react'
import { Link } from 'gatsby'
import {ShareButtonList} from '../components/SocialShareButton'
import Layout from '../layouts/layout'
import Image from "../gatsby-components/image"
import SEO from "../gatsby-components/seo"
import { Button, IconButton, Section } from '../components/Element'
import { Search } from 'styled-icons/feather'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ShareButtonList
          addThisPubId="ra-5cc251c707ca04de"
          googleAnalyticsId=""
          contentTitle="Fake title"
          contentImage="http://placekitten.com/g/300/700"
          contentDescription="Here is an article about science things, and maybe kittens."
          />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Section flex justifyContent="space-evenly" m={2}>
      <Link to="/page-2/">Go to page 2</Link>
      <Button variant="primary">My Custom Button!</Button>
      <IconButton icon={<Search />} />
    </Section>
  </Layout>
)

export default IndexPage
