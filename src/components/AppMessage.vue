<template>
    <div>
        <h1>{{ message }}</h1>
        <AppInput :msg='message' @messageChanged='message = $event'/>
    </div>
</template>

<script>
import AppInput from './AppInput.vue'

export default {
    name: "AppMessage",
    components: {
        AppInput
    },
    data() {
        return {
            message: 'This is a great message'
        }
    }
}
</script>