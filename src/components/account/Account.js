import React, { useEffect, useState } from 'react';
import './Account.css';
import { auth, db } from '../../firebase';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const Account = props => {

    const [displayName, setDisplayName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [newEmail, setNewEmail] = useState(null);
    const [newPass, setNewPass] = useState(null);

    const [stDisplayName, setStDisplayName] = useState(false);
    const [stEmail, setStEmail] = useState(false);
    const [stPass, setStPass] = useState(false);

    let history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                setDisplayName(user.displayName);
                setEmail(user.email);
                db.collection('users')
                    .doc(user.uid)
                    .onSnapshot(snapshot => {
                        setPassword(snapshot.data().password)
                    })
            }
        })
    }, [])

    function logoutFunc() {
        auth.signOut().then(() => {
            history.push('/login')
        })
    }
    function updateDisplayname() {
        props.changeStatusLoader(true)
        auth.currentUser.updateProfile({
            displayName
        }).then(() => {
            setStDisplayName(false)
            props.changeStatusLoader(false)
        })
    }
    function updateEmail() {
        if(newEmail) {
            props.changeStatusLoader(true)
            auth.signInWithEmailAndPassword(email, password)
                .then(result => {
                    result.user.updateEmail(newEmail)
                    .then(() => {
                        setEmail(newEmail)
                        setStEmail(false)
                        props.changeStatusLoader(false)
                    })
                })
        } else {
            setStEmail(false)
        }
    }
    function updatePassword() {
        if(newPass) {
            props.changeStatusLoader(true)
            auth.signInWithEmailAndPassword(email, password)
                .then(result => {
                    result.user.updatePassword(newPass)
                        .then(() => {
                            db.collection('users').doc(result.user.uid).update({
                                password: newPass
                            }).then(() => {
                                setPassword(newPass);
                                setStPass(false);
                                props.changeStatusLoader(false)
                            })
                        })
                })
        } else {
            setStPass(false)
        }
    }

    return (
        <div className="row account">  
            <div className="box-svg col-md-12 col-lg-6 ">
                <p className="box">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="29e4b1a0-13d0-4a0f-9be2-3c3977a6a4ba" data-name="Layer 1" width="100%" height="100%" viewBox="0 0 785 753.73" className="injected-svg gridItem__media"><defs><linearGradient id="b4c3f788-9d51-49bd-96f9-c54f9fd51398-51" x1="452.8" y1="753.73" x2="452.8" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="gray" stopOpacity="0.25" /><stop offset="0.54" stopColor="gray" stopOpacity="0.12" /><stop offset={1} stopColor="gray" stopOpacity="0.1" /></linearGradient><linearGradient id="778ed1c4-cafd-494e-8a04-dc2b91aee6fd-52" x1="209.37" y1="339.46" x2="209.37" y2="101.61" xlinkHref="#b4c3f788-9d51-49bd-96f9-c54f9fd51398-51" /><linearGradient id="92c6cb1b-63b4-4a00-ae9b-05b36bfadf3e-53" x1="32.38" y1="227.8" x2="174.2" y2="227.8" xlinkHref="#b4c3f788-9d51-49bd-96f9-c54f9fd51398-51" /><linearGradient id="3111d6ac-9e05-4a73-9878-bd628330955d-54" x1="211.6" y1="606.34" x2="211.6" y2="582.89" xlinkHref="#b4c3f788-9d51-49bd-96f9-c54f9fd51398-51" /><linearGradient id="2e076d7a-ee6b-46b6-b939-69cbad87608e-55" x1="572.28" y1={718} x2="572.28" y2="646.54" xlinkHref="#b4c3f788-9d51-49bd-96f9-c54f9fd51398-51" /><linearGradient id="acad6429-7160-42af-9a00-db2d81d2388a-56" x1="630.34" y1="245.66" x2="630.34" y2="91.56" xlinkHref="#b4c3f788-9d51-49bd-96f9-c54f9fd51398-51" /></defs><title>account</title><rect x="120.6" width="664.4" height="753.73" fill="url(#b4c3f788-9d51-49bd-96f9-c54f9fd51398-51)" /><rect x="130.65" y="14.52" width="643.19" height="725.82" fill="#fff" /><rect x="65.88" y={134} width="365.14" height="232.26" fill="#6c63ff" opacity="0.2" /><rect y="101.61" width="418.74" height="237.84" fill="url(#778ed1c4-cafd-494e-8a04-dc2b91aee6fd-52)" /><rect x="4.47" y="136.23" width="408.69" height="197.65" fill="#fff" /><rect x="32.38" y="152.98" width="141.81" height="149.63" fill="url(#92c6cb1b-63b4-4a00-ae9b-05b36bfadf3e-53)" /><rect x="36.85" y="156.33" width={134} height="142.93" fill="#6c63ff" /><path d="M348.77,285.9c-1-8.49-2.5-17-5.75-24.94s-8.47-15.24-15.74-19.75a18,18,0,0,0-8.7-3c-5.69-.2-10.95,3.64-13.88,8.52a39.74,39.74,0,0,0-2.59,5.27,12.27,12.27,0,0,0-10.18,11.24,31.28,31.28,0,0,0,4.42,59.06v5.33a31.39,31.39,0,0,0-23.45,30.27v14.52h62.53V357.88A31.39,31.39,0,0,0,312,327.61v-5.33A31.28,31.28,0,0,0,335.45,292c0-.07,0-.15,0-.22l3.52,7.83c3.35,7.46,6.78,15.46,5.47,23.54C350.86,312.15,350.33,298.54,348.77,285.9Z" transform="translate(-207.5 -73.13)" fill="#fff" /><rect x="4.47" y="106.08" width="408.69" height="30.15" fill="#6c63ff" /><rect x="225.56" y="198.2" width="155.21" height="10.05" fill="#e0e0e0" /><rect x="225.56" y="240.64" width="155.21" height="10.05" fill="#f5f5f5" /><rect x="224.45" y="219.42" width="91.56" height="10.05" fill="#6c63ff" opacity="0.2" /><rect x="224.45" y="261.85" width="62.53" height="10.05" fill="#69f0ae" opacity="0.2" /><rect x="298.14" y="261.85" width="62.53" height="10.05" fill="#69f0ae" /><rect x="185.36" y="419.86" width="539.34" height="18.98" fill="#e0e0e0" /><rect x="185.36" y="461.17" width="179.78" height="18.98" fill="#e0e0e0" /><rect x="544.92" y="461.17" width="179.78" height="18.98" fill="#69f0ae" /><rect x="185.36" y="502.49" width="539.34" height="18.98" fill="#e0e0e0" /><rect x="185.36" y="543.81" width="539.34" height="18.98" fill="#e0e0e0" /><rect x="183.13" y="582.89" width="56.95" height="23.45" fill="url(#3111d6ac-9e05-4a73-9878-bd628330955d-54)" /><rect x="185.36" y="585.12" width="53.6" height="18.98" fill="#6c63ff" /><rect x="426.56" y="585.12" width="53.6" height="18.98" fill="#69f0ae" /><rect x="671.1" y="585.12" width="53.6" height="18.98" fill="#69f0ae" /><rect x="413.16" y="646.54" width="318.24" height="71.47" fill="url(#2e076d7a-ee6b-46b6-b939-69cbad87608e-55)" /><rect x="418.74" y="654.35" width="305.96" height="54.72" fill="#6c63ff" /><rect x="418.74" y="654.35" width="305.96" height="54.72" opacity="0.2" /><rect x="529.29" y="91.56" width="202.11" height="154.1" fill="url(#acad6429-7160-42af-9a00-db2d81d2388a-56)" /><rect x="537.11" y="101.61" width="187.6" height={134} fill="#6c63ff" /><rect x="537.11" y="101.61" width="187.6" height={134} fill="#fff" opacity="0.2" /></svg>
                </p>
            </div>
            <div className="box-account col-md-12 col-lg-6 ">
                <p className="avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="457bf273-24a3-4fd8-a857-e9b918267d6a" data-name="Layer 1" width="100%" height="100%" viewBox="0 0 698 698" className="injected-svg gridItem__media"><defs><linearGradient id="b247946c-c62f-4d08-994a-4c3d64e1e98f-81" x1={349} y1={698} x2={349} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="gray" stopOpacity="0.25" /><stop offset="0.54" stopColor="gray" stopOpacity="0.12" /><stop offset={1} stopColor="gray" stopOpacity="0.1" /></linearGradient></defs><title>profile pic</title><g opacity="0.5"><circle cx={349} cy={349} r={349} fill="url(#b247946c-c62f-4d08-994a-4c3d64e1e98f-81)" /></g><circle cx="349.68" cy="346.77" r="341.64" fill="#f5f5f5" /><path d="M601,790.76a340,340,0,0,0,187.79-56.2c-12.59-68.8-60.5-72.72-60.5-72.72H464.09s-45.21,3.71-59.33,67A340.07,340.07,0,0,0,601,790.76Z" transform="translate(-251 -101)" fill="#6c63ff" /><circle cx="346.37" cy="339.57" r="164.9" fill="#333" /><path d="M293.15,476.92H398.81a0,0,0,0,1,0,0v84.53A52.83,52.83,0,0,1,346,614.28h0a52.83,52.83,0,0,1-52.83-52.83V476.92a0,0,0,0,1,0,0Z" opacity="0.1" /><path d="M296.5,473h99a3.35,3.35,0,0,1,3.35,3.35v81.18A52.83,52.83,0,0,1,346,610.37h0a52.83,52.83,0,0,1-52.83-52.83V476.35A3.35,3.35,0,0,1,296.5,473Z" fill="#fdb797" /><path d="M544.34,617.82a152.07,152.07,0,0,0,105.66.29v-13H544.34Z" transform="translate(-251 -101)" opacity="0.1" /><circle cx="346.37" cy="372.44" r="151.45" fill="#fdb797" /><path d="M489.49,335.68S553.32,465.24,733.37,390l-41.92-65.73-74.31-26.67Z" transform="translate(-251 -101)" opacity="0.1" /><path d="M489.49,333.78s63.83,129.56,243.88,54.3l-41.92-65.73-74.31-26.67Z" transform="translate(-251 -101)" fill="#333" /><path d="M488.93,325a87.49,87.49,0,0,1,21.69-35.27c29.79-29.45,78.63-35.66,103.68-69.24,6,9.32,1.36,23.65-9,27.65,24-.16,51.81-2.26,65.38-22a44.89,44.89,0,0,1-7.57,47.4c21.27,1,44,15.4,45.34,36.65.92,14.16-8,27.56-19.59,35.68s-25.71,11.85-39.56,14.9C608.86,369.7,462.54,407.07,488.93,325Z" transform="translate(-251 -101)" fill="#333" /><ellipse cx="194.86" cy="372.3" rx="14.09" ry="26.42" fill="#fdb797" /><ellipse cx="497.8" cy="372.3" rx="14.09" ry="26.42" fill="#fdb797" /></svg>
                </p>
                <div className="box-infor">
                    <div className="field nameDisplay">
                        {
                            stDisplayName ? (
                                <><input onChange={ e => setDisplayName(e.target.value) } type="text" defaultValue={ displayName } className="ftxt"/>
                                <button onClick={ updateDisplayname } type="submit" className="btn btn-edit btn-submit">Save</button></>
                            ) : (
                                <><span className="field-label">Tên hiển thị:</span>
                                <span className="field-txt">{ displayName }</span>
                                <p className="btn-edit btn" onClick={ () => setStDisplayName(true) }><i className="far fa-edit"></i></p></>
                            )
                        }
                        
                    </div>
                    <div className="field nicknameDisplay">
                        {
                            stEmail ? (<>
                                <><input onChange={ e => setNewEmail(e.target.value) } type="email" defaultValue={ email } className="ftxt"/>
                                <button onClick={ updateEmail } type="submit" className="btn btn-edit btn-submit">Save</button></>
                            </>) : (<>
                                <span className="field-label">Email:</span>
                                <span className="field-txt">{ email }</span>
                                <p className="btn-edit btn" onClick={ () => setStEmail(true) }><i className="far fa-edit"></i></p>
                            </>)
                        }
                    </div>
                    <div className="field passDisplay">
                        {
                            stPass ? (<>
                                <input onChange={ e => setNewPass(e.target.value) } type="text" defaultValue={ password } className="ftxt"/>
                                <button onClick={ updatePassword } type="submit" className="btn btn-edit btn-submit">Save</button>
                            </>) : (<>
                                <span className="field-label">Mật khẩu:</span>
                                <span className="field-txt">{ password }</span>
                                <p className="btn-edit btn" onClick={ () => setStPass(true) }><i className="far fa-edit"></i></p>
                            </>)
                        }
                    </div>
                </div>
                <p onClick={ logoutFunc } className="logout btn">Đăng xuất</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        changeStatusLoader: status => dispatch({type: "STATUS_LOADER", status})
    }
}

export default connect(null, mapDispatchToProps)(Account);