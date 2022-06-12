import {it, expect, describe} from "vitest";

import {mount} from "@vue/test-utils";

describe("HelloWorld", () => {

    it("renders properly", () => {
      	const wrapper = mount("", { props: {msg: "Works"} });
    	expect(wrapper.text()).toContain("Works");
  	});

});
