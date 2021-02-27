import React from 'react';

import {
  Form,
  InputText,
  SendBtn,
} from '../../../styles/components/UI/Input/input.styled-components'

const Input = ({ setMessage, sendMessage, message }) => (
  <Form className="form">
    <InputText
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <SendBtn
      className="sendButton"
      onClick={e => sendMessage(e)}
    >
      Send
    </SendBtn>
  </Form>
)

export default Input;