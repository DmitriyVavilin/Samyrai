import React from "react";
import s from "../MyPost/MyPost.module.css";
import {Post} from "./Post/Post";
import {ActionsTypes, addPostAC, onChangePostAC, PostType} from "../../redux/state";


type MyPostPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes, ) => void
}


export const MyPost = (props: MyPostPropsType) => {

    const postElements = props.posts.map((el, index) => <Post key={index} messages={el.messages}
                                                              likesCount={el.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        // props.dispatch({type: 'ADD-POST', newPostText: newPostElement.current?.value!})
        props.dispatch(addPostAC(props.newPostText))
    }

    const onChangePost = () => {
        let textPost = newPostElement.current?.value
        // props.dispatch({type: 'UPDATE-POST-TEXT', newText: textPost ? textPost : ''})
        props.dispatch(onChangePostAC(textPost!))
    }
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div className={s.addPost}>
                <div>
                    <textarea onChange={onChangePost} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}