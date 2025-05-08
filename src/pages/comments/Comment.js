import React from 'react'
import styles from '../../styles/Comment.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Avatar from '../../components/Avatar'

const Comment = (props) => {
    const { profile_id, profile_image, owner, updated_at, content } = props
    console.log(updated_at)
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
            </div>
        </div>
    )
}

export default Comment