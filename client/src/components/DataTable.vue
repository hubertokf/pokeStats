<template>
  <data-tables :data="data" :actions-def="actionsDef" :checkbox-filter-def="checkFilterDef" :action-col-def="actionColDef">
    <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" sortable="custom">
    </el-table-column>
  </data-tables>
</template>

<script>
export default {
  name: 'DataTable',
  data() {
    return {
      data: this.data,
      titles: this.titles,
      actionsDef: {
          colProps: {
            span: 5
          },
          def: [{
            name: 'new',
            handler: () => {
              this.data.push({
                'content': 'hello world',
                'flow_no': 'FW201601010004',
                'flow_type': 'Help',
                'flow_type_code': 'help',
              })
            },
            buttonProps: {
              type: 'text'
            }
          }, {
            name: 'import',
            handler: () => {
              this.$message('import clicked')
            },
            icon: 'upload'
          }]
        },
        checkFilterDef: {
          props: 'flow_type_code',
          def: [{
            'code': 'repair',
            'name': 'Repair'
          }, {
            'code': 'help',
            'name': 'Help'
          }]
       },
       actionColDef: {
           label: 'Actions',
          def: [{
            handler: row => {
              this.$message('Edit clicked')
              row.flow_no = 'hello word'
            },
            name: 'Edit'
          }, {
            icon: 'message',
            type: 'text',
            handler: row => {
              this.$message('RUA in row clicked')
              console.log('RUA in row clicked', row)
            },
            name: 'RUA'
          }]
        }
    }
  },
  props: ['data','titles'],
  methods: {
      getRowActionsDef() {
        let self = this
        return [{
          type: 'primary',
          handler(row) {
            self.$message('Edit clicked')
            console.log('Edit in row clicked', row)
          },
          name: 'Edit'
        }]
      }
  }
}
</script>