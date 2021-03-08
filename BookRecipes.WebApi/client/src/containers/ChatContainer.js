import React, {useEffect} from 'react'  
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import Chat from '../components/Messages/Chat/Chat'
import chathubConnection  from '../DAL/hub/chathub'
import { addMessage, getFriendMessages} from '../Redux/actions/messagesAction'
import { getMessages } from '../utiles/selectors/selectors'

const ChatContainer = (props) => {

    useEffect(() => {
        props.getFriendMessages(props.loginUserId, props.match.params.userId);
    }, [props.loginUserId, props.match.params.userId]);

    useEffect(() => {
        chathubConnection.start();

        chathubConnection.on("sendNewMessage", (authorId, recipientId) => {
            props.getFriendMessages(recipientId, authorId);
        });
    }, []);

    const onSubmit = (formData) => {
        props.addMessage(props.loginUserId, props.match.params.userId, formData.messageBody, chathubConnection.connectionId)
        //props.getFriendMessages(props.loginUserId, props.match.params.userId);
    }

    const chat = () => <Chat messages={props.messages} onSubmit={onSubmit} />

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
        addMessage: (currentUserId, friendsId, message, conectionId) => (dispatch(addMessage(currentUserId, friendsId, message, conectionId))),
        getFriendMessages: (userId, friendId) => (dispatch(getFriendMessages(userId, friendId))),
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(ChatContainer)
 