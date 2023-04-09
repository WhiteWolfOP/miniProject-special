let nama;

nama = prompt('Wait, kamu siapa ?')

if(nama != null && nama != "")
{

    let str = `Halo namaku moci senang bertemu denganmu ${nama}.`
    let i   = 0;
    ketik()

    function ketik()
    {
        setTimeout(function(){

            document.querySelector("#text").innerHTML += str.charAt(i)
            i++
            
            ketik()

        }, 50);
    }
}else
{
    window.location.reload()
}