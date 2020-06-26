import News from './news/news.vue';
import PeopleSearch from './people-search/people-search.vue';
import FriendRequests from './friend-requests/friend-requests.vue';
import FriendsList from './friends-list/friends-list.vue';

export default {
    name: 'Community',
    props: {
    },
    components: {
        News,
        PeopleSearch,
        FriendRequests,
        FriendsList
    },
    data() {
        return {
            newsEvents: [],
            allUsers: [],
        };
    },
    computed: {
        friendRequests() {
            // list all the users where the user accessing the page has either sent a friend request to them or recieved one from them
            return this.allUsers.filter((user) => { user.outgoingRequest == true || user.incomingRequest == true; });
        },
        friendsList() {
            // list all the users who are currently friends with the user accessing the page
            return this.allUsers.filter((user) => { user.alreadyFriends == true; });
        }
    },
    created() {
        this.getUserDetails(); // need this for authentication
    },
    mounted() {
        this.getAllUsers();
        this.getNewsEvents();
    },
    methods: {
        getUserDetails() {
            let token = localStorage.getItem("jwt");
            let decoded = VueJwtDecode.decode(token);
            this.user = decoded;
            if (localStorage.getItem("jwt") == "") {
                this.$router.push("/")
                alert("Need to be authenticated")
            }
        },
        getAllUsers() {
            // In a fully-implemented system, this page would have access to the user's username (or whatever other value would allow it to uniquely identify the user),
            //  and would make a database call to get data about all other users except the one accessing the page. That data would be returned in JSON format as a list
            //  of objects, each of which containing data about one user. The data, computed on the backend for simplicity and security, would follow the format used in
            //  the following hard-coded demo data. Once retrieved, the data would be assigned as the value of the this.allUsers variable so it could be filtered and
            //  passed in to the appropriate components.
            this.allUsers = [
                {
                    username: 'Princess127',
                    alreadyFriends: false,
                    outgoingRequest: true,
                    incomingRequest: false,
                    mutualFriendsCount: 7,
                    profileImage: null
                },
                {
                    username: 'DeadMaster',
                    alreadyFriends: false,
                    outgoingRequest: false,
                    incomingRequest: true,
                    mutualFriendsCount: 0,
                    profileImage: null
                },
                {
                    username: 'secret-sith-lord',
                    alreadyFriends: true,
                    outgoingRequest: false,
                    incomingRequest: false,
                    mutualFriendsCount: 22,
                    profileImage: null
                },
                {
                    username: 'littleWiseGuy',
                    alreadyFriends: true,
                    outgoingRequest: false,
                    incomingRequest: false,
                    mutualFriendsCount: 1,
                    profileImage: null
                },
                {
                    username: 'stopR2',
                    alreadyFriends: false,
                    outgoingRequest: false,
                    incomingRequest: false,
                    mutualFriendsCount: 0,
                    profileImage: null
                },
                {
                    username: 'Who-Shot-First',
                    alreadyFriends: true,
                    outgoingRequest: false,
                    incomingRequest: false,
                    mutualFriendsCount: 19,
                    profileImage: null
                },
            ];
        },
        getNewsEvents() {
            // In a fully-implemented system, this page would have access to the user's username (or whatever other value would allow it to uniquely identify the user),
            //  and would make a database call to get data about all relevant news events pertaining to a user -- game invites they have recieved, friend requests they
            //  have recieved, friend requests they have sent being accepted, and private messagesthey have recieved. These data would be compiled into an array of objects
            //  on the backend for simplicity and security, and that array would be returned to this page and assigned as the value of the this.newsEvents variable in
            //  order to be passed in to the appropriate component. The objects in the array would probably follow a format similar to that displayed in the following
            //  hard-coded demo data, although additional or extended data would probably also be present.
            this.newsEvents = [
                {
                    eventType: 'Friend Request Accepted',
                    causedByUser: 'secret-sith-lord',
                    timeStamp: 'today'
                },
                {
                    eventType: 'Incoming Friend Request',
                    causedByUser: 'DeadMaster',
                    timeStamp: 'yesterday'
                },
                {
                    eventType: 'Game Invite Recieved',
                    causedByUser: 'littleWiseGuy',
                    timeStamp: '6 days ago'
                },
                {
                    eventType: 'New Private Message',
                    causedByUser: 'littleWiseGuy',
                    timeStamp: '1 week ago'
                },
                {
                    eventType: 'Friend Request Accepted',
                    causedByUser: 'littleWiseGuy',
                    timeStamp: '2 weeks ago'
                },
            ];
        }
    }
};