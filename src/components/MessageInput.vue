<template lang="pug">
.message-input
    input(type="text" placeholder="Введите текст..." v-model="message" :disabled="sending")
    button(@click="sendMessage()")
        PlaneIcon(v-if="!sending")
        LoadingIcon(v-else color="light") 
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PlaneIcon from '@/components/Icons/Plane'
import LoadingIcon from '@/components/Icons/Loading'

export default {
    name: 'MessageInput',
    components: {
        PlaneIcon,
        LoadingIcon
    },
    data() {
        return {
            sending: false,
            message: ''
        }
    },
    computed: {
        ...mapState(['currentUser'])
    },
    methods: {
        ...mapActions(['addMessageToDialog']),
        async sendMessage() {
            if (!this.message) return

            const message = {
                author: this.currentUser,
                text: this.message,
                created: Date.now()
            }

            this.sending = true

            await this.addMessageToDialog(message)

            this.sending = false
            this.message = ''
        }
    }
}
</script>

<style lang="sass" scoped>
.message-input
    display: flex
    align-items: center
    width: 100%
    height: 80px 
    input
        height: 100%
        width: calc(100% - 80px)
        padding: 0 30px
        border: none
        font-size: 14px
        border-top: 1px solid #E9EDF2

        &:disabled 
            background-color: #F5F5F5
            
        &:focus, &:active
            outline: none

    button
        cursor: pointer
        width: 80px
        height: 100%
        border: none
        transform: translateY(-1px)
        background-color: #398BFF
        color: white
        
        &:hover
            background-color: darken(#398BFF, 5%)

        &:focus, &:active
            outline: none
</style>