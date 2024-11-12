import React, { useReducer, useEffect } from 'react';
import useFetch from '../data/useFetch';
import TableHeader from '../components/TableHeader';
import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';

const tableDataReducer = (state, action) => {
    switch (action.type) {
        case 'SORT_BY_USER':
            return [...state].sort((a, b) =>
                action.order === 'asc' ? a.user.name.localeCompare(b.user.name) : b.user.name.localeCompare(a.user.name)
            );
        case 'SORT_BY_TITLE':
            return [...state].sort((a, b) =>
                action.order === 'asc' ? a.post.title.localeCompare(b.post.title) : b.post.title.localeCompare(a.post.title)
            );
        case 'SORT_BY_COMMENT_COUNT':
            return [...state].sort((a, b) =>
                action.order === 'asc' ? a.comments.length - b.comments.length : b.comments.length - a.comments.length
            );
        case 'RESET':
            return action.payload;
        default:
            return state;
    }
};

function Lab5Page() {
    const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
    const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

    const initialTableData = posts.length && users.length && comments.length ? posts.map((p) => ({
        user: users.find((u) => u.id === p.userId),
        post: p,
        comments: comments.filter((c) => c.postId === p.id),
    })) : [];

    const [tableData, dispatch] = useReducer(tableDataReducer, initialTableData);

    
    useEffect(() => {
        if (posts.length && users.length && comments.length) {
            const updatedTableData = posts.map((p) => ({
                user: users.find((u) => u.id === p.userId),
                post: p,
                comments: comments.filter((c) => c.postId === p.id),
            }));
            dispatch({ type: 'RESET', payload: updatedTableData });
        }
    }, [posts, users, comments]); 

    const handleSort = (type, order) => {
        dispatch({ type, order, payload: initialTableData });
    };

    return (
        <div>
            <h1>Lab 5: Pobieranie danych</h1>
            <table>
                <thead>
                    <tr>
                        <TableHeader title="User" onSort={(order) => handleSort('SORT_BY_USER', order)} />
                        <TableHeader title="Post title" onSort={(order) => handleSort('SORT_BY_TITLE', order)} />
                        <TableHeader title="Comments count" onSort={(order) => handleSort('SORT_BY_COMMENT_COUNT', order)} />
                    </tr>
                </thead>
                <tbody>
                    {tableData.length > 0 ? tableData.map((data, index) => (
                        <tr key={index}>
                            <td>
                                {data.user ? (
                                    <Link to={`/lab5/users/${data.user.id}`}>{data.user.name}</Link>
                                ) : "Nieznany użytkownik"}
                            </td>
                            <td>{data.post.title}</td>
                            <td>
                                <Link to={`/lab5/posts/${data.post.id}/comments`}>{data.comments.length}</Link>
                            </td>
                            <td>
                                <Accordion title={data.post.title} content={data.post.body} />
                            </td>
                        </tr>
                    )) : (
                        <tr><td colSpan="4">Ładowanie danych...</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Lab5Page;
