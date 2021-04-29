import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

const PostList = ({ fetchPostsAndUsers, posts }) => {
  useEffect(() => fetchPostsAndUsers(), [fetchPostsAndUsers]);

  const renderedLists = posts.map((post) => (
    <div className="item" key={post.id}>
      <i className="large middle aligned icon user" />
      <div className="content">
        <div className="description">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>
      <UserHeader userId={post.userId} />
    </div>
  ));

  console.log(posts);

  return (
    <div className="ui container">
      <div className="ui relaxed divided list">{renderedLists}</div>
    </div>
  );
};

// class PostList extends React.Component {
//   componentDidMount() {
//     this.props.fetchPosts();
//   }
//   render() {
//     console.log(this.props.posts);
//     return <div>Post List</div>;
//   }
// }

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
