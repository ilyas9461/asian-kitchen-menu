const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => {
    if(word.length>6) return word;
    // return word.length > 6;
});

console.log(result);

const intArr=[12, 5, 8, 130, 44];

let filtered = intArr.filter(el=> 
        el>=10
    );

    console.log(filtered);
