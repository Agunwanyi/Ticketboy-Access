<template>
    <div class="login">
         <div class="first">
             <img src="@/assets/Tb.png" alt="">
      <h4 class="mt-3"><b>Sign Up. Get Access.</b></h4> 
      <p class="mt-3 reach">Reach millions of fans in Africa and increase revenue <br> when you sign up for a Ticketboy account.</p>
      </div>
      <div class="second">
          <div class="form-group">
            <input type="email" class="form-control inputUn" name="" id="" aria-describedby="emailHelpId" placeholder="Email Address">
          </div>
          <div class="form-group">
            <input type="password" class="form-control inputUn" name="" id="" aria-describedby="emailHelpId" placeholder="Password">
          </div>
      </div>
      <button class="create mt-3">create account</button>
      <p class="mt-4 follow"><b>New to Ticketboy? </b><button class="click" @click="prevpage"><u><b>create account</b></u></button></p>
    </div>
</template>
<script>
export default {
    data() {
       return{} 
    },
    methods:{
        prevpage(){
           this.$router.push({path:"/"}) 
        }
    }
}
</script>