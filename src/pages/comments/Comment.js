import React from 'react'
import styles from '../../styles/Comment.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Avatar from '../../components/Avatar'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { MoreDropdown } from '../../components/MoreDropdown'

const Comment = (props) => {
    const { profile_id, profile_image, owner, updated_at, content } = props

    const currentUser = useCurrentUser()
    const is_owner = currentUser?.username === owner
    
    return (
        <div>
            <hr />
            <div className="d-flex align-items-center">
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <div className="align-self-center ms-2">
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{updated_at}</span>
                    <p className="mt-1 mb-0">{content}</p>
                </div>
                {is_owner && <MoreDropdown handleEdit={()=>{}} handleDelete={()=>{}} />}
            </div>
        </div>
    )
}

export default Comment