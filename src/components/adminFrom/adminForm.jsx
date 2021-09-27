import React, { useState } from "react";
import {
  Container,
  Form,
  Input,
  Text,
  SubmitButton,
  PersonPhoto,
  AddPhotoButton,
  // SelectDrop,
} from "./style";
// import { Dropdown, Menu } from "semantic-ui-react";
import BillyJimBobWithAWig from "../../resource/images/avatar.png";

const AdminForm = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // const options = [
  //   { key: 1, text: "January", value: 1 },
  //   { key: 2, text: "Febuary", value: 2 },
  //   { key: 3, text: "March", value: 3 },
  //   { key: 4, text: "April", value: 4 },
  //   { key: 5, text: "May", value: 5 },
  //   { key: 6, text: "June", value: 6 },
  //   { key: 7, text: "July", value: 7 },
  //   { key: 8, text: "August", value: 8 },
  //   { key: 9, text: "September", value: 9 },
  //   { key: 10, text: "October", value: 10 },
  //   { key: 11, text: "November", value: 11 },
  //   { key: 12, text: "December", value: 12 },
  // ];

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Text>Date</Text>
        <Form onSubmit={onSubmit}>
          {/* <Menu compact>
            <Dropdown text="Dropdown" options={options}  />
          </Menu> */}
          {/* <SelectDrop>
            <option>January</option>

            <option>Feburary</option>

            <option>March</option>

            <option>April</option>

            <option>May</option>

            <option>June</option>

            <option>July</option>

            <option>August</option>

            <option>September</option>

            <option>October</option>

            <option>November</option>

            <option>December</option>
          </SelectDrop> */}
          <Input
            type="text"
            value={month}
            placeholder="Month"
            onChange={(event) => setMonth(event.target.value)}
          />
          <br />
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
        </Form>
      </Container>
    </>
  );
};

export default AdminForm;
