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
                label="School Name"
                required
                v-model="name"
               ></v-text-field>
              <v-text-field
                label="Slogram"
                required
                v-model="slogram"
               ></v-text-field>
              <br>
              <v-text-field
                label="Description"
                type="text"
                v-model="description"
              ></v-text-field>
              <br>        
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn
          color="primary"
          @click="create"
          small
          round>
        <v-icon class="pr-2">mdi-content-save</v-icon>Save
        </v-btn>
      </v-card-actions>
      <helper-alert :error="error" />
    </v-card>
</template>

<script>
import SchoolService from '@/api/SchoolService'

export default {
  data () {
    return {
      title_name: "Basic Info",
      name: '',
      slogram: '',
      description: '',
      error: null,
    }
  },
  methods: {
    async create () {
      try {
        await SchoolService.post({
          name: this.name,
          slogram: this.slogram,
          description: this.description
        })
        this.name = null,
        this.slogram = null,
        this.description = null
        this.$router.back()   
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
