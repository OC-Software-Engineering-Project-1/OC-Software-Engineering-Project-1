<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                <form class="text-center border border-primary p-5"
                      style="margin-top:70px;height:auto;padding-top:100px !important;"
                      @submit.prevent="registerUser">
                    <input type="text"
                           id="name"
                           class="form-control mb-5"
                           placeholder="First Name"
                           v-model="register.firstName"
                           required />
                    <input type="text"
                           id="name"
                           class="form-control mb-5"
                           placeholder="Last Name"
                           v-model="register.lastName"
                           required />
                    <input type="text"
                           id="name"
                           class="form-control mb-5"
                           placeholder="NickName"
                           v-model="register.nickName"
                           required />
                    <input type="date"
                           id="name"
                           class="form-control mb-5"
                           placeholder="Birth Date"
                           v-model="register.birthDate"
                           required />
                    <input type="email"
                           id="email"
                           class="form-control mb-5"
                           placeholder="Email"
                           v-model="register.email"
                           required />
                    <!-- Password -->
                    <input type="password"
                           id="password"
                           class="form-control mb-5"
                           placeholder="Password"
                           v-model="register.password" />
                    <p>
                        Already have an account??<router-link to="/">click here</router-link>
                        <!-- Sign in button -->
                        <center>
                            <button class="btn btn-primary btn-block w-75 my-4" type="submit">
                                Sign in
                            </button>
                        </center>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script src="./register.js"></script>