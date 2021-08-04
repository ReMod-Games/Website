import "vue"

console.log("Loaded!")
const vueTest = new Vue(
    {
        el: "#website",
        data: {
            message: "Hello World!"
        }
    }
)