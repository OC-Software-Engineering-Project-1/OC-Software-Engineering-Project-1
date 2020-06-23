<template>
    <div class="accountContent">
        <div class="header">Account Information</div>
        <div class="innerContent">
            <div class="userProfileContent">
                <div class="container">

                    <img v-if="user.avatar" :src="user.avatar" class="profilePic">
                    <img v-else src="./usericon.jpg" class="profilePic">
                    <button class="changePicButton boldText">
                        <font-awesome-icon icon="edit" class="icon">
                            <router-link :to="{ name: 'updateAccount' }"> Change </router-link>
                        </font-awesome-icon>
                       
                    </button>
                </div>
                <div class="userTextContent">
                    <p class="boldText largestText"> {{ user.nickName }}</p>
                    <div class="emailContent">
                        <div class="boldText largeText" style="margin-right: 20px;">Email:</div>
                        <div class="largerText"> {{ user.email }}</div>
                        <button class="changeEmailButton boldText">
                            <font-awesome-icon icon="edit" class="icon">{{user.avatar}}</font-awesome-icon>
                            Change
                        </button>
                    </div>
                </div>
            </div>
            <div class="userStatsContent">
                <div class="boldText largerText">Stats</div>
                <hr>
                <div class="userActualStats">
                    <div>
                        <div class="boldText largeText" style="margin-right: 30px;">Birth Date:</div>
                        <div class="boldText"> {{ user.birthDate }} </div>
                    </div>
                    <div>
                        <div class="boldText largeText" style="margin-right: 46px;">Games Won:</div>
                        <div class="boldText">{{ user.gamesWon }} </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./account.js"></script>

<style scoped src="./account.css"></style>
