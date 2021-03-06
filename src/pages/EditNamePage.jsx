import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import InputText from "../components/InputText";
import PrimaryBtn from "../components/PrimaryBtn";
import Message from "../components/Message";
import '../styles/RegistrationPage.scss';
import { updateProfile, getProfile } from "../API/api";

function EditNamePage(props) {
    const [formIsValid, setFormIsValid] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [patronymicError, setPatronymicError] = useState('');
    const [responseText, setResponseText] = useState('');
    const [message, setMessage] = useState(false);
    const history = useHistory();

    const userName = props.appStore.userName;

    useEffect(() => {
        validate();
    }, [firstName, lastName, patronymic]);

    const update = async () => {
        if (formIsValid === true) {
            let userId = '';
            await getProfile(userName).then(async (request) => {
                userId = (await request.json()).data.id;
            });
            const data = {userId, firstName, lastName, patronymic};
            updateProfile(data).then(async(request) => {
                setResponseText((await request.json()).message);
                showMessage();
            });
        }
    }

    const showMessage = (value) => {
        setMessage(true);
    }

    const redirect = () => {
        history.push("/");
    }

    const firstNameChangeHandler = (event) => {setFirstName(event.target.value);}
    const lastNameChangeHandler = (event) => {setLastName(event.target.value);}
    const patronymicChangeHandler = (event) => {setPatronymic(event.target.value);}

    const validate = () => {
        firstNameValidation();
        lastNameValidation();
        patronymicValidation();
        setFormIsValid(firstNameValidation()&&lastNameValidation());
    }
    const firstNameValidation = () => {
        let isValid = true;
        if(!firstName){
            isValid = false;
            setFirstNameError("?????? ???? ?????????? ???????? ????????????");
        }
        if(typeof firstName !== "undefined" && !firstName === false){
            if(!firstName.match(/^[a-zA-Z??-????-??]+$/)){
                isValid = false;
                setFirstNameError("Only letters");
            } else {
                setFirstNameError("");
            }
        }
        return isValid;
    }
    const lastNameValidation = () => {
        let isValid = true;
        if(!lastName){
            isValid = false;
            setLastNameError("?????????????? ???? ?????????? ???????? ????????????");
        }
        if(typeof lastName !== "undefined" && !lastName === false){
            if(!lastName.match(/^[a-zA-Z??-????-??]+$/)){
                isValid = false;
                setLastNameError("Only letters");
            } else {
                setLastNameError("");
            }
        }
        return isValid;
    };
    const patronymicValidation = () => {
        let isValid = true;
        if(typeof patronymic !== "undefined" && !patronymic === false){
            if(!patronymic.match(/^[a-zA-Z??-????-??]+$/)){
                isValid = false;
                setPatronymicError("Only letters");
            } else {
                setPatronymicError("");
            }
        }
        return isValid;
    };

    return (
        <div className={"registration-page"}>
            {message === true ? <Message text={responseText} onClick={redirect}/> : true}
            <div className="horizontal">
                <Link to={"/settings"}>
                    <svg className={"back-arr"} width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6H15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 1L1 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 11L1 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                <div className="page-title" >???????????????? ??????</div>
            </div>
            <div className="user-info-form">
                <label htmlFor={"name"}>??????</label>
                <InputText type={"text"} id={"name"} placeHolder={"??????"} onChange={firstNameChangeHandler} msg={firstNameError}/>
                <label htmlFor={"surname"}>??????????????</label>
                <InputText type={"text"} id={"surname"} placeHolder={"??????????????"} onChange={lastNameChangeHandler} msg={lastNameError}/>
                <label htmlFor={"patronymic"}>????????????????</label>
                <InputText type={"text"} id={"patronymic"} placeHolder={"????????????????"} onChange={patronymicChangeHandler} msg={patronymicError}/>
            </div>
            <PrimaryBtn text={"??????????????????"} onClick={update}/>
        </div>
    );
}

export default EditNamePage;
