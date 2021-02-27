import React from 'react';

import onlineIcon from '../../../assets/onlineIcon.png';

import {
  TextContainerDiv,
  PeopleOnlineContainer,
  PeopleOnline,
} from '../../../styles/components/UI/TextContainer/text-container.styled-components'

const TextContainer = ({ users }) => (
  <TextContainerDiv>
    {
      users
        ? (
          <PeopleOnlineContainer>
            <h1>Online:</h1>
            <PeopleOnline className="activeContainer">
              {users.map(({name}) => (
                <div key={name} className="activeItem">
                  <h2>
                    <img alt="Online Icon" src={onlineIcon}/>
                    {name}
                  </h2>
                </div>
              ))}
            </PeopleOnline>
          </PeopleOnlineContainer>
        )
        : null
    }
  </TextContainerDiv>
);

export default TextContainer;