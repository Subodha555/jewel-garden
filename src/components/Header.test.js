import {render, screen} from "@testing-library/react";
import Header from "./Header";

test("Logo should be rendered", ()=> {
    render(<Header/>);
    const logo = screen.getByTestId("logo-container");
    expect(logo).exist;
});