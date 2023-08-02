import {addPostAC, deletePostAC, profileReducer, StatePostType} from "components/redux/reducer/profileReducer";

let startState: StatePostType
beforeEach(()=> {
    startState = {
        //test data
        posts: [
            {id: 1, messages: 'Hi, how are you?', likesCount: 100},
            {id: 2, messages: 'It`s my first post', likesCount: 150},
        ],
        profile: {
            "aboutMe": "я круто чувак 1001%",
            "contacts": {
                "facebook": "facebook.com",
                "website": null,
                "vk": "vk.com/dimych",
                "twitter": "https://twitter.com/@sdf",
                "instagram": "instagra.com/sds",
                "youtube": null,
                "github": "github.com",
                "mainLink": null
            },
            "lookingForAJob": false,
            "lookingForAJobDescription": "не ищу, а дурачусь",
            "fullName": "samurai dimych",
            "userId": 2,
            "photos": {
                "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
            }
        },
        status: ''
    }
})

test('length of posts should be incremented', () => {
    let action = addPostAC('')

    const state = startState
    //action
    let newState = profileReducer(state, action)

    //expectation
    expect(newState.posts.length).toBe(3)
})

test('message of new post should be correct', () => {
    let action = addPostAC('it-kamasutra')
    const state = startState

    //action
    let newState = profileReducer(state, action)

    //expectation
    expect(newState.posts[2].messages).toBe('it-kamasutra')
})

test('after deleting length of messages should be decrement',() => {
    const state = startState

    let action = deletePostAC(1)

    //action
    let newState = profileReducer(state, action)

    //expectation
    expect(newState.posts.length).toBe(1)
})