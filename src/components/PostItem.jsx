import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__container _container">
                <div className="post__block">
                    <div>
                        <h1> {props.number}.{props.post.title}</h1>

                        {props.post.body}
                    </div>
                    <div className="post__btn">
                        <MyButton onClick ={() => props.remove(props.post)}>Видалити</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PostItem;