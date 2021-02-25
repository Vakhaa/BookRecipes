import { addPost, receiveUserPosts, requestUserPosts } from "../actions/postsAction";
import postsReducer from "./postsReducer";

const state = {
    id: 0,
    userId: null,
    posts: [
        {
            id: 0,
            title: "Tonight I'm cooked some fine cake!",
            main: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            photo: "https://source.unsplash.com/random"
        },
        {
            id: 1,
            title: "Some photo for you! Duddde",
            main: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            photo: "https://source.unsplash.com/random"
        }
    ],
}

it('new post should be added', () => {
    //Arrange
    const expectedPost = {
        postTitle : "test",
        postBody : "It's my first test"
    }

    let action = addPost(expectedPost)

    //Act
    let newState = postsReducer(state, action)

    
    //Assert
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].title).toBe(expectedPost.postTitle);
    expect(newState.posts[2].main).toBe(expectedPost.postBody);
});

it('userId should be added', () => {  //GET_USER_POSTS_REQUEST
    //Arrange
    const expectedId = 0;
    let action = requestUserPosts(expectedId)

    //Act
    let newState = postsReducer(state, action)


    //Assert
    expect(newState.userId).toBe(expectedId);
});

it('user posts should be pull', () => {  // GET_USER_POSTS_SUCCESS
    //Arrange
    const expectedId = 0;
    const initState = { ...state, userId: expectedId }

    let action = receiveUserPosts()

    //Act
    let newState = postsReducer(initState, action)

    
    //Assert
    expect(newState.userId).toBe(expectedId);

    expect(newState.posts[0].id).toBe(postsUsers[0].posts[0].id);
    expect(newState.posts[0].main).toBe(postsUsers[0].posts[0].main);
    expect(newState.posts[0].title).toBe(postsUsers[0].posts[0].title);
    expect(newState.posts[0].photo).toBe(postsUsers[0].posts[0].photo);
});


let postsUsers = [
    {
        id: 0,
        userId: 0,
        posts: [
            {
                id: 0,
                title: "Tonight I'm cooked some fine cake!",
                main: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
                photo: "https://source.unsplash.com/random"
            },
            {
                id: 1,
                title: "Some photo for you! Duddde",
                main: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
                photo: "https://source.unsplash.com/random"
            }
        ],
    },
    {
        id: 1,
        userId: 1,
        posts: [
            {
                id: 0,
                title: "SnowFlakes!",
                main: "It's so beautiful",
                photo: "https://source.unsplash.com/random"
            },
            {
                id: 1,
                title: "I win Scorpion",
                main: "Just look to this punch",
                photo: "https://source.unsplash.com/random"
            }
        ],
    },
    {
        id: 2,
        userId: 2,
        posts: [
            {
                id: 0,
                title: "God!",
                main: "Thunder god",
                photo: "https://source.unsplash.com/random"
            },
            {
                id: 1,
                title: "It's me",
                main: "Just look to the God",
                photo: "https://source.unsplash.com/random"
            },
            {
                id: 1,
                title: "Alarm",
                main: "We need to protect the Earth!",
                photo: "https://source.unsplash.com/random"
            }
        ],
    },
    {
        id: 3,
        userId: 3,
        posts: [
            {
                id: 0,
                title: "Where is Subzero ?",
                main: "I need him now!",
                photo: "https://source.unsplash.com/random"
            }
        ],
    }
]