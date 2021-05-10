Vue.config.devtools = true;

let app = new Vue({
    el: "#root",
    data: {
        rooms: null,
        room: {}
    },
    methods: {
        getRoomDetails(id) {
            axios.get(`http://localhost/66/esercizi/db-hotel/es3/stanze.php?id=${id}`)
                .then((response) => {
                    this.room = response.data.response[0]
                    console.log(this.room);
                });
        }
    },
    mounted() {
        axios.get("http://localhost/66/esercizi/db-hotel/es3/stanze.php")
            .then((response) => {
                this.rooms = response.data.response
            });
    },
})