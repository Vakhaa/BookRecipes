import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addPost, updatePostBody, updatePostTitle } from '../Redux/actions/profileAction'
import Profile from '../components/Profile/Profile'

class ProfileContainer  extends Component {

    render() {
        return (
            <Profile
                id={this.props.id}
                name={this.props.name}
                photo={this.props.photo}
                status={this.props.status}
                description={this.props.description}
                socailNetworkings={this.props.socailNetworkings}
                posts={this.props.posts}
                updatePostBody={this.props.updatePostBody}
                updatePostTitle={this.props.updatePostTitle}
                addPost={this.props.addPost}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        id: state.profile.id,
        photo: state.profile.photo,
        name: state.profile.name,
        status: state.profile.status,
        description: state.profile.description,
        socailNetworkings: state.profile.socailNetworkings,
        posts: state.profile.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updatePostBody: (text) => (dispatch(updatePostBody(text))),
        updatePostTitle: (text) => (dispatch(updatePostTitle(text))),
        addPost: () => (dispatch(addPost()))
}}

let WithRouterComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithRouterComponent)
 