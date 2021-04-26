<template>
  <div class="row mt-5" id="login-box">
    <div class="col-lg-4 col-md-5 col-sm-12">
        <div class="card">
            <div class="card-header">
                <div id="login-header" >
                    <img :src="logo"/>
                </div>    
            </div>
            <div class="card-body">

            <!-- FORM START -->
                <form method="post" action="" id="login-form">

                    <div class="card-body">
                        
                        <div class="row">

                            <div class="col-lg-12 mb-3">
                                <label for="">Username</label>
                                <input type="text" class="form-control" name="username" id="username" v-model="username" aria-describedby="helpId" autocomplete="username" placeholder="">
                                <small id="helpId" class="form-text text-muted d-none">Enter your username</small>
                            </div>

                            <div class="col-lg-12 mb-3">
                                <label for="">Password</label>
                                <input type="password" class="form-control" name="password" 
                                        id="password" aria-describedby="helpId" placeholder="" v-model="pass" autocomplete="current-password">
                                <small id="helpId" class="form-text text-muted d-none">Enter your password</small>
                            </div>

                        </div>
                    </div>
                </form>
                </div>
                <div class="card-footer">
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="submit" @click="login()">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import logo from "../assets/rle-logo.png";
import { SERVER } from "../settings";
export default {
    data(){
        return {
            logo,
            username: null,
            pass: null
        }
    },
    beforeMount(){
        
    },
    methods: {
        async login(){
            try{
                const response = await fetch(SERVER+"/users/auth",{
                    method: "POST",
                    body: JSON.stringify({
                        username: this.username,
                        pass: this.pass
                    })
                });
                const parsed = await response.json();
                this.$store.dispatch('loginUser', parsed);
                console.log(parsed);
            }
            catch(error){
                console.error(error);
            }
        }
    }
}
</script>
<style>
#login-box {
	display: grid;
	place-items: center;
}

#login-header {
    display: grid;
	place-items: center;
}

</style>