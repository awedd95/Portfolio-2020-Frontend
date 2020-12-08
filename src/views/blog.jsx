import React, {Suspense} from 'react'
import gql from 'graphql-tag';
import useSuspendableQuery from '../lib/useSuspendableQuery'
import { Layout } from 'antd'
import PostPreview from '../components/postPreview'
const {Content} = Layout;
const GET_POSTS = gql`
  query Query {
    posts {
     title
     body
    }
  }
`

const Blog = () => {
    const {data} = useSuspendableQuery(GET_POSTS) 
  console.log(data)
  const MappedPosts = () =>{
      return data.posts.map(post => <PostPreview title={post.title} description={post.body}/>)}
  return (
      <Layout style={{ padding: '0 24px 24px' }}>
      <Content>
          <Suspense fallback="Loading Users...">
            <MappedPosts/>
          </Suspense>
      </Content>
      </Layout>
  )
}


export default () => (
    <Blog/>
)
