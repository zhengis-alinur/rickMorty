import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/EditProfilePage.scss';
import DefaultBtn from '../components/DefaultBtn';

function EditProfilePage(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    useEffect(() => {
        getName();
    }, []);

    const getName = async () => {
        const request = await fetch(`http://173.249.20.184:7001/api/Account/GetProfile?userName=${props.appStore.userName}`)
        const response = await request.json();
        setName(response.data.fullName);
        if (response.data.avatar !== null) {
            setImage(response.data.avatar);
        }
        console.log(response);
    }

    const uploadFile = async (inputElement) => {
        const file = inputElement.files[0];
        const reader = new FileReader();
        let binaryBlob;
        reader.onloadend = function() {
            const data=(reader.result).split(',')[1];
            binaryBlob = atob(data);
        }
        reader.readAsDataURL(file);
        const request = await fetch('http://173.249.20.184:7001//api/ImageUpload/Upload', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(binaryBlob)
        });
        console.log(binaryBlob);
        const resp = await request.json();
        console.log(request);
    }

    return (
        <div className={"edit-profile-page"}>
            <div className="horizontal">
                <svg className={"back-arr"} width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6H15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 1L1 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 11L1 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="page-title" >Редактировать профиль</div>
            </div>
            <div className="profile-info">
                <div className="profile-img" style={{backgroundImage: image === null ? 'url(https://internetuniversitet.ru/wp-content/uploads/2017/11/no-avatar.png)' : image}}></div>
                <label className={"input-label"} htmlFor={"avatar"}>Изменить фото</label>
                <input type={"file"} id={"avatar"} name={"avatar"} accept={"image/png, image/jpeg"} onChange={uploadFile(this)}></input>
            </div>
            <div className="profile-items">
                <p className={"grey-text"}>Профиль</p>
                <div className="view-chooser">
                    <div className="vertical">
                        <p className={"small-title"}>Изменить ФИО</p>
                        <p className="grey-text">{name}</p>
                    </div>
                    <svg className={"arr"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 16L14 12L10 8" stroke="#0B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="view-chooser">
                    <div className="vertical">
                        <p className={"small-title"}>Логин</p>
                        <p className="grey-text">{props.appStore.userName}</p>
                    </div>
                    <svg className={"arr"} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 16L14 12L10 8" stroke="#0B1E2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    )
};
export default EditProfilePage;
