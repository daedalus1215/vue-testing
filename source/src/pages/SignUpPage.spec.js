import SignUpPage from './SignUpPage.vue';
import {render, screen } from '@testing-library/vue';
import "@testing-library/jest-dom";

it('has Sign Up Header', () => {
    render(SignUpPage);
    expect(screen.queryByRole('heading', {name: 'Sign Up'})).toBeInTheDocument();
})