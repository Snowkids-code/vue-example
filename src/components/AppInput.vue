<template>
    <div>
        <p>{{ msg }}</p>
        <input type="text" :value="msg" @input="changeMessage"/>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: ''
        }
    },
    props: ['msg'],
    methods: {
        changeMessage(event) {
            this.message = event.target.value;
            this.$emit('messageChanged', this.message)
        }
    }
}
</script>