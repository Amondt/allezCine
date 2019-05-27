<template>
    <div class='autocomplete'>
        <input 
        type="text" 
        class="searchBar" 
        v-model="search" 
        placeholder="Search..." 
        @input="onLink()"
        @submit="getDetails(this.id,this.mediaType)"
        @keydown.down="onArrowDown()"
        @keydown.up="onArrowUp()"
        @keydown.enter="onEnter()"
        >
        <ul v-show="isOpen" :class="[isMobile? 'autocomplete-results-mobile' : 'autoCompleteResults']">
            <li class="loading" v-if="isLoading">
                Recherche en cours...
            </li>
            <li class="autoCompleteResult" v-else 
                v-for="(result,index) in results"
                :key="index"
                :class="{ 'isActive': index === arrowCounter }"
                @click="setResult(result)"
            >
                {{ result.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce'

export default {
    name: "searchBar",
    data(){
        return{
            search: '',
            id : null,
            mediaType : null,
            results : [],
            isOpen : false,
            isLoading: false,
            arrowCounter : -1
        }
    },
    props:{
        isMobile : Boolean
    },
    methods: {
        onLink : debounce(function(){
            if (this.isLoading){
                this.isOpen = false
            } else {
                if (this.search != ''){
                    this.isOpen = true;
                    this.isLoading = true
                    this.loadResults()
                }
            }
        },1000),
        loadResults(){
            this.results = []
            const url = `https://api.themoviedb.org/3/search/multi?sort_by=popularity.desc&query=${this.search}&api_key=833ff06d69182d00cff97e3090365785`;
            axios
                .get(url)
                .then(response => {
                    for (let i = 0 ; i < response.data.results.length; i++){
                        if (i<5){
                            if (response.data.results[i].name){
                                let item = {
                                    id : response.data.results[i].id,
                                    name : response.data.results[i].name,
                                    mediaType : response.data.results[i].media_type
                                }
                                this.results.push(item)
                            } else {
                                let item = {
                                    id : response.data.results[i].id,
                                    name : response.data.results[i].title,
                                    mediaType : response.data.results[i].media_type
                                }
                                this.results.push(item)
                            }
                        }
                    }
                })
            this.isLoading = false;
        },
        setResult(result){
            this.search = result.name
            this.id = result.id
            this.mediaType = result.mediaType
            this.isOpen = false
        },
        onArrowDown() {
            if (this.arrowCounter < this.results.length) {
                this.arrowCounter = this.arrowCounter + 1;
            }
        },
        onArrowUp() {
            if (this.arrowCounter > 0) {
            this.arrowCounter = this.arrowCounter - 1;
            }
        },
        onEnter() {
            this.search = this.results[this.arrowCounter].name;
            this.id = this.results[this.arrowCounter].id;
            this.mediaType = this.results[this.arrowCounter].mediaType;
            this.isOpen = false;
            this.arrowCounter = -1;
            this.getDetails(this.id,this.mediaType);
        },
        handleClickOutside(evt) {
            if (!this.$el.contains(evt.target)) {
                this.isOpen = false;
                this.isLoading = false;
                this.results = [];
                this.arrowCounter = -1;
            }
        },
        getDetails(id,media){
            this.$router.push({
                path : `/details/${media}/${id}`
            })
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    destroyed() {
        document.removeEventListener('click', this.handleClickOutside);
    }
}
</script>

<style scoped>
    .autocomplete{
        width: 300px;
    }
    .searchBar{
        background-color: white;
        color: black;
        border-radius : 50px;
        height: 30px;
        width: 300px;
        padding: 5px;
        padding-left:20px;
    }
    .autoCompleteResults {
        position: fixed;
        top: 45px;
        right: 35px;
        padding: 0;
        margin: 0;
        background: white;
        color : black;
        border: 1px solid #eeeeee;
        height: auto;
        width: 275px;
    }
    .autocomplete-results-mobile {
        position: fixed;
        top: 95px;
        left: 90px;
        padding: 0;
        margin: 0;
        background: white;
        color : black;
        border: 1px solid #eeeeee;
        height: auto;
        width: 194px;
        z-index: 5;
    }
    .autoCompleteResult {
        list-style: none;
        text-align: left;
        padding: 4px 2px;
        cursor: pointer;
    }
    .autoCompleteResult.isActive,
    .autoCompleteResult:hover {
        background-color: #000000;
        color: white;
    }
</style>