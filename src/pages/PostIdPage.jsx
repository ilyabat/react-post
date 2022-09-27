import React from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFatching'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = React.useState({})
    const [comments, setComments] = React.useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    React.useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)

    }, [])
    return (
        <div className='wrapper'>
            {isLoading
                ? <div className='loader'>
                    <Loader />
                </div>
                : <div className='comments-post'>
                    <div className='comments-post__title'>{post.title}</div>
                    <div className='comments-post__body'>{post.body}</div>
                </div>

            }
            <h1 className='com'>Коментарі</h1>
            {isComLoading
                ?
                <div className='loader'>
                    <Loader />
                </div>
                :
                <div>
                    {comments.map(comm =>
                        <div className='comments' key={comm.id}>
                            <h5 className='comments__email'>{comm.email}</h5>
                            <div className='comments__body'>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostIdPage   