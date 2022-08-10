import React from 'react';
import Myposts from './Myposts/Mypost';
import s from './Profile.module.css'
 
const Profile = () => {
    return <div className={s.content}>
    <div>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7AouXf8CrWUJlDaqpzKYvyMLACjlRmYU1Q&usqp=CAU'></img>
    </div>
      <div>
            ava + discription
          </div>
    <Myposts />
       </div>      ;
}

export default Profile;