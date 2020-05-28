export default {
    data() {
        return {
            register: {
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
        async registerUser() {
            try {
                let response = await this.$http.post("http://localhost:3000/users", this.register);
                //console.log(response);
                let token = response.data.token;
                if (token) {
                    localStorage.setItem("jwt", token);
                    this.$router.push("/");
                    alert("Success", "Registration Was successful", "success");
                } else {
                    alert("Error", "Something Went Wrong", "error");
                }
            } catch (err) {
                let error = err.response;
                if (error.status == 409) {
                    alert("Error", error.data.message, "error");
                } else {
                    alert("Error", error.data.err.message, "error");
                }
            }
        }
    }
};