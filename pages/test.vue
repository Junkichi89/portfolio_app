<template>
  <div id="test">
    <!-- コンポーネントのチェック用です -->
    <InputControll />
    <CreateSaying class="mb-10"></CreateSaying>
    <DetailSaying></DetailSaying>
  </div>
</template>
<script>
export default {
  created: function () {
    this.$store.dispatch('saying/init')
  },
}
</script>
