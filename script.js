$(document).ready(()=>{
   	const newSquare = '<div class="square"></div>';
   	const container = $('#root');
   	for(let i = 0; i < 1000; i++) {
	   	container.append(newSquare);
    };

    $(document).on('mouseover','.square',(e)=>{
    	const currentElem = e.target;
    	const currentBgColor = $(currentElem).css('backgroundColor');
    	let activeColor = 'white';
    	console.log(currentBgColor);
    	if(currentBgColor === 'rgba(0, 0, 0, 0)'
    	|| currentBgColor === 'rgb(255, 255, 255)'
    		){
    		const r = generateColors();
    		const g = generateColors();
    		const b = generateColors();
    		activeColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    	}

    	$(currentElem).css({
    		background:activeColor
    	})
    })

    const generateColors = () => {
    	const color = Math.round(Math.random()*255);
    	return color;
    }

}) 