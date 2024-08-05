// 2623 Memorize
function memoize(fn) {
    let cache = {};  
    return function(...args) {
        let key = '';
        for (let i = 0; i < args.length; i++) {
            key += JSON.stringify(args[i]) + '+'; 
        }
        if (cache[key] !== undefined) {  
            return cache[key];
        } else {
            const result = fn(...args); 
            cache[key] = result;
            return result;
        }
    }
}
