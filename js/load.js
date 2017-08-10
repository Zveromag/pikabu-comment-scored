function createWindow() {
	this.body = document.body;
	this.container = null;
	var targetEvent = targetName.bind(this);
	var controlsEvent = scored.bind(this);
	var messages = messages.bind(this);
	var link;

	this.showWindow = function() {
		if (document.querySelector('.scored')) return;

		var windowBlock =	'<span class="scored__close">×</span>' +
											'<h3 class="scored__title">Введите или кликните по нику пользователя</h3>' +
											'<div class="scored__line">' +
												'<input type="text" class="scored__input">' +
												'<span class="scored__target">' +
													'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M951.5 309.3c-24.7-58.4-60-110.8-105-155.7s-97.4-80.3-155.7-105C630.3 23 566.1 10 500 10c-66.1 0-130.3 13-190.7 38.5-58.4 24.7-110.8 60-155.7 105-45 45-80.3 97.4-105 155.7C23 369.7 10 433.9 10 500c0 66.1 13 130.3 38.5 190.7 24.7 58.4 60 110.8 105 155.7 45 45 97.4 80.3 155.7 105C369.7 977 433.9 990 500 990c66.1 0 130.3-13 190.7-38.5 58.4-24.7 110.8-60 155.7-105 45-45 80.3-97.4 105-155.7C977 630.3 990 566.1 990 500c0-66.1-13-130.3-38.5-190.7zM466.8 928.5c-102.5-7.6-197.5-50.9-271-124.3-75-75-118.6-172.8-124.8-277.7h134.3c7.1 65.1 35.9 126.5 83.4 173.9 48.5 48.5 111.8 77.5 178.1 83.8v144.3zm0-204.9C363.1 711.1 280.5 629 266.1 526.5h200.7v197.1zm0-257.4H265.7C278.6 360.1 362 277 466.9 264.4v201.8zm0-262.5c-66.3 6.3-129.6 35.9-178.1 84.4-48.3 48.3-77.3 110.6-83.7 178.1H71.7c8-102.5 51.2-196.8 124.2-269.8 73.4-73.4 168.5-117.3 271-124.9v132.2zm60.3-132.5C632 77.8 729 121.8 803.6 196.4c73 73 116.8 167.3 124.8 269.8h-143c-6.4-67.5-36-129.8-84.3-178.1-47.3-47.3-107.6-76.7-173.9-83.9v-133zm0 193.8c103.7 14.6 184.9 97.5 197.6 201.2H527.1V265zm0 261.5h197.1c-14.1 101.3-94.6 182.1-197.1 196.4V526.5zm276.5 277.7C729 878.8 632 922.2 527.1 928.8V783.7c66.3-7.2 126.6-36 173.9-83.3 47.5-47.5 76.8-108.8 84-173.9h143.9c-6.2 104.9-50.3 202.6-125.3 277.7z"/></svg>' +
												'</span>' +
											'</div>' +
											'<div class="scored__score">' +
												'<span class="scored__up scored__control"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M872.7 563.9c45 0 81.4-38.2 81.4-85.2s-36.4-85.2-81.4-85.2h-262s33.1-36.3 33.1-170.4c0-101.6-48-213.8-120.9-213-97.3.9-64 122.5-73.8 213-9.7 90.5-105.5 151.8-105.5 209.7-1.9 147.7-.1 450.8-.1 450.8 0 58.9 45.5 106.5 101.7 106.5h346c44.9 0 81.4-38.2 81.4-85.2 0-17.7-5.2-34.1-13.9-47.7 31.8-11.7 54.7-43 54.7-80.1 0-17.7-5.2-34.1-14-47.7 31.7-11.6 54.6-43 54.6-80.1.1-47.3-36.4-85.4-81.3-85.4zM192.3 393.5h-89.5c-36.5 0-61.5 29.1-56.1 63.5l79.4 504.8c2.5 15.7 23.5 28.2 47.1 28.2h42.6c23.6 0 42.6-12.4 42.6-28.2V457c0-34.4-29.6-63.5-66.1-63.5z"/></svg></span>' +
												'<span class="scored__down scored__control"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M872.7 563.9c45 0 81.4-38.2 81.4-85.2s-36.4-85.2-81.4-85.2h-262s33.1-36.3 33.1-170.4c0-101.6-48-213.8-120.9-213-97.3.9-64 122.5-73.8 213-9.7 90.5-105.5 151.8-105.5 209.7-1.9 147.7-.1 450.8-.1 450.8 0 58.9 45.5 106.5 101.7 106.5h346c44.9 0 81.4-38.2 81.4-85.2 0-17.7-5.2-34.1-13.9-47.7 31.8-11.7 54.7-43 54.7-80.1 0-17.7-5.2-34.1-14-47.7 31.7-11.6 54.6-43 54.6-80.1.1-47.3-36.4-85.4-81.3-85.4zM192.3 393.5h-89.5c-36.5 0-61.5 29.1-56.1 63.5l79.4 504.8c2.5 15.7 23.5 28.2 47.1 28.2h42.6c23.6 0 42.6-12.4 42.6-28.2V457c0-34.4-29.6-63.5-66.1-63.5z"/></svg></span>' +
											'</div>';
		this.container = document.createElement('div');
		this.container.className = 'scored';
		this.container.innerHTML = windowBlock;

		this.body.appendChild(this.container);

		this.controls = this.container.querySelectorAll('.scored__control');
		this.input = this.container.querySelector('.scored__input');

		this.controls.forEach(function(control) {
			control.addEventListener('click', controlsEvent);
		}.bind(this))

		this.target = this.container.querySelector('.scored__target');


		this.target.addEventListener('click', targetEvent);

		this.container.querySelector('.scored__close').addEventListener('click', this.hide.bind(this), {once: true});

		var moreComments = this.body.querySelector('.b-comments__next');

		if (moreComments) {
			trigger('click', moreComments);
		}
	}

	this.hide = function() {
		this.container.remove();
		this.container = null;
		this.target.removeEventListener('click', targetEvent);

		this.controls.forEach(function(control) {
			this.target.removeEventListener('click', controlsEvent);
		}.bind(this))

		link.forEach(function(item) {
			item.classList.remove('scored__link--active');
		})

	}

	function targetName() {
		this.target.classList.toggle('scored__target--active');

		if (this.target.classList.contains('scored__target--active')) {
			messages('Кликните по имени пользователя для его захвата', 'info');
		}

		link = this.body.querySelectorAll('.b-comment__user a');
		var self = this;

		link.forEach(function(item) {
			item.classList.toggle('scored__link--active');
			item.addEventListener('click', function(e) {
				if (this.classList.contains('scored__link--active')) {
					e.preventDefault();
					self.input.value = this.querySelector('span').textContent;
				}
			},{
				once: true
			})
		})
	}

	function scored(event) {
		var nick = this.input.value;
		var nicks = this.body.querySelectorAll('.b-comment__user');
		var count = 0;

		if (this.input.value === '') {
			messages('Пожалуйста укажите имя пользователя', 'error');
			return;
		}

		if (event.target.closest('.scored__up') || event.target.classList.contains('scored__up')) {
			nicks.forEach(function(item) {
				var level = item.closest('[data-level]').dataset.level;

				if (item.querySelector('span').textContent === nick) {
					count += 1;

					var blocks = document.querySelectorAll('.b-comments_level_0');
					blocks.forEach(function(item) {
						item.classList.add('visible-score');
					})

					var arrow = item.closest('.b-comment__header').querySelector('.b-comment__rating-up');
					trigger('click', arrow);

					blocks.forEach(function(item) {
						item.classList.remove('visible-score');
					})
				}
			})
		}
		else {
			nicks.forEach(function(item) {
				if (item.querySelector('span').textContent === nick) {
					count += 1;

					var blocks = document.querySelectorAll('.b-comments_level_0');
					blocks.forEach(function(item) {
						item.classList.add('visible-score');
					})

					var arrow = item.closest('.b-comment__header').querySelector('.b-comment__rating-down');
					trigger('click', arrow);

					blocks.forEach(function(item) {
						item.classList.remove('visible-score');
					})
				}
			})
		}

		messages('Оценок проставлено: ' + count, 'info');

	}

	function trigger(e, element) {
		var event = new Event('click', {bubbles: true});
		element.dispatchEvent(event);
	}

	function messages(message, prefix) {
		var mess = document.createElement('div');
		mess.className = 'scored-message scored-message--' + prefix;
		mess.textContent = message;

		if (this.container.querySelector('.scored-message')) {
			this.container.querySelector('.scored-message').remove();
		}

		this.container.appendChild(mess);

		setTimeout(function() {
			mess.classList.add('show');
		}, 0);

		setTimeout(function() {
			mess.classList.remove('show');
			mess.addEventListener('transitionend', function(){
				mess.remove();
			}, { once: true})
		}, 3000);
	}
}

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
	if (request.modal) {
		new createWindow().showWindow();
	}
});