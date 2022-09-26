import '../styles/index.scss';
import React from "react";

import PostList from "../components/PostList";
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';

import { usePost } from '../hooks/usePosts';

import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFatching';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

function Pages() {

  const [post, setPost] = React.useState([])

  const [filter, setFilter] = React.useState({ sort: '', query: '' })
  const [modal, setModal] = React.useState(false)
  const sortedAndSearchedPost = usePost(post, filter.sort, filter.query)
  const [totalPages, setTotalPages] = React.useState(0)
  const [limit, setLimit] = React.useState(10)
  const [page, setPage] = React.useState(1)

  const [fetchPost, isPostLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPost(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  }, [])

  React.useEffect(() => {
    fetchPost(limit, page)
  }, [])

  const createPost = (newPosts) => {
    setPost([...post, newPosts])
    setModal(false)
  }

  const removePost = (posts) => {
    setPost(post.filter(p => p.id !== posts.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPost(limit, page)
  }

  return (
    <div className="wrapper">

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />

      <MyButton onClick={() => setModal(true)}>
        Створити пост
      </MyButton>
      {postError &&
        <h1>Помилка ${postError}</h1>
      }
      {isPostLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>

          <Loader />
        </div>
        : <PostList remove={removePost} post={sortedAndSearchedPost} title={"Пости"} />

      }

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />


    </div>
  );
}

export default Pages;
