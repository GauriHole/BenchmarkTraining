import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const DebugSession = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/debug', { withCredentials: true })
      .then(res => setData(res.data))
      .catch(err => {
        setError(err.response?.data?.message || 'Failed to fetch session data');
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Session Debug Info</h2>
      {error && <p className="text-red-600">{error}</p>}
      {data && (
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm text-gray-800">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default DebugSession;
