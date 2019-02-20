<template>
  <div>
    <h2>Users</h2>
    <template v-if="isLoading">loading..</template>
    <template v-else>
        <router-link :to="{ name: 'NewUser', params: {  }}">New</router-link>
      <br>
      <span v-for="user in users" v-bind:key="user.id">
        {{ user.email }} {{ user.firstName }} {{ user.middleName }} {{ user.lastName }}
        <router-link :to="{ name: 'EditUser', params: { id:user.id, model: user }}">Edit</router-link>
        <button type="button" v-on:click="deleteModel(user.id)">delete</button>
        <br>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [],
      isLoading: false
    }
  },
  created () {
    this.getDataFromApi()
  },
  methods: {
    getDataFromApi () {
      this.isLoading = true
      this.$http
        .get('/users')
        .then(response => {
          console.log(response)
          this.users = response.data.records
          this.isLoading = false
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    },
    deleteModel (id) {
      this.isLoading = true
      this.$http.delete(`/users/${id}`).then(resp => {
        this.getDataFromApi()
        this.isLoading = false
      }
      ).catch(error => {
        this.isLoading = false
        console.log(error)
      })
    }
  }
}
</script>
