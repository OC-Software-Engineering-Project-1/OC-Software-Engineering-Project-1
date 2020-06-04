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
            this.$http.post("http://localhost:3000/users/logout").then(function(){
                
            }, function(error){
                alert(error);
            })
            
        }
           
    },
};