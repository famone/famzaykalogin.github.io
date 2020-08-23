<template>
  <div id="app">


    <div class="loading" v-if="loading">
      <h3>Загрузка...</h3>
    </div>

    <section class="logbox" v-if="logined == false">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-lg-offset-3">
            <form action="">
            <input class="form-control" type="login" v-model="email" :class="{errorInp : ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
            <input class="form-control" type="password" v-model="password" :class="{errorInp : $v.password.$dirty && !$v.password.required}">
            <button class="btn btn-primary" @click.prevent="submit()">Вход в личный кабинет</button>
          </form>
          </div>
        </div>
      </div>
    </section>


    <section class="logbox2" v-if="logined">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-6 col-lg-offset-3">
            <button class="btn btn-primary" @click="logout()">Выйти из личного кабинета</button>
            <img v-if="logined" src="https://media2.giphy.com/media/l41JMXnXn4E7WQR8s/giphy.gif?cid=ecf05e47ebg494pbebg3ldzgn5ubv65g7bn74lzslz3hzzs7&rid=giphy.gif" style="width: 100%;">
          </div>
        </div>
      </div>
    </section>

    

  </div>
</template>

<script>
import {mapState} from 'vuex'
import './assets/css/style.css';
import axios from 'axios'
import { required, email } from "vuelidate/lib/validators";

export default {
  data(){
      return{ 
          email: '',
          password: '',
          loading: false
    }
  },
  validations: {
      email: {
        email,
        required
      },
      password: {
        required
      }
    },
   computed: {
    ...mapState('goods', ['logined']),
  },
  methods: {
    submit(){
      if(this.$v.$invalid) {
          this.$v.$touch();
          return;
      }

      this.loading = true

      axios
      .get('https://famzaykaform.firebaseio.com/user.json')
          .then(response =>{
            if ( this.email === response.data.email && this.password === response.data.password){
              
              this.$store.dispatch('goods/loginedMt');

              this.email = '',
              this.password = ''

              setTimeout(() => this.loading = false, 400);

            }else{
              alert('Неверный пароль или логин')
              setTimeout(() => this.loading = false, 400);
            }
          })
          .catch(error => console.log(error))
      
    },
    logout(){
      this.$store.dispatch('goods/logout')
    }
  }
}
</script>

<style>
.loading{
  position: fixed;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,.8);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: saturate(180%) blur(5px);
  -webkit-backdrop-filter: saturate(180%) blur(5px);
}
h3{
  color: #fff;
}
input{
  margin-bottom: 20px;
}
.logbox form{
  width: 100%;
  padding: 20px;
  border: 2px solid #f7f7f9;
  margin:60px 0;
}
.logbox2 .row{
  width: 100%;
  padding: 20px;
  border: 2px solid #f7f7f9;
  margin:60px 0;
}
img{
  margin-top: 30px;
}
.errorInp{
  border-bottom: 2px red solid!important;
}
</style>

