const app = Vue.createApp({
    data : function() {
        return {
            Username : "",
            Password : "",
        };
    },
    methods : {
        login : function(e) {
            e.preventDefault();
        },
        signup : function(e) {
            e.preventDefault();
        }
    }
});

app.mount("#app");