<template>
    <div class="signup-box">
        <h2>Welcome to PostIt</h2>
        <h2>Sign up</h2>
        <div class="form-container">
        <form class="custom-form" @submit="handleSubmit">
            <input type="email" name="email" id="email" placeholder="email" v-model="email" required><br>
            <input type="password" name="password" id="password" placeholder="password" v-model="password" required><br>
            
            <ul class="validation-errors" v-if="validationErrors.length > 0">
                <li v-for="(error,index) in validationErrors" :key="index" class = "error-message">{{ error }}</li>
            </ul>
            
            <input type="submit"  value="Sign up" /><br />
        </form><br>
        </div>
    </div>
</template>
    
    
<script>
import {validatePass} from '@/assets/js/validatePass'; 
    export default {
        name: "SignUpView",
        data() {
            return {
                email: "",
                password: "",
                validationErrors: [],
            };
        },
        methods: {
            handleSubmit() {
                this.validationErrors = validatePass(this.password);
                if (this.validationErrors.length === 0) {
                    alert("Signup successful!");
                } else {
                    event.preventDefault(); // Stops the default form submission and page reload to display error messages.
                }
            },
        },
    };
</script>