import SignUpPage from './SignUpPage.vue';
import { render, screen } from '@testing-library/vue';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Sign Up Page", () => {
    describe("Layout", () => {
        it('has Sign Up Header', () => {
            render(SignUpPage);
            expect(screen.queryByRole('heading', { name: 'Sign Up' })).toBeInTheDocument();
        })
        it('has username input', () => {
            render(SignUpPage);
            const input = screen.queryByLabelText("Username");
            expect(input).toBeInTheDocument();
        })
        it('has email input', () => {
            render(SignUpPage);
            const input = screen.queryByLabelText("E-mail");
            expect(input).toBeInTheDocument();
        })
        it('has password input', () => {
            render(SignUpPage);
            const input = screen.queryByLabelText("Password");
            expect(input).toBeInTheDocument();
            expect(input.type).toBe("password");
        })
        it('has repeat password input', () => {
            render(SignUpPage);
            const input = screen.queryByLabelText("Repeat Password");
            expect(input).toBeInTheDocument();
            expect(input.type).toBe("password");
        })
        it('disables the button initially', () => {
            render(SignUpPage);
            const input = screen.queryByRole("button", {name: "Sign Up"});
            expect(input).toBeInTheDocument();
            expect(input).toBeDisabled();
        })
    });

    describe('Interactions', () => {
        // it('enables the button when the password and password repeat fields have the same values', async () => {
        //     render(SignUpPage);
        //     const passwordInput = screen.queryAllByAltText("Password")
        //     const repeatPasswordInput = screen.queryAllByAltText("Repeat Password")
        //     await userEvent.type(passwordInput, "P4ssword");
        //     await userEvent.type(repeatPasswordInput, "P4ssword");

        //     const input = screen.queryByRole("button", { name: "Sign Up" });
        //     expect(input).toBeInTheDocument();
        //     expect(input).toBeEnabled();
        // })
    });
});