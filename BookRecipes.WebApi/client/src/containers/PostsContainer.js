import React, {Component, useEffect, useState} from 'react'  
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getPosts } from '../utiles/selectors/selectors'
import Posts from '../components/Profile/PostsWall/Posts/Posts'

const PostsContainer = React.memo((props) => {

    const component = () => {
        return <Posts posts={props.posts} />
    }

    const loading = () => {
        return <div>"loading"</div>
    }

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
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(PostsContainer)
 