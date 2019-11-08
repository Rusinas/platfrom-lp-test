<template lang="pug">
.dialog
    .dialog-header
        .subject {{ dialog.subject }}
        .date 12 мая 2023
    //- .last-message(v-if="lastMessage") {{ lastMessage.length > 3 ? `${lastMessage.slice(0, 15)}...` : '' }}
    .last-message {{ lastMessage }}
</template>

<script>
export default {
    name: 'Dialog',
    props: {
        dialog: Object
    },
    data() {
        return {
            lastMessage: this.dialog.parts[dialog.parts.length - 1].text
        }
    }
}
</script>

<style lang="sass" scoped>
.dialog
    cursor: pointer
    padding: 25px
    border-bottom: 1px solid #E9EDF2
    &-header
        display: flex
        justify-content: space-between

.selected
    background-color: white
    border-left: 2px solid #398BFF

.subject
    color: #35383D
    font-weight: 600
    font-size: 14px
    line-height: 20px
    margin-bottom: 5px

.date
    color: #B7C0C8
    flex: none
    font-size: 10px
    text-transform: uppercase
    letter-spacing: 0.05em

.last-message
    color: #7D8790
    font-size: 13px
    line-height: 18px

</style>