onload = () =>{
    const c = setTimeout(() => {
        document.body.classList.remove("container");
    
        const titles = ('i love you zuka sayang, maafin aku yaa yang selalu buat masalah ini, say that you love me too').split('')
        const titleElement = document.getElementById('title');
        let index = 0;
    
        function appendTitle() {
            if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 50); // 1000ms delay
            }
        }
    
        appendTitle();
    
        clearTimeout(c);
        }, 1000);
};
