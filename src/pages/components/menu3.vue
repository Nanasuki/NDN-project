<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn @click = "runExec">Action 1</q-btn>
        <q-btn @click = "runExec">Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-purple text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by wz</div>
      </q-card-section>

      <q-card-actions align="around">
        <q-btn flat @click = "runExec">Action 1</q-btn>
        <q-btn flat @click = "runExec">Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-teal text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by wz</div>
      </q-card-section>

      <q-card-actions vertical align="right">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-grey-8 text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by wz</div>
      </q-card-section>

      <q-card-actions vertical align="center">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>
<script>
const exec = require('child_process').exec
// 任何你期望执行的cmd命令，ls都可以
const cmdStr = './build-ndnnode.sh'
// 执行cmd命令的目录，如果使用cd xx && 上面的命令，这种将会无法正常退出子进程
const cmdPath = 'D:\\'

export default {
  methods: {
    runExec () {
      console.log('执行命令行')
      // 执行命令行，如果命令不需要路径，或就是项目根目录，则不需要cwd参数：
      exec(cmdStr, { cwd: cmdPath, encoding: 'gbk' },
        function (error, stdout, stderr) {
          if (error) {
            console.error('error: ' + error)
            return
          }
          console.log('stdout: ' + stdout)
          console.log('stderr: ' + typeof stderr)
        })
      // 不受child_process默认的缓冲区大小的使用方法，没参数也要写上{}：workerProcess = exec(cmdStr, {})
    }
  },
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
