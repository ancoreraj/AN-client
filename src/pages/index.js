import NavBar from "@/Components/nav";
import GoogleLogin from "@/actions/auth";
import { useGoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function Home() {
  const router = useRouter();
  const handleGoogleLoginSuccess = async (tokenResponse) => {

    const accessToken = tokenResponse.access_token;
    const loginData = await GoogleLogin(accessToken)
    if (loginData) {
      router.push("/dashboard")
    }
    else {
      router.push("/collegeinput")
    }
  }
  const handleLogin = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  return (
    <div className="landing">
      <header>
        <NavBar />

        <div class="container">
          <div class="lp__body">
            <h4>Welcome to AncoreNotes</h4>
            <h1>Share your all study material and pdf files of your college.</h1>



            <div class="row lp__bodyLogin">
              <div class="col-md-3">
                <a class="btn btn-outline-dark" onClick={handleLogin} role="button" style={{ texttransform: "none" }}>
                  <img width="20px" style={{ marginBottom: "3px", marginRight: "5px" }} alt="Google sign-in"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                  Login with Google
                </a>
              </div>

            </div>
          </div>
        </div>



      </header>
    </div>
  )
}
