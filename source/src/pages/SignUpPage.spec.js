import SignUpPage from './SignUpPage.vue';
import { render, screen } from '@testing-library/vue';
import "@testing-library/jest-dom";

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
        it('has Sign Up button', () => {
            render(SignUpPage);
            const input = screen.queryByRole("button", {name: "Sign Up"});
            expect(input).toBeInTheDocument();
            expect(input).toBeDisabled();

        })
    });
});