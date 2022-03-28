<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-page-sticky position="bottom-right" :offset="[38, 38]">
      <q-btn icon="add" direction="up" color="accent" size="25px" @click = "runExec">启动NDN-app</q-btn>
    </q-page-sticky>
    <div class="q-pa-md">

    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      style="width: 100%"
      animated
    >
      <q-step
        :name="1"
        title="第一步：部署NFD"
        icon="settings"
        :done="step > 1"
        style="min-height: 200px; width: 100%"
      >
        NFD 从源码安装完后，需要创建一个配置文件，如果是使用$./waf configure默认安装，在/usr/local/etc/ndn/目录下有一个配置模板nfd.conf.sample，使用如下命令创建配置文件：
        <br>
        <br>
        $sudo cp /usr/local/etc/ndn/nfd.conf.sample /usr/local/etc/ndn/nfd.conf
        <br>
        <br>
        准备两台机器，按照如下示例配置完成后，进行连接：
        <q-card>
          <img :src="this.$PUBLIC_PATH + 'data/ndnimage.jpg'">
        </q-card>
      </q-step>

      <q-step
        :name="2"
        title="启动NFD"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
        style="min-height: 200px; width: 100%"
      >
        接下来，在两台机器都启动nfd，使用如下命令：
        <br>
        <br>
        $nfd-start
        <br>
        <br>
        启动完毕后，使用nfd-status查看nfd的状态，为了完成NFD实践，需要安装ndn-tools，安装完毕后，在这两台机器上分别配置一个face，可以使用$nfd-status命令查看nfd的状态，其中就会用新生成的face信息。
      </q-step>

      <q-step
        :name="3"
        title="NDN测试"
        icon="assignment"
        style="min-height: 200px; width: 100%"
      >
        最后我们使用ndn-tools的 ndnpingserver和ndnping两个命令来进行此次实践。最后我们使用ndn-tools的 ndnpingserver和ndnping两个命令来进行此次实践。最后我们使用ndn-tools的 ndnpingserver和ndnping两个命令来进行此次实践。
        <br>
        <br>
        最后我们使用ndn-tools的 ndnpingserver和ndnping两个命令来进行此次实践。最后我们使用ndn-tools的 ndnpingserver和ndnping两个命令来进行此次实践。最后我们使用ndn-tools的 ndnpingserver和ndnping两个命令来进行此次实践。
      </q-step>

      <q-step
        :name="4"
        title="启动NDN-app"
        icon="add_comment"
        style="min-height: 200px; width: 100%"
      >
        点击右下方启动NDN-app按钮，在您的主机上启动NDN-app程序，该程序将包含6个可执行的功能，包括使您的主机成为NDN网络的服务节点或者客户节点，以及使用切片的形式分发文件和接收文件。
        <br>
        <br>
        点击右下方启动NDN-app按钮，在您的主机上启动NDN-app程序，该程序将包含6个可执行的功能，包括使您的主机成为NDN网络的服务节点或者客户节点，以及使用切片的形式分发文件和接收文件。
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>

      <template v-slot:message>
        <q-banner v-if="step === 1" class="bg-purple-8 text-white q-px-lg">
          这一步将引导您在您的机器上完成部署NFD...
        </q-banner>
        <q-banner v-else-if="step === 2" class="bg-orange-8 text-white q-px-lg">
          这一步将引导您在您的机器上完成启动NFD...
        </q-banner>
        <q-banner v-else-if="step === 3" class="bg-green-8 text-white q-px-lg">
          这一步将引导您在您的机器上完成NDN测试...
        </q-banner>
        <q-banner v-else class="bg-blue-8 text-white q-px-lg">
          这一步将引导您在您的机器上启动NDN-APP...
        </q-banner>
      </template>
    </q-stepper>

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
