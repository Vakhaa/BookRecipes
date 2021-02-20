import {
    ADD_MESSAGE_TO_FRIEND,
    UPDATE_MESSAGE_TO_FRIEND
} from '../actions/actionTypes'

const initialState = {
    messages: [
        {
            id: 0,
            text: "Hej, jak dzisiaj siebie czujesz ?",
            isMe: false,
            isChange: false,
            dataCreated: {
                data: "20.02.2021",
                time: "20:32"
            }
        },
        {
            id: 1,
            text: "Mam do Ciebe pytanie.",
            isMe: false,
            isChange: false,
            dataCreated: {
                data: "20.02.2021",
                time: "20:32"
            }
        },
        {
            id: 2,
            text: "Czeszcz, Jacek. Wszystko dobrze",
            isMe: true,
            isChange: true,
            dataCreated: {
                data: "20.02.2021",
                time: "20:42"
            }
        },
        {
            id: 3,
            text: "Co się stało ?",
            isMe: true,
            isChange: false,
            dataCreated: {
                data: "20.02.2021",
                time: "20:43"
            }
        }
    ],
    newMessageBody : ""
}

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_MESSAGE_TO_FRIEND:
            return {
                ...state,
                newMessageBody : action.text
            }
        case ADD_MESSAGE_TO_FRIEND:
            return {
                ...state,
                messages: [...state.messages, {
                    id: 4,
                    text: state.newMessageBody,
                    isMe: true,
                    isChange: false,
                    dataCreated: {
                        data: "20.02.2021",
                        time: "20:32"
                    }
                }]
            }
        default:
            return state
    }
}
