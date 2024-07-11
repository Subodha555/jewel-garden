import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../css/Login.css";
import jewelLady from "/imgs/jewel-lady-4.webp"
function Login() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [user, loading, error] = useAuthState(auth);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) {
            navigate("/dashboard");
        }
    }, [user, loading]);
    return (
        <div className="login flex flex-col">
            <div className="bg-contain bg-no-repeat bg-right py-36 bg-[#b4c5cb]" style={{backgroundImage: `url(${jewelLady})`, height: '100vh', width: '100vh'}}>
                <div className="text-3xl" style={{    position: 'absolute', top: '40px', left: '45%'}}>Jewel Garden</div>
                <div className="" style={{    position: 'absolute', bottom: '0', left: '45%'}}>
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    className="login__textBox"*/}
                    {/*    value={email}*/}
                    {/*    onChange={(e) => setEmail(e.target.value)}*/}
                    {/*    placeholder="E-mail Address"*/}
                    {/*/>*/}
                    {/*<input*/}
                    {/*    type="password"*/}
                    {/*    className="login__textBox"*/}
                    {/*    value={password}*/}
                    {/*    onChange={(e) => setPassword(e.target.value)}*/}
                    {/*    placeholder="Password"*/}
                    {/*/>*/}
                    {/*<button*/}
                    {/*    className="login__btn"*/}
                    {/*    onClick={() => logInWithEmailAndPassword(email, password)}*/}
                    {/*>*/}
                    {/*    Login*/}
                    {/*</button>*/}
                    <button className="login__btn login__google bg-primary" onClick={signInWithGoogle}>
                        Login with Google
                    </button>
                    {/*<div>*/}
                    {/*    <Link to="/reset">Forgot Password</Link>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    Don't have an account? <Link to="/register">Register</Link> now.*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}
export default Login;