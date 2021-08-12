import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

function Profile(props) {
   return (
      <div className={style}>
         <ProfileInfo />
         <MyPosts
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch} />
      </div>
   )
}

export default Profile;