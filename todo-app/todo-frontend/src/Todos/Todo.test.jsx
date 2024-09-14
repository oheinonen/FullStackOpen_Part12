import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Todo from "./Todo";

describe("Todo component", () => {
  it("renders todo item correctly", () => {
    const todo = { id: 1, text: "Test Todo", completed: false };

    render(
      <Todo
        todo={todo}
        deleteTodo={() => console.log("Todo deleted")}
        completeTodo={() => console.log("Todo completed")}
      />
    );

    expect(screen.getByText("Test Todo")).toBeDefined();
  });
});
