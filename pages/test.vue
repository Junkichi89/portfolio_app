<template>
  <div id="test">
    <!-- コンポーネントのチェック用です -->
    <InputControll />
    <CreateSaying class="mb-10"></CreateSaying>
    <DetailSaying></DetailSaying>
    <input type="text" placeholder="name" v-model="name" />
    <button @click="add">送信</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  created() {
    this.$store.dispatch('saying/init')
  },
  methods: {
    add() {
      this.$store.dispatch('saying/add', this.name)
    },
  },
}
</script>
