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
                <p><svg class="bi bi-people-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                </svg> 2 - 4 Players</p>
                <p><svg class="bi bi-clock" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/>
                    <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                </svg> 1 - 2 hours</p>
                <p>Designer</p>
                <p>&emsp;Bill Markham</p>
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
                    <div>
                    <div class="criteria">
                        <h4>Search by host username</h4>
                        <b-form-input v-model="text" placeholder="Search..."></b-form-input>
                    </div>
                    <div class="criteria">
                        <h4>Filter by type</h4>
                        <b-dropdown id="dropdown" text="Public" class="m-md-2 dropdown">
                                <b-dropdown-item>Public</b-dropdown-item>
                                <b-dropdown-item>Private</b-dropdown-item>
                        </b-dropdown>
                    </div>
                    </div>
                    <ul id="lobbyList">
                        
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
                                <div class="lobbyItem join">
                                    <p>Started 20 min ago</p>
                                    <router-link :to="{ name: 'game', params: { lobby: lobby }}" tag="button" class="orangeBtn">Join</router-link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </b-tab>
                <b-tab title="Create" class="tabLink">
                    <div class="tabContent">
                        <div>
                        <div class="criteria">
                            <h4>Number of Players</h4>
                        </div>
                        <div class="criteria">
                            <b-dropdown id="dropdown-1" text="1 Player" class="m-md-2 dropdown">
                                    <b-dropdown-item>1 Player</b-dropdown-item>
                                    <b-dropdown-item>2 Players</b-dropdown-item>
                                    <b-dropdown-item>3 Players</b-dropdown-item>
                                    <b-dropdown-item>4 Players</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        </div>
                        <div>
                        <div class="criteria">
                            <h4>Availability</h4>
                        </div>
                        <div class="criteria">
                            <b-form-group>
                                <b-form-radio v-model="selected" name="some-radios" value="A">Public</b-form-radio>
                                <b-form-radio v-model="selected" name="some-radios" value="B">Private</b-form-radio>
                            </b-form-group>
                        </div>
                        </div>
                        <h4 class="criteria">Invite Friends</h4>
                        <div class="center">
                            <b-form-input v-model="text" placeholder="Search..."></b-form-input>
                            <ul id="lobbyList">
                                <li v-for="(lobby, index) in lobbyList" :key="index">
                                    
                                    <div class="lobby">
                                        <img class="profilePic lobbyItem" src="http://placehold.it/400x200" alt="Game Image">
                                        <div class="lobbyItem">
                                            <h4>Username</h4>
                                            <p>{{ lobby.host }}</p>
                                        </div>
                                        <div class="lobbyItem join">
                                            <button class="orangeBtn">Remove</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <button class="orangeBtn start">Start!</button>
                        </div>
                    </div>   
                </b-tab>
            </b-tabs>
        </div>
        </div>
    </div>
</template>

<script src="./game-lobbies.js"></script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
<style src="bootstrap-vue/dist/bootstrap-vue.css"></style>
<style src="./game-lobbies.css"></style>