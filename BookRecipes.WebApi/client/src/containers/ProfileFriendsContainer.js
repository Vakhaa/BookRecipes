import React from 'react'  
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getLittleInfromationAboutFriend} from '../Redux/actions/friendsAction'

import { withAuthUser } from '../hoc/withAuthUser'
import { getFriendsClipInfo, getFriendsId} from '../utiles/selectors/selectors'
import Friends from '../components/Profile/Friends/Friends'

const ProfileFriendsContainer = (props) =>{

    const friends = () => {
        return <Friends userId={props.userId} friends={props.friends} /> 
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
    connect(mapStateToProps, mapDispatchToProps),
    withAuthUser,
)(ProfileFriendsContainer)
 