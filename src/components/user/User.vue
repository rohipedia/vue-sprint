<template>
    <div>
        <form action="" class="form-group">
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" v-model="user.name">
            </div>
            <div class="form-group">
                <label for="">email</label>
                <input type="text" v-model="user.email">
            </div>
            <div class="form-group">
                <label for="">adid</label>
                <input type="text" v-model="user.adid">
            </div>
            <div class="form-group">
                <label for="">Scrum</label>
                <input type="text" v-model="user.scrum">
            </div>
            <button class="btn btn-primary" @click="addMember">Add member</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        user: {}
    },
    methods: {
        addMember() {
            this.$store.commit('addMember', this.user);
        }
    }
}
</script>
