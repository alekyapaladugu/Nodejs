// process.nextTick(() => {
//     console.log("Inside next tick")
// })
// console.log("Outside next tick")
Promise.resolve().then(() => {
    console.log("Inside Promise")
})
// setTimeout(() => {
//     console.log('Timer Queue')
//     process.nextTick(() => {
//         console.log("Inside next tick1")
//     })
// }, 0)
setTimeout(() => {
    console.log('Timer Queue2')
}, 0)
setImmediate(() => {
    console.log('Set Immediate Check')
})
for(let i=0;i<20000000;i++){}  // To guarantee the order of event loop executions. Timer Queue before Check Queue
process.nextTick(() => {
    console.log("Inside next tick2")
})
