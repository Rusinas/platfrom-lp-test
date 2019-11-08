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
    display: flex
    flex-direction: column
    width: 100%
    height: calc(100% + 1px) // фикс бага из-за бордера у инпута
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1)

</style>