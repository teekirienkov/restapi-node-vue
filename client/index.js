import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

new Vue({
  el: '#app', // указываем корневой элемент (selector id)
  data() {
    return {
      form: {
        name: '',
        value: ''
      }
    }
  },
  methods: {
    createContact() {
      console.log(this.form)
    }
  }
})