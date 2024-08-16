function  outer(){
    let count=0;

    function inner(){
        const innCounter= ++count;
        return count;
    }
    return inner();
}

const innerfun=outer();
const in2=outer();
console.log(innerfun);
console.log(in2);