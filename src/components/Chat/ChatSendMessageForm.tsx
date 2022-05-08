import React, { FC, useState } from 'react';
import { Button, Input } from 'antd';
const { TextArea } = Input;

interface IChatSendMessageFormProps {
  sendMessage: (message: string) => void;
}
export const ChatSendMessageForm: FC<IChatSendMessageFormProps> = ({ sendMessage }) => {
  const [value, setValue] = useState('');

  const changeValue = (ev: any) => {
    setValue(ev.currentTarget.value);
  };

  const onSend = () => {
    sendMessage(value);
    setValue('');
  };

  return (
    <div className='h-1/3 flex flex-col'>
      <TextArea
        placeholder='Введите сообщение'
        value={value}
        onChange={changeValue}
        autoSize={{ minRows: 4, maxRows: 4 }}
      />
      <Button className='mt-5 self-end' type="primary" shape="round" onClick={onSend}>
        Отправить сообщение
      </Button>

    </div>

  );
};
