﻿import React, {useEffect} from 'react'  
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import Chat from '../components/Messages/Chat/Chat'
import { addMessage, getFriendMessages} from '../Redux/actions/messagesAction'
import { getMessages } from '../utiles/selectors/selectors'

const ChatContainer =(props)=>{

    useEffect(() => {
        props.getFriendMessages(props.loginUserId, props.match.params.userId);
    }, [props.loginUserId, props.match.params.userId]);

    const chat = () => <Chat {...props} />
    const loading = () => <div>Loading</div>

    return !props.messages ? loading() : chat();

}

const mapStateToProps = state => {
    return {
        messages: getMessages(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMessage: (text) => (dispatch(addMessage(text))),
        getFriendMessages: (userId, friendId) => (dispatch(getFriendMessages(userId, friendId))),
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(ChatContainer)
 