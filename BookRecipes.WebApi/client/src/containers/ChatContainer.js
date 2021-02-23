import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import Chat from '../components/Messages/Chat/Chat'
import { addMessage, getFriendMessages} from '../Redux/actions/messagesAction'

class ChatContainer extends Component {

    componentDidUpdate() {
        this.props.getFriendMessages(this.props.match.params.userId);
    }

    render() {
        return (
            <Chat {...this.props} />
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages.messages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMessage: (text) => (dispatch(addMessage(text))),
        getFriendMessages: (userId) => (dispatch(getFriendMessages(userId))),
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(ChatContainer)
 