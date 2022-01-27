import SignUpPage from './SignUpPage.vue';
import {render, screen } from '@testing-library/vue';

it('has Sign Up Header', () => {
    render(SignUpPage);
    expect(screen.queryByRole('heading', {name: 'Sign Up'})).not.toBeNull();

})