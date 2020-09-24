<template>
  <div class="Login">
    Login
  </div>
</template>

<script>
import * as types from "@/store/action-types";
import { createNamespacedHelpers } from "vuex";
let { mapActions } = createNamespacedHelpers("user");

export default {
  name: "Login",
  methods: {
    ...mapActions([types.USER_LOGIN]),
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            //  let { data } =
            await this[types.USER_LOGIN]({
              ...this.ruleForm,
              uid: this.uid,
            });
            this.$router.push("/");
          } catch (e) {
            this.$message({ type: "error", message: e });
          }
        } else {
          alert("失败");
          return false;
        }
      });
    },
  },
};
</script>
