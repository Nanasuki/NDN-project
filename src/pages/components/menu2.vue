<template>

  <base-content>
    <div class="container q-pa-lg q-col-gutter-md">
    <div class="text-h4" align="center">请求文件冗余分片</div>
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-md-12">
          <q-card>
            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input
                name="shards"
                v-model="shards"
                type="number"
                bg-color="#64b5f6"
                label="编码分片数量"
                filled
                text-white
              />
              <q-input
                name="gates"
                v-model="gates"
                type="number"
                bg-color="#64b5f6"
                label="门限值"
                filled
                text-white
              />
              <div>
                <q-btn label="开 始 设 置" type="submit" color="primary" style="display:block;margin:0 auto" @click="persistent = true"/>
              </div>
              <br/>
              <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
                <q-card class="bg-teal text-white" style="width: 300px">
                  <q-card-section>
                    <div class="text-h6">设置成功</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none text-white">
                    编码分片数量与门限值设置成功！
                  </q-card-section>

                  <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </q-form>

            <q-card v-if="submitResult.length > 0" flat bordered class="q-mt-md bg-secondary">
              <q-card-section class="text-white">冗余编码模块设置如下：</q-card-section>
              <q-separator />
              <q-card-section class="row q-gutter-sm items-center">
                <div
                  v-for="(item, index) in submitResult"
                  :key="index"
                  class="q-px-sm q-py-xs bg-info text-white rounded-borders text-center text-no-wrap"
                >{{ item.name }} = {{ item.value }}</div>
              </q-card-section>
            </q-card>
          </q-card>
        </div>
        <div class="col-xs-12 col-md-12">
          <q-card>
            <q-form @submit="onSubmit2" class="q-gutter-md">
              <q-file
                name="filename"
                v-model="filename"
                bg-color="#64b5f6"
                label="请选择文件"
                filled
                text-white
              />
              <div>
                <q-btn label="开 始 杂 凑" type="submit" color="primary" style="margin-left: 40%; margin-right: 4%; margin-top:0; margin-bottom:0;" @click="persistent2 = true"/>
                <q-btn label="冗 余 编 码" color="primary" style="margin-top:0; margin-bottom:0;" @click="onSubmit4"/>
              </div>
              <br/>
              <q-dialog v-model="persistent2" persistent2 transition-show="scale" transition-hide="scale">
                <q-card class="bg-teal text-white" style="width: 300px">
                  <q-card-section>
                    <div class="text-h6">杂 凑 成 功</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none text-white">
                    文件名SM3算法杂凑完成！
                  </q-card-section>
                  <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <q-dialog v-model="persistent_file" persistent_file transition-show="scale" transition-hide="scale">
                <q-card class="bg-teal text-white" style="width: 300px">
                  <q-card-section>
                    <div class="text-h6">请先执行杂凑</div>
                  </q-card-section>
                  <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <q-dialog v-model="persistent_file2" persistent_file2 transition-show="scale" transition-hide="scale">
                <q-card class="bg-teal text-white" style="width: 300px">
                  <q-card-section>
                    <div class="text-h6">文件冗余编码成功！</div>
                  </q-card-section>
                  <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </q-form>

            <q-card v-if="submitResult2.length > 0" flat bordered class="q-mt-md bg-secondary">
              <q-card-section class="text-white">杂凑后的文件名如下所示：</q-card-section>
              <q-separator />
              <q-card-section class="row q-gutter-sm items-center">
                <div v-for="(item, index) in submitResult2"
                  :key="index"
                  class="q-px-sm q-py-xs bg-info text-white rounded-borders text-center text-no-wrap"
                >
                  {{ item.cmd1 }}
                  {{ item.cmd2 }}
                  {{ item.cmd3 }}
                </div>
              </q-card-section>
            </q-card>
          </q-card>
        </div>
        <div class="col-xs-12 col-md-12">
          <q-card>
            <q-form @submit="onSubmit3" class="q-gutter-md">
              <q-input
                name="text"
                v-model="text"
                bg-color="#64b5f6"
                label="请输入文件名"
                filled
                text-white
              />
              <div>
                <q-btn label="开 始 恢 复 文 件" type="submit" color="primary" style="display:block;margin:0 auto" @click="persistent3 = true"/>
              </div>
              <br/>
              <q-dialog v-model="persistent3" persistent3 transition-show="scale" transition-hide="scale">
                <q-card class="bg-teal text-white" style="width: 300px">
                  <q-card-section>
                    <div class="text-h6">恢 复 成 功</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none text-white">
                    冗余编码文件恢复完成！
                  </q-card-section>
                  <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </q-form>
          </q-card>
        </div>
        <div class="col-xs-12 col-md-6">
          <q-card style="height: 100%">
            <br/><br/>
            <q-img
              :src="this.$PUBLIC_PATH + 'data/冗余编码.png'"
            />
            <div class="absolute-bottom text-h6 text-center" align="center">分 片 逻 辑 设 计</div>
          </q-card>
        </div>
        <div class="col-xs-12 col-md-6">
          <q-card style="max-height: 550px">
          <lottie-web-cimo
            ref="lottie_web"
            :path="defaultOptions.path"
            :loop="defaultOptions.loop"
            :animation-speed="defaultOptions.animationSpeed"
            @isLottieFinish="handleLottieFinish"
          />
          </q-card>
        </div>
      </div>
    </div>
  </base-content>

</template>

<script>
import { exportFile } from 'quasar'
import BaseContent from '../../components/BaseContent/BaseContent'
import LottieWebCimo from '../../components/LottieWebCimo/LottieWebCimo'

const execSync = require('child_process').execSync

Buffer.prototype.split = Buffer.prototype.split || function (spl) {
  const arr = []
  let cur = 0
  let n = 0
  while ((n = this.indexOf(spl, cur)) !== -1) {
    arr.push(this.slice(cur, n))
    cur = n + spl.length
  }
  arr.push(this.slice(cur))
  return arr
}

function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== undefined
    ? formatFn(val)
    : val

  formatted = formatted === undefined || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}

export default {
  name: 'home',
  components: {
    BaseContent,
    LottieWebCimo
  },
  data () {
    return {
      shards: '',
      gates: '',
      filename: '',
      model: null,
      text: null,
      submitResult: [],
      submitResult2: [],
      persistent: false,
      persistent2: false,
      persistent3: false,
      persistent_file: false,
      persistent_file2: false,
      defaultOptions: {
        path: 'data/sparse_lottie.json',
        loop: true,
        animationSpeed: 1
      }
    }
  },
  methods: {
    onSubmit (evt) {
      const formData = new FormData(evt.target)
      const submitResult = []

      for (const [name, value] of formData.entries()) {
        submitResult.push({
          name,
          value
        })
      }

      this.submitResult = submitResult
    },
    onSubmit2 (evt) {
      const formData = new FormData(evt.target)
      const submitResult2 = []

      for (const [name, value] of formData.entries()) {
        this.filename = value.name
        const output = execSync('python3 sm3.py ' + value.name, { cwd: '/root/electron_APP/electron_test/public/data/' })
        console.log('sync: ' + output.split('+'))
        // 异步执行
        const cmd1 = output.split('+')[0]
        const cmd2 = output.split('+')[1]
        const cmd3 = output.split('+')[2]
        submitResult2.push({
          name,
          cmd1
        })
        submitResult2.push({
          name,
          cmd2
        })
        submitResult2.push({
          name,
          cmd3
        })
      }
      this.submitResult2 = submitResult2
    },
    onSubmit3 (evt) {
      console.log(this.text)
      execSync('./decoder ' + this.text, { cwd: '/root/electron_APP/electron_test/冗余编码实验部署/' })
    },
    onSubmit4 (evt) {
      if (this.filename === '') {
        this.persistent_file = true
      } else {
        this.persistent_file2 = true
        console.log(this.filename)
        execSync('./encoder ' + this.filename, { cwd: '/root/electron_APP/electron_test/冗余编码实验部署/' })
        this.filename = ''
      }
    },
    handleTableClick (e) {
      this.$router.push({
        path: 'table-detail',
        query: {
          id: e.name
        }
      })
    },
    exportTable () {
      // naive encoding to csv format
      const content = [this.columns.map(col => wrapCsvValue(col.label))].concat(
        this.data.map(row => this.columns.map(col => wrapCsvValue(
          typeof col.field === 'function'
            ? col.field(row)
            : row[col.field === undefined ? col.name : col.field],
          col.format
        )).join(','))
      ).join('\r\n')

      const status = exportFile(
        'table-export.csv',
        content,
        'text/csv'
      )

      if (status !== true) {
        this.$q.notify({
          message: 'Browser denied file download...',
          color: 'negative',
          icon: 'warning'
        })
      }
    }
  }
}
</script>
<style lang="css" scoped>
  .my-card {
    width: 100%;
    min-height: 390px;
    height: 100%;
    /*max-width: 350px;*/
  }

  .income {
    width: 100%;
    background: linear-gradient(to right, #68E4BC 0%, #4AD0D1 99%);
    border-radius: 5px;
    font-size: 14px;
    padding: 11px 15px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    box-shadow: 0 12px 12px -11px #0db4afb8;
    background-size: 200% auto;
  }

  .income:hover {
    background-position: right center;
    box-shadow: 0 12px 20px -11px #0db4afb8;
  }

  .expense {
    width: 100%;
    background: linear-gradient(to left, #FCAC94 0%, #f3a183 98%);
    border-radius: 5px;
    font-size: 14px;
    padding: 11px 15px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    box-shadow: 0 12px 12px -11px #FCA76C;
    background-size: 200% auto;
  }

  .expense:hover {
    background-position: right center;
    box-shadow: 0 12px 20px -11px #FCA76C;
  }

  .total {
    width: 100%;
    background: linear-gradient(90deg, #F073C8 0%, #FF6A95 99%);
    border-radius: 5px;
    font-size: 14px;
    padding: 11px 15px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    box-shadow: 0 12px 12px -11px rgba(240, 115, 200, 0.73);
    background-size: 200% auto;
  }

  .total:hover {
    background-position: right center;
    box-shadow: 0 12px 20px -11px rgba(240, 115, 200, 0.73);
  }

  .btn-table {
    background: linear-gradient(to right, #36d1dc, #5b86e5);
    transition: all 0.3s ease-in-out;
  }

  .btn-table:hover {
    background-position: right center;
    box-shadow: 0 12px 20px -11px #5b86e5;
  }
</style>
