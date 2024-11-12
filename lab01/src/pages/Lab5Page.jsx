import React, { useReducer } from 'react';
import useFetch from '../data/useFetch';
import TableHeader from '../components/TableHeader';

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

    const initialTableData = posts.map((p) => ({
        user: users.find((u) => u.id === p.userId),
        post: p,
        comments: comments.filter((c) => c.postId === p.id),
    }));

    const [tableData, dispatch] = useReducer(tableDataReducer, initialTableData);

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
                    {tableData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.user ? data.user.name : "Nieznany użytkownik"}</td>
                            <td>{data.post.title}</td>
                            <td>{data.comments.length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Lab5Page;
