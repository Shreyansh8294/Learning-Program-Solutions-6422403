import React, { Component } from 'react';
import Post from './Post';
import postData from './posts.json'; 

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  componentDidMount() {
    try {
      // Load posts from imported JSON file
      this.setState({ posts: postData });
    } catch (error) {
      console.error('Error loading posts:', error);
      this.setState({ hasError: true });
    }
  }

  componentDidCatch(error, info) {
    alert('An error occurred while rendering the component.');
    console.error(error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Error loading blog posts.</h2>;
    }

    return (
      <div style={{ padding: '20px' }}>
        <h2>Blog Posts</h2>
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
