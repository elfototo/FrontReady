import {ModalComponent} from "./ModalComponent";
import {render, screen} from "@testing-library/react";
import {describe, it, expect, vi} from "vitest";
import userEvent from "@testing-library/user-event";

describe("ModalComponent", () => {
    it("renders children when mounted", () => {
        render(
            <ModalComponent onClose={vi.fn()}>
                <h2>title1</h2>
                <p>content</p>
            </ModalComponent>
        );

        expect(screen.getByRole("heading", {name: "title1"})).toBeInTheDocument();

        expect(screen.getByText("content")).toBeInTheDocument();
    });

    it("calls onClose when the component button is clecked", async () => {
        const user = userEvent.setup();
        const onClose = vi.fn();

        render(
            <ModalComponent onClose={onClose}>
                <h2>title1</h2>
                <p>content</p>
            </ModalComponent>
        );

        await user.click(screen.getByRole("button"));

        expect(onClose).toHaveBeenCalled();
    });

    it("calls onClose when the overlay is clicked", async () => {
        const user = userEvent.setup();
        const onClose = vi.fn();

        render(
            <ModalComponent onClose={onClose}>
                <h2>title1</h2>
                <p>content</p>
            </ModalComponent>
        );

        await user.click(screen.getByTestId("modal-overlay"));

        expect(onClose).toHaveBeenCalled();
    });

    it("doesn't close when the button inside modal is clicked", async () => {
        const user = userEvent.setup();
        const onClose = vi.fn();

         render(
            <ModalComponent onClose={onClose}>
                <button>Inside button</button>
            </ModalComponent>
        );

        await user.click(screen.getByRole("button", {name: "Inside button"}));

        expect(onClose).not.toHaveBeenCalled();
    })
})