<style>
    .button {
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 1px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: white; 
  color: black; 
  border: 2px solid #4CAF50;
}

.button1:hover {
  background-color: #4CAF50;
  color: white;
}
</style>
<template>

    <div class="container">
        <form class="text-center border border-primarty p-5" style="margin-top:70px; height:auto; padding-top:100px !important;" @submit.prevent="CreateUser">
            <input type ="text"
            id="name"
            class="form-control mb-5"
            placeholder="Name"
            v-model="server.name"
            required/>
            <input type ="email"
            id="email"
            class="form-control mb-5"
            placeholder="Email Address"
            v-model="server.email"
            required/>
            <input type ="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-model="server.password"
            required/>
             <p>
                        Already have an account??<router-link to="/">click here</router-link> 
                        <!-- Sign in button -->
                        <center>
                            <button class="button button1" type="submit">
                                Sign in
                            </button>
                        </center>
                    </p>
                </form> 
    </div>
</template>>