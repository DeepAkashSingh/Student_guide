<template>
  <AdminPanel>
    <div class="w100 p1">
      <h1 class="heading">Institute List</h1>
      <div class="mt-3" v-for="inst in list" :key="inst.ID">
        <!-- {{ inst.InstituteTitle }} {{ inst.ID }} -->
        <!-- {{ instituteList.filter((v) => v.InstituteId == inst.InstituteId) }} -->

        <table>
          <tr>
            <!-- <th>ID</th> -->
            <!-- <th>InstituteId</th> -->
            <th>Institute Name</th>
            <th>Phone</th>
            <!-- <th>Address</th> -->
            <th>Website</th>
          </tr>
          <tr
            v-for="institute in instituteList.filter(
              (v) => v.InstituteId == inst.InstituteId
            )"
            :key="institute.InstituteId"
          >
            <!-- <td>{{ institute.ID }}</td> -->
            <!-- <td>{{ institute.InstituteId }}</td> -->
            <td>{{ institute.InstituteTitle }}</td>
            <td>{{ institute.Phone }}</td>
            <!-- <td>{{ institute.Address }}</td> -->
            <td>{{ institute.Website }}</td>
          </tr>
        </table>
      </div>
    </div>
  </AdminPanel>
</template>
<script>
import AdminPanel from "./AdminPanel.vue";
import ApiList from "@/ApiList";

export default {
  name: "AdminInstituteList",
  components: { AdminPanel },
  mixins: [ApiList],
  data() {
    return { list: [], instituteList: [] };
  },
  mounted() {
    this.list = this.apis.instituteList;
    this.instituteList = this.apis.instituteList;
  },
};
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
