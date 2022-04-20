import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

export const GetData = async () => {
  const [lastDoc, setlastDoc] = useState(null);
  const [Data, setData] = useState([]);

  const db = firestore().collection('SneakerDatabase');
  const snapshot = await db.orderBy('id').get();
  if (!snapshot.empty) {
    let newDatabase = [];
    setlastDoc(snapshot.docs[snapshot.docs.length - 1]);

    for (let i = 0; i < snapshot.docs.length; i++) {
      newDatabase.push(snapshot.docs[i].data());
    }

    setData(newDatabase);
  } else {
    setlastDoc(null);
  }
};

export const UploadImage = ({image}) => {
  const uid = useSelector(state => state?.auth?.accessToken);
  try {
    firestore().collection('users').doc(uid).update({
      Image: image,
    });
  } catch (error) {
    alert(error.message);
  }
};

export const UploadData = ({detail}) =>{
  const uid = useSelector(state => state?.auth?.accessToken);
  try {
    firestore().collection('users').doc(uid).update({
      detail: detail,
    });
  } catch (error) {
    alert(error.message);
  }
};

