<template lang="pug">
.dialog(@click="openDialog(dialog.id)" :class="dialog.id == $route.params.id ? 'selected' : ''")
    .dialog-header
        .subject {{ dialog.subject }}
        .date {{ $moment(dialog.created).format('ll') }}
    .last-message(v-if="firstMessage") {{ firstMessage.length > 100 ? `${firstMessage.slice(0, 100)}...` : firstMessage }}
</template>

<script>
export default {
    name: 'Dialog',
    props: {
        dialog: Object
    },
    computed: {
        firstMessage() {
            return this.dialog.parts[0].text
        }
    },
    methods: {
        openDialog(id) {
            if (id != this.$route.params.id) this.$router.push(`/dialogs/${id}`)
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
    &:hover
        background-color: #E9EDF2
    

.selected
    background-color: white
    border-left: 2px solid #398BFF
    padding-left: 23px
    &:hover
        background-color: #fafafa
        

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
    padding-left: 5px
    transform: translateY(4px)

.last-message
    color: #7D8790
    font-size: 13px
    line-height: 18px

</style>