export function chauffer(a) {
    if (a <100) {
        a +=20
        setTimeout(()=>{
            console.log(`La bouilloire est a ${a} degré`);
            chauffer(a)
        },1000)
    } else {
        console.log(`La bouilloire s'est etiente`);
    }
}