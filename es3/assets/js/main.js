Vue.config.devtools = true;

let app = new Vue({
    el: "#root",
    data: {
        rooms: null,
        room: null
    },
    methods: {
        getRoomDetails(id) {
            axios.get(`./stanze.php?id=${id}`)
                .then((response) => {
                    this.room = response.data.response[0]
                });
        }
    },
    mounted() {
        axios.get("./stanze.php")
            .then((response) => {
                this.rooms = response.data.response
            });
    },
})