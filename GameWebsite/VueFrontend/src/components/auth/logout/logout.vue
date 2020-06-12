<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                <form class="text-center border border-primary p-5"
                      style="margin-top:70px;height:auto;padding-top:100px !important;"
                      @submit.prevent="logoutUser">
                    <h1>Logout</h1>
                   
                    <p>
                        Do you want to log out??
                    </p>
                    <!-- Logout Button -->
                    <center>
                        <button class="btn btn-primary btn-block w-75 my-4" type="submit">
                            Log out
                        </button>
                    </center>
                </form>
            </div>
        </div>
    </div>
</template>

<script src="./logout.js"></script>