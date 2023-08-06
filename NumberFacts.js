let baseURL = 'http://numbersapi.com';
// let num = 5;
const q1 = document.querySelector('.one-fact');
const q2 = document.querySelector('.multiple-nums');
const q3 = document.querySelector('.four-facts');


// 1.
// $.getJSON(`${baseURL}/${num}?json`).then(data => {
//         $('.one-fact').append(`<li>${data.text}</li>`);
//     });

async function oneFact(num) {
    try {
        let res = await axios.get(`${baseURL}/${num}?json`);
        console.log(res.data.text);
        q1.innerHTML = res.data.text;
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}
oneFact(9)

// // 2.
// let specificNums = [8, 9, 10, 3];
// // axios.get(`${baseURL}/${specificNums}?json`).then(data => {
// //     data.forEach(d => $('.multiple-nums').append(`<li>${d}</li>`));
// // });
// axios.get(`${baseURL}/${specificNums}?json`).then(data => {
//     console.log(data);
// });

async function multipleNums(numArray) {
    try {
        let res = await axios.get(`${baseURL}/${numArray}?json`)
        console.log(res);
        Object.values(res.data).forEach(val => {
            const newLi = document.createElement('li');
            newLi.innerText = val;
            q2.append(newLi);
        });
    } catch (e) {
        console.log(e);
    }
}
multipleNums([8, 9, 10, 3]);


// // 3.
// let fourFacts = [];
// for(i=1; i<5; i++) {
//     fourFacts.push(
//         axios.get(`${baseURL}/${num}?json`)
//     );
// }
// Promise.all(fourFacts)
//     .then(facts => (facts.forEach(fact => $('.four-facts').append(`<li>${fact.data.text}</li>`))))
//     .catch(err => console.log(err));

async function fourFacts(num) {
    try {
        for(i=1; i<5; i++) {
            let fact = await axios.get(`${baseURL}/${num}?json`)
            const newLi = document.createElement('li');
            newLi.innerText = fact.data.text;
            q3.append(newLi);
        }
    } catch (e) {
        console.log(e);
    }
}
fourFacts(4);
