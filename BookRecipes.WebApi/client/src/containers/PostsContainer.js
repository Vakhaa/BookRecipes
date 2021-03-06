import React, { useEffect, useState } from 'react'  
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addPost, getUserPosts} from '../Redux/actions/postsAction'
import { getPosts } from '../utiles/selectors/selectors'
import PostsWall from '../components/Profile/PostsWall/PostsWall'

const PostsContainer = React.memo((props) => {

    let [posts, setPosts] = useState(props.posts);

    useEffect(() => {
        setPosts(props.posts);
    }, [props.posts]);

    const onSubmit = (formData) => {
        /*currentUserId, title, body, authorId*/
        props.addPost(
            props.userId,
            formData.postTitle,
            formData.postBody,
            props.loginUserId
        )
        props.getUserPosts(props.userId);
    }

    const component = () => <PostsWall posts={posts} onSubmit={onSubmit} />

    const loading = () => <div>"loading"</div>

    return (
        !props.userId ? loading() : component()
    )
});

const mapStateToProps = state => {
    return {
        posts: getPosts(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserPosts: (userId) => (dispatch(getUserPosts(userId))),
        addPost: (currentUserId, title, body, authorId) => (dispatch(addPost(currentUserId, title, body, authorId))),
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(PostsContainer)
 