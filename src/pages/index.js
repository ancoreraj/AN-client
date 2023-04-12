import NavBar from "../components/nav";
import { GoogleLogin } from "./../actions/auth";
import { useGoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react"
import { Toaster, toast } from "react-hot-toast";

const Home = () => {
  const router = useRouter();
  const [check, setCheck] = useState(false);
  const [click,setClick]=useState(false);

  const handleGoogleLoginSuccess = async (tokenResponse) => {
    const accessToken = tokenResponse.access_token;
    setClick(true);
    const loginData = await GoogleLogin(accessToken)
    if (loginData) {
      toast.success("Login Successfull")
      localStorage.setItem("token", loginData.token)
      localStorage.setItem("user", JSON.stringify(loginData.user))
      if (loginData.user.collegeName) {
        router.push(`/dashboard/${loginData.user.collegeName}`)
        return;
      }
      else if (!loginData.user.collegeName) {
        router.push("/collegeinput")
        return;
      }
    }
    setClick(false);
  }

  const handleLogin = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess, onError: (err) => toast.error(err) });

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const { collegeName } = JSON.parse(localStorage.getItem("user"))
      console.log(collegeName)
      if (collegeName) {
        router.push(`/dashboard/${collegeName}`)
      }
      else {
        router.push("/collegeinput")
      }
    }
    setCheck(true);
  }, [])
  if (!check) {
    return <div></div>;
  }
  return (
    <div className="landing">
      <header >
        <NavBar />

        <div class="container">
          <div class="lp__body">
            <h4>Welcome to AncoreNotes</h4>
            <h1>Share your all study material and pdf files of your college.</h1>



            <div class="row lp__bodyLogin">
              <div class="col-md-3">
                <button disabled={click} class="btn btn-outline-dark" onClick={handleLogin} role="button" style={{ texttransform: "none" }}>
                  <img width="20px" style={{ marginBottom: "3px", marginRight: "5px" }} alt="Google sign-in"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                  Login with Google
                </button>
                <Toaster />
              </div>

            </div>
          </div>
        </div>



      </header >
    </div >

  )
}
export default Home