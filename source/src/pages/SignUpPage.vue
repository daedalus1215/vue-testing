<template>
  <div>
    <h1>Sign Up</h1>

    <label for="username">Username</label>
    <input placeholder="username" id="username" v-model="username" />

    <label for="email">E-mail</label>
    <input placeholder="email" id="email" v-model="email" />

    <label for="password">Password</label>
    <input
      placeholder="password"
      id="password"
      type="password"
      v-model="password"
    />

    <label for="repeat-password">Repeat Password</label>
    <input
      placeholder="repeat password"
      id="repeat-password"
      type="password"
      v-model="repeatPassword"
    />

    <button :disabled="isDisabledComputed" @click="submit">Sign Up</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SignUpPage",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  methods: {
      submit() {
          axios.post('/api/1.0/users', {
              username: this.username,
              email: this.email,
              password: this.password
          })
      },
    onChangePassword(event) {
      this.password = event.target.value;
    },
    onChangeRepeatPassword(event) {
      this.repeatPassword = event.target.value;
    },
    isDisabled() {
      return this.password && this.repeatPassword
        ? this.password !== this.repeatPassword
        : true;
    },
  },
  computed: {
    isDisabledComputed() {
      return this.password && this.repeatPassword
        ? this.password !== this.repeatPassword
        : true;
    },
  },
};
</script>