import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_SERVER } from './constants';

interface Post {
  id: number;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  useEffect(() => {
    axios.get<Post[]>(`${API_SERVER}/api/posts/`)
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post<Post>(`${API_SERVER}/api/posts/`, newPost)
    .then((response) => {
      if (response.data.id) {
        setPosts([...posts, response.data]);
        setNewPost({ title: '', content: '' });
      } else {
        console.error('Post creation failed. Response:', response);
      }
    })
    .catch((error) => {
      console.error('Error while creating a post:', error);
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Create a New Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newPost.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="content"
              placeholder="Content"
              value={newPost.content}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Create Post
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-md w-1/2 mx-auto mt-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 mb-4 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
