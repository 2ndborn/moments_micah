import React from 'react'
import styles from '../../styles/Profile.module.css'
import btnStyles from '../../styles/Button.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';
import { useSetProfileData } from '../../contexts/ProfileDataContext';

const Profile = (props) => {
    const {profile, mobile, imageSize=55} = props;
    const {id, following_id, image, owner} = profile;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const {handleFollow, handleUnfollow} = useSetProfileData();

  return (
    <div className='my-3 d-flex align-items-center'>
        <div>
            <Link className='align-self-center' to={`/profiles/${id}`}>
                <Avatar src={image} height={imageSize} />
            </Link>
        </div>
        <div className={`${styles.WordBreak} mx-2`}>
            <strong>{owner}</strong>
        </div>
        <div className={`text-right ${!mobile && 'ms-auto'}`}>
              {!mobile && currentUser && !is_owner && (
                  following_id ? (
                      <button
                          className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                          onClick={() => handleUnfollow(profile)}
                      >
                          Unfollow
                      </button>
                  ) : (
                      <button className={`${btnStyles.Button} ${btnStyles.Black} $`}
                          onClick={() => handleFollow(profile)}
                      >
                          Follow
                      </button>
                  )
              )}
        </div>
    </div>
  )
}

export default Profile