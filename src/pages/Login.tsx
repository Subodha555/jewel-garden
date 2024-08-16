import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../css/Login.css";
import jewelLady from "/imgs/jewel-lady-4.webp";

function Login() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            navigate("/dashboard");
        }
    }, [user, loading]);
    return (
        <div className="login flex flex-col">
            <div className="bg-contain bg-no-repeat bg-right py-36 bg-[#b4c5cb]" style={{backgroundImage: `url(${jewelLady})`, height: '100vh', width: '100vh'}}>
                <div data-testid="cypress-login-title" className="text-3xl" style={{    position: 'absolute', top: '40px', left: '45%'}}>Jewel Garden</div>
                <div className="" style={{    position: 'absolute', bottom: '0', left: '45%'}}>
                    <button data-testid="cypress-login-g" className="login__btn login__google bg-primary" onClick={signInWithGoogle}>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Login;