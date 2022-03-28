<template>
  <q-card>
    <div class="row q-col-gutter-md">
      <div class="col-xs-6 col-md-3">
        <q-card
          class="text-white"
          style="background: radial-gradient(circle, #35a2ff 0%, #00ced1 100%)"
        >
          <q-card-section>
            <div class="text-h6">编码速率</div>
            <div class="text-subtitle2">xxx</div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-6 col-md-3">
        <q-card
          class="text-white"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
          <q-card-section>
            <div class="text-h6">请求命中率</div>
            <div class="text-subtitle2">xxx</div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-6 col-md-3">
        <q-card
          class="text-white"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
          <q-card-section>
            <div class="text-h6">发送端速率</div>
            <div class="text-subtitle2">xxx</div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-6 col-md-3">
        <q-card
          class="text-white"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
          <q-card-section>
            <div class="text-h6">接收端速率</div>
            <div class="text-subtitle2">xxx</div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-6 col-md-3">
        <q-card
          class="text-white"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
          <q-card-section>
            <div class="text-h6">缓存命中率</div>
            <div class="text-subtitle2">xxx</div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-6 col-md-3">
        <q-card
          class="text-white"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
          <q-card-section>
            <div class="text-h6">缓存平均跳数</div>
            <div class="text-subtitle2">xxx</div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-6 col-md-3">
        <q-card
          class="text-white"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
          <q-card-section>
            <div class="text-h6">内容块平均寻址次数</div>
            <div class="text-subtitle2">xxx</div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-6 col-md-3">
        <q-card
          class="text-white"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
          <q-card-section>
            <div class="text-h6">冗余恢复率</div>
            <div class="text-subtitle2">xxx</div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-card>
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
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      step: 1
    }
  }
}
</script>
