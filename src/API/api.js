export const getProfile = async (userName) => await fetch(`http://173.249.20.184:7001/api/Account/GetProfile?userName=${userName}`)
export const updateProfile = async (data) => {
    const request = await fetch('http://173.249.20.184:7001/api/Account/UpdateProfile', {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data)
    });
    return request;
}
export const createProfile = async (data) => {
        const request = await fetch('http://173.249.20.184:7001/api/Account/Register', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(data)
        });
        return request;
}
export const login = async (data) => {
    const request = await fetch('http://173.249.20.184:7001/api/Account/Login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return request;
}
