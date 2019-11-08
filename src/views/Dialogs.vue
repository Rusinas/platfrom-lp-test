<template lang="pug">
.dialogs-wrapper
    .dialogs
        DialogsList
        .select-dialog(v-if="!$route.params.id")
            p Выберите диалог
        router-view
</template>

<script>
import { mapActions } from 'vuex'
import DialogsList from '@/components/DialogsList'
import Messages from '@/components/Messages'

export default {
    name: 'DialogsView',
    components: {
        DialogsList,
        Messages
    },
    mounted() {
        this.getDialogs()
    },
    methods: {
        ...mapActions(['getDialogs'])
    }
}
</script>

<style lang="sass" scoped>
.dialogs-wrapper
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    height: 100vh
    box-sizing: border-box
    background-color: #E5E5E5

.dialogs
    display: grid
    align-items: start
    justify-items: center
    grid-template-columns: 300px 680px
    height: 700px
    // overflow: hidden

.select-dialog
    font-size: 14px
    color: #dadada
    display: flex
    align-items: center 
    justify-content: center
    width: 100% 
    height: 100% 
    background-color: white
</style>