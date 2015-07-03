var addProject = (function (){
	
	var 
	
	init = function(){
		/*console.log('Инициализация модуля addProject');*/
		setUpListners();
	},
	
	setUpListners = function (){
		/*console.log('Настройка слушателей');*/
		$('#add-new-item').on('click', popUpShow); // открыть модальное окно
		$('.b-close, #overlay').on('click', popUpHide); // закрыть модальное окно
		$('#add-new-project').on('submit', addProject); // добавление проекта
	},

	popUpShow = function(ev){
		/*console.log('Отключаем дефолт у добавить проект');*/
		ev.preventDefault();
		/*console.log($("#new-project-popup"));
		console.log('Выводим подложку');*/
		$("#overlay").removeClass('not-visible').addClass('visible');
		
		/*console.log('Показываем попап');
		console.log($("#new-project-popup"));*/
	    $("#new-project-popup").show();
		/*console.log($("#new-project-popup"));*/
	},

	popUpHide = function(ev){
		/*console.log('Отключаем дефолт у сабмит попапа');
		console.log($("#new-project-popup").width());*/
		ev.preventDefault();

		$("#overlay").removeClass('visible').addClass('not-visible');

		/*console.log('Прячем попап');*/
		$("#new-project-popup").hide();
	},

	addProject = function(ev){
		popUpHide(ev);
	};
		
	return {
		init: init
	};

})();

/*console.log('Старт выполнения');*/
addProject.init();
