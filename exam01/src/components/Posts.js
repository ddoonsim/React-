import { useState, useEffect } from "react";

const Posts = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        // 처음 로드되었을 때 한 번만 호출
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => {
                setItems(posts);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h1>게시글 목록</h1>
            <ul>
                {loading && <div>loading...</div>}
                {items && items.map(({id, title, userId}) => (
                    <li key={id}>{title} <i>{userId}</i></li> // 요소에 key값 속성 넣는 것을 권고
                ))}
            </ul>
        </>
    );
};

export default Posts;