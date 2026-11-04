import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Avatar from "./AvatarBadge";
import {describe, it, expect, vi} from "vitest";

describe("avatar", () => {
    it("shows initials when name is provided but src is missing" , () => {
        render(<Avatar name="Anna Smith" status="online"/>)

        const initials = screen.getByText("AS");

        expect(initials).toHaveTextContent("AS");
    });

    it("shows initials when name includes only one word", () => {
        render(<Avatar name="Max" status="online"/>)

        const initials = screen.getByText("M");

        expect(initials).toHaveTextContent("M");
    });

    it("shows initials if img haven't reloaded" , () => {

        render(<Avatar name="Anna Smith" status="online" src="../non-existand-img.png"/>)

        const image = screen.getByRole("img");

        fireEvent.error(image);

        const initials = screen.getByText("AS");
        expect(initials).toBeInTheDocument();
    })
})