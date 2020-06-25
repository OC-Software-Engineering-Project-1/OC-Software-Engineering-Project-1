import VueJwtDecode from "vue-jwt-decode";
import AccountService from "@/services/accountService";

export default {
  name: "Account",
  data() {
    return {
      user: {},
      file: null,
      error:""
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    async updateAvatar(){
        try{
         const response = await AccountService.updateAvatar(this.file);
         //alert(response.status)
         this.$refs["my-modal"].hide();
         location.reload();
        }catch(e){
            this.error="Select an image file that is at most 800 KB! "
            //alert(e)
        }
    },
    goBack(){
        this.$refs["my-modal"].hide();
        
    },
    async deleteAvatar(){
        await AccountService.deleteAvatar();
        this.$refs["my-modal"].hide();
        location.reload();
    },
    async getData() {
      const response = await AccountService.getUser();
      this.user = response.data;
      this.user.birthDate = new Date(this.user.birthDate).toDateString()
    
    },
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;

      if (localStorage.getItem("jwt") == "") {
        this.$router.push("/");
        alert("Need to be authenticated");
      }
    },
  },
  created() {
    this.getUserDetails(); // need this in other pages
  },
  mounted() {
    this.getData(); //get data from the user
  },
};
