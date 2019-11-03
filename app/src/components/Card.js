import React from "react";
import styled from "styled-components";

const Card = ({ user }) => {
  return (
    <Div>
      <Img src={user["avatar_url"]} alt={user["login"]} />
      <h1>{user["name"]}</h1>
      <H2>{user["login"]}</H2>
      <p>Location: {user["location"] ? user["location"] : "Unknown"}</p>
      <p>
        Profile: <a href={user["html_url"]}>{user["html_url"]}</a>
      </p>
      <p>Followers: {user["followers"]}</p>
      <p>Following: {user["following"]}</p>
    </Div>
  );
};

const Div = styled.div`
  width: 30%;
  text-align: center;
  border: 2px solid black;
  margin: 10px 0;
  background-color: white;
`;

const Img = styled.img`
  margin-top: 10px;
  width: 90%;
`;

const H2 = styled.h2`
  font-style: italic;
`;

export default Card;
