import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import LoginComponent from "./Login";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignin from "../img/google-removebg-preview.png";
/*import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Offline from '../Pages/Offline';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Register = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [displayName, setDisplayName] = useState("");

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState({ profession: "", proof: null });
  const navigate = useNavigate();

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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [profession, setProfession] = useState("");
  const [file, setFile] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [showFileInput, setShowFileInput] = useState(false); // State to control visibility of file input

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser);
      // Additional code to handle other fields and file uploads
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleAvatarChange = (e) => {
    const avatar = e.target.files[0];
    setAvatar(avatar);
  };

  const handleProfessionChange = (e) => {
    const selectedProfession = e.target.value;
    setProfession(selectedProfession);
    // Show file input if selected profession requires it
    setShowFileInput(["commerçant", "agriculteur", "ingenieur"].includes(selectedProfession));
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    console.log(t("Connecting..."));
    signInWithPopup(auth, provider)
      .then(() => {
        alert(t("connected"));
      })
      .catch((error) => {
        console.log(t("error"));
      });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: name === t ("proof") ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
  return (
    <div className="formWrapper" style={{marginTop: '-80px'}}>
      <span className="logo">Inscription</span>
      <form onSubmit={handleSignUp}>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Nom d'utilisateur" required />
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Wilaya" required />
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Téléphone" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
        <select value={profession} onChange={handleProfessionChange} required>
          <option value="">Choisissez une profession</option>
          <option value="commerçant">Commerçant</option>
          <option value="agriculteur">Agriculteur</option>
          <option value="ingenieur">Ingénieur</option>
          <option value="consomateur">Consomateur</option>
        </select>
        {showFileInput && ( 
          <div>
            <label>Inserer votre fichier : 
          <input type="file" onChange={handleFileChange} required />
          </label>
          </div>
        )}
        <button>S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
*/
import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [ville, setVille] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [profession, setProfession] = useState("");
  const [file, setFile] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [showFileInput, setShowFileInput] = useState(false); // State to control visibility of file input
  const [error, setError] = useState(null); // State to handle errors during signup
  const [successMessage, setSuccessMessage] = useState(""); // State to handle success message

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Créer l'utilisateur
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Envoyer la vérification par e-mail
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser);

      // Créer un nom d'image unique
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      // Télécharger l'image vers le stockage
      await uploadBytesResumable(storageRef, userDetails.proof).then(() => {
        // Obtenir l'URL de téléchargement de l'image
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // Mettre à jour le profil de l'utilisateur
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            // Créer l'utilisateur dans Firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            // Créer des conversations utilisateur vides dans Firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});

            // Naviguer vers "/"
            navigate("/");

            // Afficher le composant de connexion après une inscription réussie
            setShowLoginForm(true);
          } catch (err) {
            console.error(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      console.error(err);
      setErr(true);
      setLoading(false);
    }
      // Additional code to handle other fields and file uploads
      setSuccessMessage("Inscription réussie ! Veuillez vérifier votre e-mail pour activer votre compte.");
    } catch (error) {
      setError("Erreur lors de l'inscription : " + error.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleAvatarChange = (e) => {
    const avatar = e.target.files[0];
    setAvatar(avatar);
  };

  const handleProfessionChange = (e) => {
    const selectedProfession = e.target.value;
    setProfession(selectedProfession);
    // Show file input if selected profession requires it
    setShowFileInput(["commerçant", "agriculteur", "ingenieur"].includes(selectedProfession));
  };

  return (
    <div className="formContainer">
      {!isOnline && <Offline />} 
      {showLoginForm ? (
        <LoginComponent />
      ) : (
        <div className="formWrapper" style={{ marginTop: '-70px'}}>
          <span className="logo">{t("start now")}</span>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder={t("display name")}
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <input
              required
              type="email"
              placeholder={t("email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder={t("password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordStrengthBar password={password} />
            <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicProfession">
              <Form.Label>{t("profession")}</Form.Label>
              <Form.Select name="profession" value={userDetails.profession} onChange={handleChange} className="custom-input">
                <option value="">{t("Select a profession")}</option>
                <option value="commerçant">{t("merchant")}</option>
                <option value="consommateur">{t("Consumer")}</option>
                <option value="ingénieur_agriculteur">{t("ingénieur Agricole")}</option>
                <option value="agriculteur">{t("farmer")}</option>
              </Form.Select>
            </Form.Group>
            {userDetails.profession === 'commerçant' ||
              userDetails.profession === 'ingénieur_agriculteur' ||
              userDetails.profession === 'agriculteur' ? (
              <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicProof">
                <Form.Label>{t("Proof (farmer’s card, engineer’s diploma, trade register)")}</Form.Label>
                <Form.Control
                  required
                  type="file"
                  name="proof"
                  onChange={handleChange}
                  className="custom-input"
                />
              </Form.Group>
            ) : null}
            <input
              required
              style={{ display: "none" }}
              type="file"
              id="file"
            />
            <Row>
            <Col>
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>{t("add an avatar")}</span>
            </label>            </Col>
            <Col>
              <button className="sign-in" style={{ backgroundColor: 'transparent', border: 'none' }}>
                <img src={GoogleSignin} alt={t("login with Google")} type="button" onClick={googleSignIn} style={{ width:'30px', marginRight: '100px'}}/>
              </button>
            </Col>
          </Row>
            <button disabled={loading}>{t("register")}</button>
            {loading && t("Downloading and compressing the current image, please wait...")}
            {err && <span>{t("Something went wrong")}</span>}
          </form>
          <p>
           {t("already have an account?")}{" "}
            <button onClick={() => setShowLoginForm(true)} style={{border: 'none', backgroundColor: 'transparent', color: 'red', fontWeight: 'bold', fontSize: '15px'}}>{t("login")}</button>
          </p>
        </div>
      )}
    <div className="formWrapper" style={{marginTop: '-80px'}}>
      <span className="logo">Inscription</span>
      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
      <form onSubmit={handleSignUp}>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Nom d'utilisateur" required />
        <input type="text" value={ville} onChange={(e) => setVille(e.target.value)} placeholder="Wilaya" required />
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
        <input type="email" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
        <select value={profession} onChange={handleProfessionChange} required>
          <option value="">Choisissez une profession</option>
          <option value="commerçant">Commerçant</option>
          <option value="agriculteur">Agriculteur</option>
          <option value="ingenieur">Ingénieur</option>
          <option value="consomateur">Consomateur</option>
        </select>
        {showFileInput && ( 
          <div>
            <label>Inserer votre fichier : 
          <input type="file" onChange={handleFileChange} required />
          </label>
          </div>
        )}
        <button>S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
