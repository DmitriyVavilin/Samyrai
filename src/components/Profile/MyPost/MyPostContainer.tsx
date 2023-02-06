import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../redux/reducer/profileReducer";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {StatePostType} from "../../redux/store";


// export const MyPostContainer = () => {
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store
//                 const addPost = () => {
//                     state.dispatch(addPostCreator(state.getState().profilePage.newPostText))
//                 }
//
//                 const onChangePost = (text: string) => {
//                     let action = updateNewPostTextCreator(text)
//                     state.dispatch(action)
//
//                 }
//                 return(
//                     <MyPost posts={state.getState().profilePage.posts}
//                             newPostText={state.getState().profilePage.newPostText}
//                             dispatch={state.dispatch} updateNewPostTextCreator={onChangePost}
//                             addPost={addPost}
//                     />
//                 )
//             }
//         }</StoreContext.Consumer>
//
// )
// }

export type MyPostPropsType = MyPostDispatchPropsType & StatePostType

type MyPostDispatchPropsType = {
    updateNewPostTextCreator:(text: string)=>void
    addPost:(newPostText: string)=>void
}

let mapStateToProps = (state:RootStateType ):StatePostType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MyPostDispatchPropsType => {
    return {
        updateNewPostTextCreator: (text: string) => {
           let action =  dispatch(updateNewPostTextCreator(text))
            dispatch(action)
        },
        addPost: (newPostText: string) => {
            dispatch(addPostCreator(newPostText))
        }
    }
}


export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)