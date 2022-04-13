import React from "react";
import { ReactFormGenerator } from "react-form-builder2";
import "react-form-builder2/dist/app.css";

export const FormRender = (props) => {
  const data = Object.values(props.data)[0];

  const onSubmit = (d) => {};

  return (
    <ReactFormGenerator
      download_path=""
      back_action="/"
      back_name="Back"
      answer_data={props.answer_data}
      action_name="Save"
      form_action="/"
      form_method="POST"
      onSubmit={onSubmit}
      // variables={variables}
      data={data}
      read_only={props.readOnly}
    />
  );
};
