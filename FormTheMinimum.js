function minValue(values){
    return +(Array.from(new Set(values))).sort((a,b)=>a-b).join('');
}
console.log(minValue([4,5,6,6,1]))
