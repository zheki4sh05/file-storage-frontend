import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookie } from "../hooks/useCookie";
import { AUTH_TOKEN } from "../utils/constants";
import { links } from "../utils/links";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION, SIGNUP_MUTATION } from "../graphql/auth";

function SignIn() {

  const [cookieValue, setCookie, deleteCookie] = useCookie(AUTH_TOKEN);

    const navigate = useNavigate();
    const [formState, setFormState] = useState({
      login: true,
      email: '',
      password: '',
      name: ''
    });


    const [login] = useMutation(LOGIN_MUTATION, {
      variables: {
        email: formState.email,
        password: formState.password
      },
      onCompleted: ({ login }) => {
        localStorage.setItem(AUTH_TOKEN, login.token);
        navigate(links.dashboard);
      }
    });
    
    const [signup] = useMutation(SIGNUP_MUTATION, {
      variables: {
        name: formState.name,
        email: formState.email,
        password: formState.password
      },
      onCompleted: ({ signup }) => {
        localStorage.setItem(AUTH_TOKEN, signup.token);
        navigate(links.dashboard);
      }
    });


    function handleAuthUser(){
    
        const expirationDate = new Date() + 1;
        setCookie("token", expirationDate)

        if(formState.login){
          login()
        }else{
          signup()
        }

        navigate(links.dashboard,{ replace: true });
    }

  return (
<div style={{maxWidth:"400px", height:"100%", margin:"0 auto"}} className="d-flex justify-content-center align-items-center" >
<form action={handleAuthUser} >
        
        <h1 className="h3 mb-3 fw-normal">Please {formState.login ? "login" : "sign Up"}</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={formState.email}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating my-2">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={formState.password}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          {formState.login ? "Login" : "Ceate account"}
        </button>
       
        <button className="btn my-1" type="button"  data-bs-toggle="button" onClick={(e) =>
              setFormState({
                ...formState,
                login: !formState.login
              })} >
          {formState.login ? "need to create an account" : "already have an account"}
        </button>
        
       
      </form>
</div>
     
  
  );
}

export default SignIn;
