import SignUpPage from './SignUpPage.vue';
import { render, screen } from '@testing-library/vue';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import axios from 'axios';

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
            const input = screen.queryByRole("button", { name: "Sign Up" });
            expect(input).toBeInTheDocument();
            expect(input).toBeDisabled();
        })
    });

    describe('Interactions', () => {
        it('enables the button when the password and password repeat fields have the same values', async () => {
            render(SignUpPage);
            const passwordInput = screen.queryByLabelText("Password")
            const repeatPasswordInput = screen.queryByLabelText("Repeat Password")
            await userEvent.type(passwordInput, "P4ssword");
            await userEvent.type(repeatPasswordInput, "P4ssword");

            const input = screen.queryByRole("button", { name: "Sign Up" });
            expect(input).toBeInTheDocument();
            expect(input).toBeEnabled();
        })

        it('sends username, email and password to backend after clicking the button', async () => {
            render(SignUpPage);
            const usernameInput = screen.queryByLabelText("Username")
            const emailInput = screen.queryByLabelText("E-mail")
            const passwordInput = screen.queryByLabelText("Password")
            const repeatPasswordInput = screen.queryByLabelText("Repeat Password")
            await userEvent.type(usernameInput, "user1");
            await userEvent.type(emailInput, "user@email");
            await userEvent.type(passwordInput, "P4ssword");
            await userEvent.type(repeatPasswordInput, "P4ssword");

            const button = screen.queryByRole("button", { name: "Sign Up" });

            
            let mock = jest.fn();
            axios.post = mock;
            
            await userEvent.click(button);

            const firstCall = mock.mock.calls[0];
            const body = firstCall[1];
            expect(body).toEqual({ username: 'user1', email: 'user@email', password: 'P4ssword' });
        })
    });
});