<template>
  <div>
    <h1>Sign Up</h1>

    <label for="username">Username</label>
    <input placeholder="username" id="username" />

    <label for="email">E-mail</label>
    <input placeholder="email" id="email" />

    <label for="password">Password</label>
    <input placeholder="password" id="password" type="password" />

    <label for="repeat-password">Repeat Password</label>
    <input placeholder="repeat password" id="repeat-password" type="password" />

    <button :disabled="disabled">Sign Up</button>
  </div>
</template>

<script>
export default {
  name: "SignUpPage",
  data() {
    return {
      disabled: true,
    };
  },
};
</script>