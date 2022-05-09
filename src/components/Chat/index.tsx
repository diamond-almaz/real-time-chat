import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  collection, doc, serverTimestamp, addDoc,
} from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../..';
import { ChatSendMessageForm } from './ChatSendMessageForm';
import { ChatMessageItem } from './ChatMessageItem';
import { IChatMessageItemProps } from '../../utils/types';

export const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    collection(firestore, 'messages'),
  );

  const sendMessage = async (message: string) => {
    try {
      await addDoc(collection(firestore, 'messages'), {
        uid: user?.uid,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
        text: message,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='h-4/5 w-3/5 flex flex-col justify-between'>

      <div className='h-3/5 border rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-3 overflow-auto'>
        {messages?.map((message) => (
          <ChatMessageItem
            key={message.createdAt}
            me={user?.uid === message.uid}
            {...message as IChatMessageItemProps}
          />
        ))}
      </div>

      <ChatSendMessageForm
        sendMessage={sendMessage}
      />

    </div>
  );
};
