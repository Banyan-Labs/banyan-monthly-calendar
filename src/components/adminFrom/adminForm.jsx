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
  AddPhotoButton,
  Select,
} from "./style";
// import Photo from "../../resource/images/avatar.png";

const AdminForm = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [introDescription, setIntroDescription] = useState("");
  const [introImage, setIntroImage] = useState("");
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
    year: year,
    month: month,
    trainings: {},
    introductions: {
      name: name,
      introImage: introImage,
      introDescription: introDescription,
    },
  };

  //   useEffect(() => {
  //   axios.get(url).then((response) => {
  //     postObject(response.data);
  //   });
  // }, []);

  function createPost() {
    //console.log("try to post", JSON.stringify(postObject, null, 4));

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
          <AddPhotoButton placeholder="Add Photo" type="submit">
            Add Photo
          </AddPhotoButton>
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
          <br />
          <SubmitButton
            onClick={createPost}
            placeholder="Add Person"
            type="submit"
          >
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
