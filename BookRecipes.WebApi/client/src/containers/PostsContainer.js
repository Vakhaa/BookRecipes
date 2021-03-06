import React, {Component, useEffect, useState} from 'react'  
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getPosts } from '../utiles/selectors/selectors'
import Posts from '../components/Profile/PostsWall/Posts/Posts'

const PostsContainer = React.memo((props) => {

    //let [posts, setPosts] = useState(props.posts)
/*
    useEffect(() => {
        debugger
        () => {
            props.getUserPosts(props.userId);
        }
        *//*  if (posts != props.posts) {
              setPosts(props.posts);
          }*//*
    }, [props.posts]);*/

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


/*class PostsContainer extends Component {
    //Ddoss ataka
    refreshPosts() {
        this.props.getUserPosts(this.props.userId);
    }

    componentDidMount() {
        this.refreshPosts();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.posts !== this.props.posts) { //hule tut vsegda true ??
            debugger
            this.refreshPosts();
        }
    }

    component = () => {
        return <Posts posts={this.props.posts} />
    }

    loading = () => {
        return <div>"loading"</div>
    }

    render() {
        return (
            !this.props.userId ? this.loading() : this.component()
        )
    }
}
*/

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
 