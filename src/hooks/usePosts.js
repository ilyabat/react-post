import React from "react";

export const useSortedPost = (post, sort) => {
    const sortedPost = React.useMemo(() => {
        if (sort) {
            return [...post].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return post;
    }, [sort, post]);

    return sortedPost;
}

export const usePost = (post, sort, query) => {
        
    const sortedPost = useSortedPost(post, sort);

    const sortedAndSearchedPost = React.useMemo(() => {
        return sortedPost.filter(posts => posts.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPost])
    return sortedAndSearchedPost;
}