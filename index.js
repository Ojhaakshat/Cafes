
const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

function renderCafe(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement( 'span');
    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    li.appendChild(name);
    li.appendChild(city);
    cafeList.appendChild(li);
}


// How to get data from Firestore(getting data)
db.collection('cafes').get().then((snapshot) => {
    // console.log(snapshot.docs);
    snapshot.docs.forEach(element => {
        // console.log(element.data());
        renderCafe(element);
    });
})

// How to add data to firestore(save data)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value,
        city: form.city.value,
    });
    form.city.value = '';
    form.name.value = '';

})
