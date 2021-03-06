import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, deletePost } from "../actions/index";
import '../style.css';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    onDeleteClick(id) {
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        })
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                    <button
                        className="btn btn-danger pull-xs-right delBtnIndex"
                        onClick={this.onDeleteClick.bind(this, post.id)}
                    >
                        Delete
                    </button>
                </li>
            );
        });
    }

    render() {
        return(
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary addPostBtn" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
            );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(PostsIndex);