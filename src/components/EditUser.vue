<template>
  <div>
    <h2>Edit A User</h2>
    <template v-if="isLoading">loading..</template>
    <template v-else>
      <form @submit.prevent="handleSubmit">
        <input type="text" name="firstName" v-model="input.firstName" placeholder="first name">
        <input type="text" name="middleName" v-model="input.middleName" placeholder="middle name">
        <input type="text" name="lastName" v-model="input.lastName" placeholder="last name">
        <input type="text" name="email" v-model="input.email" placeholder="email">
        <input type="text" name="title" v-model="input.title" placeholder="title">
        <input type="text" name="bio" v-model="input.bio" placeholder="bio">
        <input type="text" name="phone" v-model="input.phone" placeholder="phone">
        <input type="text" name="extension" v-model="input.extension" placeholder="extension">
        <button type="button" @click="resetForm">reset</button>
        <button type="submit">
          <span v-if="isCreateMode">Create</span>
          <span v-else>Update</span>
        </button>
      </form>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      default: () => {
        return {
          id: '',
          firstName: '',
          middleName: '',
          lastName: '',
          email: '',
          phone: '',
          title: '',
          bio: '',
          extension: ''
        }
      }
    }
  },
  data () {
    return {
      input: {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        title: '',
        bio: '',
        extension: ''
      },
      inputDefault: {},
      isLoading: false
    }
  },
  computed: {
    isCreateMode () {
      let id = this.$route.params.id
      return !id || id <= 0
    }
  },
  created () {
    // if external direct link, need to load the model state
    if (!this.isCreateMode && (!this.model || this.model.id <= 0)) {
      this.loadModel()
    } else {
      this.setupForm(this.model)
    }
  },
  methods: {
    loadModel () {
      this.isLoading = true
      let id = this.$route.params.id
      this.$http.get(`/users/${id}`)
        .then(response => {
          this.setupForm(response.data)
          this.isLoading = false
        })
    },
    handleSubmit () {
      this.isLoading = true
      let id = this.inputDefault.id
      if (this.isCreateMode) {
        this.$http
          .post('/users', this.input)
          .then(response => {
            this.setupForm(response.data)
            this.isLoading = false
          })
          .catch(error => {
            this.isLoading = false
            console.log(error)
          })
        return
      }
      this.$http
        .put(`/users/${id}`, this.input)
        .then(response => {
          this.setupForm(response.data)
          this.isLoading = false
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    },
    setupForm (model) {
      Object.assign(this.input, model)
      this.inputDefault = model
      delete this.input.id // plug leak, don't want to submit id.
    },
    resetForm () {
      Object.assign(this.input, this.inputDefault)
    }
  }
}
</script>
