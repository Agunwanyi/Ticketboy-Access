<template>
    <div class="customerSignup">
        <div class="alpha">
         <img src="@/assets/Tb.png" alt="">
         <h4 class="mt-3"><b>Sign Up. Get Access.</b></h4> 
      <p class="mt-3 reach">Reach millions of fans in Africa and increase revenue <br> when you sign up for a Ticketboy account.</p>
        </div>
        <div class="beta">
            <div class="form-group">
              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Email Address">
            </div>
                <div class="d-flex justify-content-between">
                 <div class="form-group">
              <input type="text" class="form-control inputTwo" name="" id="" aria-describedby="emailHelpId" placeholder="First Name">
            </div>
            <div class="form-group">
              <input type="text" class="form-control inputTwo" name="" id="" aria-describedby="emailHelpId" placeholder="Last Name">
            </div>
             </div>
            <div class="form-group">
              <input type="text" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Phone Number">
            </div>
            <div class="form-group">
              <input type="Password" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Password">
            </div>
        </div>
        <button class="create">create account</button>
        <p class="mt-3 already">Already have a Ticketboy account? <button class="log"><u @click="nextpage">Log in</u></button></p>
        <hr>
        <p class="website">By using this website or by creating an account you agree to the terms of use  and the privacy policy</p>
    </div>
</template>
<script>
export default {
    data() {
        return{}
    },
    methods:{
        nextpage(){
            this.$router.push({path:'/Register'})
        }
    }
}
</script>