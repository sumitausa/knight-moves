import React from "react";
import { shallow } from "enzyme";
import MenuItem from "../menu_item";

describe("Menu", () => {
  const mockProps = {
    item: {
      name: "testItem",
      price: "40",
      description: "a test item, used for testing"
    }
  };

  it.each`
    enzymeid                    | expectedText
    ${"menu.item.price"}        | ${"$40"}
    ${"menu.item.nameAndPrice"} | ${"testItem$40"}
    ${"menu.item.description"}  | ${"a test item, used for testing"}
  `("renders the element correctly", ({ enzymeid, expectedText }) => {
    const wrapper = shallow(<MenuItem {...mockProps} />);

    expect(wrapper.find({ enzymeid: enzymeid }).text()).toBe(expectedText);
    wrapper.unmount();
  });
});
