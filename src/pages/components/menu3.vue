<template>

  <base-content>
    <div class="container q-pa-lg q-col-gutter-md">
      <div class="row q-col-gutter-md" style="display:block;margin:0 auto">
        <q-card style="width: 100%">
        <form class="q-pa-md" @submit.prevent="simulateSubmit">
         <div class="q-gutter-md row items-start">
            <q-input
              v-model.number="first"
              type="number">
              <template v-slot:before>
                感知节点IP地址
                <q-icon name="login" />
              </template>
            </q-input>
            <q-input
              v-model.number="second"
              type="number">
              <template v-slot:before>
                /
              </template>
            </q-input>
            <q-input
              v-model.number="third"
              type="number">
              <template v-slot:before>
                /
              </template>
            </q-input>
            <q-input
              v-model.number="fourth"
              type="number">
              <template v-slot:before>
                /
              </template>
            </q-input>
            <div class="row justify-end"/>
            <div class="row justify-end"/>
            <div class="row justify-end"/>
            <div class="row justify-end">
            <div style="display: flex; flex-direction: column; align-item: flex-start; margin:0 auto">
              <q-btn
                type="submit"
                :loading="submitting"
                class="q-px-lg q-py-xs"
                label="主 机 感  知"
                color="teal"
              >
                <template v-slot:loading>
                  <q-spinner-facebook />
                </template>
              </q-btn>
              <br/>
              <q-btn
                :loading="submitting2"
                @click= "simulateSubmit2"
                class="q-px-lg q-py-xs"
                label="全 域 感  知"
                color="primary"
              >
                <template v-slot:loading>
                  <q-spinner-facebook />
                </template>
              </q-btn>
            </div>
            </div>
          </div>
        </form>
        </q-card>
      </div>
      <q-dialog v-model="seamless" seamless position="bottom">
        <q-card style="width: 450px">
          <q-linear-progress :value="1" color="primary" />
          <q-card-section class="row items-center no-wrap">
            <div>
              <div class="text-weight-bold">{{first}}.{{second}}.{{third}}.{{fourth}}：该节点可以部署NDN网络</div>
              <div class="text-grey">节点可利用能力：{{available}}</div>
              <div class="text-grey">节点传输能力：{{Transportable}}</div>
            </div>
            <q-space />
            <q-btn flat round icon="close" v-close-popup />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-card v-if="flag2" flat class="q-mt-md bg-white-2">
        <div class="row q-col-gutter-md">
          <div class="col-xs-12 col-md-9">
            <q-table
            class="cimo-shadow"
            :grid="$q.screen.xs"
            title="全域感知监听"
            :data="data"
            :columns="columns"
            :filter="filter"
            row-key="name"
            style="height: 600px; width: 100%"
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="name" :props="props">{{ props.row.name }}</q-td>
                  <q-td key="calories" :props="props">
                    <q-avatar square size="380px">
                      <v-chart :options="charts2Option" autoresize/>
                    </q-avatar>
                  </q-td>
                  <q-td key="fat" :props="props">
                    <q-avatar square size="380px">
                      <v-chart :options="charts2Option" autoresize/>
                    </q-avatar>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
          <div class="col-xs-12 col-md-3">
            <br/><br/><br/><br/><br/>
            <lottie-web-cimo
                ref="lottie_web"
                :path="defaultOptions2.path"
                :loop="defaultOptions2.loop"
                :animation-speed="defaultOptions2.animationSpeed"
                @isLottieFinish="handleLottieFinish"
              />
          </div>
        </div>
      </q-card>
      <q-card v-if="flag" flat bordered class="q-mt-md bg-white-2">
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-md-6">
                <q-banner dense class="bg-primary text-white">
                  <div class="text-h4" align="center">主机感知：{{first}}.{{second}}.{{third}}.{{fourth}}</div>
                </q-banner>
                <q-list bordered class="rounded-borders">
                  <q-expansion-item
                    icon="bluetooth"
                    label="开放端口"
                    expand-separator
                    header-class="bg-primary text-white"
                    expand-icon-class="text-white"
                  >
                    <q-card class="bg-primary-2">
                      <q-card-section>
                        主机开放的端口：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                  <q-expansion-item
                    icon="bluetooth"
                    label="开放服务类型"
                    expand-separator
                    header-class="bg-primary text-white"
                    expand-icon-class="text-white"
                  >
                    <q-card class="bg-primary-2">
                      <q-card-section>
                        主机开放的服务：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                  <q-expansion-item
                    icon="bluetooth"
                    label="操作系统"
                    expand-separator
                    header-class="bg-primary text-white"
                    expand-icon-class="text-white"
                  >
                    <q-card class="bg-primary-2">
                      <q-card-section>
                        主机操作系统：Ubuntu 18.04
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                  <q-expansion-item
                    icon="bluetooth"
                    label="存在漏洞探测"
                    expand-separator
                    header-class="bg-primary text-white"
                    expand-icon-class="text-white"
                  >
                    <q-card class="bg-primary-2">
                      <q-card-section>
                        主机存在的漏洞：xxx、xxx、xxx、xxx
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-list>
            </div>
            <div class="col-xs-12 col-md-6">
                <q-img
                  :src="this.$PUBLIC_PATH + 'data/主机探测.png'"
                />
                <br/>
                <br/>
                <br/>
                <q-img
                  :src="this.$PUBLIC_PATH + 'data/主机探测2.png'"
                />
            </div>
            <div class="col-xs-12 col-md-12">
              <q-separator inset />
            </div>
            <div class="col-xs-12 col-md-6">
                <q-banner dense class="bg-teal text-white">
                  <div class="text-h4" align="center">网络感知</div>
                </q-banner>
                <q-list bordered class="rounded-borders">
                  <q-expansion-item
                    icon="bluetooth"
                    label="网络时延"
                    expand-separator
                    header-class="bg-teal text-white"
                    expand-icon-class="text-white"
                  >
                    <q-card class="bg-teal-2">
                      <q-card-section>
                        主机开放的端口：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                  <q-expansion-item
                    icon="bluetooth"
                    label="网络丢包率"
                    expand-separator
                    header-class="bg-teal text-white"
                    expand-icon-class="text-white"
                  >
                    <q-card class="bg-teal-2">
                      <q-card-section>
                        主机开放的服务：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                  <q-expansion-item
                    icon="bluetooth"
                    label="网络抖动"
                    expand-separator
                    header-class="bg-teal text-white"
                    expand-icon-class="text-white"
                  >
                    <q-card class="bg-teal-2">
                      <q-card-section>
                        主机开放的服务：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                  <q-expansion-item
                    icon="bluetooth"
                    label="数据包传输速度"
                    expand-separator
                    header-class="bg-teal text-white"
                    expand-icon-class="text-white"
                  >
                    <q-card class="bg-teal-2">
                      <q-card-section>
                        主机开放的服务：Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-list>
            </div>
            <div class="col-xs-12 col-md-6">
                <q-img
                  :src="this.$PUBLIC_PATH + 'data/网络探测.png'"
                />
            </div>
          </div>
        </q-card>
        <div class="row q-col-gutter-md">
          <div class="col-xs-12 col-md-6">
            <q-card style="height: 100%">
              <br/><br/><br/><br/><br/>
              <q-img
                :src="this.$PUBLIC_PATH + 'data/自主感知.png'"
              />
              <div class="absolute-bottom text-h6 text-center" align="center">传 输 节 点 自 主 感 知 框 架</div>
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
import { thumbStyle } from 'components/BaseContent/ThumbStyle'
import chartPie from '../../assets/js/echarts-1'
import charts2Option from '../../assets/js/echarts-2'
import { income, expense, total } from '../../assets/js/echarts-3'
import chartZ from '../../assets/js/echarts-4'
import LottieWebCimo from '../../components/LottieWebCimo/LottieWebCimo'

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
      defaultOptions: {
        path: 'data/find_lottie.json',
        loop: true,
        animationSpeed: 1
      },
      defaultOptions2: {
        path: 'data/over_lottie.json',
        loop: true,
        animationSpeed: 1
      },
      // 节点传输能力和可用能力
      Transportable: 159,
      available: 22,
      //
      seamless: false,
      flag: false,
      submitting: false,
      submitting2: false,
      first: 127,
      second: 0,
      third: 0,
      fourth: 1,
      expanded: false,
      chartPie,
      chartZ,
      charts2Option,
      income,
      expense,
      total,
      thumbStyle,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      filter: '',
      columns: [
        {
          name: 'name',
          required: true,
          label: '网络节点',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'calories',
          align: 'center',
          label: '时延',
          field: 'calories',
          sortable: true
        },
        {
          name: 'fat',
          label: '抖动',
          field: 'fat',
          sortable: true
        }
      ],
      data: [
        {
          name: 'node1',
          image: this.$PUBLIC_PATH + 'data/自主感知.png'
        },
        {
          name: 'node2',
          image: this.$PUBLIC_PATH + 'data/自主感知.png'
        }
      ]
    }
  },
  methods: {
    simulateSubmit () {
      this.submitting = true
      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.flag = true
        this.flag2 = false
        this.seamless = true
        this.submitting = false
      }, 3000)
    },
    simulateSubmit2 () {
      this.submitting2 = true
      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.flag = false
        this.flag2 = true
        this.submitting2 = false
      }, 3000)
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
    font-weight: bold;
    max-width: 450px;
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
    background: linear-gradient(to left, #FCAC94 0%, #f3a183 98%);
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
