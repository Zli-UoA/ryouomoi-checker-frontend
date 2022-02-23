import React from 'react';

type MessageProps = {
  content: string;
  color: 'gray' | 'primary';
};

const Message: React.VFC<MessageProps> = ({
  content, color,
}) => (
  <div className="message">
    <div className={`message__cover--color_${color}`}>
      <p className={`message__content--color_${color}`}>{content}</p>
    </div>
  </div>
);

export default Message;
