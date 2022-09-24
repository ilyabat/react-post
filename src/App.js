import './styles/index.scss';
import React from "react";
import PostList from "./components/PostList";
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {

  const [post, setPost] = React.useState([
    { id: 1, title: "Java1", body: "Description" },
    { id: 2, title: "Java2", body: "Description" },
    { id: 3, title: "Java3", body: "Description" }
  ])


  return (
    <div className="wrapper">
      <form>
        <MyInput type="text" placeholder='Заголовок'/>
        <MyInput type="text" placeholder='Опис'/>
        <MyButton>Створити пост</MyButton>
      </form>
      <PostList post={post} title={"Пости Java"} />

    </div>
  );
}

export default App;
