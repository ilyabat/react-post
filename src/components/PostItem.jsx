import React from "react";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__container _container">
                <div className="post__block">
                    <div>
                        <h1> {props.post.id}.{props.post.title}</h1>

                        {props.post.body}
                    </div>
                    <div className="post__btn">
                        <button>Видалити</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PostItem;