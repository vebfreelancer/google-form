const employers = [
	'АртеМ',
	'максим',
	'Владимир',
	'сергей',
	'НикиТа',
	'евГений',
	' Дарья',
	' ',
	'виктория ',
	'ЕкаТерина',
	'',
	' Андрей ',
	'КИРИЛЛ'
];

const nameCourse = 'Базовый React';
const command = [];

employers.forEach(item => {
	if (item.trim().length > 0) {
		command.push(item.trim()[0].toUpperCase() + item.trim().slice(1).toLowerCase());
	}
});

// for (let i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].trim() !== '') {
// 		command.push(employers[i]);
// 	}
// }

// for (let i = 0; i < command.length; i++) {
// 	command[i] = command[i].toLowerCase().trim();
// 	command[i] = command[i][0].toUpperCase() + command[i].slice(1);
// }

// console.log(command);

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const {
	cash, react, add
} = data;

const calcCash = (own, ...args) => {
	own = own || 0;
	const [ everyCash ] = args;
	let total = own;
	for (let i = 0; i < everyCash.length; i++) {
		total += +everyCash[i];
	}
	return total;
};

const lesson = calcCash(null, cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
	teacher = teacher || 'Максим';
	const sumTech = react.concat(add, 'и другие');
	console.log(
		// eslint-disable-next-line max-len
		`Стартуем новый курс: "${course}".\nВладелец: ${director},\nпреподаватель: ${teacher}.\nВсего уроков: ${allModule}.\nКоманда Академии: ${gang}`
	);
	console.log('Первое что изучим будет ' + react[0] + ". Он очень похож на HTML!");
	console.log('Технологии которые мы изучим: ');
	console.log.apply(null, sumTech);
};

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);

// eslint-disable-next-line max-len
/* ############################################################### FORM SELECT ############################################################### */

const selects = document.querySelectorAll('.select-form');
let isOpenSelectMenu = false;

if (selects) {
	selects.forEach(el => {
		el.addEventListener('click', function(event) {
			const target = event.target;

			let CheckOpenMenus = document.querySelectorAll('.select-form.open');

			if (CheckOpenMenus.length > 0) {
				CheckOpenMenus.forEach(item => {
					if (item !== this) {
						item.classList.remove('open');
						item.querySelector('.select-form__field').classList.remove('open');
					}
				});
			}

			if (target.closest('.select-form__field')) {
				this.classList.toggle('open');
				this.querySelector('.select-form__field').classList.toggle('open');
			}

			if (target.closest('.select-form__option')) {
				this.querySelector('input').value = target.textContent;
				this.classList.remove('open');
				this.querySelector('.select-form__field').classList.remove('open');
			}

			// const opened = [...selects].find(item => item.classList.contains('open'));
			CheckOpenMenus = document.querySelectorAll('.select-form.open');

			if (CheckOpenMenus) {
				isOpenSelectMenu = true;
			} else {
				isOpenSelectMenu = false;
			}
		});
	});
}

const input = document.querySelector('.form__input input');

input.addEventListener('input', function(event) {
	this.dataset.initialValue = this.value;
});
input.addEventListener('change', function(event) {
	this.setAttribute('badinput', 'false');
	this.setAttribute('aria-invalid', 'false');
});
