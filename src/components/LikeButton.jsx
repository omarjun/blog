import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function LikeButton() {
    const [likeCount, setLikeCount] = useState(0);
    const [islike,setIslike] = useState(false);

    const handleLikeClick = () => {
        
        setLikeCount(likeCount + (islike ? -1 : 1));
        setIslike(!islike)
    };

    return (
        <div>
            <button onClick={handleLikeClick}>
                <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <span>{likeCount}</span>
        </div>
    );
}

export default LikeButton;
