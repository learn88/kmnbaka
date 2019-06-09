<template>
  <div>
    "OKOK"    
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      dialog: false,
    }
  },
  computed: {
    ...mapState({
      state: state=>state
    }),
    // isAuthenticated () {
    //   if (this.isUserLoggedIn) {
    //     if (this.$store.state.user.role === "admin") {
    //       return true;
    //     } else if (this.$store.state.user.role === "manager") {
    //       return true;
    //     } else if (this.$store.state.user.role === "editer") {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   } else {
    //     return false;
    //   }
    // }
  }
}
</script>

<style scoped>
  .icon-font {
    font-size: 1em;
    padding-left: 10px;
  }
</style>
