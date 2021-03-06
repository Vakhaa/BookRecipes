import {
    ADD_MESSAGE_TO_FRIEND_REQUEST,
    ADD_MESSAGE_TO_FRIEND_SUCCESS,
    ADD_MESSAGE_TO_FRIEND_ERROR,
    GET_FRIEND_MESSAGES_REQUEST,
    GET_FRIEND_MESSAGES_SUCCESS,
    GET_FRIEND_MESSAGES_ERROR
} from '../actions/actionTypes'

const initialState = {
    id: 0,
    userId: null,
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
    ]
}

let messagesMock = [
    {
        id: 0,
        userId: 0,
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
    },
    {
        id: 1,
        userId: 1,
        messages: [
            {
                id: 0,
                text: "Cześć, co slychać?",
                isMe: false,
                isChange: false,
                dataCreated: {
                    data: "20.02.2021",
                    time: "20:32"
                }
            },
            {
                id: 1,
                text: "I'm fine, you ?",
                isMe: true,
                isChange: false,
                dataCreated: {
                    data: "20.02.2021",
                    time: "20:32"
                }
            }
        ],
    },
    {
        id: 2,
        userId: 2,
        messages: [
            {
                id: 0,
                text: "You know, I'm God!",
                isMe: false,
                isChange: false,
                dataCreated: {
                    data: "20.02.2021",
                    time: "20:32"
                }
            },
            {
                id: 1,
                text: "Okay ...dude",
                isMe: true,
                isChange: false,
                dataCreated: {
                    data: "20.02.2021",
                    time: "20:32"
                }
            },
            {
                id: 2,
                text: "No, I'm God!",
                isMe: false,
                isChange: false,
                dataCreated: {
                    data: "20.02.2021",
                    time: "20:32"
                }
            }
        ],
    },
    {
        id: 3,
        userId: 3,
        messages: [
            {
                id: 0,
                text: "Where is Subzero ?!",
                isMe: false,
                isChange: false,
                dataCreated: {
                    data: "20.02.2021",
                    time: "20:32"
                }
            }
        ],
    }
]

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE_TO_FRIEND_REQUEST:
            return { ...state }
        case ADD_MESSAGE_TO_FRIEND_SUCCESS:
            return { ...state }
        case ADD_MESSAGE_TO_FRIEND_ERROR:
            return { ...state, error: action.error }
        case GET_FRIEND_MESSAGES_REQUEST:
            return {
                ...state,
            }
        case GET_FRIEND_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: action.messages
            }
        case GET_FRIEND_MESSAGES_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}
