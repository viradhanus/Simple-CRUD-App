import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Create() {
  const API_BASE_URL = process.env.REACT_APP_BASE_URL;
  const API_TOKEN = process.env.REACT_APP_CHOREO_TOKEN;

  let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  const sendDataToAPI = () => {
    api
      .post("/createUser", {
        firstName,
        lastName,
      })
      .then(() => {
        history.push("/read");
      });
  };
  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            name="fname"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lname"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={sendDataToAPI}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
