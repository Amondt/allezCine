<template>
    <div id='lower'>
        <div id='lower-wrapper'>
           
            <h1><span>ALLEZ</span>CINE!</h1>
            
            <div id="footerMenus">

                <div id='lowerbar-wrapper'>
                <b class='lowerbar' id='lowerbar1' preferred='yes'>
                <div><h2>LES FONDAMENTAUX</h2></div>
                <div><a href="#" class="home" >A propos de AllezCine</a></div>
                <div><a href="#" class="home" >Contactez-nous</a></div>
                <div><a href="#" class="home" >Forum d'aide</a></div>
                </b>
                </div>


                <div id='lowerbar-wrapper'>
                <b class='lowerbar' id='lowerbar2' preferred='yes'>
                <div><h2>COMMUNAUTE</h2></div>
                <div><a href="#" class="home" >Règles</a></div>
                <div><a href="#" class="home" >Classement</a></div>
                <div><a href="#" class="home" >Forum</a></div>
                <div><a href="#" class="home" >Twitter</a></div>
                <div><a href="#" class="home" >Facebook</a></div>
                </b>
                </div>


                <div id='lowerbar-wrapper'>
                <b class='lowerbar' id='lowerbar3' preferred='yes'>
                <div><h2>LEGAL</h2></div>
                <div><a href="#" class="home" >Conditions d'utilisation</a></div>
                <div><a href="#" class="home" >Politique de confidentialité</a></div>
                </b>
                </div>
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
    text-align: left;
}

#footerMenus {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#lower {
    margin:auto;
    padding: 10px;
    width: 100%;
    background:#262626;
}

#lower-wrapper {
    background:#262626;
    margin:auto;
    padding: 20px 0px 20px 0px ;
    width: 80vw;
    border:0;
}

#lowerbar-wrapper {
    background:#262626;
    float: left;
    margin: 0px 5px auto;
    padding-bottom: 20px;
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

@media screen and (max-width: 640px) {
    #footerMenus {
        display: flex;
        flex-direction: column;
        margin: 0px auto;
        justify-content: space-between;
    }

    #lowerbar-wrapper {
        background-color:transparent;
        float: left;
        display: block;
        flex-direction: column;
        margin: auto;
        padding-bottom: 20px;
        text-align: left;
        color:rgb(255, 255, 255);
        font: normal 16px Arial, Tahoma, Verdana;
        line-height: 1.6em;
        word-wrap: break-word;
        overflow: hidden;
        font-size: 1em;
        margin-left: 10px;
    }

    .lowerbar h2[data-v-602ad626] {
        margin: 0px 0px 10px 0px;
        padding: 3px 0px 3px 0px;
        text-align: justify;
        border: 0;
        color: rgb(255, 255, 255);
        text-transform: uppercase;
        font: bold 0.8em Arial, Tahoma, Verdana;
    }

    #lower-wrapper {
        background:#262626;
        margin:auto;
        padding: 20px 0px 20px 78px;
        width: 80vw;
        border:0;
    }

    h1 {
        font-size: 1.5em;
        margin-bottom: 19px;
    }

    span {
        font-size:1em;
    }
}
</style>
