import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work-components'
import { TextSection, BluredContainer } from '../../components/container-styles'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="BlogAPI">

    <BluredContainer>
    <Container maxW='container.sm'>
      <Title href='/works' link='Works'>
        BlogAPI <Badge>2021</Badge>
      </Title>
      <TextSection>
        I made a BlogAPI in order to learn back-end. I also wanted to learn Redux and React Router, so I used them in the front-end. I also used Cypress and Jest for testing.
      </TextSection>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/ValenCassa/blogAPI" target='_blank'>
          https://github.com/ValenCassa/blogAPI <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>All platforms</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Express, NodeJs, MongoDB. Cypress and Jest for testing.</span>
        </ListItem>
      </List>

      <WorkImage src="/img/bloglistapi.png" alt="BlogAPI" />
    </Container>
    </BluredContainer>
  </Layout>
)

export default Work