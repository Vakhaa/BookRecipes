import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Messages from '../components/Messages/Messages'
import { addMessage, updateMessageBody } from '../Redux/actions/messagesAction'

class MessagesContainer  extends Component {

    componentDidMount() {
        /*this.props.getProfile(this.props.id);*/
    }

    render() {
        return (
            <Messages
                {...this.props}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages.messages,
        newMessageBody: state.messages.newMessageBody 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateMessageBody: (text) => (dispatch(updateMessageBody(text))),
        addMessage: () => (dispatch(addMessage()))
}}

let WithRouterComponent = withRouter(MessagesContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithRouterComponent)
 