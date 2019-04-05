








<template>
   

    <div id='lower'>
        <div id='lower-wrapper'>
           
            <h1><span>ALLEZ</span>CINE!</h1>
            
            <div id='lowerbar-wrapper'>
            <b class='lowerbar' id='lowerbar1' preferred='yes'>
            <h2>LES FONDAMENTAUX</h2><br>
            <a href="#" class="home" v-on:click="makeActive('home')">A propos de AllezCine</a><br>
            <a href="#" class="home" v-on:click="makeActive('home')">Contactez-nous</a><br>
            <a href="#" class="home" v-on:click="makeActive('home')">Forum d'aide</a><br>
            </b>
            </div>


            <div id='lowerbar-wrapper'>
            <b class='lowerbar' id='lowerbar2' preferred='yes'>
            <h2>COMMUNAUTE</h2><br>
            <a href="#" class="home" v-on:click="makeActive('home')">A propos de AllezCine</a><br>
            <a href="#" class="home" v-on:click="makeActive('home')">Contactez-nous</a><br>
            <a href="#" class="home" v-on:click="makeActive('home')">Forum d'aide</a><br>
            </b>
            </div>


            <div id='lowerbar-wrapper'>
            <b class='lowerbar' id='lowerbar3' preferred='yes'>
            <h2>LEGAL</h2><br>
            <a href="#" class="home" v-on:click="makeActive('home')">Conditions d'utilisation</a><br>
            <a href="#" class="home" v-on:click="makeActive('home')">Politique de confidentialité</a><br>
            </b>
            </div>

            <div style='clear: both;'/>
        </div>
    </div>
        
        
    
</template>

<script>
export default {

}
</script>

<style scoped>
    

    span {
        color: red;
    }

    h1 {
        color: #ffffff;
        margin-bottom: 80px;
        margin-left: -570px;
        
    }

    #lower {
    margin:auto;
    padding: 0px 0px 10px 0px;
    width: 100%;
    background:#000000;
    }
    #lower-wrapper {
    background:#000000;
    margin:auto;
    padding: 20px 0px 20px 0px ;
    width: 80vw;
    border:0;
    }

    #lowerbar-wrapper {
    background:rgb(0, 0, 0);
    float: left;
    margin: 0px 5px auto;
    padding-bottom: 20px;
    /* width: 300px; */
    text-align: justify;
    color:rgb(255, 255, 255);
    font: normal 16px Arial, Tahoma, Verdana;
    line-height: 1.6em;
    word-wrap: break-word;
    overflow: hidden;
    }
    .lowerbar {margin: 0; padding: 0;}
    .lowerbar .widget {margin: 0; padding: 10px 20px 0px 20px;}
    .lowerbar h2 {
    margin: 0px 0px 10px 0px;
    padding: 3px 0px 3px 0px;
    text-align: justify;
    border:0;
    color:rgb(255, 255, 255);
    text-transform:uppercase;
    font: bold 14px Arial, Tahoma, Verdana;
    }
    .lowerbar ul {
    color:#fff;
    margin: 0 auto;
    padding: 0;
    list-style-type: none;
    }
    .lowerbar li {
    display:block;
    color:#fff;
    line-height: 1.6em;
    margin-right: 0 !important;
    padding: 6px;
    border-bottom: 1px solid #222;
    border-top: 1px solid #444;
    list-style-type: none;
    }
    .lowerbar li a {
    text-decoration:none; color: #DBDBDB;
    }
    .lowerbar li a:hover {
    text-decoration:underline;
    }
    .lowerbar li:hover {
    display:block;
    background: #222;
    }
    a {
        text-decoration: none;
        color: #ffffff;
        line-height: 2.5em;
    }
    a:hover {
        text-decoration: underline;
        color: red;
        line-height: 2.5em;
    }

</style>
