import {createSelector} from 'reselect'


export const getMessages = (state) => {
    return state.messages.messages;
}

export const getProfile = (state) => {
    return state.profiles.profile;
}

export const getProfileIsFetching = (state) => {
    return state.profiles.fetching;
}

export const getFriendsId = (state) => {
    return state.friends.friends;
}

export const getFriendsClipInfo = (state) => { //don't export and rm getFriendsClipInfoSelector
    return state.informator.friends;
}

export const getFriendsClipInfoSuperSelector = createSelector(getFriendsClipInfo,  //rm on getFriendsClipInfo // ([1,2],(1.user,2.isFetching))
    (friends) => {
        return friends.filter(f=>true)
    }
) 

export const getIngredients = (state) => {
    return state.ingredients.ingredients;
}

export const getIngredientsIsFetching = (state) => {
    return state.ingredients.fetching;
}

export const getIsLogin = (state) => {
    return state.login.isLogin;
}

export const getLogin = (state) => {
    return state.login.login;
}


export const getPosts = (state) => {
    return state.posts.posts;
}




