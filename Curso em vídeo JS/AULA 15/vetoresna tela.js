let valores = [8,3,5,4,7,9]
valores.sort()
//console.log(valores)//
//console.log(valores[0])//
/*for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}*/
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}