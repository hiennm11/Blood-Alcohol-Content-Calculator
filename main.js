function click(){
	const genre = document.getElementById('genre').value;
	const type = document.getElementById('acDrinks').value;
	const loai = document.getElementById('type').value;
	const litre = (document.getElementById('litre').value);
	const weight = (document.getElementById('weight').value);
	var textr = document.getElementsByClassName('modal-body')[0];
	if(weight != 0 && loai != 0|| weight != '' && loai != 0){			
		const bac = cal(genre,type,litre,weight);
		const blood = parseFloat(bac*1000).toFixed(2);
		const breathalyzer = parseFloat((bac*1000)/210).toFixed(2);
				
		textr.innerHTML = `<p>Nồng độ cồn của bạn là <span class="text-danger">~${blood} mg/100ml máu</span>,
							tương đương <span class="text-danger">~${breathalyzer} mg/l khí thở </span> !</p>
							<p>Nồng độ sẽ trở về 0 sau : <span class="text-danger">~${(bac/0.015).toFixed(1)} tiếng.</span></p><br>`;
		if(breathalyzer > 0){					
			if(breathalyzer <= 0.25 ){
				textr.innerHTML += `<p class="text-danger text-center">!!! MỨC PHẠT !!!</p>
									<p>Ô tô:<span class="text-primary"> 06 - 08 triệu đồng;</span><span class="text-danger"> Tước GPLX từ 10 - 12 tháng</span>.</p>

									<p>Xe máy:<span class="text-primary"> 02 - 03 triệu đồng;</span><span class="text-danger"> Tước GPLX từ 10 - 12 tháng</span>.</p>

									<p>Xe đạp, xe đạp điện:<span class="text-primary"> 80.000 - 100.000 đồng</span></p>`;
			}else if(breathalyzer <= 0.40){
				textr.innerHTML += `<p class="text-danger text-center">!!! MỨC PHẠT !!!</p>
									<p>Ô tô:<span class="text-primary"> 16 - 18 triệu đồng;</span><span class="text-danger"> Tước GPLX từ 16 - 18 tháng</span></p>

									<p>Xe máy:<span class="text-primary"> 04 - 05 triệu đồng;</span><span class="text-danger"> Tước GPLX từ 16 - 18 tháng</span></p>
									
									<p>Xe đạp, xe đạp điện:<span class="text-primary"> 200.000 - 400.000 đồng</span>.</p>`;
			}else if(breathalyzer > 0.40){
				textr.innerHTML += `<p class="text-danger text-center">!!! MỨC PHẠT !!!</p>
									<p>Ô tô:<span class="text-primary"> 30 - 40 triệu đồng;</span><span class="text-danger"> Tước GPLX 22 - 24 tháng</span>.</p>

									<p>Xe máy:<span class="text-primary"> 06 - 08 triệu đồng;</span><span class="text-danger"> Tước GPLX 22 - 24 tháng</span>.</p>
									
									<p>Xe đạp:<span class="text-primary"> 600 - 800.000 đồng</span>.</p>`;
			}
		}		
	}else{
		textr.innerHTML = `Vui lòng điền đủ thông tin !`;
	}
}

const cal = (genre,type,litre,weight) => {
	var r;
	if(genre === "Nam") r = 0.68;
	else r = 0.55;
	
	const bac = ((((litre*1000)*(type/100)*0.789))/((weight*1000)*r))*100;
	
	return bac;
}

function updateAC(val){
	var e = document.getElementById('acDrinks');
	switch (val){
		case '1': e.value = 5;e.setAttribute("disabled", "true");break;
		case '2': e.value = 5;e.setAttribute("disabled", "true");break;
		case '3': e.value = 4.6;e.setAttribute("disabled", "true");break;
		case '4': e.value = 4.9;e.setAttribute("disabled", "true");break;
		case '5': e.value = 4.9;e.setAttribute("disabled", "true");break;
		case '6': e.value = 4.3;e.setAttribute("disabled", "true");break;
		case '7': e.value = 5.3;e.setAttribute("disabled", "true");break;
		case '8': e.removeAttribute('disabled');
		default : e.value = 0;break;
	}	
}

function updateLitre(val){
	var e = document.getElementById('litre');
	var cond = document.getElementById('quantityType');
	var sl;
	if(cond.value == 0) sl = 0.33;
	else{
		var type = document.getElementById('type').value;
		switch (type){
			case '1': sl = 0.25;break;
			case '2': sl = 0.33;break;
			case '3': sl = 0.33;break;
			case '4': sl = 0.33;break;
			case '5': sl = 0.355;break;
			case '6': sl = 0.45;break;
			case '7': sl = 0.33;break;
			case '8': sl = 0;break;
			default : sl = 0;break;
		}	
	}

	e.value = parseFloat(val*sl).toFixed(2);	
}

document.body.onkeydown = function(event){
    event = event || window.event;
    var keycode = event.charCode || event.keyCode;
    if(keycode === 13){
        document.getElementById('result').click();
    }
}

document.getElementById('result').addEventListener("click", click);

