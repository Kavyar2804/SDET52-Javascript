document.getElementById('gr').innerHTML='Hai good eevening' 
document.getElementById('js').innerHTML='JS session is going on'

document.getElementById('cc').onclick=demo

function demo()
{
    document.getElementById('cc').innerHTML='Clicked'
}

document.getElementById('dd').onclick=demo1
function demo1() {
    document.getElementById('dt').innerHTML=Date()
}