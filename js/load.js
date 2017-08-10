function createWindow() {
	this.body = document.body;
	this.container = null;
	this.ls = window.localStorage;
	this.userList = [];
	lsOptions = {
		useList: 'false',
		list: '[]'
	}
	var targetEvent = targetName.bind(this);
	var controlsEvent = scored.bind(this);
	var messages = messages.bind(this);
	var settings = settings.bind(this);
	var link;

	var iconClose = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M524.1,500L985,39.1c6.7-6.7,6.7-17.4,0-24.1c-6.7-6.7-17.4-6.7-24.1,0L500,475.9L39.1,15C32.4,8.4,21.6,8.4,15,15c-6.7,6.7-6.7,17.4,0,24.1L475.9,500L15,960.9c-6.7,6.7-6.7,17.4,0,24.1c3.3,3.3,7.7,5,12,5c4.4,0,8.7-1.7,12-5L500,524.1L960.9,985c3.3,3.3,7.7,5,12,5s8.7-1.7,12-5c6.7-6.7,6.7-17.4,0-24.1L524.1,500z"/></svg>';
	var iconSettings = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M908.3,10H91.7C46.6,10,10,46.6,10,91.7v816.7c0,45.1,36.6,81.7,81.7,81.7h816.7c45.1,0,81.7-36.6,81.7-81.7V91.7C990,46.6,953.4,10,908.3,10z M949.2,908.3c0,22.6-18.3,40.8-40.8,40.8H91.7c-22.6,0-40.8-18.3-40.8-40.8V91.7c0-22.6,18.3-40.8,40.8-40.8h816.7c22.6,0,40.8,18.3,40.8,40.8L949.2,908.3L949.2,908.3z"/><path d="M806.2 479.6h-64.1c-9.1-35.2-40.8-61.3-78.8-61.3-38 0-69.7 26.1-78.8 61.3H193.7c-11.3 0-20.4 9.2-20.4 20.4 0 11.3 9.2 20.4 20.4 20.4h390.8c9.1 35.2 40.8 61.3 78.8 61.3 38 0 69.7-26.1 78.8-61.3h64.1c11.3 0 20.4-9.2 20.4-20.4C826.7 488.7 817.5 479.6 806.2 479.6zM698.5 520.4c-7.1 12.2-20.1 20.4-35.2 20.4-15.1 0-28.1-8.3-35.2-20.4-3.5-6-5.7-12.9-5.7-20.4 0-7.5 2.2-14.4 5.7-20.4 7.1-12.1 20.1-20.4 35.2-20.4 15.1 0 28.1 8.3 35.2 20.4 3.5 6 5.7 12.9 5.7 20.4C704.2 507.5 702 514.4 698.5 520.4zM806.2 234.6H415.4c-9.1-35.2-40.8-61.3-78.8-61.3-38 0-69.7 26.1-78.8 61.3h-64.2c-11.3 0-20.4 9.2-20.4 20.4 0 11.3 9.2 20.4 20.4 20.4h64.2c9.1 35.2 40.8 61.3 78.8 61.3 38 0 69.7-26.1 78.8-61.3h390.8c11.3 0 20.4-9.2 20.4-20.4C826.7 243.7 817.5 234.6 806.2 234.6zM371.8 275.4c-7.1 12.2-20.1 20.4-35.2 20.4-15.1 0-28.1-8.3-35.2-20.4-3.5-6-5.7-12.9-5.7-20.4s2.2-14.4 5.7-20.4c7.1-12.1 20.1-20.4 35.2-20.4 15.1 0 28.1 8.3 35.2 20.4 3.5 6 5.7 12.9 5.7 20.4C377.5 262.5 375.3 269.4 371.8 275.4zM806.2 724.6H415.4c-9.1-35.2-40.8-61.3-78.8-61.3-38 0-69.7 26.1-78.8 61.3h-64.2c-11.3 0-20.4 9.2-20.4 20.4s9.2 20.4 20.4 20.4h64.2c9.1 35.2 40.8 61.3 78.8 61.3 38 0 69.7-26.1 78.8-61.3h390.8c11.3 0 20.4-9.2 20.4-20.4C826.7 733.7 817.5 724.6 806.2 724.6zM371.8 765.4c-7.1 12.2-20.1 20.4-35.2 20.4-15.1 0-28.1-8.3-35.2-20.4-3.5-6-5.7-12.9-5.7-20.4 0-7.5 2.2-14.4 5.7-20.4 7.1-12.1 20.1-20.4 35.2-20.4 15.1 0 28.1 8.3 35.2 20.4 3.5 6 5.7 12.9 5.7 20.4C377.5 752.5 375.3 759.4 371.8 765.4z"/></svg>';
	var iconTarget = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M951.5 309.3c-24.7-58.4-60-110.8-105-155.7s-97.4-80.3-155.7-105C630.3 23 566.1 10 500 10c-66.1 0-130.3 13-190.7 38.5-58.4 24.7-110.8 60-155.7 105-45 45-80.3 97.4-105 155.7C23 369.7 10 433.9 10 500c0 66.1 13 130.3 38.5 190.7 24.7 58.4 60 110.8 105 155.7 45 45 97.4 80.3 155.7 105C369.7 977 433.9 990 500 990c66.1 0 130.3-13 190.7-38.5 58.4-24.7 110.8-60 155.7-105 45-45 80.3-97.4 105-155.7C977 630.3 990 566.1 990 500c0-66.1-13-130.3-38.5-190.7zM466.8 928.5c-102.5-7.6-197.5-50.9-271-124.3-75-75-118.6-172.8-124.8-277.7h134.3c7.1 65.1 35.9 126.5 83.4 173.9 48.5 48.5 111.8 77.5 178.1 83.8v144.3zm0-204.9C363.1 711.1 280.5 629 266.1 526.5h200.7v197.1zm0-257.4H265.7C278.6 360.1 362 277 466.9 264.4v201.8zm0-262.5c-66.3 6.3-129.6 35.9-178.1 84.4-48.3 48.3-77.3 110.6-83.7 178.1H71.7c8-102.5 51.2-196.8 124.2-269.8 73.4-73.4 168.5-117.3 271-124.9v132.2zm60.3-132.5C632 77.8 729 121.8 803.6 196.4c73 73 116.8 167.3 124.8 269.8h-143c-6.4-67.5-36-129.8-84.3-178.1-47.3-47.3-107.6-76.7-173.9-83.9v-133zm0 193.8c103.7 14.6 184.9 97.5 197.6 201.2H527.1V265zm0 261.5h197.1c-14.1 101.3-94.6 182.1-197.1 196.4V526.5zm276.5 277.7C729 878.8 632 922.2 527.1 928.8V783.7c66.3-7.2 126.6-36 173.9-83.3 47.5-47.5 76.8-108.8 84-173.9h143.9c-6.2 104.9-50.3 202.6-125.3 277.7z"/></svg>';
	var iconHands = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M872.7 563.9c45 0 81.4-38.2 81.4-85.2s-36.4-85.2-81.4-85.2h-262s33.1-36.3 33.1-170.4c0-101.6-48-213.8-120.9-213-97.3.9-64 122.5-73.8 213-9.7 90.5-105.5 151.8-105.5 209.7-1.9 147.7-.1 450.8-.1 450.8 0 58.9 45.5 106.5 101.7 106.5h346c44.9 0 81.4-38.2 81.4-85.2 0-17.7-5.2-34.1-13.9-47.7 31.8-11.7 54.7-43 54.7-80.1 0-17.7-5.2-34.1-14-47.7 31.7-11.6 54.6-43 54.6-80.1.1-47.3-36.4-85.4-81.3-85.4zM192.3 393.5h-89.5c-36.5 0-61.5 29.1-56.1 63.5l79.4 504.8c2.5 15.7 23.5 28.2 47.1 28.2h42.6c23.6 0 42.6-12.4 42.6-28.2V457c0-34.4-29.6-63.5-66.1-63.5z"/></svg>';
	var iconList = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M100 4140v-818.8h818.8 818.8V4140v818.8H918.8 100V4140zM1328.2 4140v-409.4H918.8 509.4V4140v409.4h409.4 409.4V4140zM2530.8 3525.9v-204.7h3684.6H9900v204.7 204.7H6215.4 2530.8V3525.9zM100 1453.3V634.5h818.8 818.8v818.8 818.8H918.8 100V1453.3zM1328.2 1453.3v-409.4H918.8 509.4v409.4 409.4h409.4 409.4V1453.3zM2530.8 839.2V634.5h3684.6H9900v204.7 204.7H6215.4 2530.8V839.2zM100-1233.3v-818.8h818.8 818.8v818.8 818.8H918.8 100V-1233.3zM1328.2-1233.3v-409.4H918.8 509.4v409.4 409.4h409.4 409.4V-1233.3zM2530.8-1847.4v-204.7h3684.6H9900v204.7 204.7H6215.4 2530.8V-1847.4zM100-3920v-818.8h818.8 818.8v818.8 818.8H918.8 100V-3920zM1328.2-3920v-409.4H918.8 509.4v409.4 409.4h409.4 409.4V-3920zM2530.8-4534.1v-204.7h3684.6H9900v204.7 204.7H6215.4 2530.8V-4534.1z" transform="matrix(.1 0 0 -.1 0 511)"/></svg>';
	var iconAddList = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M4621.3,4991.5C2613.1,4782.9,1118.1,3005.7,1259.3,989.3c20.4-300.6,42.9-431.5,122.7-736.2c75.7-286.3,151.3-480.6,306.8-781.2c161.6-310.8,349.7-572.6,611.5-844.6c511.3-533.8,1112.5-879.4,1809.9-1036.8c112.5-26.6,216.8-55.2,229.1-67.5c45-32.7,204.5-310.8,419.2-721.9c218.8-421.3,261.8-484.7,327.2-474.5c65.4,10.2,106.3,81.8,267.9,466.3c83.8,196.3,190.2,441.7,237.2,544l85.9,184.1l157.5,36.8c437.6,100.2,861,284.3,1255.7,548.1c306.8,204.5,748.5,634,963.2,936.6C8230.8-706,8468-231.6,8564.2,58.8c527.6,1623.8-96.1,3400.9-1519.5,4333.5C6322.8,4862.6,5455.7,5077.4,4621.3,4991.5z M4876.9,3858.5c124.8-63.4,122.7-47,122.7-1235.2V1539.4l1051.2-6.1c1034.8-6.1,1053.2-6.1,1110.4-49.1c69.5-51.1,118.6-171.8,100.2-243.4c-8.2-28.6-38.8-81.8-71.6-118.6l-59.3-65.4l-1065.5-6.1l-1065.5-6.1V120.2c-2-1000,0-983.7-114.5-1059.3c-104.3-69.5-251.5-36.8-323.1,71.6c-28.6,47-32.7,153.4-32.7,983.7v930.5h-963.2c-848.7,0-971.4,4.1-1032.7,32.7c-128.8,61.4-171.8,237.2-85.9,345.6c87.9,110.4,98.2,112.5,1130.9,112.5h950.9v1096.1c0,734.2,8.2,1108.4,22.5,1135c28.6,57.3,141.1,120.7,208.6,120.7C4791,3889.2,4844.2,3874.9,4876.9,3858.5z" transform="matrix(.1 0 0 -.1 0 511)"/><path d="M6461.8-2599.7c-59.3-59.3-71.6-85.9-71.6-155.4c0-143.2,67.5-194.3,368.1-276.1c286.3-77.7,546-182,695.3-278.1c114.5-73.6,245.4-210.6,245.4-257.7c0-192.2-482.6-456.1-1098.2-599.2c-877.3-204.5-2110.5-216.8-3028.7-32.7c-736.2,149.3-1296.6,443.8-1243.4,654.4c36.8,141.1,419.2,366.1,824.2,482.6c257.7,75.7,323.1,120.7,345.6,237.2c28.6,157.5-102.3,288.3-267.9,265.9c-135-18.4-515.4-151.3-715.8-247.5C1703-3203,1635.5-3837,2359.5-4266.5c386.5-231.1,979.6-394.7,1771-486.7c404.9-49.1,1343.6-49.1,1754.6,0c867.1,100.2,1464.3,276.1,1879.4,550.1c349.7,233.1,480.6,582.8,333.3,883.5c-143.1,294.5-523.5,535.8-1110.4,707.6c-120.7,34.7-272,69.5-335.4,73.6C6539.6-2526.1,6531.4-2530.2,6461.8-2599.7z" transform="matrix(.1 0 0 -.1 0 511)"/></svg>';

	this.showWindow = function() {
		if (document.querySelector('.scored')) return;

		var windowBlock =	'<div class="scored__controls">' +
												'<span class="scored__list scored__list--hide scored__controls-icon">' + iconList + '</span>' +
												'<span class="scored__settings scored__controls-icon">' + iconSettings + '</span>' +
												'<span class="scored__close scored__controls-icon">' + iconClose + '</span>' +
											'</div>' +
											'<h3 class="scored__title">Введите или кликните по нику пользователя</h3>' +
											'<div class="scored__line">' +
												'<span class="scored__add-list scored__add-list--hide">' + iconAddList + '</span>' +
												'<input type="text" class="scored__input">' +
												'<span class="scored__target">' + iconTarget + '</span>' +
											'</div>' +
											'<div class="scored__score">' +
												'<span class="scored__up scored__control">' + iconHands + '</span>' +
												'<span class="scored__down scored__control">' + iconHands + '</span>' +
											'</div>';
		this.container = document.createElement('div');
		this.container.className = 'scored';
		this.container.innerHTML = windowBlock;

		this.body.appendChild(this.container);

		Object.keys(lsOptions).forEach(function (name) {
			if (this.ls.getItem(name) === null) {
				this.ls.setItem(name, lsOptions[name])
			}
		}.bind(this));

		this.controlList = this.container.querySelector('.scored__list');
		this.controlAddList = this.container.querySelector('.scored__add-list');

		if (this.ls.getItem('useList') === 'true') {
			this.controlList.classList.remove('scored__list--hide');
			this.controlAddList.classList.remove('scored__add-list--hide');
			this.controlList.addEventListener('click', openList.bind(this));
			this.controlAddList.addEventListener('click', addToList.bind(this));
		}
		else {
			this.controlList.classList.add('scored__list--hide');
			this.controlAddList.classList.add('scored__add-list--hide');
			this.controlList.removeEventListener('click', openList);
			this.controlAddList.removeEventListener('click', addToList);
		}

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

		var settingControl = this.container.querySelector('.scored__settings');

		settingControl.addEventListener('click', settings.bind(this));
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

	function settings() {
		var settingHtml = '<div class="settings-block__title">Использовать стоп лист?</div>' +
												'<span class="settings-block__close">' + iconClose + '</span>' +
												'<label class="settings-block__label" for="set-yes"><input class="settings-block__radio" type="radio" name="set" id="set-yes"> <span class="settings-block__custom">Да</span></label>' +
												'<label class="settings-block__label" for="set-no"><input class="settings-block__radio" type="radio" name="set" id="set-no"> <span class="settings-block__custom">Нет</span></label>' +
											'</div>';
		var settingBlock = document.createElement('div');
		settingBlock.className = 'settings-block';
		settingBlock.innerHTML = settingHtml;
		this.container.appendChild(settingBlock);

		if (this.ls.getItem('useList') === 'true') {
			document.getElementById('set-yes').checked = true;
		}
		else {
			document.getElementById('set-no').checked = true;
		}

		settingBlock.querySelectorAll('input').forEach(function(input) {
			input.addEventListener('change', saveStorage.bind(this))
		}.bind(this))

	}

	function saveStorage() {
		if (event.target.id === 'set-yes') {
			this.ls.setItem('useList', 'true');
		}
		else {
			this.ls.setItem('useList', 'false');
		}

		if (this.ls.getItem('useList') === 'true') {
			this.controlList.classList.remove('scored__list--hide');
			this.controlAddList.classList.remove('scored__add-list--hide');
			this.controlList.addEventListener('click', openList.bind(this));
			this.controlAddList.addEventListener('click', addToList.bind(this));
		}
		else {
			this.controlList.classList.add('scored__list--hide');
			this.controlAddList.classList.add('scored__add-list--hide');
			this.controlList.removeEventListener('click', openList);
			this.controlAddList.removeEventListener('click', addToList);
		}
	}

	function addToList() {
		var nickName = this.input.value;
		this.userList = JSON.parse(this.ls.getItem('list'));

		if (this.userList.indexOf(nickName) !== -1) {
			messages('Пользователь' + nickName + 'уже есть в списке', 'error');
		}
		else {
			this.userList.push(nickName);
			this.ls.setItem('list', JSON.stringify(this.userList));
			messages('Пользователь' + nickName + 'добавлен в список', 'info');
		}
	}

	function openList() {

	}
}

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
	if (request.modal) {
		new createWindow().showWindow();
	}
});