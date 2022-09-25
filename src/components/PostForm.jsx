import React from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {

    const [posts, setPosts] = React.useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault();
        const newPosts = {
            ...posts, id: Date.now()
        }
        create(newPosts)
        setPosts({ title: '', body: '' })
    }

    return (
        <form>
            <MyInput
                value={posts.title}
                onChange={e => setPosts({ ...posts, title: e.target.value })}
                type="text" placeholder='Заголовок' />
            <MyInput
                value={posts.body}
                onChange={e => setPosts({ ...posts, body: e.target.value })}
                type="text" placeholder='Опис' />
            <MyButton onClick={addNewPost}>Створити пост</MyButton>
        </form>
    )
}

export default PostForm 