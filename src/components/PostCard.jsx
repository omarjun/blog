import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'


import LikeButton from './LikeButton';



function PostCard({$id, titles,image}) {

  return (
    <>
        <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(image)} alt={titles} 
                className='rounded-xl'/>
            </div>
            <h2
            className='text-xl font-bold'
            >{titles}</h2>
        </div>
    </Link>
    <div>< LikeButton /></div>
    </>
  )
}

export default PostCard