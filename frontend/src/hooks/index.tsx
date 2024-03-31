import React from 'react'
import { BASE_BACKEND_URL } from '../confog';

const useBlogsHook = () => {
    const [blogs, setBlogs] = React.useState([]);

    React.useEffect(() => {
        fetch(`${BASE_BACKEND_URL}/blog-bulk`)
        .then((response) => response.json())
        .then((data) => setBlogs(data))
    }, [])

    return blogs
}

export default useBlogsHook