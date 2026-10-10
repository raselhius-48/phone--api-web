const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json();
    // object show
    // console.log(data)
    // displaying the value
    // console.log(data.data)
    const phones = data.data

    // console.log(phones)

    displayPhone(phones)
}


const displayPhone = phones => {
    // console.log(phones)
    phones.forEach(phones => {
        console.log(phones)

        // 1. create a div

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 w-96 shadow-sm`



    });
}
loadPhone();