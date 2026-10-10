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
    // 1 get id tach

    const phoneContainer = document.getElementById(phoner - container)
    phones.forEach(phones => {
        console.log(phones)

        // 2. create a div

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 w-96 shadow-sm`

        //   3- set inner html

        phoneCard.innerHTML = `<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `



    });
}
loadPhone();