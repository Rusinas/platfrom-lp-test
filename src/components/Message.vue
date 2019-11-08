<template lang="pug">
.message(:class="currentUser === message.author ? 'by-current-user' : ''")
    .text {{ message.text }}
    .details
        .author {{ message.author }}
        .date {{ $moment(message.created).format('DD.MM.YYYY H:mm') }}
    
</template>

<script>
export default {
    props: {
        message: Object,
        currentUser: String
    }
}
</script>

<style lang="sass" scoped>
.message
    display: grid
    justify-items: start
    flex-direction: column

.text
    flex: none
    padding: 25px 20px
    max-width: 60%
    font-size: 14px 
    font-weight: 300
    color: #474E54
    border-radius: 8px 8px 8px 0
    background-color: #F6F7F9
    margin-bottom: 10px

.details
    display: flex 
    flex-direction: row
    align-items: center
    margin-bottom: 20px

.author
    color: black
    font-size: 13px
    font-weight: 500

.date
    color: #B7C0C8
    margin-left: 10px
    font-size: 10px
    transform: translateY(2px)

.by-current-user
    justify-items: end    
    .text 
        border-radius: 8px 8px 0 8px
        background-color: #E9F5F4
</style>