
let da = +prompt(`yilning oylarini tanglang (1-12)`)

let vody = document.querySelector(`body`)



function Oytanlash(dispetcher) {
    switch (dispetcher) {
        case 1:
            let yanvar = document.getElementById(`dispetcher`).textContent = "Yanvar"
            vody.style.backgroundColor = "LightBLue"
            break;
        case 2:
            let fevral = document.getElementById(`dispetcher`).textContent = "Fevral"
            vody.style.backgroundColor = "LightBLue"
            break;
        case 3:
            let mart = document.getElementById(`dispetcher`).textContent = "mart"
            vody.style.backgroundColor = `YellowGreen`
            break;
        case 4:
            let aprel = document.getElementById(`dispetcher`).textContent = "aprel"
            vody.style.backgroundColor = `Green`
            break;
        case 5:
            let may = document.getElementById(`dispetcher`).textContent = "may"
            vody.style.backgroundColor = `YellowGreen`
            break;
        case 6:
            let iyun = document.getElementById(`dispetcher`).textContent = "iyun"
            vody.style.backgroundColor = `LightYellow`
            break;
        case 7:
            let iyul = document.getElementById(`dispetcher`).textContent = "iyul"
            vody.style.backgroundColor = `Yellow`
            break;
        case 8:
            let avgust = document.getElementById(`dispetcher`).textContent = "avgust"
            vody.style.backgroundColor = `Orange`
            break;
        case 9:
            let sentabr = document.getElementById(`dispetcher`).textContent = "sentabr"
            vody.style.backgroundColor = `Orange`
            break;
        case 10:
            let oktyabr = document.getElementById(`dispetcher`).textContent = "Oktyabr"
            vody.style.backgroundColor = `Orange`
            break;
        case 11:
            let noyabr = document.getElementById(`dispetcher`).textContent = "noyabr"
            vody.style.backgroundColor = `Orange`
            break;
        case 12:
            let December = document.getElementById(`dispetcher`).textContent = "dekambrrr"
            vody.style.backgroundColor = "LightBLue"
            break;

        default:
            let Xato = document.getElementById(`dispetcher`).textContent = "1 dan 12 gacha son tanglang"
            break;
    }
}

dispetcherBilanBoglanish(da)
