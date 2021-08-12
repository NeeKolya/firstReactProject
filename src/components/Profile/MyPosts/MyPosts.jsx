import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from './../../../redux/profile-reducer';

function MyPosts(props) {
   let postsElements =
      props.posts.map(post => <Post message={post.message} likeCounts={post.likesCount} />)

   let newPostElement = React.createRef();

   let addPost = () => {
      props.dispatch(addPostActionCreator());
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch(updateNewPostTextActionCreator(text));
   }

   return (
      <div className={style}>
         My posts
         <div className={style.inputs}>
            <textarea
               className={style.textarea}
               ref={newPostElement}
               value={props.newPostText}
               onChange={onPostChange} />

            <button
               type="button"
               className={style.btn}
               onClick={addPost} > Add post </button>
         </div>
         {postsElements}
      </div>
   )
}

export default MyPosts;