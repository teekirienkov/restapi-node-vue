import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

Vue.component('loader', {
  template: `
    <div style="display: flex; justify-content: center; align-items: center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
     </div>`
})

new Vue({
  el: '#app', // указываем корневой элемент (selector id)
  data() {
    return {
      loading: false,
      form: {
        name: '',
        value: ''
      },
      contacts: []
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
      const mark = this.contacts.find(elem => elem.id === id); // находим определенный элемент по клику и id
      mark.marked = true;
    },
    removeContact(id) {
      this.contacts = this.contacts.filter(elem => elem.id !== id)
    }
  },
  async mounted() {
    this.loading = true;
    this.contacts = await request('/api/contacts');
    this.loading = false;
  }
})

async function request(url, method = 'GET', data = null) {
  try {
    const headers = {};
    let body

    if (data) {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: body
    });

    return await response.json()

  } catch (e) {
    console.log(`Error: ${e.message}`)
  }
}