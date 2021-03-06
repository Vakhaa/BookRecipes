import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { addPost, getUserPosts} from '../Redux/actions/postsAction'
import Profile from '../components/Profile/Profile'
import { compose } from 'redux'
import { withAuthUser } from '../hoc/withAuthUser'
import { getFriendsClipInfo, getProfile, getProfileIsFetching} from '../utiles/selectors/selectors'
import { getUserFriends } from '../Redux/actions/friendsAction'
import { getProfile as getProfileActionCreator} from '../Redux/actions/profileAction'

class ProfileContainer extends Component {

    getUser() {
        return this.props.match.params.userId ? this.props.match.params.userId : this.props.loginUserId
    }

    refreshUser() {
        const userId = this.getUser()
        if (userId) {
            this.props.getProfile(userId);
            this.props.getUserPosts(userId);
            this.props.getUserFriends(userId);
        }
    }

    componentDidMount() {
        this.refreshUser()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.loginUserId !== this.props.loginUserId) {
            this.refreshUser()
        } else if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshUser()
        }
    }

    profile = () => {
        return <Profile
            profile={this.props.profile}
            updatePostBody={this.props.updatePostBody} // ?
            updatePostTitle={this.props.updatePostTitle} // ?
            addPost={this.props.addPost}
        /> 
    }

    loading = () => {
        return <div>"loading"</div>
    }

    render() {
        return (
            !this.props.profile ? this.loading() : this.profile()
        )
    }
}

const mapStateToProps = state => {
    return {
        profile: getProfile(state),
        isFetching: getProfileIsFetching(state),
        /*friends: getFriendsId(state)*/
        /*friends: getFriendsClipInfo(state)*/
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPost: (post) => (dispatch(addPost(post))),
        getUserFriends: (userId) => (dispatch(getUserFriends(userId))),
        getProfile: (userId) => (dispatch(getProfileActionCreator(userId))),
        getUserPosts: (userId) => (dispatch(getUserPosts(userId))),
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    /*withFriends,*/
    withAuthUser,
)(ProfileContainer)
 