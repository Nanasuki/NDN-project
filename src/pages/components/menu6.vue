<template>
  <div class="q-pa-md row items-start q-gutter-md">
  <div class="col-xs-12 col-md-12 q-gutter-md">\
          <iframe src="dist/index.html"></iframe>
        </div>
  </div>
</template>
<script>
const exec = require('child_process').exec

// 任何你期望执行的cmd命令，ls都可以
const cmdStr = 'sudo gnome-terminal -x bash -c "./app.sh; exec bash"'
// 执行cmd命令的目录，如果使用cd xx && 上面的命令，这种将会无法正常退出子进程
const cmdPath = '/root/ndn-app/'

export default {
  methods: {
    runExec () {
      console.log('执行命令行')
      // 执行命令行，如果命令不需要路径，或就是项目根目录，则不需要cwd参数：
      exec(cmdStr, { cwd: cmdPath },
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
      step: 1
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  height: 350px
</style>
