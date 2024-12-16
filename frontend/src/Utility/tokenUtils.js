export const getAccessToken = () => localStorage.getItem('accessToken');

// Utility function to store a new access token in localStorage
export const setAccessToken = (token) => localStorage.setItem('accessToken', token);

// Get user type from localStorage
export const getUserType = () => localStorage.getItem('userType');

// Store user type in localStorage
export const setUserType = (type) => localStorage.setItem('userType', type);

// Clear user type from localStorage
export const clearUserType = () => localStorage.removeItem('userType');

export const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
};