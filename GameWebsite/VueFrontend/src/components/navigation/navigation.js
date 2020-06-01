// Credits to Maegan Wilson (source: https://medium.com/@maeganwilson_/how-to-create-a-navigation-bar-in-vue-js-8a70e7f29f80)
export default {
    name: 'Navigation',
    data() {
        return {
            activeIndex: undefined,
            links: [
                {
                    id: 0,
                    text: 'Home',
                    page:'/home'
                },
                {
                    id: 1,
                    text: 'Game Lobbies',
                    page:'/gamelobbies'
                },
                {
                    id: 2,
                    text: 'About',
                    page: '/about'
                },
                {
                    id: 3,
                    text: 'Logout',
                    page:'/logout'
                },
            ]
        }
    }
}
