<template>
  <v-app id="inspire" v-if="!isUserLoggedIn">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-2">
              <v-toolbar dark color="primary" class="elevation-2">
                <v-toolbar-title>LOG IN</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon small @click="$router.back()">mdi-close-circle</v-icon>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field 
                    prepend-icon="mdi-email" 
                    name="login" 
                    label="Login"
                    v-model="email"
                    :rules="emailRules"
                    required
                    ></v-text-field>
                  <v-text-field 
                    id="password" 
                    prepend-icon="mdi-lock" 
                    name="password" 
                    label="Password"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPass = !showPass"
                    :type="showPass ? 'text' : 'password'"
                    v-model="password"
                    ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn block color="secondary" @click="login">Login</v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn flat block @click="$router.back()">Forget your password ?</v-btn>
              </v-card-actions> 
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex'
// const { mapState, mapActions } = createNamespacedHelpers('auth')
import AuthenticationService from '@/api/AuthenticationService'
import { mapState } from 'vuex'

export default {
  props: {
    source: String
  },
  data () {
    return {
      drawer: null,
      // name: 'login',

      showPass: false,
      user: {
        email: '',
        password: ''
      },
      email: '',
      password: '',
      emailRules: [
         (v) => !!v || 'E-mail is required',
         (v) => /^\w+((\.-)?\w+)*@\w+((\.-)?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
       ],
      register: false,
      error: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setRole', response.data.user.role)
        this.email = null
        this.password = null
        this.$emit('cancel')
        this.$router.push({name: 'dashboard'})
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
