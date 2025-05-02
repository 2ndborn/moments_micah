import React from 'react'
import {useCurrentUser} from '../../contexts/CurrentUserContext'
import styles from '../../styles/Post.module.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
  } = props

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <div className='d-flex align-items-center justify-content-between'>
          <Link to={`/profiles/${profile_id}`}>
            
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Post