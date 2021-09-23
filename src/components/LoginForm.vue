<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">ID</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="text" id="password" v-model="password" />
    </div>
    <button type="submit" v-bind:disabled="!isUsernameValid || !password">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        // 비지니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data.user.username);
        this.logMessage = `${data.user.username} 님이 환영합니다.`;
        // this.initForm();
      } catch (error) {
        // 에러 핸들링
        //alert(error.response.data);
        this.logMessage = error.response.data;
        // this.initForm();
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
