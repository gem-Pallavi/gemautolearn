import React, { useState } from 'react';

export default function DesktopNotifications() {
  const [notificationStatus, setNotificationStatus] = useState(''); 

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();

      if (permission === 'granted') {
        setNotificationStatus('Notifications enabled');
      } else if (permission === 'denied') {
        setNotificationStatus('Notifications blocked');
      } else {
        setNotificationStatus('Notification permission not requested');
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      setNotificationStatus('Failed to request notification permission');
    }
  };

  return (
    <>
      <button onClick={requestNotificationPermission} className="alert-btn" id='notif-alert'>
        Notification Permission
      </button>
      {notificationStatus && <p className='alert-text' id='notif-text'>{notificationStatus}</p>}
    </>
  );
}
