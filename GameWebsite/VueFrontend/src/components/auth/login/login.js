export default {
    data() {
        return {
            login: {
                email: "",
                password: ""
            }
        };
    },
    methods: {
        async loginUser() {
            try {
                let response = await this.$http.post("http://localhost:3000/users/login", this.login);
                //console.log(response);
                let token = response.data.token;
                localStorage.setItem("jwt", token);
                if (token) {
                    alert("Success", "Login Successful", "success");
                    this.$router.push("/games");
                }
            } catch (err) {
                alert("Error", "Something Went Wrong", "error");
                alert(err.response);
            }
        }
    }
};