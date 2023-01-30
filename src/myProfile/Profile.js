import { useContext, useState } from "react";
import { ContextData } from "../context/ContextData";
import { RxExit } from "react-icons/rx";
import Swal from "sweetalert2";
import { Add } from "./Add";

export function Profile() {

    const { info, refresh, exitProf, dataBaseInput, setDataBaseInput, collectProf, clear } = useContext(ContextData);

    const [profTF, setProfTF] = useState(true);

    const [errInput, setErrInput] = useState([]);

    // Validation
    function validation(pro) {
        let errData = {};
        if (!pro.username) {
            errData = { ...errData, username: "Missed!" }
        } else if (pro.username.trim().length < 5) {
            errData = { ...errData, username: "Username must be less than 5 characters!" }
        }
        if (!pro.password) {
            errData = { ...errData, password: "Missed!" }
        } else if (pro.password.trim().length < 8) {
            errData = { ...errData, password: "Password must not be less than 8 characters!" }
        }
        return errData;
    }

    // Submit Function
    function submitFunc(e) {
        e.preventDefault();
        setErrInput(validation(dataBaseInput));
        if (dataBaseInput.username !== '' && dataBaseInput.password !== '') {
            localStorage.setItem(
                'profile',
                JSON.stringify([{ ...dataBaseInput, about: 'new', hour: new Date().getHours(), minut: new Date().getMinutes() }])
            );
            localStorage.setItem('myProf', 'true');
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                // title: `You're welcome, ${info[0].profile[0].username}`,
                title: "You've successfuly Register",
                showConfirmButton: false,
                timer: 3000
            })
            refresh();
            clear();
        }
        else {
            Swal.fire(
                'The Note!',
                'Please fill in each blank!',
                'warning'
            )
        }
    }

    // Login Function
    function loginFunc(e) {
        e.preventDefault();
        setErrInput(validation(dataBaseInput));
        if (info[0].profile[0].username === dataBaseInput.username && info[0].profile[0].password === dataBaseInput.password) {
            localStorage.setItem(
                'profile',
                JSON.stringify([{ ...dataBaseInput, about: 'old', hour: new Date().getHours(), minut: new Date().getMinutes() }])
            );
            localStorage.setItem('myProf', 'true');
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                // title: `Welcome back, ${info[0].profile[0].username}`,
                title: "You've successfuly Login",
                showConfirmButton: false,
                timer: 3000
            })
            refresh();
        }
        else {
            Swal.fire(
                'The Note!',
                'Unfortunately, your information was not found, please Register or try again',
                'warning'
            )
            // setProfTF(true);
        }
        clear();
    }

    // console.log(JSON.parse(localStorage.getItem('profile')).map(val => val.username === dataBaseInput.username && val.password === dataBaseInput.password));

    return (
        <>
            <div className="profile">
                {
                    info[0].myProf ?
                        <Add />
                        :
                        <div className="add">
                            <button className="profBtn" onClick={exitProf}> <span><RxExit /></span> </button>
                            <form action="#" className="regLog">
                                <h1>{profTF ? 'Register' : 'Login'}</h1>
                                <div className="input">
                                    <label htmlFor="username">Username</label>
                                    <p style={{ color: 'red' }}>{errInput.username}</p>
                                    <input onInput={(e) => collectProf(e)} autoComplete='current-username' value={dataBaseInput.username} type="text" name="username" id="username" placeholder="Username" />
                                </div>

                                <div className="input">
                                    <label htmlFor="password">Password</label>
                                    <p style={{ color: 'red' }} color="red">{errInput.password}</p>
                                    <input onInput={(e) => collectProf(e)} autoComplete='current-password' value={dataBaseInput.password} type="password" name="password" id="password" placeholder="Password" />
                                </div>

                                <div className="formBtn">
                                    {/* <button type="submit" onClick={submitFunc}>{profTF ? 'Register' : 'Login'}</button> */}
                                    {
                                        profTF ?
                                            <button onClick={(e) => submitFunc(e)}>Register</button>
                                            :
                                            <button onClick={(e) => loginFunc(e)}>Login</button>
                                    }
                                    <button type="button" onClick={() => setProfTF(!profTF)}>{profTF ? 'Already have an account? Login here' : 'Do not have an account? Register here'}</button>
                                </div>
                            </form>
                        </div>
                }
            </div>
        </>
    )
};