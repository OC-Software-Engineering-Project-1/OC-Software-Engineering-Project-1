<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                <form class="text-left border border-primary p-5"
                      style="margin-top:70px;height:auto;padding-top:100px !important;"
                      @submit.prevent="updateUser">
                    <label>First Name: </label>
                    <input type="text"
                           id="name"
                           class="form-control mb-5"
                           placeholder="First Name"
                           v-model="user.firstName"
                           required />
                    <label>Last Name: </label>
                    <input type="text"
                           id="name"
                           class="form-control mb-5"
                           placeholder="Last Name"
                           v-model="user.lastName"
                           required />
                    <label>Nick Name: </label>
                    <input type="text"
                           id="name"
                           class="form-control mb-5"
                           placeholder="NickName"
                           v-model="user.nickName"
                           required />
                    <label>Birth Date: </label>
                    <input type="date"
                           id="name"
                           class="form-control mb-5"
                           placeholder="Birth Date"
                           v-model="user.birthDate"
                           required />
                    <label>Email: </label>
                    <input type="email"
                           id="email"
                           class="form-control mb-5"
                           placeholder="Email"
                           v-model="user.email"
                           required />
                    <!-- Password -->
                    <label>Password: </label>
                    <input type="password"
                           id="password"
                           class="form-control mb-5"
                           placeholder="Password"
                           v-model="user.password" />
                    <p>
                        
                        <center>
                            <button class="btn btn-primary btn-block w-75 my-4" type="submit">
                                Update
                            </button>
                        </center>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script src="./update.js"></script>
<style src="./update.css"></style>