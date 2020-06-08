import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

new Vue({
  el: '#app', // указываем корневой элемент (selector id)
  data() {
    return {
      form: {
        name: '',
        value: ''
      },
      contacts: [
        {id: 1, name: 'Timur', value: '79255962222', marked: false}
        ]
    }
  },
  computed: {
    canCreate() {
      return this.form.value.trim() && this.form.name.trim() // возвращает true or false
    }
  },
  methods: {
    createContact() {
      const {...contact} = this.form; // создаем объект contact деструктуризацией

      this.contacts.push({...contact, id: Date.now(), marked: false});

      this.form.name = ''; // очищаем inputs
      this.form.value = '';
    },
    markContact(id) {
      console.log('click отметить')
      const mark = this.contacts.find(c => c.id === id);
      mark.marked = true;
    },
    removeContact(id) {

    }
  }
})