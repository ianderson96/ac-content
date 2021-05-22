import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("Renders the blog header", async () => {
    render(<App />);
    await screen.findByText(/Top article title/i).then(() => {
      const headerElement = screen.getByText(/The Ian Times/i);
      expect(headerElement).toBeInTheDocument();
    })
  });

  test("Renders the article if api response successful", async () => {
    render(<App />);
    const articleTitle = await screen.findByText(/Top article title/i);
    expect(articleTitle).toBeInTheDocument();
  });

  test("Renders loading state before api response", async () => {
    render(<App />);
    const loadingText = screen.getByText(/Loading/i);
    expect(loadingText).toBeInTheDocument();
    await screen.findByText(/Top article title/i);
  });
});
