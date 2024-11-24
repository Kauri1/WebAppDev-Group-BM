<template>
    <div class="signup-box">
        <h2>Welcome to PostIt</h2>
        <a href="">
            <h2>Create an account</h2>
        </a>
        <p>or</p>
        <h2>log in</h2>
        <div>
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

<style>
.signup-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
    background-color: #deedd1;
    border-radius: 10px;
    max-width: 400px;
    min-width: none;
    height: fit-content;
    padding: 10px 0px;
}

.custom-form input[type="email"],
.custom-form input[type="password"] {
    padding: 15px;
    margin-bottom: 15px;
    border: 2px solid #ccc;
    border-radius: 5px; 
    font-size: 16px; 
    transition: border-color 0.3s;
}


.custom-form input[type="submit"] {
    background-color: #007BFF;
    color: white; 
    border: none; 
    padding: 15px; 
    border-radius: 5px; 
    font-size: 16px;
    cursor: pointer; 
    transition: background-color 0.3s, transform 0.2s;
}

.custom-form input[type="submit"]:hover {
    background-color: #0069d9;
    color: white; 
    border: none; 
    padding: 15px; 
    border-radius: 5px; 
    font-size: 16px;
    cursor: pointer; 
    transition: background-color 0.3s, transform 0.2s;
}
</style>