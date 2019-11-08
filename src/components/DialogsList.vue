<template lang="pug">
.dialogs-list
    .dialogs-header Сообщения 151
    Dialog(v-for="dialog in dialogs" :key="dialog.id" :dialog="dialog")
</template>

<script>
import Dialog from '@/components/Dialog'

export default {
    components: {
        Dialog
    },
    data() {
        return {
            dialogs: [
                {
                    id: 1,
                    subject: 'Простой запрос невероятно очень простой запрос оу еее',
                    created: '2019-08-01 23:59',
                    parts: [
                        {
                            id: 1,
                            author: 'vasya',
                            text: 'Привет, как дела?',
                            created: '2019-08-01 23:59',
                        },
                        {
                            id: 2,
                            author: 'petya',
                            created: '2019-08-02 01:20',
                            text: 'Привет, все хорошо, спасибо!',
                        },
                        {
                            id: 3,
                            author: 'petya',
                            created: '2019-08-02 05:20',
                            text: 'Currently it takes the second to last item in the array from the URL. However I want to do a check for the last item in the array to be "index.html" and if so, grab the third to last item instead',
                        },
                    ],
                }
            ]
        }
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