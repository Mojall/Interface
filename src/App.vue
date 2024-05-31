<template>
    <div class="container">
        <div class="input-container">
            <el-input
                v-model="inputValue"
                style="width: 240px"
                placeholder="Please input"
                clearable
            />
            <el-button
                type="primary"
                @click="copyInput"
            >
                Copy
            </el-button>
        </div>
        <el-button
            class="connect-button"
            type="primary"
            @click="connect"
        >
            Connect
        </el-button>
        <div class="select-container">
            <el-select
                v-model="selectedItems"
                multiple
                placeholder="Select"
                style="width: 240px"
            >
                <el-option
                    v-for="item in items"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
            <el-button
            type="primary"
            @click="ok"
            >
                Ok
            </el-button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')
const selectedItems = ref([])
const items = ref([
    { value: 'item1', label: 'Item 1' },
    { value: 'item2', label: 'Item 2' },
    { value: 'item3', label: 'Item 3' },
])

const copyInput = () => {
    navigator.clipboard.writeText(inputValue.value)
}

const connect = () => {
    // Заглушка
    console.log('Connect clicked')
}

const ok = () => {
    // Заглушка
    console.log('ok clicked')
}

</script>

<style scoped lang="sass">
.container 
    display: flex
    padding: 15px
    flex-direction: column

.input-container
    display: flex
    gap: 10px

.connect-button
    margin: 10px 0
    width: max-content

.select-container
    display: flex
    gap: 10px

</style>
