// Credits to Maegan Wilson (source: https://medium.com/@maeganwilson_/how-to-create-a-navigation-bar-in-vue-js-8a70e7f29f80)
export default {
    name: 'Navigation',
    data() {
        return {
            activeIndex: undefined,
            links: [
                {
                    id: 0,
                    text: 'GameWebsite',
                    page:'/home'
                },
                
                {
                    id: 1,
                    text: 'Community',
                    page:'/community'
                },
                {
                    id: 2,
                    text: 'About',
                    page: '/about'
                },
                {
                    id: 3,
                    text: 'Games',
                    page:'/games'
                },
            ],
            dropdownLinks: [
                {
                    id: 0,
                    text: 'Account',
                    page: '/account'
                },
                {
                    id: 1,
                    text: 'Sign Out',
                    page: '/logout'
                }
            ]
        }
    },
    methods: {
        showList() {
            document.getElementById("myDropdown").classList.toggle("show");
        },
        documentClick(e) {
            if (!e.target.matches('.dropbtn')) {
                var myDropdown = document.getElementById("myDropdown");
                if (myDropdown.classList.contains('show')) {
                    myDropdown.classList.remove('show');
                }
            }
        } 
    },
    created () {
        document.addEventListener('click', this.documentClick)
    },
    destroyed () {  
        document.removeEventListener('click', this.documentClick)
    }
}
