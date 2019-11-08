<template lang="pug">
.messages-list(v-if="!loading")
    .chat(v-chat-scroll)
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
.messages-list, .loading
    display: flex
    flex-direction: column
    width: 100%
    height: 700px
    box-sizing: border-box
    background-color: white

.loading
    justify-content: center
    align-items: center
    font-size: 14px
    color: #9E9E9E

.messages-list
    justify-content: flex-end

.chat
    max-height: 100%
    padding: 0 40px
    overflow: auto

</style>