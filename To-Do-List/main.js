
       const input = document.querySelector('input');
	   const btn = document.querySelector('.addTask > button');

	   btn.addEventListener('click',addList);
	   input.addEventListener('keyup', (e)=>{
		(e.keyCode ===13 ? addList(e) : null);
	   })

	   function addList(e){
		const notCompleted = document.querySelector('.notCompleted');
	   const Completed = document.querySelector('.Completed');

	   const newLi = document.createElement('li');
	   const checkbtn = document.createElement('button');
	   const delbtn = document.createElement('button');
        
	   checkbtn.innerHTML = '<i class="fa-sharp fa-solid fa-square-check"></i>'
	   delbtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'

       if(input.value !==''){
		    newLi.textContent = input.value ;
			input.value = '';
			notCompleted.appendChild(newLi);
			newLi.appendChild(checkbtn);
			newLi.appendChild(delbtn);
	   }
    
	   checkbtn.addEventListener('click', function(){
		const parent = this.parentNode;
		parent.remove();
		Completed.appendChild(parent);
		checkbtn.style.display = 'none';
	   });

	   delbtn.addEventListener('click', function(){
		const parent = this.parentNode;
		parent.remove();
		
	   });


	 }












