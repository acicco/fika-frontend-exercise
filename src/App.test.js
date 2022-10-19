import { render, screen } from "@testing-library/react";
import App from "./App";

test("Check that the text fika has been rendered", () => {
    render(<App />);
    const linkElement = screen.getByText(/fika/i);
    expect(linkElement).toBeInTheDocument();
});

test("Check that the text Search has been rendered", () => {
    render(<App />);
    const linkElement = screen.getByText(/Search/i);
    expect(linkElement).toBeInTheDocument();
});

test("Check that there is a search input of type input and has a class of search-input", () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("search-input");
    expect(inputElement).toHaveAttribute("placeholder", "Search for movies...");
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toBeInTheDocument();
});

test("Check that there is a search button of type button and has a class of search-button", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("search-button");
    expect(buttonElement).toHaveAttribute("type", "button");
    expect(buttonElement).toBeInTheDocument();
});

test("Check that there shouldn not be any movies", () => {
    render(<App />);
    const noMoviesElement = screen.getByText(/No movies were found/i);
    expect(noMoviesElement).toBeInTheDocument();
});
