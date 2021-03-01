const app = Vue.createApp({
    data(){
        return {
            firstname: 'John',
            lastname: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            welcome_message: 'Random User Generator Using Vue Js',
            developer:'Afolabi Abiodun'
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const data = await res.json();

            console.log(data);

            this.firstname = data.results[0].name.first;
            this.lastname = data.results[0].name.last;
            this.email = data.results[0].email;
            this.gender = data.results[0].gender;
            this.picture = data.results[0].picture.large;
        }
    }
});

app.mount('#app');