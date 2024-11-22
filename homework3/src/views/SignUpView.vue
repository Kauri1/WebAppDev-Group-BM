<template>
    <div class="signup-box">
        <h2>Welcome to PostIt</h2>
        <h2>Sign up</h2>
        <div class="form-container">
        <form class="custom-form" action="index.html">
            <input type="email" name="email" id="email" placeholder="email" required><br>
            <input type="password" name="password" id="password" placeholder="password" required><br>
            <input type="submit" value="log in"><br>
        </form><br>
        </div>


    </div>
</template>
    
    
<script>
    export default {
        name: "SignUpView"
    };
</script>