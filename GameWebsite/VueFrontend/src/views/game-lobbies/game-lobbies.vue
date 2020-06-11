<template>
    <div class="content">
        <div class="left">
            <!-- <img class="gameImage" src="http://localhost:3000/empty_game/ReferencePic.PNG" alt="Game Image"> -->
        </div>
        <h1 class="gameTitle right">The Game of Life</h1>
        <div class="background">
        <div class="left">
            <img class="gameImage" src="https://i.ytimg.com/vi/dhAZZPIqvQg/maxresdefault.jpg" alt="Game Image">
            <div class="gameInfo">
                <p>2 - 4 Players</p>
                <p>1 - 2 hours</p>
                <p>Designer</p>
                <p>Bill Markham</p>
            </div>
        </div>
        <div class="right">
            <div class="description">
                <p>Attend college, accept a job and play minigames in this interactive app that is fun for the whole family. 
                Watch as board piece characters come to life and make their way through the various stages of life on this spectacular, 
                3D animated reworking of the familiar physical board. Showcases a beautifully rendered digital game board, 
                cards <b-collapse id="collapse-1" class="mt-2"> and spinner that capture the fun of the Classic game full of adventure and
                surprises! THE GAME OF LIFE will take players on a journey where fortunes can be won…and lost! 
                Choose a college or career path and start down the many roads of life, make money, buy a house or start a family 
                -- will you take the safe route or the risky road? The choice is yours as you navigate life’s rich tapestry! 
                Do whatever it takes to retire in style with the most wealth at the end of the game to win!</b-collapse></p>
                <b-button v-b-toggle.collapse-1 variant="primary" class="readMore">Read More</b-button>
            </div>
            <b-tabs class="tabs"> 
                <b-tab class="tabContent" title="Join" active>
                    <div class="criteria">
                            <div>Search by host username</div>
                            <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                    </div>
                    <div class="criteria">
                        <div>Filter by type</div>
                        <b-dropdown id="dropdown-1" text="Public" class="m-md-2 dropdown">
                                <b-dropdown-item>Public</b-dropdown-item>
                                <b-dropdown-item>Private</b-dropdown-item>
                        </b-dropdown>
                    </div>
                    <ul id="lobbyList" style="list-style: none;" class="tabContent">
                        
                        <li v-for="(lobby, index) in lobbyList" :key="index">
                            
                            <div class="lobby">
                                <img class="profilePic lobbyItem" src="http://placehold.it/400x200" alt="Game Image">
                                <div class="lobbyItem">
                                    <h4>Host</h4>
                                    <p>{{ lobby.host }}</p>
                                </div>
                                <div class="lobbyItem">
                                    <h4>Looking for Players</h4>
                                    <p>({{ lobby.occupancy }}/{{ lobby.capacity }})</p>
                                </div>
                                <div class="lobbyItem joinButton">
                                    <p>Started 20 min ago</p>
                                    <router-link :to="{ name: 'game', params: { lobby: lobby }}" tag="button">Join</router-link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </b-tab>
                <b-tab title="Create">
                    <div class="tabContent">
                        <br>Create Game
                    </div>
                </b-tab>
            </b-tabs>
        </div>
        </div>
    </div>
</template>

<script src="./game-lobbies.js"></script>

<style scoped src="./game-lobbies.css"></style>