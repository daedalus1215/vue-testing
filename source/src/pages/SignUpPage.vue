<template>
  <div>
    <h1>Sign Up</h1>

    <label for="username">Username</label>
    <input placeholder="username" id="username" :value="username" />

    <label for="email">E-mail</label>
    <input placeholder="email" id="email" :value="email" />

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

    <button :disabled="isDisabledComputed">Sign Up</button>
  </div>
</template>

<script>
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