// 2621. Sleep

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

// 2637. Promise Time Limit

var timeLimit = function(fn, t) {
    
    return async function(...args) {
        const fns=fn(...args);
        const promise=new Promise((result,reject)=>{
            setTimeout(()=>{
                reject('Time Limit Exceeds the given time')
            },t);

        })

        return Promise.race([fns,promise]);
    }
};
