import profileImage from './../../../images/bg-sea.jpg';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
   return (
      <div>
         <img src={profileImage} alt="sea" className={style.introImg} />
         <div>ava + desc</div>
      </div>
   )
}

export default ProfileInfo;