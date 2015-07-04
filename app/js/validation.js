// Модуль валидации
var validation = (function (){

	// ------------------------------------- PUBLIC FUNCTIONS -------------------------------------
	var
	
	init = function() {
		/*console.log('Инициализация модуля validation');*/
		_setUpListners();
	},

	validateForm = function(form) {
		/*console.log("validation ");*/

		form.preventDefault();

		var
		elements 	= $('form').find('input, textarea').not('input[type="file"], input[type="hidden"], input[id="captcha"]'),
		valid 		= true;

		$.each(elements, function(index, val) {
	        var element = $(val),
	            val = element.val(),
	            pos = element.attr('qtip-position');         

	        if(val.length === 0){
	          element.addClass('has-error');
	          _createTooltip(element, pos);            
	          valid = false;
	        }
	    });

	    return valid;
	};
	
	// ------------------------------------- PRIVATE FUNCTIONS -------------------------------------
	var 
	_setUpListners = function() {
		/*console.log('Установка слушателей');*/
		$('form').	on('submit', validateForm).
					on('keydown', '.has-error', _removeError).
					on('reset', _clearForm);
	},
	
	_removeError = function(form) {
		/*console.log("removing errors");*/
		$(this).removeClass('has-error');
	},

	_clearForm = function(form) { // Очищает форму 
	      /*console.log('Очищаем форму');*/

	      var form = $(this);
	      form.find('.input, .textarea').trigger('hideTooltip'); // удаляем тултипы
	      form.find('.has-error').removeClass('has-error'); // удаляем красную подсветку
	      form.find('.error-message, success-message').text('').hide(); // очищаем и прячем сообщения с сервера
	    }

	_createTooltip = function (element, position) { // Создаёт тултипы
	      /*console.log('Создаем тултип');*/

	      // позиция тултипа
	      if (position === 'right') {
	        position = {
	          my: 'left center', 
	          at: 'right center'
	        }
	      }else{
	        position = {
	          my: 'right center', 
	          at: 'left center',
	          adjust: {
	            method: 'shift none'
	          }
	        }
	      }

	      // инициализация тултипа
	      element.qtip({
	        content: {
	          text: function() {
	            return $(this).attr('qtip-content');
	          }
	        },
	        show: {
	          event: 'show'
	        },
	        hide: {
	          event: 'keydown hideTooltip'
	        },
	        position: position,
	        style: {
	          classes: 'qtip-mystyle qtip-rounded',
	          tip: {
	            height: 10,
	            width: 16
	          }
	        }
	      }).trigger('show');
    	};

	//  ------------------------------------- FINISH -------------------------------------
	return {
		init: init,
		validateForm: validateForm
	};

})();

validation.init();