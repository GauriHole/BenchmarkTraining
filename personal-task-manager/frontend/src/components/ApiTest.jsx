
//ApiTest.jsx
import { useState, useEffect } from 'react';
import api from '../api';

const ApiTest = () => {
    const [status, setStatus] = useState('Testing...');
    const [error, setError] = useState(null);

    useEffect(() => {
        const testApi = async () => {
            try {
                const response = await api.get('/test-log');
                setStatus('API Connected Successfully!');
                console.log('API Response:', response.data);
            } catch (err) {
                setError(err.message);
                setStatus('API Connection Failed');
                console.error('API Error:', err);
            }
        };

        testApi();
    }, []);

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">API Connection Test</h2>
            <div className={`p-3 rounded ${
                error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}>
                <p className="font-semibold">Status: {status}</p>
                {error && (
                    <p className="mt-2 text-sm">
                        Error: {error}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ApiTest; 