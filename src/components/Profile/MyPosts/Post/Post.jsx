import style from './Post.module.css';
import ava from './../../../../images/ava_item.jpg';

function Post(props) {
   return (
      <div className={style.post}>
         <div className={style.post_wrapper}>
            <div>
               <img src={ava} alt="avatar"></img>
            </div>
            <div className={style}>{props.message}</div>
         </div>
         <span className={style.post__likes}>Like {props.likeCounts}</span>
      </div>
   )
}

export default Post;