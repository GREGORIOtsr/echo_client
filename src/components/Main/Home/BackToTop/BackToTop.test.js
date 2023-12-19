import React from "react";
import { shallow } from "enzyme";
import BackToTop from "./BackToTop";

describe("BackToTop", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BackToTop />);
    expect(wrapper).toMatchSnapshot();
  });
});
