import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Container,
  Form,
  Input,
  Text,
  SubmitButton,
  PersonPhoto,
  Select,
} from "./style";

const AdminForm = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [introDescription, setIntroDescription] = useState("");
  const [introImage, setIntroImage] = useState("");
  const [trainingTitle, setTrainingTitle] = useState("");
  const [presenter, setPresenter] = useState("");
  const [trainingDescription, setTrainingDescription] = useState("");
  const [role, setRole] = useState("");
  const [trainingImage, setTrainingImage] = useState("");
  const url = "https://banyan-cmc-backend.herokuapp.com/api/month";
  const options = [
    { key: 1, text: "Select Month" },
    { key: 2, text: "January" },
    { key: 3, text: "February" },
    { key: 4, text: "March" },
    { key: 5, text: "April" },
    { key: 6, text: "May" },
    { key: 7, text: "June" },
    { key: 8, text: "July" },
    { key: 9, text: "August" },
    { key: 10, text: "September" },
    { key: 11, text: "October" },
    { key: 12, text: "November" },
    { key: 13, text: "December" },
  ];
  const postObject = {
    month: month,
    year: year,
    introductions: {
      name: name,
      introImage: introImage,
      introDescription: introDescription,
    },
    trainings: {
      trainingTitle: trainingTitle,
      presenter: presenter,
      trainingDescription: trainingDescription,
      role: role,
      trainingImage: trainingImage,
    },
  };

  function createPost() {
    axios({
      method: "post",
      url: url,
      data: postObject,
    })
      .then((res) => console.log("success", res.data))
      .catch((error) => console.log(error));
  }

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Text>Date</Text>
          <Select onChange={(e) => setMonth(e.currentTarget.value)}>
            {options.map((option) => (
              <option key={option.key} value={option.text}>
                {option.text}
              </option>
            ))}
          </Select>
          <br />
          <Input
            title={"Year"}
            type={"string"}
            idValue={"year"}
            onChange={(e) => setYear(e.currentTarget.value)}
            inputType={"input"}
            placeholder={"Year"}
          />
          <Text>Introductions</Text>
          <PersonPhoto
            title={"Image"}
            type={"string"}
            idValue={"image"}
            onChange={(e) => setIntroImage(e.currentTarget.value)}
            inputType={"input"}
          />
          <br />
          <Input
            title={"Name"}
            type={"name"}
            idValue={"name"}
            onChange={(e) => setName(e.currentTarget.value)}
            inputType={"input"}
            placeholder={"Name"}
          />
          <br />
          <Input
            title={"IntroDescription"}
            type={"introDescription"}
            idValue={"introDescription"}
            onChange={(e) => setIntroDescription(e.currentTarget.value)}
            inputType={"input"}
            placeholder={"Description"}
          />
        </Form>
        <br />
        <Form>
          <Text>Trainings</Text>
          <PersonPhoto
            title={"TrainingImage"}
            type={"string"}
            idValue={"trainingImage"}
            onChange={(e) => setTrainingImage(e.currentTarget.value)}
            inputType={"input"}
          />
          <br />
          <Input
            title={"TrainingTitle"}
            type={"trainingTitle"}
            idValue={"trainingTitle"}
            onChange={(e) => setTrainingTitle(e.currentTarget.value)}
            inputType={"input"}
            placeholder={"Training Title"}
          />
          <br />
          <Input
            title={"TrainingDescription"}
            type={"trainingDescription"}
            idValue={"trainingDescription"}
            onChange={(e) => setTrainingDescription(e.currentTarget.value)}
            inputType={"input"}
            placeholder={"Training Description"}
          />
          <br />
          <Input
            title={"Presenter"}
            type={"presenter"}
            idValue={"presenter"}
            onChange={(e) => setPresenter(e.currentTarget.value)}
            inputType={"input"}
            placeholder={"Presenter"}
          />
          <br />
          <Input
            title={"Role"}
            type={"role"}
            idValue={"role"}
            onChange={(e) => setRole(e.currentTarget.value)}
            inputType={"input"}
            placeholder={"Role"}
          />
          <br />
          <SubmitButton onClick={createPost} placeholder="Submit" type="submit">
            Submit
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
};

export default AdminForm;
