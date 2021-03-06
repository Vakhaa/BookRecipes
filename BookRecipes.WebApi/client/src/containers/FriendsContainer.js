import React, {Component, useEffect} from 'react'  
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getLittleInfromationAboutFriend, getUserFriends} from '../Redux/actions/friendsAction'

import Friends from '../components/Friends/Friends'
import { withAuthUser } from '../hoc/withAuthUser'
import { getFriendsClipInfo, getFriendsId} from '../utiles/selectors/selectors'
import { withRouter } from 'react-router-dom'

const FriendsContainer = (props) => {

    const getUser=()=>{
        return props.match.params.profileId ? props.match.params.profileId : props.loginUserId
    }

    useEffect(() => {
        debugger
        const userId = getUser();
        props.getUserFriends(userId);
    }, []);

    const friends = () => {
        return <Friends friends={props.friends} /> 
    }

    const loading = () => {
        return <div>"loading"</div>
    }

    return (
        !props.friends ? loading() : friends()
    )
}

const mapStateToProps = state => {
    return {
        friends: getFriendsId(state),
        /*friends: getFriendsClipInfo(state)*/
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserFriends: (userId) => (dispatch(getUserFriends(userId))),
        getLittleInfoAboutFriends: (userId) => (dispatch(getLittleInfromationAboutFriend(userId)))
}}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    /*withRouter,*/
    withAuthUser,
)(FriendsContainer)
 