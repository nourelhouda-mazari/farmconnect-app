/*import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignin from "../img/google-removebg-preview.png";
import SignUpForms from "./Register";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Offline from '../Pages/Offline';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

  
function Login({ initialValues, onChange }) {


    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
     i18n.changeLanguage(lng);
     };


    const [user] = useAuthState(auth);
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [password, setPassword] = useState(""); // Initialisation de la variable password avec une chaîne vide

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
      const handleOnlineStatusChange = () => {
        setIsOnline(navigator.onLine);
      };

      window.addEventListener("online", handleOnlineStatusChange);
      window.addEventListener("offline", handleOnlineStatusChange);

      return () => {
        window.removeEventListener("online", handleOnlineStatusChange);
        window.removeEventListener("offline", handleOnlineStatusChange);
      };
    }, []);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const enteredPassword = e.target[1].value;
      setPassword(enteredPassword); // Mise à jour de la valeur du mot de passe

      try {
        await signInWithEmailAndPassword(auth, email, enteredPassword);
        navigate("/");
      } catch (err) {
        console.error(err);
        // Gérer les erreurs de connexion (optionnel)
      }
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value); // Mise à jour de la valeur du mot de passe lorsqu'il est modifié
    };

    const handleRegisterClick = () => {
      setShowSignUpForm(true);
    };

    const handleSignUp = async (email, password) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(auth.currentUser);
        // Naviguer ou effectuer d'autres actions après l'inscription réussie
        // Exemple : navigate("/");
      } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
        // Gérer les erreurs d'inscription (optionnel)
      }
    };

    const handleRegisterSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const enteredPassword = e.target[1].value;
      handleSignUp(email, enteredPassword);
    };

    const googleSignIn = () => {
      const provider = new GoogleAuthProvider();
      console.log("Connexion en cours...");
      signInWithPopup(auth, provider)
        .then(() => {
          alert("Connecté");
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <div className="formContainer" style={{ marginTop: '100px'}}>
        {!isOnline && <Offline />}
        {showSignUpForm ? (
          <SignUpForms />
        ) : (
          <div className="formWrapper">
            <span className="logo">{t("start now")}</span>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder={t("email")} />
              <input type="password" placeholder={t("password")} onChange={handlePasswordChange} />
              <PasswordStrengthBar password={password} />
              <button>{t("login")}</button>
              {user && <span>{t("something went wrong")}</span>}
            </form>
            <p>
              {t("You do not have an account?")}{" "}
              <button onClick={handleRegisterClick} style={{border: 'none', backgroundColor: 'transparent', color: 'red', fontWeight: 'bold', fontSize: '17px'}}>{t("register")}</button>
            </p>

            <Row>
              <Col>
              <p style={{marginLeft: '10px'}}>{t("Or sign in with Google")}</p>
              </Col>
              <Col>
                <button className="sign-in" style={{ backgroundColor: 'transparent', border: 'none' }}>
                  <img src={GoogleSignin} alt="Connectez-vous avec Google" type="button" onClick={googleSignIn} style={{ width:'30px', marginRight: '100px'}}/>
                </button>
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  return (
    <div className="formContainer" style={{ marginTop: '100px'}}>
      {!isOnline && <Offline />}
      {showSignUpForm ? (
        <SignUpForms />
      ) : (
        <div className="formWrapper">
          <span className="logo">Commencez maintenant</span>
          <form onSubmit={handleSubmit}>
          <input type="Text" name="username" placeholder="Nom d'utilisateur" required />
          <input type="password" placeholder="mot de passe" onChange={handlePasswordChange} />
            <button>Se connecter</button>
          </form>
          <p>
            Vous n'avez pas de compte ?{" "}
            <button onClick={handleRegisterClick} style={{border: 'none', backgroundColor: 'transparent', color: '#32CD32', fontWeight: 'bold', fontSize: '17px'}}>S'inscrire</button>
          </p>
          <p>
            <button onClick={handleResetPassword} style={{border: 'none', backgroundColor: 'transparent', color: 'white', fontWeight : 'bold'}}>Mot de passe oublié ?</button>
          </p>
          <Row>
            <Col>
              <p style={{marginLeft: '10px'}}>Ou connectez-vous avec Google</p>
            </Col>
            <Col>
              <button className="sign-in" style={{ backgroundColor: 'transparent', border: 'none' }}>
                <img src={GoogleSignin} alt="Connectez-vous avec Google" type="button" onClick={googleSignIn} style={{ width:'30px', marginRight: '100px'}}/>
              </button>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Login;*/
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignin from "../img/google-removebg-preview.png";
import SignUpForms from "./Register";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Offline from '../Pages/Offline';
import PasswordStrengthBar from 'react-password-strength-bar';

function Login({ initialValues, onChange }) {
  const [user] = useAuthState(auth);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [password, setPassword] = useState(""); 
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const enteredPassword = e.target[1].value;
    setPassword(enteredPassword);

    try {
      await signInWithEmailAndPassword(auth, email, enteredPassword);
      navigate("/products"); // Navigate to products page upon successful login
    } catch (err) {
      console.error(err);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterClick = () => {
    setShowSignUpForm(true);
  };

  const handleSignUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser);
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const enteredPassword = e.target[1].value;
    handleSignUp(email, enteredPassword);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        alert("Connecté");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("reset-email");
    if (!emailInput || !emailInput.value) {
      console.error("Email address is required to reset password.");
      return;
    }
  
    const email = emailInput.value;
  
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent successfully.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
    }
  };

  return (
    <div className="formContainer" style={{ marginTop: '100px'}}>
      {!isOnline && <Offline />}
      {showSignUpForm ? (
        <SignUpForms />
      ) : (
        <div className="formWrapper">
          <span className="logo">Commencez maintenant</span>
          <form onSubmit={handleSubmit}>
          <input type="Text" name="username" placeholder="Nom d'utilisateur" required />
          <input type="password" placeholder="mot de passe" onChange={handlePasswordChange} />
            <button>Se connecter</button>
          </form>
          <p>
            Vous n'avez pas de compte ?{" "}
            <button onClick={handleRegisterClick} style={{border: 'none', backgroundColor: 'transparent', color: '#32CD32', fontWeight: 'bold', fontSize: '17px'}}>S'inscrire</button>
          </p>
          <p>
            <button onClick={handleResetPassword} style={{border: 'none', backgroundColor: 'transparent', color: 'white', fontWeight : 'bold'}}>Mot de passe oublié ?</button>
          </p>
          <Row>
            <Col>
              <p style={{marginLeft: '10px'}}>Ou connectez-vous avec Google</p>
            </Col>
            <Col>
              <button className="sign-in" style={{ backgroundColor: 'transparent', border: 'none' }}>
                <img src={GoogleSignin} alt="Connectez-vous avec Google" type="button" onClick={googleSignIn} style={{ width:'30px', marginRight: '100px'}}/>
              </button>
            </Col>
          </Row>
          
        </div>
      )}
    </div>
  );
};

export default Login;

