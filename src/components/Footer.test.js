import React from 'react';
import {render, screen} from "@testing-library/react";
import Footer from "./Footer";

test("footer should be rendered", ()=> {
    render(<Footer/>);
    const copyRightElement = screen.getByTestId("copyright-text");
    expect(copyRightElement).exist;
});

test("footer should have correct text ", ()=> {
    render(<Footer/>);
    const copyRightElement = screen.getByTestId("copyright-text");
    expect(copyRightElement.innerHTML).toBe("© Jewel Garden - All Right Reserved");
});