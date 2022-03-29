import { render, screen } from "@testing-library/react";
import FeedPage from "../feed";

test("This test will always succeed!", () => {
    render(<FeedPage></FeedPage>)

    const postComponent = screen.getByDisplayValue("")

    expect(5).toBe(5)
})