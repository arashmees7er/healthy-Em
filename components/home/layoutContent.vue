<template>
   <div>
      <div class="d-flex align-items-center justify-content-between my-4">
         <content-box title="Gender By Organization" chart="true" class="mr-4" />
         <content-box title="User Account Status" chart="true" />
      </div>
      <div>
         <el-table :data="tableData" :row-class-name="tableRowClassName" border>
            <el-table-column prop="name" label="Name" min-width="180"></el-table-column>
            <el-table-column prop="age" label="Age" min-width="180"></el-table-column>
            <el-table-column prop="nickname" label="Nickname"></el-table-column>
         </el-table>
      </div>
   </div>
</template>
<script>
import ContentBox from '~/components/common/contentBox'

export default {
   components: {
      ContentBox
   },
   data: () => ({
      tableData:  [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
      }],
      chartExample: [{
         name: 'test',
         value: [1,3,4,5,6]
      },{
         name: 'test2',
         value: [2,3,4,6,7]
      }]
   }),
   methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'bg-light';
        } else if (rowIndex === 3) {
          return 'bg-light';
        }
        return '';
      }
   }
}
</script>