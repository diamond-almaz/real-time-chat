import { Avatar } from 'antd';
import React, { FC } from 'react';
import { IChatMessageItemProps } from '../../utils/types';

export const ChatMessageItem: FC<IChatMessageItemProps> = ({
  uid,
  displayName,
  photoURL,
  text,
  createdAt,
  me,
}) => {
  return (
    <div>
      <div className={`chatMessageItem${me ? '-me' : ''} p-1 mt-2 w-1/3 bg-white shadow-md`}>
        <div className='flex'>
          <div>
            <Avatar className='w-1/5' src={photoURL} />
          </div>
          <div className="ml-2 text-xs leading-none">
            <div className='font-bold text-slate-500'>
              {displayName}
            </div>
            <div className='mt-2 text-slate-500'>
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
