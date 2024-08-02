//2629. Function Composition

var compose = function(functions) {
    
    return function(x) {
        if (functions.length==0)
        {
            return x;
        }
        let k=x;
        for(let i=functions.length-1;i>=0;i--)
        {
            k=functions[i](k);
        }
        return k;
    }
};


//2666. Allow one function call

var once = function(fn) {
    let c=0;
    return function(...args){
        let ans;
        if (c<1)
        {
            ans=fn(...args);
            c=c+1;
        }
        return ans;
    }
};
