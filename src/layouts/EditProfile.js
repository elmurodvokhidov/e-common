import { useContext, useState } from "react";
import { RxExit } from "react-icons/rx";
import Swal from "sweetalert2";
import { ContextData } from "../context/ContextData";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export function EditProfile() {

    const { refresh, info, dataBaseInput, setDataBaseInput, collectProf, clear } = useContext(ContextData);

    const [seeCode, setSeeCode] = useState(false);

    // Edit Profile Function
    function editProfileFunc(e) {
        e.preventDefault();
        if (dataBaseInput.username !== '' && dataBaseInput.password !== '') {
            localStorage.setItem(
                'profile',
                JSON.stringify([{ ...dataBaseInput, hour: new Date().getHours(), minut: new Date().getMinutes() }])
            );
            localStorage.setItem('editProfModal', 'false');
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Edited successfully!',
                showConfirmButton: false,
                timer: 3000
            })
            clear();
            refresh();
        }
        else {
            Swal.fire(
                'The Note!',
                'Please fill in each blank!',
                'warning'
            )
        }
        clear();
    }

    // Exit Profile Modal Function
    function exitProModal() {
        localStorage.setItem('editProfModal', 'false');
        clear();
        refresh();
    }

    return (
        <>
            <div className="editProfile">
                <div className="add">
                    <button className="profBtn" onClick={exitProModal}> <span><RxExit /></span> </button>
                    <form action="#">
                        <h1>Edit your account</h1>
                        <div className="input">
                            <label htmlFor="username">Username</label>
                            <input onInput={(e) => collectProf(e)} autoComplete='current-username' value={dataBaseInput.username} type="text" name="username" id="username" placeholder="Username" />
                        </div>

                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input onInput={(e) => collectProf(e)} autoComplete='current-password' value={dataBaseInput.password} type={seeCode ? "text" : "password"} name="password" id="password" placeholder="Password" />
                            {
                                seeCode ?
                                    <button className="seeCode" type="button" onClick={() => setSeeCode(false)}><b><AiOutlineEyeInvisible /></b></button>
                                    : <button className="seeCode" type="button" onClick={() => setSeeCode(true)}><b><AiOutlineEye /></b></button>
                            }
                        </div>

                        <div className="formBtn">
                            <button onClick={(e) => editProfileFunc(e)}>Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};