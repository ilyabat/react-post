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
            <h1>id = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title} </div>
            }
            <h1>Коментарі</h1>
            {isComLoading
                ?
                <Loader />
                :
                <div>
                    {comments.map(comm =>
                        <div key={comm.id}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostIdPage   