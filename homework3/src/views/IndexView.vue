<template>
    <div>
        <h1>This is the index page!</h1>
    </div>
    <PageFooter/>
</template>


<script>

import PageFooter from "@/components/Footer.vue";

export default {
    name: "IndexView",
    components: {
        PageFooter
    },
}
</script>




<style scoped>
* {
    font-family: 'Courier New', Courier, monospace;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    line-height: 1.5;
    margin: 5px;
    justify-content: center;
}
</style>