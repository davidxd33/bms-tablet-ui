<template>
   
    <transition enter-active-class="animate__animated animate__zoomIn" leave-to-class="animate__animated animate__zoomOut" mode="out-in">
        <div :class="navgationClass">
            <div :key="app.name" v-for="app in apps" class="app-icon">
                <router-link :to=app.route>
                    <div class="flex justify-center">               
                        <div class="flex flex-col items-center">
                            <i :class="app.icon" class="fa text-gray-400" />

                            <p class="app-name absolute font-bold  text-gray-200 bottom-0 w-full text-center bg-gray-500 bg-opacity-10 rounded-bl-lg rounded-br-lg">{{ app.name }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </transition>
    <div class="home-icon">
        <router-link to="/" exact>          
            <i class="fa fa-home text-gray-400" />
        </router-link>            
    </div>
</template>

<script>

export default {
    name: 'AppNav',
    data() {
        return {
            apps: {
                dark_chat: {
                    name: "The Dark Chat",
                    icon: "fa-user-secret",
                    route: "dark-chat"
                },
                marketplace: {
                    name: "Black Market",
                    icon: "fa-skull",
                    route: "black-market"
                },
                jobs: {
                    name: "Job Center",
                    icon: "fa-newspaper",
                    route: "job-center"
                },
                app4: {
                    name: "Street Races",
                    icon: "fa-tachometer-alt",
                    route: "street-races"
                },
            }
        }
    },
    computed: {
        navgationClass : {
            get() {
                if(this.$route.path == '/') {
                    return 'app-nav';
                }
                else {
                   return 'app-nav-active' 
                }
            }
        }
    }
}
</script>
<style scoped>
    .home-icon {
        @apply absolute left-2/4 -bottom-15 transform -translate-x-1/2 -translate-y-1/2 border border-gray-700 rounded-lg pl-1 pr-1;
        
    }
    .home-icon i {
        @apply text-lg hover:text-gray-500 transition-all border-gray-500;
    }


    .app-icon {
        @apply  w-36 h-36 m-5 border rounded-xl border-black border-opacity-25 transition transform ease-in-out duration-150 hover:scale-105 cursor-pointer;

    }

    .app-icon i {
        @apply text-7xl mt-4;
    }

    .app-nav {
        @apply transition transform ease-in-out duration-150 grid grid-cols-4 gap-5 justify-items-center mt-20;
    }

    .app-nav-active {
        @apply transition transform ease-in-out duration-150 grid grid-cols-1 absolute left-0 w-28 min-h-full;
        @apply justify-items-center;
    }

    .app-nav-active > .app-icon {
        @apply w-16 h-16;
    }

    .app-nav-active > .app-icon i {
        @apply mt-3;
    }

    .app-nav-active .app-name {
        @apply text-xs w-24 bg-opacity-0 -bottom-5;
    }

    .app-nav-active .fa {
        @apply text-4xl;
    }

    .app-active {
        @apply scale-125 hover:scale-105;
    }
</style>