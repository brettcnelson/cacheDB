document.getElementById('dbs').appendChild(document.createTextNode(JSON.stringify(main, null, 4)))
var lstor = document.createElement('div')
lstor.innerHTML = JSON.stringify(localStorage, null, 4)
document.getElementById('local').appendChild(lstor)
var sstor = document.createElement('div')
sstor.innerHTML = JSON.stringify(sessionStorage, null, 4)
document.getElementById('session').appendChild(sstor)