<template lang="pug">
.home
    h2 Привет!
    p Это результат выполнения 
        a(href="https://gist.github.com/demkinmaxim/e0a0941663ad21aeaac164979e194e10") тестового задания
    router-link.button(to="/dialogs") К результату
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style lang="sass" scoped>
.home 
    display: flex 
    flex-direction: column
    align-items: center 
    justify-content: center
    width: 100% 
    min-height: 100vh

    a
        text-decoration: none
        color: #64B5F6
        &:visited
            color: #64B5F6
    .button
        background-color: #64B5F6
        padding: 15px 25px
        border-radius: 6px
        &:hover 
            background-color: darken(#64B5F6, 10%)
        &:link, &:visited
            color: white
</style>