import React, { useState } from "react";
import {
  Container,
  Form,
  Input,
  Text,
  SubmitButton,
  PersonPhoto,
  AddPhotoButton,
  Select,
} from "./style";
import BillyJimBobWithAWig from "../../resource/images/avatar.png";

const AdminForm = () => {
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const options = [
    { key: 1, text: "Select Month"},
    { key: 2, text: "January"},
    { key: 3, text: "Febuary"},
    { key: 4, text: "March"},
    { key: 5, text: "April"},
    { key: 6, text: "May"},
    { key: 7, text: "June"},
    { key: 8, text: "July"},
    { key: 9, text: "August"},
    { key: 10, text: "September"},
    { key: 11, text: "October"},
    { key: 12, text: "November"},
    { key: 13, text: "December"},
  ];

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Text>Date</Text>
        <Form onSubmit={onSubmit}>
          <Select>
            {options.map((option) => (
              <option key={option.key} value={option.text}>
                {option.text}
              </option>
            ))}
          </Select>
      < br />
          <Input
            type="text"
            value={year}
            placeholder="Year"
            onChange={(event) => setYear(event.target.value)}
          />
        </Form>
        <Text>Introductions</Text>
        <PersonPhoto src={BillyJimBobWithAWig} alt="Person Photo" />
        {/* need upload photot option */}
        <AddPhotoButton placeholder="Add Photo" type="submit">
          Add Photo
        </AddPhotoButton>
        <Form>
          <Input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <Input
            type="text"
            value={description}
            placeholder="Description"
            onChange={(event) => setDescription(event.target.value)}
          />
          <br />
          <SubmitButton placeholder="Add Person" type="submit">
            Add Another Person
          </SubmitButton>

          <Input
            type="text"
            value={year}
            placeholder="Year"
            onChange={(event) => setYear(event.target.value)}
          />
        </Form>
        <Text>Trainings</Text>
        <PersonPhoto src={BillyJimBobWithAWig} alt="Person Photo" />
        {/* need upload photot option */}
        <AddPhotoButton placeholder="Add Photo" type="submit">
          Add Photo
        </AddPhotoButton>
        <Form>
          <Input
            type="text"
            value={name}
            placeholder="Training Title"
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <Input
            type="text"
            value={description}
            placeholder="Traning Description"
            onChange={(event) => setDescription(event.target.value)}
          />
          <br />
          <Input
            type="text"
            value={description}
            placeholder="Role"
            onChange={(event) => setDescription(event.target.value)}
          />
          <SubmitButton placeholder="Add Person" type="submit">
            Add Another Person
          </SubmitButton>
        </Form>

        
      </Container>
    </>
  );
};

export default AdminForm;
