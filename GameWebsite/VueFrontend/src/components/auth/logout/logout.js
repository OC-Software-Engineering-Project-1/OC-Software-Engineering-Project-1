export default {
    data() {
        return {
            logout: {
                email: "",
                password: ""
            }
        };
    },
    
    
    methods: {
        logoutUser: function(){
         localStorage.setItem("jwt", "");
            if(localStorage.getItem("jwt")== ""){
            
                this.$router.push("/");
            }
        }
           
    },
};