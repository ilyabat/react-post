import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";
const PostItem = (props) => {
    const router = useNavigate()
    console.log(router);
    return (
        <div className="post">
            <div className="post__container _container">
                <div className="post__block">
                    <div>
                        <h2> {props.post.id}.{props.post.title}</h2>

                        {props.post.body}
                    </div>
                    <div className="post__block-btn">
                        <div className="post__btn-open">
                            <MyButton onClick={() => router(`/post/${props.post.id}`)}>Відкрити</MyButton>
                        </div>
                        <div className="post__btn">
                            <MyButton onClick={() => props.remove(props.post)}>Видалити</MyButton>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default PostItem;