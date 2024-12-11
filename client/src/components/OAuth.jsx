import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      console.log('could not login with google', error);
    }
  };

  const handleFacebookClick = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/facebook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      console.log('could not login with Facebook', error);
    }
  };

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={handleGoogleClick}
        className="flex items-center justify-center bg-white border border-gray-300 text-gray-800 rounded-lg p-3 uppercase shadow-lg hover:shadow-2xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 w-full transition duration-200"
      >
        <i className="fab fa-google text-xl mr-2"></i> {/* Google Icon */}
        Login with Google
      </button>

      <button
        type="button"
        onClick={handleFacebookClick}
        className="flex items-center justify-center bg-white border border-gray-300 text-gray-800 rounded-lg p-3 uppercase shadow-lg hover:shadow-2xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 w-full transition duration-200"
      >
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" />
        <i className="fab fa-facebook text-xl mr-2"></i> {/* Facebook Icon */}
        Login with Facebook
      </button>
    </div>
  );
}
