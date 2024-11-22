<template>
    <div class="login-box">
        <h2>Welcome to PostIt</h2>
        <a href="">
            <h2>Create an account</h2>
        </a>
        <p>or</p>
        <h2>log in</h2>
        <div class="form-container">
        <form class="custom-form" action="index.html">
            <input type="email" name="email" id="email" placeholder="email" required><br>
            <input type="password" name="password" id="password" placeholder="password" required><br>
            <input type="submit" value="log in"><br>
        </form><br>
        </div>
        <a href="">Forgot password</a>


    </div>
</template>
    
    
<script>
    export default {
        name: "LoginView"
    };
</script>