<template>
    <v-card>
      <v-card-title class="grey lighten-4 py-4 title">
        {{ title_name }}
        <v-spacer></v-spacer>
          <v-icon @click="$router.back()" color="error">mdi-close-circle</v-icon>
      </v-card-title>
      <v-container grid-list-sm class="pa-4">
        <v-layout row wrap>
          <v-flex xs12 sm6>
              <v-text-field
                 prepend-inner-icon="mdi-account"
                 label="Name"
                 v-model="name"
                 required
               ></v-text-field>
              <v-text-field
                 prepend-inner-icon="mdi-account"
                 label="Father Name"
                 v-model="father_name"
                 required
               ></v-text-field>
              <br>
              <v-text-field
                prepend-inner-icon="mdi-update"
                label="Date of Birth"
                type="text"
                v-model="dob"
              ></v-text-field>
              <br>        
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <!-- <v-spacer></v-spacer> -->
        <v-btn
          dark
          class="primary"
          @click="create"
          small
          round>
        <v-icon class="pr-2">mdi-content-save</v-icon> Save
        </v-btn>
      </v-card-actions>
      <helper-alert :error="error" />
    </v-card>
</template>

<script>
import StudentService from '@/api/StudentService'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      title_name: "New Student",
      name: '',
      father_name: '',
      dob: '',
      error: null
    }
  },
  computed: {
    ...mapState([
        'user'
    ])
  },
  methods: {
    async create () {
      try {
        await StudentService.post({
          name: this.name,
          father_name: this.father_name,
          dob: this.dob,
          school_id: this.user.school_id
        })
        this.name = null
        this.father_name = null
        this.dob = null
        this.$router.back()
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
