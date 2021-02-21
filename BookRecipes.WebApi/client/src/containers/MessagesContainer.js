import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Messages from '../components/Messages/Messages'
import { addMessage, updateMessageBody } from '../Redux/actions/messagesAction'

const friendsMock = [
    {
        id: 0,
        name: "Kun Lao",
        newMessages: 5,
        photo: "https://source.unsplash.com/random"
    },
    {
        id: 1,
        name: "Subzero",
        newMessages: 0,
        photo: "https://source.unsplash.com/random"
    },
    {
        id: 2,
        name: "Mortal Kombar Team",
        newMessages: 127,
        photo: "https://source.unsplash.com/random"
    },
    {
        id: 3,
        name: "Scorpion",
        newMessages: 1,
        photo: "https://source.unsplash.com/random"
    },
    {
        id: 4,
        name: "Raiden",
        newMessages: 0,
        photo: "https://source.unsplash.com/random"
    }
]


class MessagesContainer  extends Component {

    componentDidMount() {
        /*this.props.getProfile(this.props.id);*/
    }

    render() {
        return (
            <Messages {...this.props} />
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: friendsMock,
        messages: state.messages.messages,
        newMessageBody: state.messages.newMessageBody,
        newSearchBody: ""
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateMessageBody: (text) => (dispatch(updateMessageBody(text))),
        addMessage: () => (dispatch(addMessage()))
}}

let WithRouterComponent = withRouter(MessagesContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithRouterComponent)
 