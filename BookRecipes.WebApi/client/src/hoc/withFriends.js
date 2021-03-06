import React from 'react'  
import { connect } from 'react-redux'
import { getLittleInfromationAboutFriend, getUserFriends, clearFriends} from '../Redux/actions/friendsAction'

const mapStateToProps = state => {
    return {
        profile: state.profiles.profile,
        friends: state.friends.friends,
        /*friends: state.informator.friends*/
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserFriends: (userId) => (dispatch(getUserFriends(userId))),
        getLittleInfoAboutFriends: (userId) => (dispatch(getLittleInfromationAboutFriend(userId))),
        clearFriends: () => (dispatch(clearFriends()))
    }
}


export const withFriends = (Component) => {

    class Friends extends React.Component {

        componentDidMount() {
            debugger
            this.props.getUserFriends(this.props.profile.id)        
        }

        componentDidUpdate(prevProps, prevState) {
            if (prevProps.friend !== this.props.friend) {
                this.props.getUserFriends(this.props.profile.id)        
            }
            /*
            if (prevProps.friendsId !== this.props.friendsId) {
                this.props.clearFriends();
                this.props.friendsId.forEach((friend) => this.props.getLittleInfoAboutFriends(friend.userId))
            }*/
        }

        render() {

            return <Component {...this.props} />
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(Friends);
}
 