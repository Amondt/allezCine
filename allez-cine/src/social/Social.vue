<template>
    <div id="social">
        <div id=socialFb>
           <i class="fab fa-facebook-f"></i>
        </div>
        <div id="socialTw">
            <i class="fab fa-twitter"></i>
        </div>
    </div>  
</template>

<script>
export default {


}
</script>

<style scoped>
   
   #social {
        background-color: hotpink;
        width: 200px;
        position: fixed;
        top:35%;
        left: 0%;
        font-size: 2em;
   }

    #socialFb {
        text-align: right;
        height: 45px;
        width: 200px;
        position: fixed;
        top: 31%;
        left: -9%;
        background-color: #3b5998;
        transition: 1s;
        border-radius: 50px;
        color:#ffffff;
    }

    #socialFb:hover {
        text-align: right;
        height: 45px;
        width: 200px;
        position: fixed;
        top: 31%;
        left: -1%;
        background-color: #3b5998;
    }

    #socialTw {
        text-align: right;
        height: 45px;
        width: 200px;
        position: fixed;
        top:38%;
        left: -9%;
        background-color: #00aced;
        transition: 1s ;
        border-radius: 50px;
        color: #ffffff;
    }

     #socialTw:hover {
        text-align: right;
        height: 45px;
        width: 200px;
        position: fixed;
        top:38%;
        left: -1%;
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
