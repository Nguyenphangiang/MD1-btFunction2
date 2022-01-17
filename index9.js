let arrs = ["a","b","a","c","d"]
function addWord(value){
    let cnt=0;
    for (let i = 0; i < arrs.length; i++) {
        if (value==arrs[i]){
            cnt++;
        }
    }if (cnt==0){
        cnt=-1;
    }
    alert(cnt);
}
addWord("e");