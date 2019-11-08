<template lang="pug">
.dialogs-list
    .dialogs-header Сообщения 151
    Dialog(v-for="dialog in dialogs" :key="dialog.id" :dialog="dialog")
</template>

<script>
import { mapState } from 'vuex'
import Dialog from '@/components/Dialog'

export default {
    components: {
        Dialog
    },
    computed: {
        ...mapState(['dialogs'])
    }
}
</script>

<style lang="sass" scoped>
.dialogs
    &-list
        width: 100%
        height: 100%
        background-color: #F3F6F8
        overflow-y: auto

    &-header
        position: sticky
        top: 0
        color: #656B77
        background-color: #F3F6F8
        font-size: 14px
        padding: 20px 25px
        border-bottom: 1px solid #E9EDF2

</style>