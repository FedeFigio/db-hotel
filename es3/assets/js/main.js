Vue.config.devtools = true;

let app = new Vue({
    el: "#root",
    data: {},
    methods: {},
    mounted() {
        axios.get("http://localhost/66/esercizi/db-hotel/es3/stanze.php")
            .then((response) => {
                console.log(response.data.response);
            });
    },
})