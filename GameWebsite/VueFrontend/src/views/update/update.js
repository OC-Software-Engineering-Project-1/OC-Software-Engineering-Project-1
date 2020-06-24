import VueJwtDecode from "vue-jwt-decode";
import AccountService from '@/services/accountService';


export default {
    name: 'Update',
    data() {
        return {
            user: {
                firstName: "",
                lastName: "",
                birthDate: "",
                nickName: "",
                email: "",
                password: ""
            }
        };
            
        
    },
    methods: {
        async getData() {
          
            const response = await AccountService.getUser()
            this.user = response.data;
  
 
        },
        async updateUser() {
            
            const response = await AccountService.updateUser()
            this.user = response.data;
            
            
        },
        
        getUserDetails() {
            let token = localStorage.getItem("jwt");
            let decoded = VueJwtDecode.decode(token);
            this.user = decoded;
            if (localStorage.getItem("jwt") == "") {
                this.$router.push("/")
                alert("Need to be authenticated")
            }
            
        },
        
    },
    mounted(){

        this.getData(); //get data from the user
        

    }, 
    created() {
        
        
        this.getUserDetails(); // need this in other pages
        
    },
       
   
    
};