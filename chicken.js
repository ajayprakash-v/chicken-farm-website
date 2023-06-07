window.addEventListener('scroll',function(){
	const val=window.scrollY
	var c1=document.getElementById('c1')
	var c2=document.getElementById('c2')
	var c3=document.getElementById('c3')
	var sec2=document.getElementById('sec2')
	console.log(scrollY)
	if(val>90){
		c1.style.rotate='90deg'
		c2.style.rotate='70deg'
		c3.style.rotate='70deg'
		c1.style.bottom='-300px'
		c2.style.bottom='-300px'
		c3.style.bottom='-300px'
		c1.style.transition='.5s'
		c2.style.transition='.5s'
	}
	else{
		c1.style.rotate='0deg'
		c2.style.rotate='0deg'
		c3.style.rotate='0deg'
		c1.style.bottom='0px'
		c2.style.bottom='0px'
		c3.style.bottom='0px'
		c1.style.transition='.5s'
		c2.style.transition='.5s'
		c3.style.transition='.5s'
	}
	if(val>350){
		sec2.style.opacity='1'
		sec2.style.transition='1s'
	}
	else{
		sec2.style.opacity='0'
		sec2.style.transition='1s'	
	}
})