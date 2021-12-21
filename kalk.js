send.addEventListener("click",fnc);
function fnc(){
    let val_Z = Z.value;
    let val_R = R.value;
    let val_K = K.value;
    let val_P = P.value;
    let val_A = A.value;
    let val_Nб = Nб.value;
    let val_res = parseInt(val_Z) + parseInt(val_R) + parseInt(val_K) + parseInt(val_P)+ parseInt(val_A) + parseInt(val_Nб);
    res.innerHTML = val_res;
}