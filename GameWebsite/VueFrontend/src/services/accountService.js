import Api from "@/services/api";

export default {
  getUser() {
    return Api().get("/users/me", {
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
    });
  },
  updateAvatar(file) {
    const formData = new FormData();
    formData.append("avatar", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "Authorization": "Bearer " + localStorage.getItem("jwt"),
      },
    };
    return Api().post('/users/me/avatar', formData, config);
  },
  deleteAvatar(){
    return Api().delete("/users/me/avatar", {
        headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      });
  },

    updateUser(user) {
        return Api().put('/users/me', user,{ headers: { "Authorization": "Bearer " + localStorage.getItem("jwt") } })
    },
};
    

