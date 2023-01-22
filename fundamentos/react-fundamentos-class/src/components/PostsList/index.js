import React, { Component } from 'react'

import Post from './Post'
import posts from './posts'

import { Container } from './styles'

export default class PostsList extends Component {
  render() {
    return (
      <Container>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </Container>
    )
  }
}
