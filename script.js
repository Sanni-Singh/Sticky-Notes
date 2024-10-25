const add = document.getElementById('add');
const box = document.getElementById('items');
const textArea = document.getElementById('textArea');
const color = document.getElementById('color');
const Textcolor = document.getElementById('Textcolor');
const def = document.getElementById('default');
const removal = document.getElementById('removal');
const removes = document.getElementById('remove');

// console.log(Textcolor.value);

add.addEventListener('click',()=>{

    if(textArea.value === "") {
        alert("Enter Some Text");
        textArea.animate([
            {transform: 'translateX(4px)'},
            {transform: 'translateX(0)'},
            {transform: 'translateX(4px)'},
            {transform: 'translateX(0)'}
        ], {
            duration: 200,
            easing: 'ease-in-out',
            iterations: 4
        });
        return;
    }
    def.style.display = "none"
    let div = document.createElement('div');
    let para = document.createElement('p');
    let para1 = document.createElement('button');

    para1.innerText = "X";
    para1.style.backgroundColor = "white"
    para1.style.borderRadius = "8px"
    para1.style.margin = "0 auto"
    para1.style.border = "none"
    para1.style.cursor = "pointer"
    para1.style.padding = "5px"
    para1.style.width = "fit-content"
    para.innerText = textArea.value;
    div.style.backgroundColor = color.value;
    para.style.color = Textcolor.value;
    div.style.width = '200px'
    div.style.borderRadius = '10px'
    div.style.height = '200px'
    div.style.padding = '20px';
    div.style.fontSize = "1rem"
    div.style.display = "flex"
    div.style.flexDirection = "column"
    div.style.justifyContent = "space-between"
    // div.style.alignItems = "center"
    div.appendChild(para);
    div.appendChild(para1);
    box.appendChild(div);
    para1.addEventListener('click',()=>{
        div.style.display="none";
    })
    textArea.value = "";
    if(box.innerText ===""){
        def.style.display="block";
    }
    
})

removal.addEventListener('click',()=>{
    box.innerText = "";
    def.style.display = "block"
})