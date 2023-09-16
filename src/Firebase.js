import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInwithGoogle = () => {
  return signInWithPopup(auth, provider);
};

// export const SignInWithGoogleButton = () => {
//   const navigate = useNavigate();

//   const signInwithGoogle = () => {
//     signInWithPopup(auth, provider)
//       .then((res) => {
//         const name = res.user.displayName;
//         const email = res.user.email;
//         const profPic = res.user.photoURL;
//         localStorage.setItem("name", JSON.stringify(name));
//         localStorage.setItem("email", JSON.stringify(email));
//         localStorage.setItem("profPic", JSON.stringify(profPic));
//         navigate("/home");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return <button onClick={signInwithGoogle}>Sign in with Google</button>;
// };

// export const signInwithGoogle = () => {
//   const navigate = useNavigate();
//   signInWithPopup(auth, provider)
//     .then((res) => {
//       //   console.log(res);
//       const name = res.user.displayName;
//       const email = res.user.email;
//       const profPic = res.user.photoURL;
//       //   localStorage.setItem("name", name);
//       localStorage.setItem("name", JSON.stringify(name));
//       localStorage.setItem("email", JSON.stringify(email));
//       localStorage.setItem("profPic", JSON.stringify(profPic));

//       //   localStorage.setItem("email", email);
//       //   localStorage.setItem("profPic", profPic);

//       navigate("/home");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
