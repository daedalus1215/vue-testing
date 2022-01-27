const SignUpPage = require('./SignUpPage.vue');
const {render, screen } = require('@testing-library/vue');

it('has Sign Up Header', () => {
    render(SignUpPage);
    expect(screen.queryByRole('heading', {name: 'Sign Up'})).not.toBeNull();

})