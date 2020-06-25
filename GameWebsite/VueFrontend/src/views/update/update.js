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
            this.user.birthDate = new Date(this.user.birthDate).toDateString()
            //alert(this.user.birthDate)
                
        },
        async updateUser() {
            try{
                //Delete these since the server doesn't allow the user to update them
            delete this.user.tokens;
            delete this.user._id;
            delete this.user.__v;
            delete this.user.createdAt;
            delete this.user.updatedAt;
            delete this.user.friendsList;
            delete this.user.isActive;
            delete this.user.gamesWon;
            const response = await AccountService.updateUser(this.user)
            // alert(response.status)
            this.user = response.data;
            }catch(e){
                alert(e)
            }
            
            
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