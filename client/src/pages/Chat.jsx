import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import {
  OuterContainer,
  Row,
} from '../styles/components/UI/TextContainer/text-container.styled-components'

import TextContainer from '../components/IU/TextContainer/TextContainer';
import Messages from '../components/IU/Messages/Messages';
import InfoBar from '../components/IU/InfoBar/InfoBar';
import Input from '../components/IU/Input/Input';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'http://localhost:5000/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message ]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    })

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <OuterContainer>
      <div className="container-fluid p-0">
        <InfoBar room={room} />
        <Row className="row">
          <div className="col-9 p-0">
            <Messages messages={messages} name={name} />
          </div>
          <div className="col-3 p-0">
            <TextContainer users={users}/>
          </div>
        </Row>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </OuterContainer>
  );
}

export default Chat;
