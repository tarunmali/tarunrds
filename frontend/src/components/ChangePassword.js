import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./sql.css";
import { useNavigate } from "react-router";

function ChangePassword() {

  let navigate= useNavigate();


  const initialValues = {
    Password: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    Password: Yup.string().min(3).max(15).required("Password required"),
    confirmPassword: Yup.string().required("Confirm Password required"),
    // username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    axios.post(`${process.env.REACT_APP_DATA}/Api/posts`, data,
    {headers:{accessToken: sessionStorage.getItem("accessToken")}}
    ).then((response) => {
      navigate("/Posts");
    });
  };
  return (


    (
      <>
      <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label ></label>
          <ErrorMessage name="Password" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="Password"
            placeholder="New Password"
          />
          <label></label>
          <ErrorMessage name="postText" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="Confirm password"
          />
          <label></label>
          <ErrorMessage name="username" component="span" />
          {/* <Field
            autocomplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="Name..."
          /> */}

          <button type="submit"> Change password</button>
        </Form>
      </Formik>
    </div>
    </>
    )


    
        
  );
        
}

export default ChangePassword;