<template>
  <div class="container">
    <div>
      <!--<logo />-->
      <div v-for="test in testData">
        <h1 class="title">
          {{test.title}}
        </h1>
        <h2 class="subtitle">
          {{test.id}}
        </h2>
      </div>

      <div class="links">
        <el-button type="primary">testElement</el-button>
        <el-button type="danger">dangertest</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let {data} = await axios.get('/api/test')
    console.log(1);
    console.log(data);
    return {
      testData: data
    }
  },
  data () {
    return {
      testData: []
    }
  },
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  /*min-height: 100vh;*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
