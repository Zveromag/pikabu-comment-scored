function createWindow() {
	this.body = document.body;
	this.container = null;
	this.ls = window.localStorage;
	lsOptions = {
		useList: 'false',
		list: '[]'
	}
	this.userList = JSON.parse(this.ls.getItem('list'));
	var targetEvent = targetName.bind(this);
	var controlsEvent = scored.bind(this);
	var messages = messages.bind(this);
	var settings = settings.bind(this);
	var showList = showList.bind(this);
	var link;
	var autorName = (document.querySelector('.b-user-menu__header a')) ? document.querySelector('.b-user-menu__header a').textContent : 'Анонимус'

	var iconClose = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M524.1,500L985,39.1c6.7-6.7,6.7-17.4,0-24.1c-6.7-6.7-17.4-6.7-24.1,0L500,475.9L39.1,15C32.4,8.4,21.6,8.4,15,15c-6.7,6.7-6.7,17.4,0,24.1L475.9,500L15,960.9c-6.7,6.7-6.7,17.4,0,24.1c3.3,3.3,7.7,5,12,5c4.4,0,8.7-1.7,12-5L500,524.1L960.9,985c3.3,3.3,7.7,5,12,5s8.7-1.7,12-5c6.7-6.7,6.7-17.4,0-24.1L524.1,500z"/></svg>';
	var iconSettings = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M908.3,10H91.7C46.6,10,10,46.6,10,91.7v816.7c0,45.1,36.6,81.7,81.7,81.7h816.7c45.1,0,81.7-36.6,81.7-81.7V91.7C990,46.6,953.4,10,908.3,10z M949.2,908.3c0,22.6-18.3,40.8-40.8,40.8H91.7c-22.6,0-40.8-18.3-40.8-40.8V91.7c0-22.6,18.3-40.8,40.8-40.8h816.7c22.6,0,40.8,18.3,40.8,40.8L949.2,908.3L949.2,908.3z"/><path d="M806.2 479.6h-64.1c-9.1-35.2-40.8-61.3-78.8-61.3-38 0-69.7 26.1-78.8 61.3H193.7c-11.3 0-20.4 9.2-20.4 20.4 0 11.3 9.2 20.4 20.4 20.4h390.8c9.1 35.2 40.8 61.3 78.8 61.3 38 0 69.7-26.1 78.8-61.3h64.1c11.3 0 20.4-9.2 20.4-20.4C826.7 488.7 817.5 479.6 806.2 479.6zM698.5 520.4c-7.1 12.2-20.1 20.4-35.2 20.4-15.1 0-28.1-8.3-35.2-20.4-3.5-6-5.7-12.9-5.7-20.4 0-7.5 2.2-14.4 5.7-20.4 7.1-12.1 20.1-20.4 35.2-20.4 15.1 0 28.1 8.3 35.2 20.4 3.5 6 5.7 12.9 5.7 20.4C704.2 507.5 702 514.4 698.5 520.4zM806.2 234.6H415.4c-9.1-35.2-40.8-61.3-78.8-61.3-38 0-69.7 26.1-78.8 61.3h-64.2c-11.3 0-20.4 9.2-20.4 20.4 0 11.3 9.2 20.4 20.4 20.4h64.2c9.1 35.2 40.8 61.3 78.8 61.3 38 0 69.7-26.1 78.8-61.3h390.8c11.3 0 20.4-9.2 20.4-20.4C826.7 243.7 817.5 234.6 806.2 234.6zM371.8 275.4c-7.1 12.2-20.1 20.4-35.2 20.4-15.1 0-28.1-8.3-35.2-20.4-3.5-6-5.7-12.9-5.7-20.4s2.2-14.4 5.7-20.4c7.1-12.1 20.1-20.4 35.2-20.4 15.1 0 28.1 8.3 35.2 20.4 3.5 6 5.7 12.9 5.7 20.4C377.5 262.5 375.3 269.4 371.8 275.4zM806.2 724.6H415.4c-9.1-35.2-40.8-61.3-78.8-61.3-38 0-69.7 26.1-78.8 61.3h-64.2c-11.3 0-20.4 9.2-20.4 20.4s9.2 20.4 20.4 20.4h64.2c9.1 35.2 40.8 61.3 78.8 61.3 38 0 69.7-26.1 78.8-61.3h390.8c11.3 0 20.4-9.2 20.4-20.4C826.7 733.7 817.5 724.6 806.2 724.6zM371.8 765.4c-7.1 12.2-20.1 20.4-35.2 20.4-15.1 0-28.1-8.3-35.2-20.4-3.5-6-5.7-12.9-5.7-20.4 0-7.5 2.2-14.4 5.7-20.4 7.1-12.1 20.1-20.4 35.2-20.4 15.1 0 28.1 8.3 35.2 20.4 3.5 6 5.7 12.9 5.7 20.4C377.5 752.5 375.3 759.4 371.8 765.4z"/></svg>';
	var iconTarget = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M951.5 309.3c-24.7-58.4-60-110.8-105-155.7s-97.4-80.3-155.7-105C630.3 23 566.1 10 500 10c-66.1 0-130.3 13-190.7 38.5-58.4 24.7-110.8 60-155.7 105-45 45-80.3 97.4-105 155.7C23 369.7 10 433.9 10 500c0 66.1 13 130.3 38.5 190.7 24.7 58.4 60 110.8 105 155.7 45 45 97.4 80.3 155.7 105C369.7 977 433.9 990 500 990c66.1 0 130.3-13 190.7-38.5 58.4-24.7 110.8-60 155.7-105 45-45 80.3-97.4 105-155.7C977 630.3 990 566.1 990 500c0-66.1-13-130.3-38.5-190.7zM466.8 928.5c-102.5-7.6-197.5-50.9-271-124.3-75-75-118.6-172.8-124.8-277.7h134.3c7.1 65.1 35.9 126.5 83.4 173.9 48.5 48.5 111.8 77.5 178.1 83.8v144.3zm0-204.9C363.1 711.1 280.5 629 266.1 526.5h200.7v197.1zm0-257.4H265.7C278.6 360.1 362 277 466.9 264.4v201.8zm0-262.5c-66.3 6.3-129.6 35.9-178.1 84.4-48.3 48.3-77.3 110.6-83.7 178.1H71.7c8-102.5 51.2-196.8 124.2-269.8 73.4-73.4 168.5-117.3 271-124.9v132.2zm60.3-132.5C632 77.8 729 121.8 803.6 196.4c73 73 116.8 167.3 124.8 269.8h-143c-6.4-67.5-36-129.8-84.3-178.1-47.3-47.3-107.6-76.7-173.9-83.9v-133zm0 193.8c103.7 14.6 184.9 97.5 197.6 201.2H527.1V265zm0 261.5h197.1c-14.1 101.3-94.6 182.1-197.1 196.4V526.5zm276.5 277.7C729 878.8 632 922.2 527.1 928.8V783.7c66.3-7.2 126.6-36 173.9-83.3 47.5-47.5 76.8-108.8 84-173.9h143.9c-6.2 104.9-50.3 202.6-125.3 277.7z"/></svg>';
	var iconHands = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M872.7 563.9c45 0 81.4-38.2 81.4-85.2s-36.4-85.2-81.4-85.2h-262s33.1-36.3 33.1-170.4c0-101.6-48-213.8-120.9-213-97.3.9-64 122.5-73.8 213-9.7 90.5-105.5 151.8-105.5 209.7-1.9 147.7-.1 450.8-.1 450.8 0 58.9 45.5 106.5 101.7 106.5h346c44.9 0 81.4-38.2 81.4-85.2 0-17.7-5.2-34.1-13.9-47.7 31.8-11.7 54.7-43 54.7-80.1 0-17.7-5.2-34.1-14-47.7 31.7-11.6 54.6-43 54.6-80.1.1-47.3-36.4-85.4-81.3-85.4zM192.3 393.5h-89.5c-36.5 0-61.5 29.1-56.1 63.5l79.4 504.8c2.5 15.7 23.5 28.2 47.1 28.2h42.6c23.6 0 42.6-12.4 42.6-28.2V457c0-34.4-29.6-63.5-66.1-63.5z"/></svg>';
	var iconList = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M100 4140v-818.8h818.8 818.8V4140v818.8H918.8 100V4140zM1328.2 4140v-409.4H918.8 509.4V4140v409.4h409.4 409.4V4140zM2530.8 3525.9v-204.7h3684.6H9900v204.7 204.7H6215.4 2530.8V3525.9zM100 1453.3V634.5h818.8 818.8v818.8 818.8H918.8 100V1453.3zM1328.2 1453.3v-409.4H918.8 509.4v409.4 409.4h409.4 409.4V1453.3zM2530.8 839.2V634.5h3684.6H9900v204.7 204.7H6215.4 2530.8V839.2zM100-1233.3v-818.8h818.8 818.8v818.8 818.8H918.8 100V-1233.3zM1328.2-1233.3v-409.4H918.8 509.4v409.4 409.4h409.4 409.4V-1233.3zM2530.8-1847.4v-204.7h3684.6H9900v204.7 204.7H6215.4 2530.8V-1847.4zM100-3920v-818.8h818.8 818.8v818.8 818.8H918.8 100V-3920zM1328.2-3920v-409.4H918.8 509.4v409.4 409.4h409.4 409.4V-3920zM2530.8-4534.1v-204.7h3684.6H9900v204.7 204.7H6215.4 2530.8V-4534.1z" transform="matrix(.1 0 0 -.1 0 511)"/></svg>';
	var iconAddList = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M5516.2 4998.6c-332.5-51.1-511.5-104.4-767.3-232.3-601.1-300.5-1057.2-861.1-1229.9-1517.6-46.9-179-55.4-253.6-55.4-517.9 0-262.2 8.5-338.9 55.4-513.7 95.9-362.3 268.6-679.9 537.1-989 78.9-89.5 138.5-164.1 134.3-168.4-2.1-2.1-78.9-36.2-166.2-74.6-618.1-270.7-1232-792.9-1658.3-1411l-66.1-98 225.9-147.1c125.8-81 238.7-153.4 253.6-164.1 17-10.7 66.1 42.6 149.2 159.9 181.2 260 590.4 660.7 861.1 839.8 272.8 181.2 558.4 324 837.7 415.6l208.9 68.2 164.1-57.5c255.8-87.4 441.2-119.4 714-119.4 281.4 0 490.2 36.2 741.8 127.9 91.7 32 170.5 55.4 176.9 49 4.3-6.4 106.6-42.6 225.9-83.1C7914.1 211.4 8749.7-666.8 9065.1-1756c70.3-240.8 70.3-409.2 2.1-556.3-63.9-138.5-183.3-270.7-309.1-345.3l-98-57.5-2082.5-6.4-2084.5-4.3v-298.4-298.4h2059c2276.4 0 2172-6.4 2459.7 138.5 524.3 264.3 799.3 850.4 671.4 1430.2-147.1 662.9-545.7 1357.7-1095.6 1907.7-362.3 362.3-752.4 639.4-1172.3 833.4l-176.9 83.1 104.4 110.8c245.1 257.9 441.2 590.4 545.6 920.8 309.1 980.5-136.4 2048.3-1084.9 2608.9C6441.3 4924 5870.1 5049.8 5516.2 4998.6zM6166.3 4350.7c317.6-81 558.4-225.9 790.8-475.3 255.8-275 400.7-626.7 426.3-1035.9 55.4-859-483.8-1573-1310.8-1739.3-215.3-44.8-620.3-34.1-822.7 21.3-321.9 87.4-658.6 311.2-852.6 567-225.9 300.5-332.5 628.8-334.6 1031.6-2.1 324 38.4 507.3 174.8 788.6C4572 4203.6 5373.4 4553.1 6166.3 4350.7zM1922.6-1284.9c-36.2-17-89.5-61.8-117.2-100.2-51.2-72.5-51.2-76.7-57.5-705.5l-6.4-635.2H1134c-671.4 0-709.8-6.4-797.2-130-36.2-49-51.1-98-51.1-170.5 0-115.1 44.8-194 142.8-253.7 64-40.5 110.8-42.6 692.7-42.6h622.4v-611.7c0-686.3 6.4-716.2 147.1-810 123.6-83.1 321.9-49 400.7 70.3 34.1 53.3 40.5 127.9 49 701.3l10.7 639.4 639.4 10.7c473.2 8.5 652.2 17.1 688.5 38.4 125.8 72.5 172.6 285.6 89.5 419.9-81 132.2-117.2 138.6-807.8 138.6h-620.3v635.2c0 581.9-4.3 637.3-40.5 699.1C2227.4-1272.1 2061.2-1225.2 1922.6-1284.9z" transform="matrix(.1 0 0 -.1 0 511)"/></svg>';
	var iconRemove = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M784.3,127.4H631.7C624.1,61.4,568,10,500,10c-68,0-124.1,51.4-131.7,117.4H215.7c-61.7,0-112,50.2-112,112v5.7c0,47.2,29.4,87.5,70.8,104V878c0,61.7,50.2,112,112,112h427.1c61.7,0,112-50.2,112-112V349.1c41.4-16.5,70.8-56.8,70.8-104v-5.7C896.3,177.6,846,127.4,784.3,127.4L784.3,127.4z M500,63.1c38.7,0,71,27.7,78.1,64.3H421.9C429.1,90.8,461.4,63.1,500,63.1L500,63.1z M772.4,878c0,32.5-26.4,58.9-58.8,58.9H286.5c-32.5,0-58.8-26.4-58.8-58.9V357.1h544.8L772.4,878L772.4,878z M843.1,245.1c0,32.5-26.4,58.9-58.8,58.9H215.7c-32.5,0-58.8-26.4-58.8-58.9v-5.7c0-32.5,26.4-58.9,58.8-58.9h568.6c32.5,0,58.8,26.4,58.8,58.9V245.1z"/><path d="M357.7 869c14.7 0 26.6-11.9 26.6-26.5V543.5c0-14.7-11.9-26.6-26.6-26.6-14.7 0-26.5 11.9-26.5 26.6v298.9C331.1 857.1 343 869 357.7 869zM500 869c14.7 0 26.6-11.9 26.6-26.5V543.5c0-14.7-11.9-26.6-26.6-26.6-14.7 0-26.6 11.9-26.6 26.6v298.9C473.4 857.1 485.3 869 500 869zM642.3 869c14.7 0 26.5-11.9 26.5-26.5V543.5c0-14.7-11.9-26.6-26.5-26.6-14.7 0-26.6 11.9-26.6 26.6v298.9C615.8 857.1 627.6 869 642.3 869L642.3 869z"/></svg>';

	this.showWindow = function() {
		if (document.querySelector('.scored')) return;

		var windowBlock =	'<div class="scored__controls">' +
												'<span class="scored__list scored__list--hide scored__controls-icon">' + iconList + '</span>' +
												'<span class="scored__settings scored__controls-icon">' + iconSettings + '</span>' +
												'<span class="scored__close scored__controls-icon">' + iconClose + '</span>' +
											'</div>' +
											'<h3 class="scored__title">Добро пожаловать ' + autorName + '</h3>' +
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

		if (this.input.value.trim() === '') {
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

		this.container.querySelector('.settings-block__close').addEventListener('click', function(){
			this.container.querySelector('.settings-block').remove();
		}.bind(this), { once: true})

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

		if (this.input.value.trim() === '') {
			messages('Пожалуйста укажите имя пользователя', 'error');
			return;
		}

		if (this.userList.indexOf(nickName) !== -1) {
			messages('Пользователь ' + nickName + ' уже есть в списке', 'error');
		}
		else {
			this.userList.push(nickName);
			this.ls.setItem('list', JSON.stringify(this.userList));
			messages('Пользователь ' + nickName + ' добавлен в список', 'info');
		}
	}

	function openList() {
		this.usersBlock = document.createElement('div');
		this.usersBlock.className = 'users-list';

		var userClose = document.createElement('span');
		userClose.className = 'users-list__close';
		userClose.innerHTML = iconClose;
		this.usersBlock.appendChild(userClose);

		showList();
	}

	function showList() {
		this.userList = JSON.parse(this.ls.getItem('list'));

		console.log(this.container.querySelectorAll('.users-list__item').length > 0);

		if (this.container.querySelectorAll('.users-list__item').length > 0) {
			this.container.querySelectorAll('.users-list__item').forEach(function(item) {
				item.remove();
			})
		}

		var listLength = this.userList.length;
		var i = 0;

		for (i; i < listLength; i++) {
			var userBlock = document.createElement('div');
			userBlock.classList = 'users-list__item';
			userBlock.dataset.userName = this.userList[i];
			userBlock.innerHTML = this.userList[i] + '<span class="remove-user">' + iconRemove + '</span>';
			this.usersBlock.appendChild(userBlock);
		}

		this.container.appendChild(this.usersBlock);
		this.container.querySelector('.users-list__close').addEventListener('click', function () {
			this.container.querySelector('.users-list').remove();
		}.bind(this), { once: true });

		this.container.querySelectorAll('.remove-user').forEach(function (item) {
			item.addEventListener('click', removeUser.bind(this));
		}.bind(this))
	}

	function removeUser() {
		var userName = event.target.closest('.users-list__item').dataset.userName;

		this.userList.splice(this.userList.indexOf(userName), 1);
		this.ls.setItem('list', JSON.stringify(this.userList));
		messages('Пользователь ' + userName + ' удален', 'info');
		showList();
	}
}

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
	if (request.modal) {
		new createWindow().showWindow();
	}
});