import React from "react";
import renderer from "react-test-renderer";
import LanguageList from "../languageList";

it("matches snapshot", () => {
  const tree = renderer.create(<LanguageList />).toJSON();
  expect(tree).toMatchSnapshot();
});
