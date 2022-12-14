import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group"
const PostList = ({ post, title, remove }) => {

    if (!post.length) {
        return (<h1 style={{ textAlign: 'center' }}>Пости не знайдені</h1>);
    }
    return (
        <div className="postList">
            <h1>{title}</h1>
            <TransitionGroup>
                {post.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );

}

export default PostList;