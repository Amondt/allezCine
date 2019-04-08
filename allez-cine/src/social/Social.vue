<template>
    <div id="social">
        <a href="https://www.facebook.com">
        <div id=socialFb>
           <i class="fab fa-facebook-f"></i>
        </div>
        </a>
        
        <a href="https://www.twitter.com">
        <div id="socialTw">
            <i class="fab fa-twitter"></i>
        </div>
        </a>
    </div>  
</template>

<script>
export default {


}
</script>

<style scoped>
   
   #social {
       z-index: 9999;
        background-color: hotpink;
        width: 200px;
        position: fixed;
        top:400px;
        left: 0%;
        font-size: 2em;
   }

    #socialFb {
        opacity: 1;
        text-align: right;
        height: 45px;
        width: 200px;
        position: fixed;
        top: 600px;
        left: -150px;
        background-color: #3b5998;
        transition: 0.3s;
        border-radius: 50px;
        color:#ffffff;
    }

    #socialFb:hover {
        text-align: right;
        height: 45px;
        width: 200px;
        position: fixed;
        top: 600px;
        left: -100px;
        background-color: #3b5998;
    }

    #socialTw {
        opacity: 1;
        text-align: right;
        height: 45px;
        width: 200px;
        position: fixed;
        top:650px;
        left: -150px;
        background-color: #00aced;
        transition: 0.3s ;
        border-radius: 50px;
        color: #ffffff;
    }

     #socialTw:hover {
        text-align: right;
        height: 45px;
        width: 200px;
        position: fixed;
        top:650px;
        left: -100px;
        background-color: #00aced;
    }



        .fab {
            font-family: "Font Awesome 5 Brands";
            margin-top: 8px;
            margin-right: 10px;
    }   

    i.fab.fa-facebook-f {
        font-family: "Font Awesome 5 Brands";
            margin-top: 8px;
            margin-right: 16px;

    }

</style>
