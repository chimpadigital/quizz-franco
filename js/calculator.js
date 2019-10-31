'use strict'

var target	 = '';
var gender	 = '';
var progress = '';

var calories = '';
var carbohydrates = 0;
var proteins = 0;
var fats = 0;

$('document').ready(function(){
	var language = navigator.language || navigator.userLanguage;
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
		$.ajax({
			url: './php/mail.php',
			type: 'POST',
			crossDomain: true,
			dataType: 'text',
			data:{
				'name': $('#name').val(),
				'lastName': $('#lastName').val(),
				'email': $('#email').val(),
				'weight': $('#weight').val(),
				'height': $('#height').val()
			},
			success: function(res){
				console.log(res);
			},
			error: function(er){
				$('#messageModalTitle').html('Error');
				$('#messageModalMessage').html('Ha ocurrido un error inesperado');
				$('#messageModal').modal('show');
			}
		});
		
		$('html, body').animate({
			scrollTop: $("#results").offset().top
		}, 1000);
		
		calculateValues();
		
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

function setLanguage(lan){
	$('#gainMuscle').html(lan.gainMuscle);
	$('#loseFat').html(lan.loseFat);
	$('#onlineCoaching').html(lan.onlineCoaching);
	$('#onlineCoaching2').html(lan.onlineCoaching);
	$('#ebooks').html(lan.ebooks);
	$('#about').html(lan.about);
	$('#about2').html(lan.about);
	$('#whatDoYouWantToDo').html(lan.whatDoYouWantToDo);
	$('#loseWeight').html(lan.loseWeight);
	$('#maintainWeight').html(lan.maintainWeight);
	$('#gainWeight').html(lan.gainWeight);
	$('#selectGender').html(lan.selectGender);
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
	
	$('html, body').animate({
		scrollTop: $("#selectGender").offset().top
	}, 1000);
}

function setGender(genderSelected){
	gender = genderSelected;
	
	$('html, body').animate({
		scrollTop: $("#selectProgress").offset().top
	}, 1000);
}

function setProgress(progressSelected){
	progress = progressSelected;
	
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











