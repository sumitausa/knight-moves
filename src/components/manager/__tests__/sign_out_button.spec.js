import React from "react";
import { shallow } from "enzyme";
import { BaseSignOutButton } from "../sign_out_button";
import Button from "react-bootstrap/Button";

const mockProps = {
  firebase: {
    doSignOut: jest.fn()
  }
};

describe("Sign Out Button", () => {
  it("renders a single Button", () => {
    const wrapper = shallow(<BaseSignOutButton {...mockProps} />);

    expect(wrapper.find(Button).length).toBe(1);
  });
});
