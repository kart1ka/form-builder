import React from "react";
import { ReactFormBuilder } from "react-form-builder2";
import "react-form-builder2/dist/app.css";

export const FormBuilder = (props) => {
  const onPost = (data) => {
    // Place code to post json data to server here
  };

  return (
    <div>
      <ReactFormBuilder onPost={onPost} />
    </div>
  );
};
