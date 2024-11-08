import './App.css'
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

function App() {

  // const login = useGoogleLogin({
  //   onSuccess: tokenResponse => console.log(tokenResponse),
  // });

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res);
      } catch(error) {
        console.log(error);
      }
    }
  });

  return (
    <>


      <button onClick={()=> login()}>
        Sign in with google
      </button>

      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          var credentialResponseDecode = jwtDecode(credentialResponse.credential);
          console.log(credentialResponseDecode);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      /> */}

    </>
  )
}

export default App
