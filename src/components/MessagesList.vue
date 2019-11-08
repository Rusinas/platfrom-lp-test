<template lang="pug">
.messages-list(v-if="!loading" v-chat-scroll="{always: false, smooth: true}")
    .chat 
        Message(v-for="message in messagesForSelectedDialog" :key="message.id" :message="message" :currentUser="currentUser")

.loading(v-else)
    LoadingIcon
    p Сообщения загружаются...

</template>

<script>
import { mapState, mapActions } from 'vuex'
import LoadingIcon from '@/components/Icons/Loading'
import Message from '@/components/Message'

export default {
    components: {
        Message,
        LoadingIcon
    },
    data() {
        return {
            loading: true
        }
    },
    mounted() {
        this.loadMessages()
    },
    watch: {
        '$route' (to, from) {
            this.loadMessages()
        }
    },
    methods: {
        ...mapActions(['getMessages']),
        async loadMessages() {
            this.loading = true
            await this.getMessages(this.$route.params.id)
            this.loading = false
        }
    },
    computed: {
        ...mapState(['messagesForSelectedDialog', 'currentUser'])
    }
}
</script>

<style lang="sass" scoped>
.messages-list
    width: 100%
    height: 620px
    background-color: white
    overflow-y: auto

.loading
    display: flex
    width: 100%
    height: 620px
    justify-content: center
    align-items: center
    font-weight: 300
    font-size: 14px
    background-color: #fafafa
    color: #9E9E9E
    p 
        margin-left: 20px

.chat 
    display: grid
    align-content: end
    width: 100% 
    min-height: 620px
    padding: 40px 40px 0 40px
    box-sizing: border-box

</style>