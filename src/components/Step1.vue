<template>
<div class="bac">
    <div class="signup">
      <div class="one">
        <img src="@/assets/Tb.png" alt="">
      <h4 class="mt-3"><b>Sign Up. Get Access.</b></h4> 
      <p class="mt-3 reach">Reach millions of fans in Africa and increase revenue <br> when you sign up for a Ticketboy account.</p>
      </div>
      <div class="two">
        <div class="form-group">
          <input type="email" class="form-control-file inputOne mt-3" name="" id="" placeholder="Email Address" aria-describedby="fileHelpId" >
        </div>
        <div class="form-group">
          <input type="text" class="form-control-file inputOne mt-4" name="" id="" placeholder="Company Name" aria-describedby="fileHelpId">
        </div>
          <div class="form d-flex justify-content-between">
          <div class="form-group">
          <input type="text" class="form-control-file inputTwo mt-3" name="" id="" placeholder="First Name" aria-describedby="fileHelpId">
        </div>
        <div class="form-group">
          <input type="text" class="form-control-file inputTwo mt-3" name="" id="" placeholder="Last Name" aria-describedby="fileHelpId">
        </div>
          </div>
            <div class="form2 d-flex">
              <div class="input-group mb-3">
             <div class="input-group-prepend">
            <span class="input-group-text mt-3 num" id="basic-addon1">+234</span>
             </div>
             <input type="text" class="form-control mt-3 number" placeholder="Phone Number" aria-label="Username" aria-describedby="basic-addon1">
              </div>
            </div>
        <div class="form-group">
          <input type="password" class="form-control-file inputOne mt-3" name="" id="" placeholder="Password" aria-describedby="fileHelpId">
        </div>
      </div>
        <button class="account">create account</button>
        <p class="mt-3 already"> <b>Already have a Ticketboy account?</b> <button class="log"><u @click="nextpage"><b>Log in</b></u></button></p>
        <hr>
        <p class="website">By using this website or by creating an account you agree to the terms of use  and the privacy policy</p>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return{}
  },
  methods:{
    nextpage(){
      this.$router.push({path:"/Login"})
    }
  }
}
</script>