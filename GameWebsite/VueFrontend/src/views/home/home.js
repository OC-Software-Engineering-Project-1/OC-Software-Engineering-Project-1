import VueJwtDecode from "vue-jwt-decode";

export default {
    name: 'Home',
    props: {
        title: String
    },
    data() {
        return {
            //user: {
            //    firstName,
            //    email
            //},
        };
    },
    methods: {
        getUserDetails() {
            let token = localStorage.getItem("jwt");
            let decoded = VueJwtDecode.decode(token);
            this.user = decoded;
        },
        logUserOut() {
            localStorage.removeItem("jwt");
            this.$router.push("/");
        }
    },
    created() {
        this.getUserDetails();
    }
};