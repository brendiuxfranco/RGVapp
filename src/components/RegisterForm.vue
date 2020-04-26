<template>
<NavBar />
<div class="form-group">
    <label for="email">Your Email Address</label>
    <input type="text"
           id="email"
           class="form-control"
           v-model="userData.email">
</div>
<div class="form-group">
    <label for="password">Enter Password</label>
    <input type="password"
           id="password"
           class="form-control"
           v-model.lazy="userData.password">
</div>
<h3> Fill the following...</h3>
<br />
<div class="form-group">
    <label for="message">Full Name: </label>
    <textarea id="message"
              rows="1"
              class="form-control"
              v-model="message"></textarea>
</div>
<div class="form-group">
    <label for="message">Phone Number: </label>
    <textarea id="message"
              rows="1"
              class="form-control"
              v-model="message"></textarea>
</div>
<div class="form-group">
    <label for="message">Team Name: </label>
    <textarea id="message"
              rows="1"
              class="form-control"
              v-model="message"></textarea>
</div>
<div class="form-group">
    <label for="message">Named the team members: </label>
    <textarea id="message"
              rows="10"
              class="form-control"
              v-model="message"></textarea>
</div>
<p> Please select the field, it close to you...</p>
<div class="form-group">
    <label >
        <input type="checkbox"
               v-model="checkboxOptions">Plaza Sport Center
               1101 E Nolana Loop
               (956)783-7670
               Pharr,TX
    </label>
    <br>
    <label >
        <input type="checkbox"
               v-model="checkboxOptions"> McAllen Youth Soccer
               4311 N 10th St.
               (956)631-0431
               McAllen,TX  
    </label> <br>
    <label >
        <input type="checkbox"
               v-model="checkboxOptions"> McAllen Sport Park
               3301 Buddy Owens Blvd
               (956)681-3333
               McAllen,TX  
    </label>
</div>
<button class="btn btn-primary"
        @click.prevent="submitted">Submit to register!
</button>

<div class="card" v-if="isSubmitted">
    <div class="card-body">
        <h4 class="card-title">Registration Form Data</h4>
 
        <p>Mail: <b>{{ userData.email }}</b></p>
        <p>Password: <b>{{ userData.password }}</b></p>
        <p style="white-space: pre">Message: <b>{{ message }}</b></p>
        <p>Field Checked: </p>
        <ul>
            <li v-for="item in checkboxOptions"><b>{{ item }}</b></li>
        
    </div>
    <Footer />
</div>
</templete>


<script>
    

export default {
    components: {
        NavBar,
        Footer,
    },
        
     data(){
        return{
            userData: {
                email: '',
                password:'',
            },
            message:'Full Name: ',
            message: 'Team Name: ',
            message:'Named the team member: ',
            checkboxOptions: []
        }
    },
    methods:{
        submitted(){
            this.isSubmitted = true;
        }
    }
}
</script>