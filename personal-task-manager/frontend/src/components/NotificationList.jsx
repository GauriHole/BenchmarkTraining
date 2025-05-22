import React, { useEffect, useState } from 'react';
import axiosClient from '../api/axios';

function NotificationList() {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchNotifications();
        // Set up polling for new notifications every 30 seconds
        const interval = setInterval(fetchNotifications, 30000);
        return () => clearInterval(interval);
    }, []);

    const fetchNotifications = async () => {
        try {
            setError(null);
            const response = await axiosClient.get('/notifications');
            console.log('Fetched notifications:', response.data); // Debug log
            setNotifications(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching notifications:', error);
            setError('Failed to load notifications');
            setLoading(false);
        }
    };

    const markAsRead = async (notificationId) => {
        try {
            await axiosClient.post(`/notifications/${notificationId}/mark-as-read`);
            setNotifications(notifications.map(notification =>
                notification.id === notificationId
                    ? { ...notification, read_at: new Date().toISOString() }
                    : notification
            ));
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    };

    if (loading) {
        return (
            <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4">Notifications</h2>
                <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4">Notifications</h2>
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Notifications</h2>
            {notifications.length === 0 ? (
                <p className="text-gray-500">No notifications</p>
            ) : (
                <div className="space-y-4">
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`p-3 rounded-lg ${
                                notification.read_at ? 'bg-gray-50' : 'bg-blue-50'
                            }`}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-medium">{notification.data.title}</p>
                                    <p className="text-sm text-gray-600">{notification.data.message}</p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {new Date(notification.created_at).toLocaleString()}
                                    </p>
                                </div>
                                {!notification.read_at && (
                                    <button
                                        onClick={() => markAsRead(notification.id)}
                                        className="text-sm text-blue-600 hover:text-blue-800"
                                    >
                                        Mark as read
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default NotificationList; 