import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getLittleInfromationAboutFriend} from '../Redux/actions/friendsAction'

import Friends from '../components/Friends/Friends'
import { withAuthUser } from '../hoc/withAuthUser'
import { getFriendsClipInfo, getFriendsId} from '../utiles/selectors/selectors'

const FriendsContainer= (props) =>{

    const friends = () => {
        return <Friends friends={props.friends} /> 
    }

    const loading = () => {
        return <div>"loading"</div>
    }

    return (
        !props.userId ? loading() : friends()
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
        getLittleInfoAboutFriends: (userId) => (dispatch(getLittleInfromationAboutFriend(userId)))
}}

export default compose(
    withAuthUser,
    connect(mapStateToProps, mapDispatchToProps),
)(FriendsContainer)
 