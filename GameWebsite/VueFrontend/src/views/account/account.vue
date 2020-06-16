<template>
    <div class="accountContent">
        <div class="header">Account Information</div>
        <div class="innerContent">
            <div class="userProfileContent">
                <div class="container">
                    <img src="./usericon.jpg" class="profilePic">
                    <button class="changePicButton boldText">
                        <font-awesome-icon icon="edit" class="icon"></font-awesome-icon>
                        Change
                    </button>
                </div>
                <div class="userTextContent">
                    <p class="boldText largestText">Placeholder Username</p>
                    <div class="emailContent">
                        <div class="boldText largeText" style="margin-right: 20px;">Email:</div>
                        <div class="largerText">Placeholder email</div>
                        <button class="changeEmailButton boldText">
                            <font-awesome-icon icon="edit" class="icon"></font-awesome-icon>
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
                        <div class="boldText largeText" style="margin-right: 30px;">Games Played:</div>
                        <div class="boldText">34</div>
                    </div>
                    <div>
                        <div class="boldText largeText" style="margin-right: 46px;">Games Won:</div>
                        <div class="boldText">32</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="./account.css"></style>
