import React from "react";
import s from "../MyPost/MyPost.module.css";
import {Post} from "./Post/Post";
import {MyPostPropsType} from "./MyPostContainer";


// type MyPostPropsType = {
//     posts: PostType[]
//     newPostText: string
//     dispatch: (action: ActionTypeDispatch)=>void
//     updateNewPostTextCreator:(text:string)=>void
//     addPost:(newPostText: string)=>void
// }

export const MyPost = (props: MyPostPropsType) => {

    const postElements = props.posts.map((el,index) => <Post key={index} messages={el.messages} likesCount={el.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost(props.newPostText)
    }

    const onPostChange = () => {

        let textPost = newPostElement.current?.value
        props.updateNewPostTextCreator(textPost ? textPost: '')
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: textPost ? textPost : ''})
        // props.dispatch(updateNewPostTextCreator(textPost? textPost : ''))

    }

    return (
        <div className={s.postBlock}>
            <h3 className={s.h3}>My post</h3>
            <div className={s.addPost}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}  />
                </div>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}