const app = new Vue({
    el:"#app",
    data:{
        books:[
            {
                id:1111,
                name:"简爱",
                date:"2019-09-09",
                price:10,
                count:10
            },
            {
                id:2222,
                name:"简爱",
                date:"2019-09-09",
                price:10,
                count:10
            },
            {
                id:3333,
                name:"简爱",
                date:"2019-09-09",
                price:10,
                count:10
            },
            {
                id:4444,
                name:"简爱",
                date:"2019-09-09",
                price:10,
                count:10
            },
            {
                id:5555,
                name:"简爱",
                date:"2019-09-09",
                price:10,
                count:10
            }
        ],
    },
    methods:{
        getPrice:function (price) {
            return "￥"+price.toFixed(2)
        },
        incress:function (index) {
            // alert(index)
            // console.log("incress")
            // 动态改变count的值
            if(this.books[index].count==1){
                alert("数量最小为1");
                return;
            }
            this.books[index].count--;

        },
        add:function (index) {
            // alert(index)
            // console.log("add")
            // 动态改变count的值
            this.books[index].count++;
        },
        remove:function (index) {
            this.books.splice(index,1)
        }
    },
    computed:{
        totalPay () {
            return function(){
                let totalPrice = 0;
                for(let i=0;i<this.books.length;i++){
                    totalPrice+= this.books[i].price * this.books[i].count;
                }
                return totalPrice
            }

        }
    }
})