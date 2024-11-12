import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CommentsPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data));

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(data => setComments(data));
    }, [id]);

    if (!post) return <p>Loading post...</p>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <h3>Comments</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <strong>{comment.name} ({comment.email}):</strong>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CommentsPage;
