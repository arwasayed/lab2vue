const app=Vue.createApp({
    data:()=>({
        isUserDataVisible:false,
        post:{
            title:"",
            content:"",
            category:"",
            shareon:[],
            series:""
        },
        postdata:{
            categories:["Testing","Developing","Networking","Designing"],
            shareon:["Facebook","Twitter","LinkedIn","Instagram"],
            series:["First Edition","Second Edition","Third Edition"],
            Sendimmedialy:false,
        },
    }),
    methods:{
        validateForm() {
            this.formErrors = [];
            
            if (!this.post.title) {
                this.formErrors.push("Title is required");
            }
            if (!this.post.content) {
                this.formErrors.push("Content is required");
            }
            if (!this.post.category) {
                this.formErrors.push("Category is required");
            }
            if (!this.post.series || this.post.series === "select Edition") {
                this.formErrors.push("Series is required");
            }
            if (this.post.shareon.length === 0) {
                this.formErrors.push("At least one social media must be selected");
            }
            
            if (this.formErrors.length === 0) {
                this.isUserDataVisible = true;
            } else {
                alert("Please fix the following errors:\n" + this.formErrors.join("\n"));
            }
        }

    }
});
app.mount("#mainapp");