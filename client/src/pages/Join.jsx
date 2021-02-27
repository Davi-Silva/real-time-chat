import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {
  Div,
  Wrapper,
  Image,
  HeadlingUl,
  HeadingLi,
  Heading,
  Input,
  Button,
} from '../styles/pages/join.styled-components'

import msnLogo from '../assets/msn-logo.png'

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleRoom = (e) => {
    setRoom(e.target.value)
  }

  const handleSubmit = (e) => (!name || !room) ? e.preventDefault() : null

  return (
    <>
      <Div />
      <Wrapper>
        <HeadlingUl>
          <HeadingLi>
            <Image src={msnLogo}/>
          </HeadingLi>
          <HeadingLi 
            style={{
              marginLeft: '5px'
            }}
          >
            <Heading className="heading">
              MSN
            </Heading>
          </HeadingLi>
        </HeadlingUl>
        <Input 
          placeholder="Name"
          type="text"
          onChange={handleName} 
        />
        <br />
        <Input
          placeholder="Room"
          type="text"
          onChange={handleRoom}
        />
        <br />
        <Link 
          onClick={handleSubmit}
          to={`/chat?name=${name}&room=${room}`}
        >
          <Button
            type="submit"
          >
            Sign In
          </Button>
        </Link>
      </Wrapper>
    </>
  );
}
