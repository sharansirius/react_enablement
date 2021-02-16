import React from "react";
import { Input, Form } from "../";
import PropTypes from "prop-types";
import STATIC_TEXT from "../../constants/staticText";
import "./search.scss"
export const Search = React.memo( ({onSubmit}) => {
  console.log("On Search Init");
  return (
    <div className="component_wrapper search_wrapper">
      <h3 className="card_heading">{STATIC_TEXT.TRAVEL_SEARCH_HEADING}</h3>
      <div className="search_form">
        <p>{STATIC_TEXT.TRAVEL_LIFE_INTRO}</p>
        <p>{STATIC_TEXT.TRAVEL_BOOK_HOLIDAYS}</p>
        <Form onFormSubmit={onSubmit}>
            <Input
            type="search"
            placeholder="Type your favourite destination here !"
            autofocus={true}
            specialClass="long"/>
        </Form>
      </div>
    </div>
  );
});

Search.propTypes = {
  onSubmit : PropTypes.func
};
