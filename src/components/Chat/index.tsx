import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  collection, doc, serverTimestamp, addDoc,
} from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../..';
import { ChatSendMessageForm } from './ChatSendMessageForm';

export const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    collection(firestore, 'messages'),
  );

  const sendMessage = async (message: string) => {
    try {
      const docRef = await addDoc(collection(firestore, 'messages'), {
        uid: user?.uid,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
        text: message,
        createdAt: serverTimestamp(),
      });
      console.log(docRef);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='h-4/5 w-3/5 flex flex-col justify-between'>
      <div className='h-3/5 border rounded-lg bg-white'>
        Chat
      </div>

      <ChatSendMessageForm
        sendMessage={sendMessage}
      />
    </div>
  );
};
