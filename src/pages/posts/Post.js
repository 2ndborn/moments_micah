import React from 'react'
import {useCurrentUser} from '../../contexts/CurrentUserContext'
import styles from '../../styles/Post.module.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Avatar from '../../components/Avatar'

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
    postPage,
  } = props

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <div className='d-flex align-items-center justify-content-between'>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className='d-flex align-items-center'>
            <span>{updated_at}</span>
            {is_owner && postPage && '...'}
          </div>
        </div>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className='text-center'>{title}</Card.Title>}
        {content && <Card.Text className='text-center'>{content}</Card.Text>}
      </Card.Body>
    </Card>
  )
}

export default Post