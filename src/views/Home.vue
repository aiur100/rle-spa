<template>
  <div class="home">
    <div class="card">
      <div class="card-header">
        <h3>Accounts</h3>
      </div>  
      <div class="card-body">
          <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Company Name</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="account in accounts" :key="account.dealer_id">
              <th scope="row">{{account.dealer_id}}</th>
              <td>{{account.company_name}}</td>
              <td>{{account.city}}</td>
              <td>{{account.state}}</td>
            </tr>
          </tbody>
        </table>
      </div>  
    </div>  
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { API_CALL } from "../settings";
export default {
  name: 'Home',
  beforeMount(){
    API_CALL("accounts").then(accts => {
      console.log(accts);
      this.accounts = accts;
    }).catch(error => {
      console.error("ERRORRRRR",error);
    });
  },
  data(){
    return {
      accounts: []
    }
  },
  components: {
    
  }
}
</script>
