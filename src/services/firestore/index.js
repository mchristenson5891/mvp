import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  setDoc,
  doc,
  arrayUnion,
  updateDoc,
  query,
  where,
  arrayRemove,
} from 'firebase/firestore';

const db = getFirestore();

const moviesRef = collection(db, 'movies');

export const getLikes = async (uid) => {
  const docRef = doc(db, 'movies', `${uid}`);
  const querySnapshot = await getDoc(docRef);
  return querySnapshot.data();
};

export const doLikeMovie = async (movieId, uid) => {
  try {
    await setDoc(
      doc(db, 'movies', String(movieId)),
      {
        likes: arrayUnion(uid),
      },
      { merge: true }
    );
  } catch (err) {
    console.error(err);
  }
};
export const doRemoveLikeMovie = async (movieId, uid) => {
  try {
    await setDoc(
      doc(db, 'movies', String(movieId)),
      {
        likes: arrayRemove(uid),
      },
      { merge: true }
    );
  } catch (err) {
    console.error(err);
  }
};
