function test() {
    console.log(a)
    console.log(a)
    b()
    function b() {
        console.log(a)
    }    
}
var a = 1;
test()

function compareTriplets(a, b) {
    let alice = 0,
        bob = 0;
    for(let i=0;i<a.length;i++){
        if(a[i] > b[i]){
            alice++;
        }
        else if(a[i] < b[i]){
            bob++;
        }
    }
    return [alice,bob];
}

function name(a) {
    for(let i=0; i<a.length;i++)
        console.log(a[i])
}
name("and")

function a(arr){
    let p=0
    let s=0
    let lenArr = arr.length
    for(let i=0;i<lenArr;i++){
        p += arr[i][i]
        s += arr[i][(lenArr-i-1)]
    }
    return Math.abs(p-s);
}
var a = ([ [1,2,3],[1,2,3],[1,2,3] ])

