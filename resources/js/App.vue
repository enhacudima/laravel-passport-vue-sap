<template>

    <div v-if="$route.meta.antMasterLayout" class="page">
        <ant-master>
            <router-view></router-view>
        </ant-master>
    </div>

    <div v-else-if="$route.meta.antLoginLayout" class="page">
        <ant-login>
            <router-view></router-view>
        </ant-login>
    </div>

    <div v-else class="page">
            <router-view></router-view>
    </div>

</template>
<style >
    .page{
        height: 100%;
        width: 100%;
        padding-bottom: 0%;
    }
</style>

<script>
    import AntMaster from './components/layouts/Ant/Master.vue'
    import AntLogin from './components/layouts/Ant/Login.vue'
    export default {    
        components: {
          AntMaster,
          AntLogin
        }
    }
</script>