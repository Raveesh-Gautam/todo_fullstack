import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [users, setUsers] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:8080/user/${userId}`);
        loadUsers();
    }

    return (
        <div>
            <h2>User Details</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={labelStyle}>ID</th>
                        <th style={labelStyle}>Name</th>
                        <th style={labelStyle}>Username</th>
                        <th style={labelStyle}>Email</th>
                        <th style={labelStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td style={valueStyle}>{user.id}</td>
                            <td style={valueStyle}>{user.name}</td>
                            <td style={valueStyle}>{user.username}</td>
                            <td style={valueStyle}>{user.email}</td>
                            <td style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                                {/* <Link style={{ color: "blue" }}>View</Link> */}
                                <button onClick={() => navigate(`/edituser/${user.id}`)}>Edit
                                </button>
                                <button onClick={() => deleteUser(user.id)} style={{ color: "red" }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
};

const labelStyle = {
    padding: '10px',
    background: '#f2f2f2',
    fontWeight: 'bold',
    textAlign: 'left',
};

const valueStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
};

export default Home;
