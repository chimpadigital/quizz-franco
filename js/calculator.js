'use strict'

var target	 = '';
var gender	 = '';
var progress = '';
var language = '';

var calories = '';
var carbohydrates = 0;
var proteins = 0;
var fats = 0;

$('document').ready(function(){
	language = navigator.language || navigator.userLanguage;
	language = language.toLowerCase();
	
	if(language.toString().includes('es'))
		language = es;
	if(language.toString().includes('en'))
		language = en;
	if(language.toString().includes('de'))
		language = de;
	
	setLanguage(language);
	
	$('#contactFormBtn').click(function(e){
		e.preventDefault();
		calculateValues();
		
		$.ajax({
			url: './php/contact_me.php',
			type: 'POST',
			crossDomain: true,
			dataType: 'text',
			data:{
				'name': $('#name').val(),
				'lastName': $('#lastName').val(),
				'email': $('#email').val(),
				'weight': $('#weight').val(),
				'height': $('#height').val(),
				'target': target,
				'gender': gender,
				'progress': progress,
				'carbohydrates': carbohydrates,
				'proteins': proteins,
				'fats': fats
			},
			success: function(res){
				console.log('success');
			},
			error: function(er){
				console.log('error');
			}
		});
		
		$('html, body').animate({
			scrollTop: $("#results").offset().top
		}, 1000);
		
		$('#carbs').html(carbohydrates);
		$('#prot').html(proteins);
		$('#fats').html(fats);
		
		$('.m-counter').each(function () {
			$(this).prop('Counter',0).animate({
			Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
				$(this).text(Math.ceil(now));
				}
			});
		});
	});
});

function setLanguajeTo(lan){
	if(lan == 'es')
		language = es;
	if(lan == 'en')
		language = en;
	if(lan == 'de')
		language = de;
	
	setLanguage(language);
}

function setLanguage(lan){
	$('#gainMuscle').html(lan.gainMuscle);
	$('#loseFat').html(lan.loseFat);
	$('#onlineCoaching').html(lan.onlineCoaching);
	$('#onlineCoaching2').html(lan.onlineCoaching);
	$('#selected').html(lan.selected);
	$('#ebooks').html(lan.ebooks);
	$('#about').html(lan.about);
	$('#about2').html(lan.about);
	$('#whatDoYouWantToDo').html(lan.whatDoYouWantToDo);
	$('#loseWeight').html(lan.loseWeight);
	$('#maintainWeight').html(lan.maintainWeight);
	$('#gainWeight').html(lan.gainWeight);
	$('#selectGenderSelect').html(lan.selectGender);
	$('#male').html(lan.male);
	$('#female').html(lan.female);
	$('#typeOfProgress').html(lan.typeOfProgress);
	$('#slow').html(lan.slow);
	$('#fast').html(lan.fast);
	$('#justOneMoreStep').html(lan.justOneMoreStep);
	$('#name').attr('placeholder', lan.name);
	$('#lastName').attr('placeholder', lan.lastName);
	$('#email').attr('placeholder', lan.email);
	$('#weight').attr('placeholder', lan.weight);
	$('#height').attr('placeholder', lan.height);
	$('#contactFormBtn').html(lan.contactFormBtn);
	$('#gramsPerDay').html(lan.gramsPerDay);
	$('#carbohidrates').html(lan.carbohidrates);
	$('#proteins').html(lan.proteins);
	$('#fatsselect').html(lan.fatsselect);
	$('#siteLinks').html(lan.siteLinks);
	$('#fatLossProgram').html(lan.fatLossProgram);
	$('#gainMuscleProgram').html(lan.gainMuscleProgram);
	$('#home').html(lan.home);
	$('#contact').html(lan.contact);
	$('#contact2').html(lan.contact);
	$('#ebook').html(lan.ebook);
	$('#foodGuide').html(lan.foodGuide);
	$('#foodGuide2').html(lan.foodGuide);
	$('#trainingGuide').html(lan.trainingGuide);
	$('#trainingGuide2').html(lan.trainingGuide);
	$('#primeCombo').html(lan.primeCombo);
	$('#primeCombo2').html(lan.primeCombo);
	$('#allRightReserved').html(lan.allRightReserved);
	$('#select').html(lan.select);
	$('#select2').html(lan.select);
	$('#select3').html(lan.select);
	$('#select4').html(lan.select);
	$('#select5').html(lan.select);
	$('#select6').html(lan.select);
	$('#select7').html(lan.select);
}

function setTarget(targetSelected){
	target = targetSelected;
	
	if(targetSelected == 'lose'){
		$('#t1').addClass('selected');
		$('#t2').removeClass('selected');
		$('#t3').removeClass('selected');
	}
	
	if(targetSelected == 'maintain'){
		$('#t1').removeClass('selected');
		$('#t2').addClass('selected');
		$('#t3').removeClass('selected');
	}
	
	if(targetSelected == 'gain'){
		$('#t1').removeClass('selected');
		$('#t2').removeClass('selected');
		$('#t3').addClass('selected');
	}
	
	$('html, body').animate({
		scrollTop: $("#selectGender").offset().top
	}, 1000);
}

function setGender(genderSelected){
	gender = genderSelected;
	
	if(genderSelected == 'male'){
		$('#g1').addClass('selected');
		$('#g2').removeClass('selected');
	}
	
	if(genderSelected == 'female'){
		$('#g1').removeClass('selected');
		$('#g2').addClass('selected');
	}
	
	$('html, body').animate({
		scrollTop: $("#selectProgress").offset().top
	}, 1000);
}

function setProgress(progressSelected){
	progress = progressSelected;
	
	if(progressSelected == 'slow'){
		$('#p1').addClass('selected');
		$('#p2').removeClass('selected');
	}
	
	if(progressSelected == 'fast'){
		$('#p1').removeClass('selected');
		$('#p2').addClass('selected');
	}
	
	$('html, body').animate({
		scrollTop: $("#contactDataForm").offset().top
	}, 1000);
}

function calculateValues(){
	setValues();
	
	carbohydrates = ((calories * carbohydrates) / 100) / 4;
	fats = ((calories * fats) / 100) / 9;
	proteins = ((calories * proteins) / 100) / 4;
}

function setValues(){
	if(target == 'lose'){
		if(gender == 'male'){
			calories = 2000;
		}
		
		if(gender == 'female'){
			calories = 1500;
		}
		
		if(progress == 'slow'){
			carbohydrates = 30;
			fats = 30;
			proteins = 40;
		}
		
		if(progress == 'fast'){
			carbohydrates = 25;
			fats = 25;
			proteins = 50;
		}
	}
	
	if(target == 'maintain'){
		if(gender == 'male'){
			calories = 2500;
		}
		
		if(gender == 'female'){
			calories = 2000;
		}
		
		if(progress == 'slow'){
			carbohydrates = 35;
			fats = 30;
			proteins = 35;
		}
		
		if(progress == 'fast'){
			carbohydrates = 25;
			fats = 30;
			proteins = 35;
		}
	}
	
	if(target == 'gain'){
		if(gender == 'male'){
			calories = 3000;
		}
		
		if(gender == 'female'){
			calories = 2500;
		}
		
		if(progress == 'slow'){
			carbohydrates = 45;
			fats = 25;
			proteins = 30;
		}
		
		if(progress == 'fast'){
			carbohydrates = 60;
			fats = 10;
			proteins = 30;
		}
	}
}











