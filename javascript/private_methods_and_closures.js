var Counter = (function(){
    var privateValue = 0
    function changeBy(value){
        privateValue += value
    }
    return {
        increment: function(){
            changeBy(1)
        },
        decrement: function(){
            changeBy(-1)
        },
        value: function(){
            return privateValue
        }
    }
})()

Counter.increment()
Counter.increment()
console.log(Counter.value())

try{
    Counter.changeBy(1)
}catch(error){
    console.error(error)
}