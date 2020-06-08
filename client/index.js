import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

new Vue({
  el: '#app', // указываем корневой элемент (selector id)
  data() {
    return {
      form: {
        name: '',
        value: ''
      },
      contacts: []
    }
  },
  methods: {
    createContact() {
      const {...contact} = this.form; // создаем объект contact деструктуризацией
      console.log(contact);

      this.contacts.push({...contact, id: Date.now()});

      this.form.name = ''; // очищаем inputs
      this.form.value = '';
    }
  }
})