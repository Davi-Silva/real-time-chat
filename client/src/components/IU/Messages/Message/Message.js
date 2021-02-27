import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <ul className="ulMsg">
            <li className="liMsg">
              <p className="sentText currentUserName pr-10">{trimmedName}</p>
            </li>
            <li className="liMsg">
              <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
              </div>
            </li>
          </ul>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <ul className="ulMsg">
              <li className="liMsg">
                <p className="sentText pl-10 ">{user}</p>
              </li>
              <li className="liMsg">
                <div className="messageBox backgroundLight">
                  <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
              </li>
            </ul>
          </div>
        )
  );
}

export default Message;