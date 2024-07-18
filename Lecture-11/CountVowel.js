let str="red and white"
let n=str.length;
let v=0;

for(let i=0;i<n;i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'|| str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U'){
        v++;
    }
}
console.log(v);
