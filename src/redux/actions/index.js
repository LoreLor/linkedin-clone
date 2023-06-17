import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../config/firebase";


import { 
    CREATE_POST_FAILURE, 
    CREATE_POST_REQUEST, 
    CREATE_POST_SUCCESS, 
    CREATE_USER_FAILURE, 
    CREATE_USER_REQUEST, 
    CREATE_USER_SUCCESS, 
    GET_POSTS_FAILURE, 
    GET_POSTS_REQUEST, 
    GET_POSTS_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST, 
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS
} from "./actionsType";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";



/*------------------------POSTS------------------------*/

export const getPosts = () => {
    return async (dispatch) => {
        dispatch({ 
            type: GET_POSTS_REQUEST
        });

        try {
            const querySnapshot = await getDocs(collection(db, 'posts'));
            const posts = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }));
            const sortedPosts = posts.sort((a, b) => b.data.createdAt - a.data.createdAt);

            dispatch({ 
                type: GET_POSTS_SUCCESS, 
                payload: sortedPosts 
            });
        } catch (error) {
            dispatch({ 
                type: GET_POSTS_FAILURE, 
                payload: error.message 
            });
        }
    };
};

export const createPost = (postData) => {
    return async(dispatch) => {
        dispatch({
            type: CREATE_POST_REQUEST,
        })

        try {
            const newPost = {
                ...postData
            }     
            const docRef = await addDoc(collection(db, 'posts'), newPost);
            dispatch({
                type: CREATE_POST_SUCCESS,
                payload: { id: docRef.id, ...newPost }
            })
        } catch (error) {
            dispatch({
                type: CREATE_POST_FAILURE,
                payload: error.message
            })
        }
    }
}

// const deletePost = async (postId) => {
//     try {
//       await deleteDoc(collection(db, 'posts'), postId);
//       console.log('Post eliminado con ID:', postId);
//     } catch (error) {
//       console.error('Error al eliminar el post:', error);
//     }
//   };


/*------------------------------------USER---------------------------------*/

export const login = (email, password) => {
    return async(dispatch) => {
        dispatch({
            type: LOGIN_REQUEST,
            payload: {
                email:email,
                password:password
            }
        });

        try {
            // verifico las credenciales de firebase
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            dispatch({
                type: LOGIN_SUCCESS,
                payload: user
            });

        } catch (error) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: error.message
            })
        }
    }
};

export const logout = () => {
    return async(dispatch) => {
        dispatch({
            type: LOGOUT_REQUEST
        });

        try {
            const signout = await signOut(auth);
            dispatch({
                type: LOGOUT_SUCCESS,
                payload: signout
            })
        } catch (error) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: error.message
            })
        }
    }
};

export const register = (email, password, userData) => {
    return async(dispatch) => {
        dispatch({
            type: CREATE_USER_REQUEST,
            payload: {
                email,
                password
            }
        })

        try {
            // Crea las credenciales de usuario en Firebase
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Actualiza la información adicional del usuario
            // Actualiza el perfil del usuario
            await updateProfile(user, {
            displayName: userData.name,
            photoURL: userData.profile
      });

            // Agrega datos adicionales del usuario a Firestore
            const usersCollection = collection(db, 'users');
            const newUserDoc = await addDoc(usersCollection, {
                displayName: userData.name,
                photoURL: userData.profile,
            });
            dispatch({
                type: CREATE_USER_SUCCESS,
                payload: newUserDoc.uid
            })
        } catch (error) {
            dispatch({
                type: CREATE_USER_FAILURE,
                payload: error.message
            })
        }
    }
}