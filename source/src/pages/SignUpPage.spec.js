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
            const { container } = render(SignUpPage);
            expect(container.querySelector("input")).toBeInTheDocument();
        })
    });
});