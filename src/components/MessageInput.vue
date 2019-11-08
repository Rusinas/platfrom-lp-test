<template lang="pug">
.message-input
    input(type="text" placeholder="Введите текст...")
    button Send
</template>

<style lang="sass" scoped>
.message-input
    width: 100% 
    input
        height: 80px
        width: calc(100% - 80px)
        padding: 0 30px
        border: none
        border-top: 1px solid #E9EDF2
        box-sizing: border-box
        &:focus, &:active
            outline: none

    button
        cursor: pointer
        width: 80px
        height: 80px
        border: none
        transform: translateY(-1px)
        background-color: #398BFF
        color: white
        &:focus, &:active
            outline: none
</style>