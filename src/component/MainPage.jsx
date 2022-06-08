import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [data, setdata] = useState({ name: '', room: '' });
  const handleChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const validation = () => {
    if (!data.name) {
      setError('Please enter your name');
      return false;
    }
    if (!data.room) {
      setError('Please select room');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validation();
    if (isValid) {
      navigate(`/chat/${data.room}`, { state: data });
    }
  };

  return (
    <div className="px-3 py-4 shadow bg-white text-dark border rounded row">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <h2 className="text-info mb-4">Welcome to Chat Application</h2>
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            className="form-control bg-light"
            name="name"
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group mb-4">
          <select
            className="form-select bg-light"
            name="room"
            onChange={handleChange}
          >
            <option value=""> Select Room</option>
            <option value="gaming">Gaming</option>
            <option value="coding">Coding</option>
            <option value="confession"> Confession</option>
          </select>
        </div>
        <button type="submit" className="btn btn-info w-100 mb-2">
          Submit
        </button>
        {error ? <small className="text-danger">{error}</small> : ''}
      </form>
    </div>
  );
};

export default MainPage;
