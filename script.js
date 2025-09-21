const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector("#selectConvert-2")
const firstSelect = document.querySelector("#selectConvert")

// const API_URL = "https://api.exchangerate-api.com/v4//latest/"

// async function convertMoney() {
//     loading.style.dysplay = "block"

//     try {
//         // const response = await fetch(API_URL + firstSelect.value)
//     }


//     catch(error){
//         alert("Falha no servidor")
//     }
// }    console.log(API_URL + firstSelect.value)

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const firstValue = document.querySelector("#first-value")
    const convertedValue = document.querySelector("#second-value")




    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 4.7
    const yenToday = 10.8
    const realToday = 3.7



    if (currencySelect.value == "dolar") {
        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == "euro") {
        convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

    if (currencySelect.value == "libra") {
        convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelect.value == "yen") {
        convertedValue.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / yenToday)
    }

    if (currencySelect.value == "real") {
        convertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday);
    }




    //  FIRST INPUT AQUI!!============================================================================!

    if (firstSelect.value == "dolar") {
        firstValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue);
    }

    if (firstSelect.value == "real") {
        firstValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue);
    }

    if (firstSelect.value == "libra") {
        firstValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    }


    if (firstSelect.value == "euro") {
        firstValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue);
    }


    if (firstSelect.value == "yen")
        firstValue.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
}



function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector("#currency-img")
    const currencyName1 = document.querySelector("#currency-first-name")
    const currencyImage1 = document.querySelector("#currency-img-2")

 



    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"

    }

    if (currencySelect.value == "yen") {
        currencyName.innerHTML = "¥ Yen"
        currencyImage.src = "./assets/yen.png"

    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "£ Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    // first selesc images and names =====================================================

    if (firstSelect.value == "dolar") {
        currencyName1.innerHTML = "Dólar Americano"
        currencyImage1.src = "./assets/dolar.png"
    }

    if (firstSelect.value == "euro") {
        currencyName1.innerHTML = "Euro"
        currencyImage1.src = "./assets/euro.png"
    }

    if (firstSelect.value == "yen") {
        currencyName1.innerHTML = "¥ Yen"
        currencyImage1.src = "./assets/yen.png"
    }

    if (firstSelect.value == "libra") {
        currencyName1.innerHTML = "£ Libra"
        currencyImage1.src = "./assets/libra.png"
    }

    if (firstSelect.value == "real") {
        currencyName1.innerHTML = "Real"
        currencyImage1.src = "./assets/real.png"
    }



    convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
firstSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
