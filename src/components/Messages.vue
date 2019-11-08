<template lang="pug">
.messages
    MessagesList
    MessageInput
</template>

<script>
import MessagesList from '@/components/MessagesList'
import MessageInput from '@/components/MessageInput'

export default {
    name: 'MessagesWrapper',
    components: {
        MessagesList,
        MessageInput
    }
}
</script>

<style lang="sass" scoped>
.messages
    display: grid
    grid-template-rows: 1fr 80px
    flex-direction: column
    width: 100%
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1)
    z-index: 1
</style>