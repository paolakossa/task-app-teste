const btn = document.querySelector('.btn__formModal');
const lista = document.getElementById('lista'); 


btn.addEventListener('click', () =>{
    const novoItem = document.createElement('li');
    const textoTarefa = document.querySelector('#tarefa').value; 
    novoItem.innerText = textoTarefa;
    novoItem.classList.add('item'); 
    lista.appendChild(novoItem);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox'); 
    lista.appendChild(checkbox);

    const pontinho = document.createElement('button');
    pontinho.classList.add('btn__tarefa');
    lista.appendChild(pontinho);
    

    const priori = document.createElement('span');
    const textoPrioridade = document.getElementsByName('opcao');
     for(i = 0; i < textoPrioridade.length; i++) {
            if(textoPrioridade[i].checked) {
            priori.innerText= textoPrioridade[i].value;
            if(textoPrioridade[i].value === 'urgente') {
                priori.classList.add('prioridadeUrgente')
            }else {
                priori.classList.add('prioridadeImportante')
            }
        } 
       
    }
        lista.appendChild(priori)
  

    checkbox.addEventListener('click', ()=>{
        if(novoItem.style.opacity != '50%' &&  novoItem.style.backgroundColor !='#BFDAEB' && novoItem.style.textDecoration != 'line-through' ) {
        novoItem.style.opacity = '50%';
        novoItem.style.backgroundColor ='#BFDAEB';
        novoItem.style.textDecoration = 'line-through'; 


    } else {
        novoItem.style.opacity = '100%';
        novoItem.style.backgroundColor ='#FFFFFF';
        novoItem.style.textDecoration = 'none';
    }

    })

    
    
})


    
       