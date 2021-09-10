<template>
  <div class="list-user">
    <md-table v-model="users" md-card v-if="users">
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Users</h1>
        </div>
        <md-field md-clearable class="md-toolbar-section-end">
          <div>
            <button v-on:click="openInsertDialog(null)" value="Add">Add</button>
          </div>
        </md-field>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>
          {{ item.id }}
        </md-table-cell>
        <md-table-cell md-label="UserName" md-sort-by="user_name">
          {{ item.user_name }}
        </md-table-cell>
        <md-table-cell md-label="Status" md-sort-by="status">
          {{ item.status }}
        </md-table-cell>
        <md-table-cell md-label="Action">
          <button v-on:click="openEditDialog(item)" value="Edit">Edit</button>
          <button @click="deleteUser(item)" value="Delete">
            Delete
          </button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <md-dialog :md-active.sync="showDialog">
      <upsert-user
        :user="userSelected"
        :showDialog="showDialog"
        @changeShowDialog="showDialog = $event"
        @insertUser="changeFromDialog($event)"
      ></upsert-user>
    </md-dialog>
  </div>
</template>

<script>
import { userService } from "../services/userService";
import UpsertUser from "./Dialog/UpsertUser.vue";

export default {
    components: {
        UpsertUser
    },
    data() {
        return {
            users: null,
            userSelected: null,
            showDialog: false
        }
    },
    mounted() {
        userService.GetUser()
        .then((res) => {
            this.users = res.data;
        })
        .catch(() => {});
    },
    methods: {
      openEditDialog(user) {
        this.userSelected = user;
        this.showDialog = true;
      },
      openInsertDialog(user) {
        this.userSelected = user;
        this.showDialog = true;
      },
      changeFromDialog(user) {
          this.users.push(user);
      },
      deleteUser(user) {
          if(confirm("Do you really want to delete?")) {
            userService.DeleteUser(user.id)
            this.users.splice(this.users.indexOf(user), 1)
          }
      }
    }
}
</script>

<style scoped>
.md-dialog-container {
  background-color: #fff;
}
</style>