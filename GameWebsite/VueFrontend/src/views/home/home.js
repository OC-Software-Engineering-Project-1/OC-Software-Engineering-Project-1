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
            if (localStorage.getItem("jwt")==""){
                this.$router.push("/")
                alert("Need to be authenticated")
            }


        },
        logUserOut() {
            localStorage.removeItem("jwt");
            this.$router.push("/");
        },
        logoutUser: function(){
            
               if(localStorage.getItem("jwt")== ""){
               
                   this.$router.push("/");
               }
           }
    },
    created() {
        this.getUserDetails(); // need this in other pages
    }
};