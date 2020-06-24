
import VueJwtDecode from "vue-jwt-decode";
import AccountService from '@/services/accountService';


export default {
    name: 'Account',
    data() {
        return {
            user: {},
         
            
        }
    },
    methods: {
        async getData() {
          
            const response = await AccountService.getUser()
            this.user = response.data;
            this.user.birthDate = new Date(this.user.birthDate).toDateString()
            alert(this.user.birthDate)
 
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
    created() {
        

        this.getUserDetails(); // need this in other pages
    },    
    mounted(){

        this.getData(); //get data from the user

    },
    
};