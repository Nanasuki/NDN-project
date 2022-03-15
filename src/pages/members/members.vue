<template>
  <base-content>
    <div class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="index in 60"
        :key="index"
        transition="scale"
        class="example-item"
      >
        <q-card class="q-ma-sm">
          <img src="data/beihang.jpg">

          <q-card-section>
            <div class="text-h6">Card #{{ index }}</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </base-content>
</template>

<script>
import BaseContent from '../../components/BaseContent/BaseContent'

export default {
  name: 'my-lottie',
  components: {
    BaseContent
  }
}
</script>
<style lang="sass" scoped>
.example-item
  height: 390px
  width: 390px
</style>
