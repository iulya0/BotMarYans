console.log('-------------------------------')
console.log('  [VK] Успешно подключение!')
console.log('  [База данных] Успешно подключение!')
console.log('-------------------------------')
console.log('  Скрипт: Bot MarYans')
console.log('  Версия: 6.8')

console.log('-------------------------------')
console.log('')

// ВСЕ НАСТРОЙКИ В ФАЙЛЕ /database/settings.json! 

const { VK, Keyboard } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');
const botiinfo = require('./vidnbase/botiinfo.json');
const log = require("./base/log.json");
const clans = require('./clans.json'); 
const pchats = require('./pchats.json'); 
const gorod = require('./vidnbase/gorod.json');
const botinfo = require('./base/botinfo.json');
let user = new VK(); 


let giving = false;
let ewtreg = 9999999061;

const cars = [
	{
		name: 'Самокат',
		cost: 500,
		id: 1,
		maxsk: 20,
        carsk: 6,
        razgon: 50.5,
        upgrade: 1000,
		photo: "photo-176472758_457239365"
	},
	{
		name: 'Велосипед',
		cost: 2500,
		id: 2,
		maxsk: 35,
        carsk: 20,
        razgon: 45.8,
        upgrade: 3500,
		photo: "photo-176472758_457239366"
	},
	{
		name: 'Гироскутер',
		cost: 5000,
		id: 3,
        maxsk: 60,
        carsk: 90,
        razgon: 32,
        upgrade: 10000,
		photo: "photo-176472758_457239367"
	},
	{
		name: 'Сегвей',
		cost: 7500,
		id: 4,
		maxsk: 90,
        carsk: 120,
        razgon: 26.5,
        upgrade: 8500,
		photo: "photo-176472758_457239368"
	},
	{
		name: 'Мопед',
		cost: 25000,
		id: 5,
		maxsk: 80,
        carsk: 140,
        razgon: 21.5,
        upgrade: 35000,
		photo: "photo-176472758_457239369"
	},
	{
		name: 'Мотоцикл',
		cost: 50000,
		id: 6,
        maxsk: 42,
        carsk: 210,
        razgon: 42.7,
        upgrade: 60000,
		photo: "photo-176472758_457239370"
	},
	{
		name: 'ВАЗ 2109',
		cost: 75000,
		id: 7,
		maxsk: 185,
        carsk: 290,
        razgon: 10.4,
        upgrade: 85000,
		photo: "photo-176472758_457239371"
	},
	{
		name: 'Квадроцикл',
		cost: 80000,
		id: 8,
		maxsk: 350,
        carsk: 440,
        razgon: 4,
        upgrade: 90000,
		photo: "photo-176472758_457239372"
	},
	{
		name: 'Багги',
		cost: 135000,
		id: 9,
		maxsk: 250,
        carsk: 300,
        razgon: 5.2,
        upgrade: 235000,
		photo: "photo-176472758_457239373"
	},
	{
		name: 'Вездеход',
		cost: 200000,
		id: 10,
		maxsk: 355,
        carsk: 750,
        razgon: 2.8,
        upgrade: 300000,
		photo: "photo-176472758_457239374"
	},
	{
		name: 'Лада Xray',
		cost: 350000,
		id: 11,
		maxsk: 277,
        carsk: 122,
        razgon: 3.2,
        upgrade: 450000,
		photo: "photo-176472758_457239375"
	},
	{
		name: 'Audi Q7',
		cost: 750000,
		id: 12,
		maxsk: 350,
        carsk: 690,
        razgon: 3,
        upgrade: 850000,
		photo: "photo-176472758_457239376"
	},
	{
		name: 'BMW X6',
		cost: 1000000,
		id: 13,
		maxsk: 390,
        carsk: 939,
        razgon: 3,
        upgrade: 2000000,
		photo: "photo-176472758_457239377"
	},
	{
		name: 'Toyota FT-HS',
		cost: 1750000,
		id: 14,
		maxsk: 300,
        carsk: 570,
        razgon: 4.9,
        upgrade: 2750000,
		photo: "photo-176472758_457239378"
	},
	{
		name: 'BMW Z4 M',
		cost: 2500000,
		id: 15,
		maxsk: 209,
        carsk: 560,
        razgon: 2.9,
        upgrade: 3500000,
		photo: "photo-176472758_457239379"
	},
	{
		name: 'Subaru WRX STI',
		cost: 2750000,
		id: 16,
		maxsk: 349,
        carsk: 700,
        razgon: 2.9,
        upgrade: 3750000,
		photo: "photo-176472758_457239380"
	},
	{
		name: 'Lamborghini Veneno',
		cost: 3000000,
		id: 17,
		maxsk: 400,
        carsk: 721,
        razgon: 3.1,
        upgrade: 4000000,
		photo: "photo-176472758_457239381"
	},
	{
		name: 'Tesla Roadster',
		cost: 4500000,
		id: 18,
		maxsk: 450,
        carsk: 726,
        razgon: 3.8,
        upgrade: 5500000,
		photo: "photo-176472758_457239382"
	},
	{
		name: 'Yamaha YZF R6',
		cost: 5000000,
		id: 19,
		maxsk: 457,
        carsk: 731,
        razgon: 4.1,
        upgrade: 6000000,
		photo: "photo-176472758_457239383"
	},
	{
		name: 'Bugatti Chiron',
		cost: 6500000,
		id: 20,
		maxsk: 467,
        carsk: 748,
        razgon: 4.3,
        upgrade: 7500000,
		photo: "photo-176472758_457239384"
	},
	{
		name: 'Thrust SSC',
		cost: 35000000,
		id: 21,
		maxsk: 483,
        carsk: 769,
        razgon: 4.9,
        upgrade: 45000000,
		photo: "photo-176472758_457239385"
	},
	{
		name: 'Ferrari LaFerrari',
		cost: 39000000,
		id: 22,
		maxsk: 511,
        carsk: 783,
        razgon: 5.3,
        upgrade: 49000000,
		photo: "photo-176472758_457239386"
	},
	{
		name: 'Koenigsegg Regear',
		cost: 50000000,
		id: 23,
		maxsk: 547,
        carsk: 799,
        razgon: 5.7,
        upgrade: 60000000,
		photo: "photo-176472758_457239387"
	},
	{
		name: 'Formula 1',
		cost: 150000000000,
		id: 24,
		maxsk: 562,
        carsk: 826,
        razgon: 5.9,
        upgrade: 250000000000,
		photo: "photo-176472758_457239388"
	},
	{
		name: 'Venom GT',
		cost: 125000000,
		id: 25,
		maxsk: 580,
        carsk: 869,
        razgon: 6.4,
        upgrade: 225000000,
		photo: "photo-176472758_457239389"
	},
	{
		name: 'Rolls-Royce',
		cost: 200000000,
		id: 26,
		maxsk: 747,
        carsk: 921,
        razgon: 7.8,
        upgrade: 300000000,
		photo: "photo-176472758_457239390"
	},
    {
        name: 'MarYanset',
        cost: 100000000000000,
        id: 27,
		maxsk: 1681,
        carsk: 1871,
        razgon: 9.9,
        upgrade: 200000000000000,
		photo: "photo-176472758_457239391"
    },
];

const yachts = [
	{
		name: 'Ванна',
		cost: 10000,
		id: 1
	},
	{
		name: 'Nauticat 331',
		cost: 10000000,
		id: 2
	},
	{
		name: 'Nordhavn 56 MS',
		cost: 15000000,
		id: 3
	},
	{
		name: 'Princess 60',
		cost: 25000000,
		id: 4
	},
	{
		name: 'Azimut 70',
		cost: 35000000,
		id: 5
	},
	{
		name: 'Dominator 40M',
		cost: 50000000,
		id: 6
	},
	{
		name: 'Moonen 124',
		cost: 60000000,
		id: 7
	},
	{
		name: 'Wider 150',
		cost: 65000000,
		id: 8
	},
	{
		name: 'Palmer Johnson 42M SuperSport',
		cost: 80000000,
		id: 9
	},
	{
		name: 'Wider 165',
		cost: 85000000,
		id: 10
	},
	{
		name: 'Eclipse',
		cost: 150000000,
		id: 11
	},
	{
		name: 'Dubai',
		cost: 300000000,
		id: 12
	},
	{
		name: 'Streets of Monaco',
		cost: 750000000,
		id: 13
	}
];

const airplanes = [
	{
		name: 'Параплан',
		cost: 100000,
		id: 1
	},
	{
		name: 'АН-2',
		cost: 350000,
		id: 2
	},
	{
		name: 'Cessna-172E',
		cost: 700000,
		id: 3
	},
	{
		name: 'Supermarine Spitfire',
		cost: 1000000,
		id: 4
	},
	{
		name: 'BRM NG-5',
		cost: 1400000,
		id: 5
	},
	{
		name: 'Cessna T210',
		cost: 2600000,
		id: 6
	},
	{
		name: 'Beechcraft 1900D',
		cost: 5500000,
		id: 7
	},
	{
		name: 'Cessna 550',
		cost: 8000000,
		id: 8
	},
	{
		name: 'Hawker 4000',
		cost: 22400000,
		id: 9
	},
	{
		name: 'Learjet 31',
		cost: 45000000,
		id: 10
	},
	{
		name: 'Airbus A318',
		cost: 85000000,
		id: 11
	},
	{
		name: 'F-35A',
		cost: 160000000,
		id: 12
	},
	{
		name: 'Boeing 747-430 Custom',
		cost: 225000000,
		id: 13
	},
	{
		name: 'C-17A Globemaster III',
		cost: 350000000,
		id: 14
	},
	{
		name: 'F-22 Raptor',
		cost: 400000000,
		id: 15
	},
	{
		name: 'Airbus 380 Custom',
		cost: 600000000,
		id: 16
	},
	{
		name: 'B-2 Spirit Stealth Bomber',
		cost: 1359000000,
		id: 17
	}
];

const helicopters = [
	{
		name: 'Шарик с пропеллером',
		cost: 2,
		id: 1
	},
	{
		name: 'RotorWay Exec 162F',
		cost: 300000,
		id: 2
	},
	{
		name: 'Robinson R44',
		cost: 450000,
		id: 3
	},
	{
		name: 'Hiller UH-12C',
		cost: 1300000,
		id: 4
	},
	{
		name: 'AW119 Koala',
		cost: 2500000,
		id: 5
	},
	{
		name: 'MBB BK 117',
		cost: 4000000,
		id: 6
	},
	{
		name: 'Eurocopter EC130',
		cost: 7500000,
		id: 7
	},
	{
		name: 'Leonardo AW109 Power',
		cost: 10000000,
		id: 8
	},
	{
		name: 'Sikorsky S-76',
		cost: 15000000,
		id: 9
	},
	{
		name: 'Bell 429WLG',
		cost: 19000000,
		id: 10
	},
	{
		name: 'NHI NH90',
		cost: 35000000,
		id: 11
	},
	{
		name: 'Kazan Mi-35M',
		cost: 60000000,
		id: 12
	},
	{
		name: 'Bell V-22 Osprey',
		cost: 135000000,
		id: 13
	}
];

const homes = [
	{
		name: 'Коробка из-под холодильника',
		cost: 250,
		id: 1
	},
	{
		name: 'Подвал',
		cost: 3000,
		id: 2
	},
	{
		name: 'Палатка',
		cost: 3500,
		id: 3
	},
	{
		name: 'Домик на дереве',
		cost: 5000,
		id: 4
	},
	{
		name: 'Полуразрушенный дом',
		cost: 10000,
		id: 5
	},
	{
		name: 'Дом в лесу',
		cost: 25000,
		id: 6
	},
	{
		name: 'Деревянный дом',
		cost: 37500,
		id: 7
	},
	{
		name: 'Дача',
		cost: 125000,
		id: 8
	},
	{
		name: 'Кирпичный дом',
		cost: 80000,
		id: 9
	},
	{
		name: 'Коттедж',
		cost: 450000,
		id: 10
	},
	{
		name: 'Особняк',
		cost: 1250000,
		id: 11
	},
	{
		name: 'Дом на Рублёвке',
		cost: 5000000,
		id: 12
	},
	{
		name: 'Личный небоскрёб',
		cost: 7000000,
		id: 13
	},
	{
		name: 'Остров с особняком',
		cost: 12500000,
		id: 14
	},
	{
		name: 'Белый дом',
		cost: 20000000,
		id: 15
	},
	{
		name: 'своя планета с особняком',
		cost: 20000000000000000000000,
		id: 16
	}
];

const apartments = [
	{
		name: 'Чердак',
		cost: 15000,
		id: 1
	},
	{
		name: 'Квартира в общежитии',
		cost: 55000,
		id: 2
	},
	{
		name: 'Однокомнатная квартира',
		cost: 175000,
		id: 3
	},
	{
		name: 'Двухкомнатная квартира',
		cost: 260000,
		id: 4
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 500000,
		id: 5
	},
	{
		name: 'Квартира в центре Москвы',
		cost: 1600000,
		id: 6
	},
	{
		name: 'Двухуровневая квартира',
		cost: 4000000,
		id: 7
	},
	{
		name: 'Квартира с Евроремонтом',
		cost: 6000000,
		id: 8
	}
];

const phones = [
	{
		name: 'Nokia 108',
		cost: 250,
		id: 1
	},
	{
		name: 'Nokia 3310 (2017)',
		cost: 500,
		id: 2
	},
	{
		name: 'ASUS ZenFone 4',
		cost: 2000,
		id: 3
	},
	{
		name: 'BQ Aquaris X',
		cost: 10000,
		id: 4
	},
	{
		name: 'Sony Xperia XA',
		cost: 15000,
		id: 5
	},
	{
		name: 'Samsung Galaxy S8',
		cost: 30000,
		id: 6
	},
	{
		name: 'Xiaomi Mi Mix',
		cost: 50000,
		id: 7
	},
	{
		name: 'Galaxy S1',
		cost: 75000,
		id: 8
	},
	{
		name: 'iPhone X',
		cost: 100000,
		id: 9
	},
	{
		name: 'Apple iPhone 11 Pro Max золотой',
		cost: 100000000000000,
		id: 10
	},
	{
		name: 'SAMSUNG GALAXY A50',
		cost: 10000000000000000000000000000000000000000000000000000000000000,
		id: 11
	}
];

const pets = [
	{
		name: 'Гуана',
		cost: 1000,
		id: 1,
		icon: '🦎',
		att: "photo-176472758_457239394"
	},
	{
		name: 'Улитка',
		cost: 2500000,
		id: 2,
		icon: '🐌',
		att: "photo-176472758_457239395"
	},
	{
		name: 'Заяц',
		cost: 500000,
		id: 3,
		icon: '🐰',
		att: "photo-176472758_457239396"
	},
	{
		name: 'Кошка',
		cost: 300000000,
		id: 4,
		icon: '🐈',
		att: "photo-176472758_457239397"
	},
	{
		name: 'Лиса',
		cost: 1250000000,
		id: 5,
		icon: '🦊',
		att: "photo-176472758_457239398"
	},
	{
		name: 'Собака',
		cost: 5000000000,
		id: 6,
		icon: '🐶',
		att: "photo-176472758_457239399"
	},
	{
		name: 'Панда',
		cost: 30000000000,
		id: 7,
		icon: '🐼',
		att: "photo-176472758_457239400"
	},
	{
		name: 'Лев',
		cost: 180000000000,
		id: 8,
		icon: '🦁',
		att: "photo-176472758_457239401"
	},
    {
        name: 'Попугай',
        cost: 200000000,
        id: 9,
		icon: '🦜',
		att: "photo-176472758_457239402"
    },
    {
        name: 'Единорог',
        cost: 300000000000,
        id: 10,
		icon: '🦄',
		att: "photo-176472758_457239403"
    },
    {
        name: 'Тыква',
        cost: 300000000000,
        id: 11,
		icon: '🎃',
		att: "photo-176472758_457239404"
    },
];


const petsupd = [
	{
		cost: 2000,
		id: 1
	},
	{
		cost: 50000,
		id: 2
	},
	{
		cost: 1000000,
		id: 3
	},
	{
		cost: 600000000,
		id: 4
	},
	{
		cost: 2500000000,
		id: 5
	},
	{
		cost: 10000000000,
		id: 6
	},
	{
		cost: 60000000000,
		id: 7
	},
	{
		cost: 360000000000,
		id: 8
	},
	{
		cost: 3600000000000,
		id: 9
	},
	{
		cost: 36000000000000,
		id: 10
	},
	{
		cost: 3600000000000000,
		id: 11
	}
];

const businesses = [
	{
		name: 'Шаурмичная',
		cost: 50000,
		earn: 400,
		id: 1,
		icon: '🥖'
	},
	{
		name: 'Ларёк',
		cost: 10000,
		earn: 700,
		id: 2,
		icon: '🏪'
	},
	{
		name: 'Ресторан',
		cost: 300000,
		earn: 2500,
		id: 3,
		icon: '🍷'
	},
	{
		name: 'Магазин',
		cost: 500000,
		earn: 3800,
		id: 4,
		icon: '🏫'
	},
	{
		name: 'Завод',
		cost: 1500000,
		earn: 8000,
		id: 5,
		icon: '🏭'
	},
	{
		name: 'Шахта',
		cost: 25000000,
		earn: 70000,
		id: 6,
		icon: '⛏'
	},
	{
		name: 'Офис',
		cost: 80000000,
		earn: 220000,
		id: 7,
		icon: '🏢'
	},
	{
		name: 'Разработка игр',
		cost: 150000000,
		earn: 300000,
		id: 8,
		icon: '🕹'
	},
	{
		name: 'Нефтевышка',
		cost: 500000000,
		earn: 700000,
		id: 9,
		icon: '🏜'
	},
	{
		name: 'Атомная электростанция',
		cost: 800000000,
		earn: 1000000,
		id: 10,
		icon: '💡'
	},
	{
		name: 'Космическое агентство',
		cost: 50000000000,
		earn: 50000000,
		id: 11,
		icon: '🗺'
	}
];

const businesses5 = [
	{
		name: 'Facebook',
		cost: 6000000000,
		earn: 40000000,
		id: 1,
		icon: '🥖',
		att: "photo-176472758_457239589"
	},
	{
		name: 'Instagram',
		cost: 10000000000,
		earn: 70000000,
		id: 2,
		icon: '🏪',
		att: "photo-176472758_457239592"
	},
	{
		name: 'Google',
		cost: 50000000000,
		earn: 100000000,
		id: 3,
		icon: '🍷',
		att: "photo-176472758_457239590"
	},
	{
		name: 'Яндекс',
		cost: 100000000000,
		earn: 250000000,
		id: 4,
		icon: '🏫',
		att: "photo-176472758_457239593"
	},
	{
		name: 'ВКонтакте',
		cost: 180000000000,
		earn: 399000000,
		id: 5,
		icon: '🏭',
		att: "photo-176472758_457239588"
	}
];

const works = [
	{
		name: 'Дворник',
		requiredLevel: 1,
		min: 2000,
		max: 2500,
		id: 1
	},
	{
		name: 'Сантехник',
		requiredLevel: 3,
		min: 3750,
		max: 4000,
		id: 2
	},
	{
		name: 'Электрик',
		requiredLevel: 5,
		min: 4000,
		max: 4500,
		id: 3
	},
	{
		name: 'Слесарь',
		requiredLevel: 8,
		min: 5000,
		max: 5500,
		id: 4
	},
	{
		name: 'Юрист',
		requiredLevel: 10,
		min: 7500,
		max: 8000,
		id: 5
	},
	{
		name: 'Бухгалтер',
		requiredLevel: 14,
		min: 9000,
		max: 9489,
		id: 6
	},
	{
		name: 'Бармен',
		requiredLevel: 22,
		min: 10000,
		max: 12500,
		id: 7
	},
	{
		name: 'Администратор',
		requiredLevel: 25,
		min: 12500,
		max: 13500,
		id: 8
	},
	{
		name: 'Программист',
		requiredLevel: 49,
		min: 16000,
		max: 17500,
		id: 9
	}
];

const clock = [
	{
		name: 'Умные часы Samsung Galaxy Watch 42 mm Rose Gold',
		cost: 1000,
		id: 1
	},
	{
		name: 'Смарт-часы Samsung Galaxy Watch Active 39.5мм черный SM-R500NZKASER',
		cost: 2500000,
		id: 2
	},
	{
		name: 'Samsung Носимое устройство Galaxy Watch Active, серебристый лед',
		cost: 500000,
		id: 3
	},
	{
		name: 'Умные часы-телефон Smart Watch Phone DZ09 с Bluetooth',
		cost: 300000000,
		id: 4
	},
	{
		name: 'Умные часы Smart Watch Q7SP (Золото)',
		cost: 1250000000,
		id: 5
	},
	{
		name: 'Смарт-часы Samsung Galaxy Watch Active 2 Лакрица (SM-R830)',
		cost: 5000000000,
		id: 6
	},
	{
		name: 'Часы Smart GPS Watch T58 (GW700)',
		cost: 30000000000,
		id: 7
	},
	{
		name: 'Умные часы Samsung R500 Galaxy Watch Active черные',
		cost: 180000000000,
		id: 8
	},
    {
        name: 'Умные часы Smart Watch W8',
        cost: 200000000,
        id: 9
    },
    {
        name: 'Смарт-часы Samsung Galaxy Fit 0.95" AMOLED серебристый (SM-R370NZSASER)',
        cost: 300000000000,
        id: 10
    }
];

const raket = [
	{
		name: 'Ель сербская',
		cost: 1000,
		id: 1
	},
	{
		name: 'Ель сибирская (Picea obovata)',
		cost: 2500000,
		id: 2
	},
	{
		name: 'Ель европейская, или обыкновенная (Picea abies)',
		cost: 500000,
		id: 3
	},
	{
		name: 'Сосна обыкновенная',
		cost: 300000000,
		id: 4
	},
	{
		name: 'Сосна горная',
		cost: 1250000000,
		id: 5
	},
	{
		name: 'Сосна желтая',
		cost: 5000000000,
		id: 6
	},
	{
		name: 'Сосна Веймутова',
		cost: 30000000000,
		id: 7
	},
	{
		name: 'Сосна белокорая',
		cost: 180000000000,
		id: 8
	},
    {
        name: 'Ель из железа',
        cost: 200000000,
        id: 9
    },
    {
        name: 'Ель из алмазов',
        cost: 300000000000,
        id: 10
    }
];

const manic = [
	{
		name: 'Monfury B8',
		cost: 400000000,
		earn: 416000,
		id: 1,
		icon: '🖨',
		att: "photo-176472758_457239494"
	},
	{
		name: 'Avalon E9',
		cost: 1100000000,
		earn: 15830000,
		id: 2,
		icon: '🖨',
		att: "photo-176472758_457239495"
	},
	{
		name: 'Dragon Z5',
		cost: 3700000000,
		earn: 41690000,
		id: 3,
		icon: '🖨',
		att: "photo-176472758_457239496"
	},
	{
		name: 'Estelon 4',
		cost: 10300000000,
		earn: 125000000,
		id: 4,
		icon: '🖨',
		att: "photo-176472758_457239497"
	},
	{
		name: 'XSUT X5',
		cost: 22900000000,
		earn: 300000000,
		id: 5,
		icon: '🖨',
		att: "photo-176472758_457239499"
	},
	{
		name: 'MoneyMaker V2',
		cost: 50800500000,
		earn: 700000000,
		id: 6,
		icon: '🖨',
		att: "photo-176472758_457239500"
	},
	{
		name: 'Giant X10',
		cost: 40000000000000,
		earn: 1300000000,
		id: 7,
		icon: '🖨',
		att: "photo-176472758_457239501"
	}

];

const stranas = [

	{
		name: 'Не указана',
		cost: 0,
		id: 1
    },
	{
		name: '🇺🇸США',
		cost: 0,
		id: 2
    },

	{
		name: '🇷🇺Россия',
		cost: 0,
		id: 3
    },

	{
		name: '🇰🇷Япония',
		cost: 0,
		id: 4
    },

	{
		name: '🇺🇦Украина',
		cost: 0,
		id: 5
    },
	{
		name: '🇰🇿Казахстан',
		cost: 0,
		id: 6
    },
	{
		name: '🇧🇾Белоруссия',
		cost: 0,
		id: 7
    }
];

const pk = [

	{
		name: 'DЕXР Аquilоn О175',
		cost: 10000,
		id: 1,
		att: "photo-176472758_457239513"
    },
	{
		name: 'HYРЕRРС NЕО',
		cost: 500000,
		id: 2,
		att: "photo-176472758_457239514"
    },

	{
		name: 'DЕLL Аliеnwаrе Аurоrа R7',
		cost: 1000000,
		id: 3,
		att: "photo-176472758_457239515"
    },

	{
		name: 'HYРЕRРС СОSMОS X 3',
		cost: 3000000,
		id: 4,
		att: "photo-176472758_457239517"
    },

	{
		name: 'HYРЕRРС РRЕMIUM',
		cost: 5000000,
		id: 5,
		att: "photo-176472758_457239520"
    }
];

const reklama = [
	{
		name: 'Старт',
		sub: 1000,
		cost: 15000,
		id: 1
	},
	{
		name: 'Нормал',
		sub: 5000,
		cost: 75000,
		id: 2
	},
	{
		name: 'Нормал',
		sub: 25000,
		cost: 750000,
		id: 3
	},
	{
		name: 'Мега',
		sub: 70000,
		cost: 1000000,
		id: 4
	},
	{
		name: 'Горох',
		sub: 140000,
		cost: 2000000,
		id: 5
	},
	{
		name: 'Сметанка',
		sub: 220000,
		cost: 3500000,
		id: 6
    },
];

setInterval(async () => {
	users.map(user => {
		for(var i = 0; i < user.business.length; i++)
		{
			const biz = businesses[user.business[i].id - 1];
			user.business[i].moneys += Math.floor(biz.earn / biz.workers * user.business[i].workers)
		}
	});
}, 3600000);

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'ДОХЕРА');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}

let promo = "0";

const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı'
}

const xaipText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı'
}

 const trans = {
 	й: 'i',
 	ц: 'c',
 	у: 'u',
 	к: 'k',
 	е: 'e',
 	ё: 'e',
 	н: 'n',
 	г: 'g',
 	ш: 'sch',
 	щ: 'sh',
 	з: 'z',
 	х: 'h',
 	ф: 'f',
 	в: 'v',
 	а: 'a',
 	п: 'p',
 	р: 'r',
 	о: 'o',
 	л: 'l',
 	д: 'd',
 	ж: 'zh',
 	э: 'e',
 	я: 'ya',
 	ч: 'ch',
 	с: 's',
 	м: 'm',
 	и: 'i',
 	т: 't',
 	ь: "'",
 	б: 'b',
 	ю: 'you',

 	Й: 'i',
 	Ц: 'c',
 	У: 'u',
 	К: 'k',
 	Е: 'e',
 	Ё: 'e',
 	Н: 'n',
 	Г: 'g',
 	Ш: 'sch',
 	Щ: 'sh',
 	З: 'z',
 	Х: 'р',
 	Ъ: 'ъ',
 	Ф: 'f',
 	Ы: 'i',
 	В: 'v',
 	А: 'a',
 	П: 'p',
 	Р: 'r',
 	О: 'o',
 	Л: 'l',
 	Д: 'd',
 	Ж: 'zh',
 	Э: 'e',
 	Я: 'ya',
 	Ч: 'ch',
 	С: 's',
 	М: 'w',
 	И: 'i',
 	Т: 't',
 	Ь: "'",
 	Б: 'b',
 	Ю: 'you',
 	Ы: 'i',
 	ы: 'i',
 	" ": ' ',
 	".": '.',
 	"!": '!',
 	"?": '?'
 }

let btc = 6000;

let smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
let smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);

let users = require('./database/users.json');
let config = require('./database/settings.json');

setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
	console.log(' База данных успешно сохранена.');
	console.log('');
}, 30000);
setInterval(async () => {
	await saveClans();
	console.log('savedc');
}, 30000);
setInterval(async () => {
	await saveBotinfo();
	console.log('savedb');
}, 30000);
setInterval(async () => {
	await savebotiinfo();
	console.log('готово');
}, 30000);
setInterval(async () => {
	await savegorod();
	console.log('готово');
}, 30000);
setInterval(async () => {
	await savelog();
	console.log('Логи сохранены');
}, 30000);
setInterval(async () => {
	await savepchats();
	console.log('Чаты сохранены');
}, 30000);
setInterval(async () => {


smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);

}, 1);



setInterval(async () => { 
users.map(user => { 
if(user.manic) 
{ 
const tool = manic.find(x=> x.id === user.manic); 
if(!tool) return;

user.mnc += tool.earn; 
} 
});
}, 300000); 

setInterval(async () => {
	users.filter(x=> x.settings.old == false).map(x=> {
		x.settings.old == true;
	});
}, 604800);

setInterval(async () => {
	users.map(user => {
		if(user.business)
		{
			const biz = businesses.find(x=> x.id === user.business);
			if(!biz) return;

			user.biz += biz.earn;
		}
	});
}, 3600000);



setInterval(async () => {
	users.map(user => {
		if(user.businesses5)
		{
			const biz5 = businesses5.find(x=> x.id === user.businesses5);
			if(!biz5) return;

			user.biz5 += biz5.earn;
		}
	});
}, 3600000);



setInterval(async () => {
	users.map(user => {
		if(user.businesses5)
		{
			let ping = utils.random(10000000);
			user.bagibusnese += `${ping}`;
		}
	});
}, 30000);


function clearPromo()
{
	promo = 0;
	users.map(user => {
		user.promo = false;
	});
}

setInterval(async () => {
    users.filter(x=> x.misc.farm !== 0).map(x=> {
        if(x.misc.farm === 1)
        {
            x.farm_btc1 += 2;
        }

        if(x.misc.farm === 2)
        {
            x.farm_btc1 += 10;
        }

        if(x.misc.farm === 3)
        {
            x.farm_btc1 += 100;
        }
    });
}, 3600000);

function msgError(messagetext)
{
	return bot(`${messagetext} ${utils.pick([`😯`, `🙂`, `🤑`, `☺`])}`);
}



async function saveUsers()
{
	require('fs').writeFileSync('./database/users.json', JSON.stringify(users, null, '\t'));
	return true;
}
async function saveClans()
{
	require('fs').writeFileSync('./clans.json', JSON.stringify(clans, null, '\t'));
	return true;
}
async function saveBotinfo()
{
	require('fs').writeFileSync('./base/botinfo.json', JSON.stringify(botinfo, null, '\t'));
	return true;
}
async function saveConfig()
{
	require('fs').writeFileSync('./database/settings.json', JSON.stringify(config, null, '\t'));
	return true;
}
async function savegorod()
{
	require('fs').writeFileSync('./vidnbase/gorod.json', JSON.stringify(gorod, null, '\t'));
	return true;
}
async function savebotiinfo()
{
	require('fs').writeFileSync('./vidnbase/botiinfo.json', JSON.stringify(botiinfo, null, '\t'));
	return true;
}
async function savelog()
{
	require('fs').writeFileSync('./base/log.json', JSON.stringify(log, null, '\t'));
	return true;
}
async function savepchats()
{
	require('fs').writeFileSync('./pchats.json', JSON.stringify(pchats, null, '\t'));
	return true;
}

vk.setOptions({ token: config.grouptoken, pollingGroupId: config.groupid });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[club176472758\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club176472758\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
			id: message.senderId,
			uid: users.length,
			balance: 50000,
			bank: 0,
			btc: 0,
			lucker: 0,
			clanstag: 0,
			part: false,
			kanal: false,
			nuk_kanal: false,
			info_locked: false,
			sub: 1,
			like: 0,
			dislike: 0,
			videos: 0,
			strike: 0,
			limitworkes: 9999,
			wokers: 0,
			logg: ``,
			feneli: `Нету`,
			namesy: `Нету`,
			otcheru: `Нету`,
			pollinton: `Нету`,
			vocrost: 0,
			manic_lvl: 1,
			mnc: 0,
			manic: 0,
			manic_pribil: 0,
			satasti: 100,
			radosti: 100,
			san: `Нету`,
			lvllove: 1,
			astroen: 25,
			pk: 0,
			pp: 0,
			strana: 0,
			upo: 0,
			evall: 0,
			refs: 0,
			atak: 2,
			fgrvfty: 0,
			benz: 10,
			feik: false,
			prefix: `Пользователь`,
			    modules:    	
				{
					"1": 		{
						price: 	50,
						count:  0,
						profit: 1
					},
					"2": 		{
						price: 	1400,
						count:  0,
						profit: 2
					},
					"3": 		{
						price: 	2500,
						count:  0,
						profit: 3
					},
					"4": 		{
						price: 	5000,
						count:  0,
						profit: 4
					},
					"5": 		{
						price: 	10250,
						count:  0,
						profit: 6
					},
					"6": 		{
						price: 	15000,
						count:  0,
						profit: 8
					},
					"7": 		{
						price: 	40000,
						count:  0,
						profit: 10
					}
				},
			click: 1,
			up: {
				cursor: 0,
			cursor_count: 0,
			bcursor: 0,
			bcursor_count: 0,
			mishka: 0,
			mishka_count: 0,
			smishka: 0,
			smishka_count: 0,
			kolonka: 0,
			kolonka_count: 0,
			printer: 0,
			printer_count: 0
			},
			banni: false,
			siloi: false,
			upo2: 0,
			pretient: false,
			ybalance: 0,
			sm: 0,
			camera: false,
			microfon: false,
			heteri: 0,
			video: 0,
			comment: 0,
			tematika: false,
			but: false,
			blocked: false,
			clanscher: 0,
			clanstop: 0,
			farm_btc1: 0,
			farms: 0,
			farmslimit: 2000,
			raziri: 0,
			raziri3: 0,
            raziri2: 0,
			energy: 10,
			opit: 0,
            coal: 0,
            emeralds: 0,
			biz: 0,
            warn: 0,
            preveleg: 0,
            log: ``,
			loggg: ``,
			zhelezo: 0,
            healths: 100,
			hunger: 100,
			zoloto: 0,
			limit: 10000000000,
			almaz: 0,
            foolder: 0,
			floder: 0,
			bizlvl: 0,
			nicklimit: 40,
			rating: 0,
			regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
			mention: true,
			bansen:  ``,
			ban: false,
			risunok: ``,
			nik: 0,
			nik1: 0,
			nik2: 0,
			nik3: 0,
			nik5: 0,
			gon: 0,
			bilet: 0,
			number_captcha: 0,
			captcha_token: 0,
			captcha_sms: 0,
			check: false,
			limit_sms: 25,
			user_sberbank: false,
			push: 0,
			upgrade: 0,
            moneys: 0,
			earn: 0,
			workers: 0,
			ras: true,
			businesses5: 0,
			biz5: 0,
			bagibusnese: 0,
			kolovocelovek: 0,
			tiktok: null,
            tiktokpod: 0,
            tiktoklikes: 0,
            tiktoktimer: 0,
			tiktokliketimer: false,
			qwe: 0,
            qwe2: 0,
            qwe3: 0,
			qwe4: false,
			qwe5: 0,
            qwe6: 0,
            qwe7: 0,
			qwe8: false,
			qwe9: 0,
            qwe10: 0,
            qwe11: 0,
			qwe12: false,
			qwe13: 0,
            qwe14: 0,
            qwe15: 0,
			qwe17: false,
			qwe18: 0,
            qwe19: 0,
            qwe20: 0,
			qwe21: false,
			qwe22: 0,
			qwe23: 0,
			qwe24: 0,
			qwe25: 0,
			qwe26: 0,
			qwe27: 0,
			qwe28: 0,
			qwe29: 0,
			qwe30: 0,
			qwe31: 0,
			qwe32: null,
			qwe33: null,
			qwe34: ``,
			qwe35: ``,
			qwe36: ``,
			qwe4011: 0,
			qwe40110: 0,
			kn: false,
			kn1: false,
			kn2: false,
			kn3: false,
			kn4: false,
			kn5: false,
			kn6: false,
			kn7: false,
			kn8: false,
			kn9: false,
			kn0: `❌`,
			sberbank: {
				activation: 0,
				number: 0,
				cvv: 0,
				user_name: `Не указано`,
				balance: 0
			},
			scar: {
                gosnomer: "нету",
                gontime: false,
                prok_1: 1,
                prok_2: 1,
                prok_3: 1,
                prok_4: 1,
                prok_5: 1,
                prok_6: 1
            },
			timers: {
				arenda: false,
				arenda2: false,
				arenda3: false,
				detek: false,
				koropko: false,
				bozka: false,
				ohota: 0,
				oglabit: false,
				daiving: false,
				tcomment: 0,
				comment: false,
				cwar: false,
				vidat: false,
				peredat: false,
				bonus666: false,
				bonus9: false,
				translation: false,
				hasWorked: false,
				bonus: false,
				hasWorked9: false,
				poxod: false,
				stream2: false,
				stream: false,
				poxod2: false,
				kopat: false,
				hack: false
			},
			tag: user_info.first_name,
			work: 0,
			business: 0,
			notifications: true,
			exp: 1,
			level: 1,
			referal: null,
			promo: false,
			transport: {
				car: 0,
				yacht: 0,
				airplane: 0,
				helicopter: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			misc: {
				manic: 0,
				phone: 0,
				raket: 0,
				farm: 0,
				pet: 0,
				clock: 0,
			},
			settings: {
				trade: true,
				limitt: 100000000000,
				firstmsg: true,
				adm: 0,
				trade: true,
				old: false,
				limit: 1000000,
			},
			pet: {
				lvl: 0,
				poterl: false
			},
			marriage: {
				partner: 0,
				requests: []
			}
		});
		console.log(` +1 игрок [Игроков: ${users.length}]`);
		console.log(``);
		saveUsers();
		const fs = require('fs');
	fs.appendFileSync('logoNEW.txt', `[${data()}, ${time()}] +1 игрок [Игроков: ${users.length}]

`);
		vk.api.messages.send({chat_id: 109, message: `\n✨ +1 игрок [Игроков: ${users.length}]\n`})
	}

	message.user = users.find(x=> x.id === message.senderId);

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}
	
		if (message.text) {
		message.user.floder += 1;
		message.user.captcha_sms += 1;
	}

	if(message.user.ban) return message.send(`🚫 ${message.user.tag}, ваш игровой профиль заблокирован!
	💭 Причина блокировки: ${message.user.bansen}
	⏰ Блокировка "Навсегда"
	
	📜 Ваш профиль был обнулён, а точнее баланс, рейтинг, биткоины, банк, здоровье и еда!`, {attachment: 'photo-176472758_457239677'});

	const command = commands.find(x=> x[0].test(message.text));

	if(message.user.settings.firstmsg)
	{
		
				
message.user = users.find(x=> x.id === message.senderId);
if(message.referralSource && message.referralValue) {
if(message.referralSource && message.referralValue == message.senderId) return message.send(`⚠ Вы не можете активировать своё приглашение.`);
if(message.user.ref) return message.send(`⚠ Вы уже активировали приглашение.`);

var ui = Number(message.referralSource);
var user = await users.find(x=> x.id === ui);
if(!user) return message.send(`⚠ Игрок не найден.`);

user.refs += 1;
vk.api.call("messages.send", { user_id: user.id, random_id: Math.random() * 99999, message: `✅ Ваш @id${message.senderId} (друг) активировал вашу реферальную ссылку, Вам было начисленно 250.000.000.000$` });
user.balance += 250000000000;

message.send(`✅ Вы успешно активировали приглашение [id${user.vk}|друга], Вам было начисленно 250.000.000.000$ `);
message.user.balance += 250000000000;
message.user.ref = message.referralSource;

}
		

await bot(`Привет👋
🎲 Я @botmaryans (Bot MarYans), во мне довольно много развлекательных команд, которые помогут скоротать время и найти новых друзей. Не забудь, пожалуйста, подписаться.

📖 Узнай все мои команды, введи «помощь»

⛑ Полезные ссылки:
🏌 Как добавить бота в беседу - https://vk.com/@botmaryans-kak-dobavit-bota-v-besedu
❓ Ответы на вопросы - https://vk.com/topic-176472758_40491671
🚫 Правила - https://vk.com/topic-176472758_40139093
🏌 Беседа с ботом - https://vk.me/join/AJQ1dwA3Cg2v1czlgzoCy5iV


  `, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "👊🏻 Босс"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "📚 Помощь"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "🎮 Игры"
		},
			"color": "primary"
		}
]
		]
			})
		});

		message.user.settings.firstmsg = false;


		saveUsers();
		return;

	}

	if(!command)
	{
console.log(` ID: ${message.user.uid} Введено сообщение: ${message.text}.`)
console.log(``)
const fs = require('fs');
const date = new Date();
fs.appendFileSync('logoSMS.txt', `[${data()}, ${time()}] ${message.user.prefix.toString().replace(/Пользователь/gi, "Пользователь").replace(/YouTube/gi, "YouTube").replace(/VIP/gi, "VIP").replace(/PREMIUM/gi, "PREMIUM").replace(/Модератор/gi, "Модератор").replace(/Главный Модератор/gi, "Главный Модератор").replace(/Администратор/gi, "Администратор").replace(/Главный Администратор/gi, "Главный Администратор").replace(/Супер.Администратор/gi, "Супер.Администратор").replace(/Владелец/gi, "Владелец")}: ${message.user.tag}, Айди в боте: ${message.user.uid}, Айди чата: ${message.chatId}, Введено сообщение: ${message.text}

`);
fs.appendFileSync(`./logs/logs_ID-${message.user.uid}.txt`, `${data()}, ${time()} | ${message.user.prefix.toString().replace(/Пользователь/gi, "Пользователь").replace(/YouTube/gi, "YouTube").replace(/VIP/gi, "VIP").replace(/PREMIUM/gi, "PREMIUM").replace(/Модератор/gi, "Модератор").replace(/Главный Модератор/gi, "Главный Модератор").replace(/Администратор/gi, "Администратор").replace(/Главный Администратор/gi, "Главный Администратор").replace(/Супер.Администратор/gi, "Супер.Администратор").replace(/Владелец/gi, "Владелец")} | ID: ${message.user.uid} | ID чата: ${message.chatId} | URL: https://vk.com/id${message.user.id} | ${message.text}
`);
vk.api.messages.send({ chat_id: 1395, forward_messages: message.id, message: `\n\n📌 Игрок: ${message.user.tag}\n ✉ Введено сообщение: ${message.text}\n 🔎 Его айди: ${message.user.id}\n🔎 Айди чата: ${message.chatId}\n 🖥 Его айди в боте: ${message.user.uid}\n 🏛 Страна: 🇷🇺 Российская Федерация\n\n` 
})
if(!message.isChat) return message.send(`❌ ${message.user.tag}, команда не найдена!
📚 Посмотри список команд, написав "помощь"

`, {
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": "🗂 Список команд"
                        },
                        "color": "negative"
                    },
                ]
            ]
        })
    }); 

if(message.isChat) return;

}

if(message.user.exp >= 24)
{
message.user.exp = 1;
message.user.level += 1;
}

	message.args = message.text.match(command[0]);
	await command[1](message, bot);
			
if(message.user.captcha_sms >= message.user.limit_sms)
{
var ranom = utils.random(9999);
var szc250 = utils.pick([`Q`,`W`,`E`,`R`,`T`,`Y`,`U`,`I`,`O`,`P`,`A`,`S`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`Z`,`X`,`C`,`V`,`B`,`N`,`M`]);
var szc259 = utils.pick([`Q`,`W`,`E`,`R`,`T`,`Y`,`U`,`I`,`O`,`P`,`A`,`S`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`Z`,`X`,`C`,`V`,`B`,`N`,`M`]);
var szc258 = utils.pick([`Q`,`W`,`E`,`R`,`T`,`Y`,`U`,`I`,`O`,`P`,`A`,`S`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`Z`,`X`,`C`,`V`,`B`,`N`,`M`]);
var szc257 = utils.pick([`Q`,`W`,`E`,`R`,`T`,`Y`,`U`,`I`,`O`,`P`,`A`,`S`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`Z`,`X`,`C`,`V`,`B`,`N`,`M`]);
message.user.captcha_token = `${szc250}${szc259}${szc258}${ranom}${szc257}`;
message.user.captcha_sms = 0;
message.user.check = true;
return bot(`[⛔] Введите "Капча ${captcha}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `Капча ${captcha}`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });

}
			
saveUsers();
console.log(` ID: ${message.user.uid} Введена команда: ${message.text}.`)
console.log(``)
const fs = require('fs');
const date = new Date();
fs.appendFileSync(`./logs/logs_ID-${message.user.uid}.txt`, `${data()}, ${time()} | ${message.user.prefix.toString().replace(/Пользователь/gi, "Пользователь").replace(/YouTube/gi, "YouTube").replace(/VIP/gi, "VIP").replace(/PREMIUM/gi, "PREMIUM").replace(/Модератор/gi, "Модератор").replace(/Главный Модератор/gi, "Главный Модератор").replace(/Администратор/gi, "Администратор").replace(/Главный Администратор/gi, "Главный Администратор").replace(/Супер.Администратор/gi, "Супер.Администратор").replace(/Владелец/gi, "Владелец")} | ID: ${message.user.uid} | ID чата: ${message.chatId} | URL: https://vk.com/id${message.user.id} |  ${message.args[0]}
`);
vk.api.messages.send({ chat_id: 109, forward_messages: message.id, message: `\n\n📌 Игрок: ${message.user.tag}\n ✉ Написал: ${message.args[0]}\n 🔎 Его айди: ${message.user.id}\n🔎 Айди чата: ${message.chatId}\n 🖥 Его айди в боте: ${message.user.uid}\n 💰 Его баланс: ${message.user.balance}$\n 🏛 Страна: 🇷🇺 Российская Федерация\n\n` 
})
});

const cmd = {
hear: (p, f) => {
commands.push([p, f]);
}
}

cmd.hear(/^(?:помощь|команды|@botmaryans Помощь|help|commands|cmds|menu|начать|start|📚 Помощь|Bot MarYans 📚 Помощь|назад|🗂 Список команд)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `помощь`
	message.user.astroen -= 1;
	if(message.user.healths < 1) return bot(`📛|Доступ запрещен от болезни`)
	if(message.user.hunger < 1) return bot(`Ты умер от голода`)
message.user.foolder += 1;
return message.send(`${message.user.tag}, список команд:

🔥 Мой профиль:
⠀⠀👤 Профиль
⠀⠀🔖 Ник [новый ник]
⠀⠀👑 Рейтинг
⠀⠀🙎‍♂ Президент
⠀⠀🏦 Банк
⠀⠀⚔ Клан
⠀⠀❤ Брак
⠀⠀📜 Квесты
⠀⠀✈ Перелёт
⠀⠀🎁 Бонус
⠀⠀🛍 Магазин
⠀⠀📩 Смс - отправляй игрокам СМС!
⠀⠀🤝 Передать - перевод денег
⠀⠀🍀 Подарок - бесплатные подарки!

💰 Заработок:
⠀⠀📷 Ютуб - создай свой канал!
⠀⠀📱 Тикток - заработай на видео!
⠀⠀💼 Бизнес
  &#4448;🐠 Дайвинг
⠀⠀👨‍💻 Работа
⠀⠀💱 Курс
  &#4448;🏡 Аренда - заработок на имуществе
  &#4448;✏ Рисунок
⠀⠀🏙 Город - создай свой город!⠀

🦊 Питомцы
🍹 Зелья
💯 Взлом админки

🔔 Уведомления [вкл/выкл]
⌨ Кнопки [текст] [текст] [текст]
🆘 Репорт

🌐 Разное:
  &#4448;🗣 Пид - правда или действия
⠀⠀🍷 Бутылочка
  &#4448;📷 Фото [фраза]
⠀⠀🔮 Шар [фраза]
⠀⠀📟 Реши [пример]
⠀⠀💬 Выбери [фраза] или [фраза2]
⠀⠀📊 Инфа [фраза]
⠀⠀🤣 Анекдот
⠀⠀💘 Совместимость
  &#4448;🔥 Полезное
  &#4448;📒 Обучение
  &#4448;🇺🇲 Переведи [текст]
⠀⠀🔄 Переверни [текст]
   &#4448;🐬 Хайп текст [текст]
   &#4448;🎀 Оцени [картинка]
   &#4448;☁ Погода [город]
   &#4448;📺 Гиф
   &#4448;⏰ Время
⠀⠀⭐ Донат

🎮 Игры:
⠀⠀💰 Азино [сумма]
   &#4448;🎲 Фишки [сумма]
   &#4448;🎲 Покер [сумма]
⠀⠀🎰 Казино [сумма]
⠀⠀🚕 Таксовать
  &#4448;🕵 Детектив
  &#4448;📦 Коробки
  &#4448;🗳 Бочка
⠀⠀🔦 Ограбить
⠀⠀🔐 Хакнуть
   &#4448;🅰 Буква [от й до ю]
   &#4448;🇺🇲 Анлгбуква [от q до m]
⠀⠀🔑 Сейф [число]
   &#4448;🏛 бигсейф [число]
⠀⠀📦 Кейсы
⠀⠀🎲 Кубик [число 1-6]
⠀⠀🕳 Монетка [орел/решка]
   &#4448;🎫 Лотерея
   &#4448;🌲 Поход
⠀⠀💹 Трейд [вверх/вниз] [сумма]
   &#4448;🥛 Стаканчик [сумма]
⠀⠀🏹 Босс
⠀⠀🏁 Гонка
   &#4448;🔫 Рулетка
   &#4448;🏹 Охота
   &#4448;🍂 Копать [уголь/железо/золото/алмазы/материю]`,
        {
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "👊🏻 Босс"
		},
			"color": "secondary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "🏁 Гонка"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "🎁 Бонус"
		},
			"color": "secondary"
		}],
		[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "🎮 Игры"
		},
			"color": "negative"
		}],
	[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "📷 Ютуб"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "📱 Тикток"
		},
			"color": "secondary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "🏙 Город"
		},
			"color": "primary"
		}]
		]
			})
		});
});

///Города

cmd.hear(/^(?:Город|🏙 Город)$/i, async (message, bot) => {
if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null){
return message.send(`🏙 ${message.user.tag}, у Вас нет города! Свой город можно развивать и зарабатывать на нём, собирая налоги!

🆕 Город создать [название] — стоимость 10.000.000.000 $`);
}
else{
return message.send(`🏙 ${message.user.tag}, город «${message.user.qwe32}».
👥 Население: ${utils.sp(message.user.qwe)} чел.

💣 Нападайте на чужие города: «город война» - пока не работает 
🎢 Стройте здания, чтобы улучшать город: «город здания»
🎬 Организовывайте события: «город события»
✅ Казна пополнилась налогами. Напиши: «город налог», чтобы забрать`, {
        attachment: `${message.user.qwe34}`,
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": "💷 Налоги"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"3\"}",
                        "label": "🏗 Здания"
                        },
                        "color": "secondary"
                    },
                ],
				[
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"3\"}",
                        "label": "🎟 События"
                        },
                        "color": "secondary"
                    },
					{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"3\"}",
                        "label": "💣 Война"
                        },
                        "color": "negative"
                    },
                ]
            ]
        })
    });
}
});





cmd.hear(/^(?:💷 Налоги|город налог)$/i, async (message, bot) => {
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);	
    if(message.user.qwe21 >= 0) return message.send(`💸 ${message.user.tag}, налогов ещё нет! Подождите ${displayTime(message.user.qwe21)} ${smileerror}`); 

	message.user.qwe21 = 6000;

	message.user.balance += message.user.qwe31;
	message.user.qwe31 = 0;

	return message.send(`💸 ${message.user.tag}, собран налог в размере ${utils.sp(message.user.qwe31)} $! ${smilesuccess}`);
	message.user.qwe31 = 0;

	return;
});

cmd.hear(/^(?:Город создать)\s(.*)$/i, async (message, bot) => {
  if(message.user.qwe32 != null || typeof message.user.qwe32 != "undefined" && typeof message.user.qwe32 != "object") return message.send(`🏙 ${message.user.tag}, у вас уже есть город!`);
  if(message.user.balance < 10000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
  message.user.balance -= 10000000000;
            message.user.qwe = 1000;
            message.user.qwe2 = 0;
            message.user.qwe3 = 0;
			message.user.qwe4 = false;
			message.user.qwe5 = 0;
            message.user.qwe6 = 0;
            message.user.qwe7 = 0;
			message.user.qwe8 = false;
			message.user.qwe9 = 0;
            message.user.qwe10 = 0;
            message.user.qwe11 = 0;
			message.user.qwe12 = false;
			message.user.qwe13 = 0;
            message.user.qwe14 = 0;
            message.user.qwe15 = 0;
			message.user.qwe17 = false;
			message.user.qwe18 = 0;
            message.user.qwe19 = 0;
            message.user.qwe20 = 0;
			message.user.qwe21 = false;
			message.user.qwe22 = 0;
			message.user.qwe23 = 0;
			message.user.qwe24 = 0;
			message.user.qwe25 = 0;
			message.user.qwe26 = 0;
			message.user.qwe27 = 0;
			message.user.qwe28 = 0;
			message.user.qwe29 = 0;
			message.user.qwe30 = 0;
			message.user.qwe31 = 3200000;
			message.user.qwe33 = null;
			message.user.qwe35 = ``;
			message.user.qwe36 = ``;
            message.user.qwe32 = message.args[1];
            message.user.qwe34 = `photo-176472758_457239626`;
			message.user.qwe40 = 0;
			message.user.qwe41 = 0;
			message.user.qwe42 = 0;
			message.user.qwe43 = 0;
			message.user.qwe44 = 0;
			message.user.qwe45 = 0;
			message.user.qwe46 = 0;
			message.user.qwe47 = 0;
			message.user.qwe48 = 0;
return message.send(`🏙 ${message.user.tag}, поздравляем с созданием города! 🎉 Теперь позаботьтесь о его населении. Всю информацию Вы найдете по команде «город»

🏷 Сменить название города: «город название [новое название]»`);
});

cmd.hear(/^(?:город война|💣 Война)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	return message.send(`💣 ${message.user.tag}, нападай на чужие города, разрушая их, как в одиночку, так и с союзниками!

Ваша техника:
🚛 Танк [${message.user.qwe40}/10] — 25.000.000.000 $
Купить: «город техника 1»

🛳 Морской флот [${message.user.qwe41}/5] — 70.000.000.000 $
Купить: «город техника 2»

✈ Истребитель [${message.user.qwe42}/3] — 150.000.000.000 $
Купить: «город техника 3»

🚀 Ядерные бомбы [${message.user.qwe43}/1] — 300.000.000.000 $
Купить: «город техника 4» 

⚔ Напасть на город: «город война [ID или ссылка игрока]»
🎏 Не забудьте построить в своём городе башни и стены, которые будут защищать от атак.`, {attachment: 'photo-176472758_457239666'})
});

cmd.hear(/^(?:город техника 1)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe40 > 9) return message.send(`🏙 ${message.user.tag}, вы уже купили 10 танков.`)
	if(message.user.balance< 25000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 25000000000;
	message.user.qwe40 += 1;
	message.user.qwe4011 += 1;
	return message.send(`🏙 ${message.user.tag}, вы купили "Танки"!`, {attachment: 'photo-176472758_457239662'})
});

cmd.hear(/^(?:город техника 2)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe41 > 4) return message.send(`🏙 ${message.user.tag}, вы уже купили 5 морских флототов.`)
	if(message.user.balance< 70000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 70000000000;
	message.user.qwe41 += 1;
	message.user.qwe4011 += 1;
	return message.send(`🏙 ${message.user.tag}, вы купили "Морской флот"!`, {attachment: 'photo-176472758_457239663'})
});

cmd.hear(/^(?:город техника 3)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe42 > 2) return message.send(`🏙 ${message.user.tag}, вы уже купили 3 истребителя.`)
	if(message.user.balance< 150000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 150000000000;
	message.user.qwe42 += 1;
	message.user.qwe4011 += 1;
	return message.send(`🏙 ${message.user.tag}, вы купили "Истребитель"!`, {attachment: 'photo-176472758_457239664'})
});

cmd.hear(/^(?:город события|🎟 События)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	return message.send(`🎟 ${message.user.tag}, мероприятия привлекают новых жителей в Ваш город. 
	Список событий:

1. 🎎 Ярмарка в парке — 1.000.000.000 $
2. 🏺 Выставка в музее — 10.000.000.000 $
3. 🕺🏻 Премьера спектакля — 25.000.000.000 $
4. 🎬 Прокат нового фильма — 60.000.000.000 $
5. 🏖 Открытие курортного сезона — 100.000.000.000 $

🎈 Для организации напиши: город событие [номер]`)
});

cmd.hear(/^(?:город событие 1)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe9 < 1) return message.send(`🏙 ${message.user.tag}, у вас нету парка!`);
	if(message.user.balance< 1000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 1000000000;
	message.user.qwe += 1943;
	return message.send(`🏙 ${message.user.tag}, в городе прошло событие «Ярмарка в парке»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239659'})
});

cmd.hear(/^(?:город событие 2)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe11 < 1) return message.send(`🏙 ${message.user.tag}, у вас нету музея!`);
	if(message.user.balance< 10000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 10000000000;
	message.user.qwe += 1943;
	return message.send(`🏙 ${message.user.tag}, в городе прошло событие «Выставка в музее»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239657'})
});

cmd.hear(/^(?:город событие 3)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe14 < 1) return message.send(`🏙 ${message.user.tag}, у вас нету кинотеатра!`);
	if(message.user.balance< 60000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 60000000000;
	message.user.qwe += 1943;
	return message.send(`🏙 ${message.user.tag}, в городе прошло событие «Прокат нового фильма»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239658'})
});

cmd.hear(/^(?:город событие 4)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe20 < 1) return message.send(`🏙 ${message.user.tag}, у вас нету отеля!`);
	if(message.user.balance< 100000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 100000000000;
	message.user.qwe += 2368;
	return message.send(`🏙 ${message.user.tag}, в городе прошло событие «Открытие курортного сезона»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239660'})
});

cmd.hear(/^(?:город здания|🏗 Здания)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	return message.send(`🏙 ${message.user.tag}, список зданий для постройки:

1. 🏬 Торговый центр [${message.user.qwe18}/5] — 120.000.000.000 $
2. ☕ Кафе [${message.user.qwe15}/16] — 15.000.000.000 $
3. 📽 Кинотеатр [${message.user.qwe14}/4] — 10.000.000.000 $
4. 🏥 Больница [${message.user.qwe29}/6] — 20.000.000.000 $
5. 🎠 Аттракционы [${message.user.qwe13}/4] — 250.000.000.000 $
6. 🏦 Банк [${message.user.qwe6}/5] — 100.000.000.000 $
7. 🏤 Почта [${message.user.qwe5}/6] — 5.000.000.000 $
8. 🏫 Школа [${message.user.qwe2}/11] — 1.000.000.000 $
9. 🏭 Завод [${message.user.qwe7}/4] — 50.000.000.000 $
10. 🅿 Парковка [${message.user.qwe3}/6] — 1.000.000.000 $
11. ⛲ Парк [${message.user.qwe9}/5] — 10.000.000.000 $
12. 🎭 Театр [${message.user.qwe10}/3] — 30.000.000.000 $
13. ⚱ Музей [${message.user.qwe11}/3] — 15.000.000.000 $
14. ⛪ Церковь [${message.user.qwe19}/2] — 20.000.000.000 $
15. 💒 Отель [${message.user.qwe20}/6] — 70.000.000.000 $
16. 🏢 Бизнес-центр [${message.user.qwe22}/4] — 100.000.000.000 $
17. 🏡 Жилой дом [${message.user.qwe23}/21] — 20.000.000.000 $
18. ✈ Аэропорт [${message.user.qwe24}/3] — 2.000.000.000.000 $
19. 🚉 Ж/Д станция [${message.user.qwe25}/6] — 200.000.000.000 $
20. 🧪 Инфекционный центр [${message.user.qwe26}/6] — 5.000.000.000 $
21. 🔫 Оборонительная башня [${message.user.qwe27}/51] — 1.000.000.000 $
22. 🥅 Защитные стены [${message.user.qwe28}/11] — 10.000.000.000 $

Каждая постройка увеличивает население!
🚧 Для постройки напиши: город построить [номер]`, {attachment: 'photo-176472758_457239632'})
});

cmd.hear(/^(?:Город здания 1|город построить 1)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe18 > 4) return message.send(`🏙 ${message.user.tag}, торговыйе центры построины.`)
	if(message.user.balance< 120000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 120000000000;
	message.user.qwe18 += 1;
	message.user.qwe += 3168;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построен «Торговый центр»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239638'})
});

cmd.hear(/^(?:Город здания 2|город построить 2)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe15 > 15) return message.send(`🏙 ${message.user.tag}, кафешки построины.`)
	if(message.user.balance< 15000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 15000000000;
	message.user.qwe15 += 1;
	message.user.qwe += 2481;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построено «Кафе»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239649'})
});

cmd.hear(/^(?:Город здания 3|город построить 3)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe14 > 3) return message.send(`🏙 ${message.user.tag}, кинотеатры построины.`)
	if(message.user.balance< 10000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 10000000000;
	message.user.qwe14 += 1;
	message.user.qwe += 2159;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построен «Кинотеатр»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239650'})
});

cmd.hear(/^(?:Город здания 4|город построить 4)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe29 > 5) return message.send(`🏙 ${message.user.tag}, больницы построины.`)
	if(message.user.balance< 20000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 20000000000;
	message.user.qwe29 += 1;
	message.user.qwe += 1740;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построена «Больница»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239639'})
});

cmd.hear(/^(?:Город здания 5|город построить 5)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe13 > 3) return message.send(`🏙 ${message.user.tag}, аттракционы построины.`)
	if(message.user.balance< 250000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 250000000000;
	message.user.qwe13 += 1;
	message.user.qwe += 1249;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построены «Аттракционы»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239648'})
});

cmd.hear(/^(?:Город здания 6|город построить 6)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe6 > 3) return message.send(`🏙 ${message.user.tag}, банки построины.`)
	if(message.user.balance< 100000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 100000000000;
	message.user.qwe6 += 1;
	message.user.qwe += 1469;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построен «Банк»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239634'})
});

cmd.hear(/^(?:Город здания 7|город построить 7)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe5 > 3) return message.send(`🏙 ${message.user.tag}, почты построины.`)
	if(message.user.balance< 5000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 5000000000;
	message.user.qwe5 += 1;
	message.user.qwe += 1814;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построена «Почта»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239635'})
});

cmd.hear(/^(?:Город здания 8|город построить 8)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe2 > 10) return message.send(`🏙 ${message.user.tag}, школы построины.`)
	if(message.user.balance< 1000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 1000000000;
	message.user.qwe2 += 1;
	message.user.qwe += 2175;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построена «Школа»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239633'})
});

cmd.hear(/^(?:Город здания 9|город построить 9)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe7 > 3) return message.send(`🏙 ${message.user.tag}, заводы построины.`)
	if(message.user.balance< 50000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 50000000000;
	message.user.qwe7 += 1;
	message.user.qwe += 1999;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построен «Завод»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239637'})
});

cmd.hear(/^(?:Город здания 10|город построить 10)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe3 > 5) return message.send(`🏙 ${message.user.tag}, парковковки построины.`)
	if(message.user.balance< 1000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 1000000000;
	message.user.qwe3 += 1;
	message.user.qwe += 1929;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построена «Парковка»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239636'})
});

cmd.hear(/^(?:Город здания 11|город построить 11)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe9 > 4) return message.send(`🏙 ${message.user.tag}, парки построины.`)
	if(message.user.balance< 10000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 10000000000;
	message.user.qwe9 += 1;
	message.user.qwe += 2400;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построен «Парк»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239640'})
});

cmd.hear(/^(?:Город здания 12|город построить 12)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe10 > 2) return message.send(`🏙 ${message.user.tag}, театры построины.`)
	if(message.user.balance< 30000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 30000000000;
	message.user.qwe10 += 1;
	message.user.qwe += 1264;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построен «Театр»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239651'})
});

cmd.hear(/^(?:Город здания 13|город построить 13)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe11 > 2) return message.send(`🏙 ${message.user.tag}, музеи построины.`)
	if(message.user.balance< 15000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 15000000000;
	message.user.qwe11 += 1;
	message.user.qwe += 2720;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построен «Музей»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239652'})
});

cmd.hear(/^(?:Город здания 14|город построить 14)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe19 > 1) return message.send(`🏙 ${message.user.tag}, церкови построины.`)
	if(message.user.balance< 20000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 20000000000;
	message.user.qwe19 += 1;
	message.user.qwe += 2810;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построена «Церковь»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239642'})
});

cmd.hear(/^(?:Город здания 15|город построить 15)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe20 > 5) return message.send(`🏙 ${message.user.tag}, отели построины.`)
	if(message.user.balance< 70000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 70000000000;
	message.user.qwe20 += 1;
	message.user.qwe += 2941;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построен «Отель»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239643'})
});

cmd.hear(/^(?:Город здания 16|город построить 16)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe22 > 3) return message.send(`🏙 ${message.user.tag}, бизнес-центры построины.`)
	if(message.user.balance< 70000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 70000000000;
	message.user.qwe22 += 1;
	message.user.qwe += 3285;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построен «Бизнес-центр»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239644'})
});

cmd.hear(/^(?:Город здания 17|город построить 17)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe23 > 20) return message.send(`🏙 ${message.user.tag}, жилые дома построины.`)
	if(message.user.balance< 20000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 20000000000;
	message.user.qwe23 += 1;
	message.user.qwe += 4790;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построен «Жилой дом»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239653'})
});

cmd.hear(/^(?:Город здания 18|город построить 18)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe24 > 2) return message.send(`🏙 ${message.user.tag}, аэропорты построины.`)
	if(message.user.balance< 2000000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 2000000000000;
	message.user.qwe24 += 1;
	message.user.qwe += 5819;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построен «Аэропорт»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`)
});

cmd.hear(/^(?:Город здания 19|город построить 19)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe25 > 5) return message.send(`🏙 ${message.user.tag}, Ж/Д станцыи построины.`)
	if(message.user.balance< 200000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 200000000000;
	message.user.qwe25 += 1;
	message.user.qwe += 5219;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построена «Ж/Д станция»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239645'})
});

cmd.hear(/^(?:Город здания 20|город построить 20)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe26 > 5) return message.send(`🏙 ${message.user.tag}, инфекционныйе центры построины.`)
	if(message.user.balance< 5000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 5000000000;
	message.user.qwe26 += 1;
	message.user.qwe += 6173;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построена «Инфекционный центр»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`)
});

cmd.hear(/^(?:Город здания 21|город построить 21)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe27 > 50) return message.send(`🏙 ${message.user.tag}, оборонительные башни построины.`)
	if(message.user.balance< 1000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 1000000000;
	message.user.qwe27 += 1;
	message.user.qwe += 1263;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построена «Оборонительная башня»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239654'})
});

cmd.hear(/^(?:Город здания 22|город построить 22)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(typeof message.user.qwe32 == "undefined" || message.user.qwe32 == null) return message.send(`🏙 ${message.user.tag}, у вас нету города!
	🌈 команда: «Город создать [название]»`);
	if(message.user.qwe28 > 10) return message.send(`🏙 ${message.user.tag}, защитные стены построины.`)
	if(message.user.balance< 10000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
    message.user.balance -= 10000000000;
	message.user.qwe28 += 1;
	message.user.qwe += 1263;
	return message.send(`🏙 ${message.user.tag}, в городе было успешно построены «Защитные стены»!
👥 Население стало: ${utils.sp(message.user.qwe)} чел.`, {attachment: 'photo-176472758_457239656'})
});

cmd.hear(/^(?:Капча)\s(.*)/i, async (message, bot) => {
	
if(message.args[1] != message.user.captcha_token) return bot(`[⛔] Не правильный код от капчи.`, {attachment: 'photo-176472758_457239560'});
let ranom = utils.random(9999);
const szc250 = utils.pick([`Q`,`W`,`E`,`R`,`T`,`Y`,`U`,`I`,`O`,`P`,`A`,`S`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`Z`,`X`,`C`,`V`,`B`,`N`,`M`]);
const szc259 = utils.pick([`Q`,`W`,`E`,`R`,`T`,`Y`,`U`,`I`,`O`,`P`,`A`,`S`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`Z`,`X`,`C`,`V`,`B`,`N`,`M`]);
const szc258 = utils.pick([`Q`,`W`,`E`,`R`,`T`,`Y`,`U`,`I`,`O`,`P`,`A`,`S`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`Z`,`X`,`C`,`V`,`B`,`N`,`M`]);
const szc257 = utils.pick([`Q`,`W`,`E`,`R`,`T`,`Y`,`U`,`I`,`O`,`P`,`A`,`S`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`Z`,`X`,`C`,`V`,`B`,`N`,`M`]);

if(message.args[1] = message.user.captcha_token){
message.user.check = false;
message.user.captcha_sms = 0;
message.user.captcha_token = `${szc250}${szc259}${szc258}${ranom}${szc257}`;
message.user.number_captcha += 1;
}
return bot(`✅ Капча пройдена!`, {attachment: 'photo-176472758_457239561'});
});

cmd.hear(/^(?:✅ Я не робот!)$/i, async (message, bot) => {
let ranom = utils.random(9999);
const szc250 = utils.pick([`Q`,`W`,`E`,`R`,`T`,`Y`,`U`,`I`,`O`,`P`,`A`,`S`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`Z`,`X`,`C`,`V`,`B`,`N`,`M`]);
const szc259 = utils.pick([`Q`,`W`,`E`,`R`,`T`,`Y`,`U`,`I`,`O`,`P`,`A`,`S`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`Z`,`X`,`C`,`V`,`B`,`N`,`M`]);
const szc258 = utils.pick([`Q`,`W`,`E`,`R`,`T`,`Y`,`U`,`I`,`O`,`P`,`A`,`S`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`Z`,`X`,`C`,`V`,`B`,`N`,`M`]);
const szc257 = utils.pick([`Q`,`W`,`E`,`R`,`T`,`Y`,`U`,`I`,`O`,`P`,`A`,`S`,`D`,`F`,`G`,`H`,`J`,`K`,`L`,`Z`,`X`,`C`,`V`,`B`,`N`,`M`]);

if(message.user.captcha_token = message.user.captcha_token){
message.user.check = false;
message.user.captcha_sms = 0;
message.user.captcha_token = `${szc250}${szc259}${szc258}${ranom}${szc257}`;
message.user.number_captcha += 1;
}
return bot(`✅ Капча пройдена!`, {attachment: 'photo-176472758_457239561'});
});

cmd.hear(/^(?:◀ В главное меню)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `◀ В главное меню`
	message.user.astroen -= 1;
	if(message.user.healths < 1) return bot(`📛|Доступ запрещен от болезни`)
	if(message.user.hunger < 1) return bot(`Ты умер от голода`)
message.user.foolder += 1;
return message.send(`${message.user.tag}, возвращение в главное меню...`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{\"button\": \"1\"}", 
	"label": "💍 Семьи" 
	}, 
	"color": "secondary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🎮 Игры" 
	}, 
	"color": "secondary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🔥 Полезное" 
	}, 
	"color": "secondary" 
	}], 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🛑 Каналы" 
	}, 
	"color": "secondary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🛡 Клан помощь" 
	}, 
	"color": "secondary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": "🛒 Магазин" 
}, 
"color": "secondary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "📺 Бот" 
	}, 
	"color": "secondary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🍀 Развлекательные" 
	}, 
	"color": "secondary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "👊🏻 Босс" 
	}, 
	"color": "secondary" 
	},
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "📒 Обучение" 
	}, 
	"color": "secondary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "📝 Передачи" 
	}, 
	"color": "secondary" 
	},
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "👑 Топы" 
	}, 
	"color": "secondary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "💡 Разное" 
	}, 
	"color": "primary" 
	},
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "✏ Рисунок" 
	}, 
	"color": "primary" 
	},
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🐠 Дайвинг" 
	}, 
	"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "📡 Соц помощь" 
	}, 
	"color": "primary" 
	},
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🎡 Колесо" 
	}, 
	"color": "negative" 
	},
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "📷 ТикТок" 
	}, 
	"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🏛 Город" 
	}, 
	"color": "primary" 
	}],
] 
}) 
});
});



cmd.hear(/^(?:синтез|скажи)\s(.*)/i, async (message) => {
if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
message.user.captcha_sms += 1;

message.user.foolder += 1;
message.user.floder += 1;
message.user.satasti -= 1;
message.user.radosti -= 1;
message.user.log = `скажи`
message.user.astroen -= 1;
message.user.foolder += 1;
return message.sendAudioMessage(`https://tts.voicetech.yandex.net/generate?text=${message.args[1]}&format=mp3&lang=ru-RU&speaker=ermil&speed=1&key=3b141899-4097-45c6-a00b-d449812e1ffa&emotion=Usual`);
});

cmd.hear(/^(?:социальные бизнесы|социальные бизнес)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Социальный бизнесы:
${message.user.businesses5 === 1 ? '🔸' : '🔹'} 1. Facebook - 6.000.000.000$
⠀ ⠀ ⠀ Прибыль: 40.000.000$/час
${message.user.businesses5 === 2 ? '🔸' : '🔹'} 2. Instagram - 10.000.000.000$
⠀ ⠀ ⠀ Прибыль: 70.000.000$/час
${message.user.businesses5 === 3 ? '🔸' : '🔹'} 3. Google - 50.000.000.000$
⠀ ⠀ ⠀ Прибыль: 100.000.000$/час
${message.user.businesses5 === 4 ? '🔸' : '🔹'} 4. Яндекс - 100.000.000.000$
⠀ ⠀ ⠀ Прибыль: 250.000.000$/час
${message.user.businesses5 === 5 ? '🔸' : '🔹'} 5. ВКонтакте - 180.000.000.000$
⠀ ⠀ ⠀ Прибыль: 399.000.000$/час

Для покупки введите "Cоциальные бизнес [номер]"`);

	const sell = businesses5.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.businesses5) return bot(`у вас уже есть социальный безнес (${businesses5[message.user.businesses5 - 1].name}), введите "соц_бизнес"`, {attachment: `${businesses5[message.user.businesses5 - 1].att}`});

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= message.args[1])
	{
		message.user.balance -= sell.cost;
		message.user.businesses5 = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`, {attachment: `${businesses5[message.user.businesses5 - 1].att}`});
	}
});

cmd.hear(/^(?:соц бизнес)\s(?:снять)$/i, async (message, bot) => {
	if(!message.user.businesses5) return bot(`у Вас нет социального бизнеса! ${smileerror}
Для выбора бизнеса отправьте «соц Бизнесы»`);
	if(!message.user.biz5) return bot(`у вас нет денег на счёте социального бизнеса. ${smileerror}`);


	var cashlvlbiz = message.user.biz5;
	message.user.bagibusnese -= cashlvlbiz;

	message.user.balance += cashlvlbiz;
	message.user.biz5 = 0;

	bot(`вы сняли со счёта своего социального бизнеса ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`);
	message.user.biz5 = 0;

	return;
});

cmd.hear(/^(?:соц бизнес)$/i, async (message, bot) => {
	if(!message.user.businesses5) return bot(`у Вас нет социального бизнеса! ${smileerror}
Для выбора бизнеса отправьте «соц Бизнесы»`);
	const biz5 = businesses5.find(x=> x.id === message.user.businesses5);
	var lvlcash = biz5.earn
var updprice2 = Math.floor(businesses5[message.user.businesses5 - 1].cost * 2)
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.healths -= 1;
	message.user.astroen -= 1;
	message.user.hunger -= 1;
	let text = ``;

	text += `Cтатистика "${biz5.name}":\n`;
	text += `💸 Прибыль: ${utils.sp(lvlcash)}$/час\n`;
	text += `💰 На счёте: ${utils.sp(message.user.biz5)}$\n`;
	text += `👥 Всего соотрудников: ${utils.sp(message.user.kolovocelovek)}\n`;
	if(message.user.bagibusnese) text += `\n⚠ У бизнеса появились баги чтобы их исправить надо вызвать программистов командой "Убрать баги"\n ⚠ если не убрать баги то прибыль будет забираться прибыль.\n`;
	return message.send(`${message.user.tag}, Ваш соцеальный бизнес: \n${text}`, {attachment: `${businesses5[message.user.businesses5 - 1].att}`});
});

cmd.hear(/^(?:соц помощь|📡 Соц помощь)$/i, async (message, bot) => {
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	await bot(`Команды социальных бизнесов:
	📡 Соц бизнес
	⚠ Убрать баги
	💰 Соц бизнес снять
	👥 Нанять людей соц (коло-во)
	💻 Социальные бизнесы
`);
});

cmd.hear(/^(?:Убрать баги|Убрать баг)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(message.user.bagibusnese < 1) return bot(`📛|С сервером всё в порядке!`)
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	message.user.bagibusnese = 0;
	let ping = utils.random(1000000);
	message.user.balance -= `${ping}`;
	const szc25 = utils.pick([`🚨 Дата-центр загорелся!\n 🚒 Пожарные едут не волнуйтесь \n🔔 Потушили пожар`,`✅ Там очень мало чего чинить!`,`🚗 Щас ускорим ваш сайт, улучшим защиту и исправим баг.`]);
	await bot(`⏳ Работники едут!`);
	await bot(`${szc25}`);
	await bot(`🔧 Чинем, чинем...`);
	await bot(`📝 Мы починили всё с вас списано: ${ping}`);
});

cmd.hear(/^(?:Нанять людей соц)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(message.user.kolovocelovek >= 75) return bot(`📛|Очень много соотрудников`)
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.args[1] > 75) return bot(`📛|Очень много соотрудников`);
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.kolovocelovek += message.args[1];

		return bot(`👥 Вы наняли: ${utils.sp(message.args[1])} за ${utils.sp(message.args[1])}$`);
	}
});


cmd.hear(/^(?:помощь)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.args[1] = message.args[1].toLowerCase();

	if(message.args[1] === 'переверни')
	{
		return message.send(`Команда "Переверни" пишет ваш текст вверх ногами (Поддерживаются цифры, буквы латинского и кириллического алфавита, а также некоторые символы)`);
	}

	if(message.args[1] === 'шар')
	{
		return message.send(`Команда "Шар" используя магию рандома выводит случайное сообщение.`);
	}

	if(message.args[1] === 'инфа')
	{
		return message.send(`Команда "Инфа" случайным образом присылает шанс чего-либо. Также можно использовать команды "Шанс" или "Вероятность"`);
	}

	if(message.args[1] === 'выбери')
	{
		return message.send(`Команда "Выбери" случайным образом выбирает один из двух предложенных вариантов.`);
	}

	if(message.args[1] === 'казино')
	{
		return message.send(`Команда "Казино" случайным образом умножает вашу ставку (Могут выпасть множители х0, х0.25, х0.5, x0.75, х1, х2, х5, х50). Чтобы поставить всю сумму введите "Казино все" или "Казино вабанк"`);
	}

	if(message.args[1] === 'кубик')
	{
		return message.send(`Команда "Кубик" сравнивает ваше число со случайным от 1 до 6, если вы угадали, то получаете вознаграждение. Также можно использовать "Куб"`);
	}

	if(message.args[1] === 'трейд')
	{
		return message.send(`Команда "Трейд" - симулятор бинарных опционов. Введите "Трейд вверх (сумма)" если думаете, что курс валюты будет увеличиваться, или "Трейд вниз (сумма)" если будет уменьшаться.`);
	}

	if(message.args[1] === 'стаканчик')
	{
		return message.send(`С помощью команды "Стаканчик" вы можете сыграть в аналог игры "Напёрстки". Чтобы играть введите "Стаканчик [1-3] [сумма]".`);
	}

	if(message.args[1] === 'работа')
	{
		return message.send(`С помощью команды "Работа" вы можете устроиться на одну из работ. Чтобы отрыть новые профессии, вам нужно отработать определённое кол-во игровых недель (Команда "Работать"). Для увольнения с работы введите "Уволиться".`);
	}

	if(message.args[1] === 'бизнес')
	{
		return message.send(`Владея бизнесом, вы можете зарабатывать немало денег:
		Бизнесы [номер] - купить бизнес
		Бизнес - ваш бизнес
		Бизнес снять - снять деньги со счёта бизнеса
		Продать бизнес - продажа бизнеса`);
	}

	if(message.args[1] === 'реши')
	{
		return message.send(`Команда "Реши" решает ваш пример (Реши 5 + 5).
		Команда умеет:
		Складывать (+)
		Вычитать (-)
		Умножать (*)
		Делить (/)`);
	}

	if(message.args[1] === 'курс')
	{
		return message.send(`С помощью команды "Курс" можно узнать курс Биткоина на данный момент.`);
	}

	if(message.args[1] === 'профиль')
	{
		return message.send(`Команда "Профиль" выводит вашу игровую статистику.`);
	}

	if(message.args[1] === 'баланс')
	{
		return message.send(`Команда "Баланс" выводит кол-во валюты на вашем аккаунте.`);
	}

	if(message.args[1] === 'банк')
	{
		return message.send(`При вводе команды "Банк" (без параметров) выводится ваша сумма на счёте. Для того чтобы положить на счёт деньги введите "Банк [сумма]" (Максимум 250.000.000.000$). Чтобы забрать деньги из банка введите "Банк снять/взять [сумма]".
		Сумма в банке увеличивается каждый час (больше сумма - больше прибыль).`);
	}

	if(message.args[1] === 'рейтинг')
	{
		return message.send(`Пустая команда "Рейтинг" (без параметров) выводит ваше кол-во рейтинга (также можно узнать в профиле). При указании параметра (любое число) вы купите данное кол-во единиц рейтинга (👑1 = 250.000.000$). Рейтинг влияет на ваше положение в топе.`);
	}

	if(message.args[1] === 'ник')
	{
		return message.send(`С помощью команды "Ник" можно выбрать себе ник длинною до 15 символов. Также, ник можно делать кликабельным/некликабельным в топе "Ник вкл" и "Ник выкл"`);
	}

	if(message.args[1] === 'магазин')
	{
		return message.send(`Команда "Магазин" выводит список категорий товаров, которые доступны для покупки.`);
	}

	if(message.args[1] === 'продать')
	{
		return message.send(`С помощью команды "Продать" вы можете продать любой предмет (Машину, дом, квартиру, телефон, яхту, самолет, вертолет, биткоин, ферму).`);
	}

	if(message.args[1] === 'передать')
	{
		return message.send(`Команда "Передать" переводит указанную вами сумму любому игроку (Передать ${message.user.uid} 1000).`);
	}

	if(message.args[1] === 'топ')
	{
		return message.send(`Команда "Топ" выводит 10 игроков с самым большим рейтингом.`);
	}

	if(message.args[1].includes('брак'))
	{
		return message.send(`Используя команды "Брак", "Браки", "развод", вы можете жениться/выходить замуж/разводиться.
		Брак [id] - сделать предложение
		Браки - список предложений
		Развод - ...`);
	}

	if(message.args[1] === 'дата')
	{
		return message.send(`Команда "Дата" выводит дату регистрации человека в боте. Можно использовать id человека.`);
	}

	if(message.args[1] === 'репорт')
	{
		return message.send(`С помощью команды "Репорт" вы можете отправить создателю бота любое сообщение. Также можно использовать "Реп", "Жалоба", "Rep".`);
	}
});

cmd.hear(/^(?:переверни)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.foolder += 1;
	let text = ``;
	message.args[1].split('').map(x=> {
		if(xaipText[x])
		{
			text += xaipText[x];
		}
	});

	return bot(`Перевёл: "${text.split('').reverse().join('')}"`)
});

cmd.hear(/^(?:переверни)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.foolder += 1;
	let text = ``;
	message.args[1].split('').map(x=> {
		if(rotateText[x])
		{
			text += rotateText[x];
		}
	});

	return bot(`держи: "${text.split('').reverse().join('')}"`)
});

cmd.hear(/^(?:Хайп текст)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.foolder += 1;
	let text = ``;
	message.args[1].split('').map(x=> {
		if(trans[x])
		{
			text += trans[x];
		}
	});
	let textanek = utils.pick(['🍂💕', '🍂', '💕', '🥊', '🔨', '🚓', '🔥', '⚠']);

	return bot(`хайповый текст:  ${text.split('').reverse().join('')} ${textanek}`)
});

cmd.hear(/^(?:инетПоиск)\s([^]+)$/i, async (message, bot) => {
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.foolder += 1;
	return message.send(`🛰 ${message.user.tag}, Ищу в Google
	✏ Ваш запрос: ${message.args[1]}
	🌐 Ссылка на ваш запрос: https://www.google.com/search?sxsrf=ALeKk0061IqzOE9H-OK_WPCeVTfaVQHtrA%3A1598165265583&ei=ERFCX5WaI6uMwPAP_eKzyA0&q=${message.args[1]}&oq=${message.args[1]}&gs_lcp=CgZwc3ktYWIQAzIFCAAQsQMyAggAMgIIADICCAAyBQgAELEDMgIIADICCAAyAggAMgUIABCxAzIFCAAQsQM6BAgAEEc6CAgAELEDEIMBOgUILhCxAzoICC4QsQMQgwFQjeIDWLX-A2DOgQRoAnABeACAAbMHiAHEDZIBCTMtMS4xLjAuMZgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab&ved=0ahUKEwjV5snH3bDrAhUrBhAIHX3xDNkQ4dUDCAw&uact=5
	
	 🛑 Всё что вы ищите по команде "Инетпоиск", находятся в Google и ищется тоже в Google.`)
});

cmd.hear(/^(?:анекдот)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;

	let textanek = utils.pick(['Разговариваают два американца:\n — У этих русских не только душа другая. Они и устроены по-другому.\n — ?\n — Я сам слышал как один сказал другому — Одень ты на х@й шапку, а то уши замерзнут.', 'Бывает, борешься за что-то, борешься, а потом в один прекрасный момент понимаешь: «А пошло оно все на х@й! » И жить становится намного проще.', '"А это точно поможет? ", — недоверчиво спрашивала царевна Несмеяна, поднося к губам какую-то самокрутку.', 'Чтобы хоть как-то привлечь внимание школьников, преподавательница написала на доске « Жесть. Смотреть всем».', 'Если Патриарх Кирилл верит в Бога, то почему он ездит в бронированном Мерседесе под охраной ФСО за счет бюджета, а не надеется на заступничество своего небесного начальника?']);

	return bot(`анекдот: 

	${textanek}`)
}); 

cmd.hear(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"']);
	return bot(phrase);
});

cmd.hear(/^(?:инфа|шанс|вероятность)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	const phrase = utils.pick(['шанс этого', 'мне кажется около']);
	const percent = utils.random(100);

	return bot(`${phrase} ${percent}%`)
});

cmd.hear(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	const first = message.args[1];
	const second = message.args[2];

	const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`]);
	return bot(`${phrase}`);
});

//ТикТок

cmd.hear(/^(?:Тикток|📱 Тикток)$/i, async (message, bot) => {
  if(typeof message.user.tiktok == "undefined" || message.user.tiktok == null){
   return bot(`Вы можете создать свой 💥ТикТок💥 в боте и получать дополнительный доход✨ со своих видео!
   
   🖥️ Развивайтесь, получайте больше подписчиков и дохода, получайте ЛАЙКИ, входите в ТОП и становитесь лучшим ТикТокером!
   
   🆕 Создать ТикТок: «тикток создать [название]»
   👍 Поставить лайк: «тикток лайк [ID игрока]»`, {attachment: 'photo-176472758_457239606'});
 }
 else{
   return bot(` ТикТок «${message.user.tiktok}»
   👥 Подписчики: ${utils.sp(message.user.tiktokpod)}
   👍 Лайки: ${utils.sp(message.user.tiktoklikes)}
   
   📸 Что-бы снять ТикТок, напиши «тикток снять»
   ☑️ Поставить лайк: «тикток лайк [ID игрока]»`, {attachment: 'photo-176472758_457239606'});;
 }
});

cmd.hear(/^(?:Тикток создать)\s(.*)$/i, async (message, bot) => {
  if(message.user.tiktok != null || typeof message.user.tiktok != "undefined" && typeof message.user.tiktok != "object") return bot(` у вас уже есть ТикТок! Вы можете удалить его: «тикток удалить»`);
message.user.tiktok = message.args[1];
message.user.tiktokpod = 0;
message.user.tiktoklikes = 0;
message.user.tiktoktimer = 0;
return bot(`Вы успешно создали ТикТок «${message.args[1]}»! 🎉 Напишите команду «тикток» для информации.

❌ Что-бы удалить, напиши: «тикток удалить»
📃 Что-бы сменить название, напиши: «тикток название [новое]»`);
});

cmd.hear(/^(?:Тикток название)\s(.*)$/i, async (message, bot) => {
  if(typeof message.user.tiktok == "undefined" || message.user.tiktok == null) return bot(` вам необходимо создать ТикТок, чтобы использовать эту команду!
 🌈 команда: «тикток создать [название]»`);
  message.user.tiktok = message.args[1];
  return bot(` Вы успешно изменили название ТикТока на «${message.args[1]}»!`)
});

cmd.hear(/^(?:Тикток удалить)$/i, async (message, bot) => {
  if(typeof message.user.tiktok == "undefined" || message.user.tiktok == null) return bot(` вам необходимо создать ТикТок, чтобы использовать эту команду!
 🌈 команда: «тикток создать [название]»`);
  message.user.tiktok = null;
  message.user.tiktokpod = 0;
  message.user.tiktoklikes = 0;
  message.user.tiktoktimer = 0;
  return bot(`✅Ваш ТикТок успешно удалён!`);
});

cmd.hear(/^(?:Тикток снять)$/i, async (message, bot) => {
  if(typeof message.user.tiktok == "undefined" || message.user.tiktok == null) return bot(` вам необходимо создать ТикТок, чтобы использовать эту команду!
 🌈 команда: «тикток создать [название]»`);
if(typeof message.user.tiktoktimer != "undefined" && message.user.tiktoktimer > Date.now()) return bot(`Вы ещё не придумали идею! 😥 Подождите ${left(message.user.tiktoktimer-Date.now())}, чтобы снимать новый ТикТок! ⏳`);
if(message.user.tiktoktimer >= 0) return message.send(`⏳ ${message.user.tag}, Вы ещё не придумали идею! 😣 Подождите  ${displayTime(message.user.tiktoktimer)}, чтобы снимать новый ТикТок!`); 

	message.user.tiktoktimer = 100;
	
const ping = utils.random(99);
const szc25 = utils.pick([`video-142308683_4562434${ping}`]);
const newpod = utils.random(1000);
message.user.tiktokpod += newpod;
let ads = utils.pick([1,0]);
let adsCash = 0;
if(ads == 1){
  adsCash = 10000*message.user.tiktokpod+utils.random(10000,50000);
message.user.balance += adsCash;
}
let txt = ` Вы сняли новый ТикТок!
💥 Получено ${newpod} новых подписчиков
${ads == 0 ? "💸 К сожалению, рекламных предложений к Вам не поступало. Снимайте ещё!":"💸 Получено "+utils.sp(adsCash)+" $ с рекламы!"}`;
return bot(txt, {attachment: `${szc25}`});
});

cmd.hear(/^(?:Тикток лайк)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.tiktokliketimer >= 0) return message.send(`📱 ${message.user.tag}, подождите ${displayTime(message.user.tiktokliketimer)}, чтобы поставить лайк!`); 

	message.user.tiktokliketimer = 60;
	
  let user = users.find(x=> x.uid === Number(message.args[1]));
  if(!user) return bot(`❌ такой игрок не найден! 🤕 Проверьте правильность введенного айди.`);
  if(message.user.uid == user.uid) return bot(`❗нельзя ставить лайки самому себе! Попросите своих друзей ставить вам лайк!✨`);
  if(typeof user.tiktok == "undefined" || user.tiktok == null) return bot(`❌ у этого игрока нет ТикТока! 😥`);
  bot(`✅ вы лайкнули ТикТок игрока ${user.tag}!`);
  user.tiktoklikes++;
  vk.api.messages.send({user_id:user.id,message:`💥игрок ${message.user.tag} лайкнул ваш ТикТок!✨`});
});

cmd.hear(/^(?:тикток топ|топ тикток)$/i, async (message, bot) => {
	let top = [];
	users.map(x=> {
		top.push({ balance: x.balance, tiktoklikes: x.tiktoklikes, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.tiktoklikes - a.tiktoklikes;
	});

	let text = ``;
	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} ${utils.sp(user.tiktoklikes)} ❤ - @id${user.id} (${user.tag})
		`;
	}

	return bot(`💥топ игроков по лайкам в тиктоке:
		${text}`);
});

cmd.hear(/^(?:прxxx977)/i, async(message) => {
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(800, 218)
const Canvas = require('canvas');
const ctx = canvas.getContext('3d')
const use_id = `${message.user.id}`;
const Image = Canvas.Image;
const [ava_info] = await vk.api.users.get({
user_id: use_id,
fields: "photo_400"
});

const [user_info] = await vk.api.users.get({
user_id: use_id
});

const img = new Image();
img.src = 'sperm.png';
ctx.drawImage(img, 0, 0);

ctx.font = '35px Roboto';
ctx.fillStyle = "#020302";
ctx.fillText(`Ваш ник: ${message.user.tag}`, 250, 150);

ctx.font = '35px Roboto';
ctx.fillStyle = "#d80303";
ctx.fillText(`Время бота: ${time(5)}`, 250, 100);

ctx.font = '35px Roboto';
ctx.fillStyle = "#695f09";
ctx.fillText(`Ваш баланс: ${message.user.balance}`, 250, 50);

const mychit = await loadImage(ava_info.photo_400);
ctx.drawImage(mychit, 10, 10);
canvas.height = img.height;
img.width;
canvas.width;
ctx.beginPath();
ctx.arc(350/ 2, 350 / 2, 350 / 2, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fill();
ctx.globalCompositeOperation = "source-in";
ctx.drawImage(mychit, e, e, 350, 350);

return message.sendPhoto(canvas.toBuffer());
});

cmd.hear(/^(?:баланс|💲 Баланс)/i, async (message, bot) => {

const { registerFont, createCanvas, Image, loadImage } = require('canvas');
const canvas = createCanvas(1920, 1080);
const ctx = canvas.getContext('2d');
registerFont('test.otf', { family: 'Roboto' })

const img = new Image();
img.src = './img-cmd/test.png';
ctx.drawImage(img, 0, 0, 1920, 1080);

//баланс игрока
ctx.font = '55px Arial Black';
ctx.fillStyle = "#e7eaf9";
ctx.fillText(`${utils.sp(message.user.balance)}$`, 406, 277)

ctx.font = '55px Arial Black';
ctx.fillStyle = "#e7eaf9";
ctx.fillText(`${utils.sp(message.user.rating)}`, 457, 380)

ctx.font = '55px Arial Black';
ctx.fillStyle = "#e7eaf9";
ctx.fillText(`${utils.sp(message.user.sberbank.balance)}$`, 418, 489) //1) в лева, право 2) Вниз, верх

ctx.font = '55px Arial Black';
ctx.fillStyle = "#e7eaf9";
ctx.fillText(`${utils.sp(message.user.btc)}฿`, 559, 597)

ctx.font = '55px Arial Black';
ctx.fillStyle = "#e7eaf9";
ctx.fillText(`${message.user.zhelezo} Железа`, 170, 838)

ctx.font = '55px Arial Black';
ctx.fillStyle = "#e7eaf9";
ctx.fillText(`${message.user.zoloto} Золота`, 170, 939)

ctx.font = '55px Arial Black';
ctx.fillStyle = "#e7eaf9";
ctx.fillText(`${message.user.emeralds} Материя`, 170, 1043)

ctx.font = '55px Arial Black';
ctx.fillStyle = "#e7eaf9";
ctx.fillText(`${message.user.coal} Угля`, 1199, 838)

ctx.font = '55px Arial Black';
ctx.fillStyle = "#e7eaf9";
ctx.fillText(`${message.user.almaz} Алмазов`, 1187, 939)

ctx.font = '55px Arial Black';
ctx.fillStyle = "#e7eaf9";
ctx.fillText(`[${message.user.prefix.toString().replace(/Пользователь/gi, "Пользователь").replace(/YouTube/gi, "YouTube").replace(/VIP/gi, "VIP").replace(/PREMIUM/gi, "PREMIUM").replace(/Модератор/gi, "Модератор").replace(/Главный Модератор/gi, "Главный Модератор").replace(/Администратор/gi, "Администратор").replace(/Главный Администратор/gi, "Главный Администратор").replace(/Супер.Администратор/gi, "Супер.Администратор").replace(/Владелец/gi, "Владелец")}] ${message.user.tag}`, 611, 100)
let att = await vk.upload.messagePhoto({ source: canvas.toBuffer(), peer_id: message.peerId })

return message.send(`Баланс:`, { attachment: att });
});

cmd.hear(/^(?:тикток)\s(помощь)?$/i, async (message, args, bot) => {
	message.send(`🗒️Помощь по ТикТоку:
	
	1️⃣Тикток - информация
	2️⃣Тикток создать [название] - создать ТикТок 
    3️⃣Тикток снять - снять видео
    4️⃣Тикток лайк [id] - поставить лайк
    5️⃣Тикток название [название] - сменить название
    6️⃣Тикток удалить - удалить ТикТок
    7️⃣Тикток топ - топы ТикТока`);
});

cmd.hear(/^(?:донат)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	let ref = `https://qiwi.com/payment/form/99?extra%5B%27account%27%5D=79521817743&amountInteger=30&amountFraction=0&currency=RUB&extra%5B%27comment%27%5D=5%20%D0%A2%D0%A0%D0%9B%D0%9D%20ID:%20${message.user.uid}&blocked%5B0%5D=account&blocked%5B1%5D=sum&blocked%5B2%5D=comment`;
    let refka = await vk.api.call('utils.getShortLink', { url: ref });
	let ref2 = `https://qiwi.com/payment/form/99?extra%5B%27account%27%5D=79521817743&amountInteger=15&amountFraction=0&currency=RUB&extra%5B%27comment%27%5D=100%20%D0%9C%D0%9B%D0%A0%D0%94%20ID:%20${message.user.uid}&blocked%5B0%5D=account&blocked%5B1%5D=sum&blocked%5B2%5D=comment`;
    let refka2 = await vk.api.call('utils.getShortLink', { url: ref2 });
	let ref3 = `https://qiwi.com/payment/form/99?extra%5B%27account%27%5D=79521817743&amountInteger=50&amountFraction=0&currency=RUB&extra%5B%27comment%27%5D=VIP%20ID:%20${message.user.uid}&blocked%5B0%5D=account&blocked%5B1%5D=sum&blocked%5B2%5D=comment`;
    let refka3 = await vk.api.call('utils.getShortLink', { url: ref3 });
	let ref4 = `https://qiwi.com/payment/form/99?extra%5B%27account%27%5D=79521817743&amountInteger=80&amountFraction=0&currency=RUB&extra%5B%27comment%27%5D=PREMIUM%20ID:%20${message.user.uid}&blocked%5B0%5D=account&blocked%5B1%5D=sum&blocked%5B2%5D=comment`;
    let refka4 = await vk.api.call('utils.getShortLink', { url: ref4 });
	let ref5 = `https://qiwi.com/payment/form/99?extra%5B%27account%27%5D=79521817743&amountInteger=100&amountFraction=0&currency=RUB&extra%5B%27comment%27%5D=%D0%9C%D0%9E%D0%94%D0%95%D0%A0%D0%90%D0%A2%D0%9E%D0%A0%20ID:%20${message.user.uid}&blocked%5B0%5D=account&blocked%5B1%5D=sum&blocked%5B2%5D=comment`;
    let refka5 = await vk.api.call('utils.getShortLink', { url: ref5 });
	let ref6 = `https://qiwi.com/payment/form/99?extra%5B%27account%27%5D=79521817743&amountInteger=150&amountFraction=0&currency=RUB&extra%5B%27comment%27%5D=%D0%93%D0%9B.%D0%9C%D0%9E%D0%94%D0%95%D0%A0%D0%90%D0%A2%D0%9E%D0%A0%20ID:%20${message.user.uid}&blocked%5B0%5D=account&blocked%5B1%5D=sum&blocked%5B2%5D=comment`;
    let refka6 = await vk.api.call('utils.getShortLink', { url: ref6 });
	let ref7 = `https://qiwi.com/payment/form/99?extra%5B%27account%27%5D=79521817743&amountInteger=200&amountFraction=0&currency=RUB&extra%5B%27comment%27%5D=%D0%90%D0%94%D0%9C%D0%98%D0%9D%D0%98%D0%A1%D0%A2%D0%A0%D0%90%D0%A2%D0%9E%D0%A0%20ID:%20${message.user.uid}&blocked%5B0%5D=account&blocked%5B1%5D=sum&blocked%5B2%5D=comment`;
    let refka7 = await vk.api.call('utils.getShortLink', { url: ref7 });
	let ref8 = `https://qiwi.com/payment/form/99?extra%5B%27account%27%5D=79521817743`;
    let refka8 = await vk.api.call('utils.getShortLink', { url: ref8 });
	let ref9 = `https://qiwi.com/payment/form/99?extra%5B%27account%27%5D=79521817743&amountInteger=30&amountFraction=0&currency=RUB&extra%5B%27comment%27%5D=5%20%D0%A2%D0%A0%D0%9B%D0%9D%20ID:%20${message.user.uid}&blocked%5B0%5D=account&blocked%5B1%5D=sum&blocked%5B2%5D=comment`;
    let refka9 = await vk.api.call('utils.getShortLink', { url: ref9 });
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	message.user.log = `донат`
message.user.foolder += 1;
await bot(`🌍 Донат Bot MarYans 🌍

💸 100.000.000.000$ — 15 рублей
🔗 Ссылка на оплату: ${refka2.short_url}

💸 10.000.000.000.000.000$ — 30 рубль
🔗 Ссылка на оплату: ${refka.short_url}

🎡 Колесо Фортуны - 25 рублей
🔗 Ссылка на оплату: ${refka9.short_url}

🎃 Статус (VIP) — 39 рублей
🔗 Ссылка на оплату: ${refka3.short_url}

🎩 Статус (PREMIUM) — 80 рублей
🔗 Ссылка на оплату: ${refka4.short_url}

🎧 Статус (Модератор) — 100 рублей
🔗 Ссылка на оплату: ${refka5.short_url}

👾 Статус (Главный Модератор) — 150 рублей
🔗 Ссылка на оплату: ${refka6.short_url}

👻 Статус (Администратор) — 200 рублей
🔗 Ссылка на оплату: ${refka7.short_url}


⛔ Снятие warn — 7 рублей
🎲 При покупке укажите ваш игровой ID: ${message.user.uid}
🔗 Покупка там: ${refka8.short_url}`);
await message.sendSticker(12692);
});

setInterval(async () => {
for (let id in users) {
if(users[id]){
let user = users[id];
if (user.balance == NaN) {
user.balance = 50000;
vk.api.messages.send({user_id: 447012706, message: `🚫 Ошибка с балансом: ${user.uid}🆔`});
vk.api.call('messages.send', { user_id: user.id, message: `
⚠ Я заметил что ваш баланс стал NaN

🔄 Ваш баланс был исправлен и теперь он составляет: 50.000$`});
}
}
}
}, 60000);

setInterval(async () => {
for (let id in users) {
if(users[id]){
let user = users[id];
if (user.balance == -0) {
user.balance = 50000;
vk.api.messages.send({user_id: 447012706, message: `🚫 Ошибка с балансом: ${user.uid}🆔`});
vk.api.call('messages.send', { user_id: user.id, message: `
⚠ Я заметил что ваш баланс стал -0

🔄 Ваш баланс был исправлен и теперь он составляет: 50.000$`});
}
}
}
}, 60000);

setInterval(async () => {
for (let id in users) {
if(users[id]){
let user = users[id];
if (user.balance == Nul) {
user.balance = 50000;
vk.api.messages.send({user_id: 447012706, message: `🚫 Ошибка с балансом: ${user.uid}🆔`});
vk.api.call('messages.send', { user_id: user.id, message: `
⚠ Я заметил что ваш баланс стал Nul

🔄 Ваш баланс был исправлен и теперь он составляет: 50.000$`});
}
}
}
}, 60000);

cmd.hear(/^(?:отправить в беседу)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	

	if(message.user.settings.adm < 5) return bot(`вам нужен ранг Гл.ADMINISTRATOR, чтобы иметь доступ к данной команде.`);
	if(!Number(message.args[1])) return bot(`укажите ID беседы, в которую хотите отправить сообщение.`);
	if(message.args[1] === message.chatId) return bot(`укажите ID беседы, в которую хотите отправить сообщение.`);

	vk.api.messages.send({ chat_id: message.args[1], message: `${message.args[2]}`});
	
	bot(`ваше сообщение было отправлено в беседу.`);
});


cmd.hear(/^(?:профиль|проф|@botmaryans Профиль|📒 Профиль|📋 Профиль|ghjabkm|ghjпрофи|профил)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `профиль` 
	message.user.healths -= 1;
	message.user.astroen -= 1;
	message.user.hunger -= 1;
	clanid = message.user.clanid
	let text = ``;


	    text += `&#4448; &#4448;🆔 Игровой ID: ${message.user.uid}\n`;
	text += `&#4448;🔗 Ссылка: vk.com/id${message.user.id}\n`;
	if(message.user.pretient)text += `&#4448;🤵 Президент\n`;
	if(clans[clanid]) {
	text += `&#4448;⚔ Клан: ${clans[clanid].name}\n`;	
	};
	text += `&#4448; 💎 Префикс: ${message.user.prefix.toString().replace(/Пользователь/gi, "Пользователь").replace(/YouTube/gi, "YouTube").replace(/VIP/gi, "VIP").replace(/PREMIUM/gi, "PREMIUM").replace(/Модератор/gi, "Модератор").replace(/Главный Модератор/gi, "Главный Модератор").replace(/Администратор/gi, "Администратор").replace(/Главный Администратор/gi, "Главный Администратор").replace(/Супер.Администратор/gi, "Супер.Администратор").replace(/Владелец/gi, "Владелец")}\n`;	
	text += `&#4448;💰 Денег: ${utils.sp(message.user.balance)}$\n`;
	text += `&#4448;⚡ Энергия: ${utils.sp(message.user.energy)}\n`;
	text += `&#4448;💳 В банке ${utils.sp(message.user.sberbank.balance)}$ \n`;
	text += `&#4448;🌐 Биткоины: ${utils.sp(message.user.btc)}฿ \n`;
	text += `&#4448;👑 Рейтинг: ${utils.sp(message.user.rating)}\n`;
    text += `\n`;
	if(message.user.work) text += `&#4448;👔 Работа: ${works[message.user.work - 1].name}\n`;
	if(message.user.marriage.partner) text += `&#4448;👬 Партнер: ${users[message.user.marriage.partner].tag}\n`;
	text += `&#4448;🌟 Уровинь [${message.user.exp}/24]\n`;
	
        text += `\n&#4448;&#4448;[👬] Персонаж:\n`;

text += `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n`;
text += `ᅠ❤ ⇢ Здоровья: ${message.user.healths}\n`;
text += `ᅠ🍗 ⇢ Еды: ${message.user.hunger}\n`;
text += `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n`;

	if(message.user.transport.car || message.user.transport.yacht || message.user.transport.airplane || message.user.transport.helicopter ||
		message.user.realty.home || message.user.realty.apartment ||
		message.user.misc.phone || message.user.business || message.user.misc.pet || message.user.misc.clock || message.user.pk || message.user.manic)
	{
		text += `\n&#4448;&#4448;📦 Имущество:\n`;
        text += `\n`;
        if(message.user.strana) text += `&#4448;┇♦┇Страна: ${stranas[message.user.strana - 1].name}\n`;
        if(message.user.pk) text += ` &#4448; 🖥 Компьютер:  ${pk[message.user.pk - 1].name}\n`;
		if(message.user.transport.car) text += `⠀&#4448; 🚗 Машина: ${cars[message.user.transport.car - 1].name}\n`;
		if(message.user.transport.yacht) text += `⠀&#4448; 🛥 Яхта: ${yachts[message.user.transport.yacht - 1].name}\n`;
		if(message.user.transport.airplane) text += `⠀&#4448; 🛩 Самолёт: ${airplanes[message.user.transport.airplane - 1].name}\n`;
		if(message.user.transport.helicopter) text += `&#4448;🚁 Вертолёт: ${helicopters[message.user.transport.helicopter - 1].name}\n`;
		if(message.user.qwe) text += `&#4448;🏙 Город: ${message.user.qwe32} (${utils.sp(message.user.qwe)} чел.) \n`;
		text += `\n`;
		if(message.user.tiktokpod) text += `&#4448;🎵 ТикТок: ${message.user.tiktok} (${utils.sp(message.user.tiktoklikes)} лайков) \n`;
		if(message.user.realty.home) text += `&#4448;🏠 Дом: ${homes[message.user.realty.home - 1].name}\n`;
		if(message.user.realty.apartment) text += ` &#4448;⠀🌇 Квартира: ${apartments[message.user.realty.apartment - 1].name}\n`;
		if(message.user.misc.phone) text += `⠀&#4448; 📱 Телефон: ${phones[message.user.misc.phone - 1].name}\n`;
		if(message.user.misc.raket) text += `⠀&#4448; 🎄 Ёлки: ${raket[message.user.misc.raket - 1].name}\n`;
		if(message.user.misc.pet) text += ` &#4448;⠀🐌 Питомец: ${pets[message.user.misc.pet - 1].name}\n`;
		if(message.user.misc.clock) text += ` &#4448; 📲 Часы: ${clock[message.user.misc.clock - 1].name}\n`;
		if(message.user.manic) text += ` &#4448;⠀💸 Денежный принтер: ${manic[message.user.manic - 1].name} 📇\n`;
		if(message.user.business) text += ` &#4448;⠀${businesses[message.user.business - 1].icon} ${businesses[message.user.business - 1].name}\n`;
	}
	
    text += `\n`;
    text += `\n&#4448;&#4448;[💸] Руды:\n`;
	if(message.user.zhelezo) text += `&#4448;🎛 ${message.user.zhelezo} железа\n`;
	if(message.user.zoloto) text += `&#4448;🏵 ${message.user.zoloto} золота\n`;
    if(message.user.emeralds) text += `&#4448;🌌 ${message.user.emeralds} материя\n`;
    if(message.user.coal) text += `&#4448;🗨 ${message.user.coal} Угл\n`;
	if(message.user.almaz) text += `&#4448;💎 ${message.user.almaz} алмаза\n`;
	text += `\n`;

	text += `\n&#4448;&#4448;⌚ Регистрация: ${message.user.regDate}\n`;
	return message.send(`🔥 ${message.user.tag}, твой профиль:\n${text}`, {
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": "👒 Квесты"
                        },
                        "color": "primary"
                    },
                ]
            ]
        })
    });
});

cmd.hear(/^(?:кпрофиль|кпроф|@botmaryans кПрофиль|📒 кПрофиль|📋 кПрофиль)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `кпрофиль` 
	message.user.healths -= 1;
	message.user.astroen -= 1;
	message.user.hunger -= 1;
	let text = ``;

	text += `🔎 ID: ${message.user.uid}\n`;

	 if(message.user.up.cursor || message.user.up.bcursor || message.user.up.mishka || message.user.up.smishka || message.user.up.kolonka ||
		message.user.up.printer)
 	{
		text += `\n┇Улучшения к кликам┇\n`;

if(message.user.up.cursor)	text += `&#4448;┇🌟┇ Курсор (${utils.sp(message.user.up.cursor_count)}x)\n`;
if(message.user.up.bcursor) text += `&#4448;┇🌟┇ Большой курсор (${utils.sp(message.user.up.bcursor_count)}x)\n`;
if(message.user.up.mishka) text += `&#4448;┇🌟┇ Мышка (${utils.sp(message.user.up.mishka_count)}x)\n`;
if(message.user.up.smishka) text += `&#4448;┇🌟┇ Супер мышка (${utils.sp(message.user.up.smishka_count)}x)\n`;
if(message.user.up.kolonka) text += `&#4448;┇🌟┇ Колонка (${utils.sp(message.user.up.kolonka_count)}x)\n`;
if(message.user.up.printer) text += `&#4448;┇🌟┇ Принтер (${utils.sp(message.user.up.printer_count)}x)\n`;
}

if(message.user.modules["1"].count || message.user.modules["2"].count || message.user.modules["3"].count || message.user.modules["4"].count || message.user.modules["5"].count ||
		message.user.modules["6"].count || message.user.modules["7"].count)
 	{

text += `\n┇Ускорения к кликам┇\n`;
if(message.user.modules["1"].count)	text += `┇📕┇ Курсор [${message.user.modules["1"].count}] +${message.user.modules["1"].count*1}/сек\n`;
if(message.user.modules["2"].count)	text += `┇📗┇ Видеокарта  [${message.user.modules["2"].count}] +${message.user.modules["2"].count*2}/сек\n`;
if(message.user.modules["3"].count)	text += `┇📘┇ Стойка Видеокарт  [${message.user.modules["3"].count}] +${message.user.modules["3"].count*3}/сек\n`;
if(message.user.modules["4"].count) text += `┇📙┇ Суперкомпьютер  [${message.user.modules["4"].count}] +${message.user.modules["4"].count*4}/сек\n`;
if(message.user.modules["5"].count) text += `┇📔┇ Сервер ВКонтакте [${message.user.modules["5"].count}] +${message.user.modules["5"].count*6}/сек\n`;
if(message.user.modules["6"].count)	text += `┇📓┇ Квантовый компьютер  [${message.user.modules["6"].count}] +${message.user.modules["6"].count*8}/сек\n`;
if(message.user.modules["7"].count)	text += `\n┇🖥┇ Датацентр [${message.user.modules["7"].count}] +${message.user.modules["7"].count*10}/сек\n`;

text += `┇💿┇ В сумме: ${(message.user.modules["1"].count*1)+(message.user.modules["2"].count*2)+(message.user.modules["3"].count*3)+(message.user.modules["4"].count*4)+(message.user.modules["5"].count*6)+(message.user.modules["6"].count*8)+(message.user.modules["7"].count*10)}/сек`;
}

	return bot(`Твой профиль кликов\n${text}`,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "🎰 казино 1ккк"
		},
			"color": "negative"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "📒 Профиль"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "📦 Кейсы"
		},
			"color": "primary"
		},
		{ 
			"action": { 
			"type": "text", 
			"payload": "{\"button\": \"3\"}", 
			"label": "📚 Помощь" 
			}, 
			"color": "positive" 
			}, 
]
		]
			})
});
});


cmd.hear(/^(?:123456789)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.healths < 1) return bot(`📛|Доступ запрещен от болезни`)
	if(message.user.hunger < 1) return bot(`Ты умер от голода`)
	message.user.healths -= 1;
	message.user.hunger -= 1;
	let text = `на руках ${utils.sp(message.user.balance)}$ 💸`;

	if(message.user.sberbank.balance) text += `\n💳 В банке ${utils.sp(message.user.sberbank.balance)}$`;
	if(message.user.btc) text += `\n🌐 Биткоинов: ${utils.sp(message.user.btc)}฿`;
	text += `\n`;
	text += `\n[&#128184;] Доп валюта:\n`;
	
	if(message.user.ybalance) text += `\n🍎 Ютуб баланс: ${utils.sp(message.user.ybalance)}`;
	if(message.user.clanscher) text += `\n🧿 VK - MarYans: ${utils.sp(message.user.clanscher)}`;
	if(message.user.raziri3) text += `\n💶 Фунт: ${utils.sp(message.user.raziri3)}`;
	if(message.user.raziri2) text += `\n💵 Доллар: ${utils.sp(message.user.raziri2)}`;
	text += `\n`;
	text += `\n[&#128184;] Руды:\n`;
	
	if(message.user.zhelezo) text += `\n🎛 ${message.user.zhelezo} железа`;
	if(message.user.zoloto) text += `\n🏵 ${message.user.zoloto} золота`;
    if(message.user.emeralds) text += `\n🌌 ${message.user.emeralds} материя`;
    if(message.user.coal) text += `\n🗨 ${message.user.coal} Угля`;
	if(message.user.almaz) text += `\n💎 ${message.user.almaz} алмаза`;

	return bot(text);
});

cmd.hear(/^(?:удалить карту)$/i, async (message, bot) => {
	
	if(message.user.sberbank.activation !== 1) return bot(`Извините, у вас нет карты, вы можете ее создать, введя команду "Создать карту"`);
	if(message.user.check) return bot(`Ошибка, введите капчу\nВведите "Капча ${message.user.captcha_token}"`);
	message.user.captcha_sms +=1;

	message.user.sberbank.number = 0; 
	message.user.sberbank.cvv = 0; 
	message.user.sberbank.activation = 0;
	message.user.sberbank.user_name = `Не указано`;
	message.user.sberbank.balance += 0;
	return bot(`💸 Ваша карта успешно удалена\n🚀 Что-бы создать новую, введите "Создать карту"`);
});

cmd.hear(/^(?:изменить номер)\s([0-9]+)$/i, async (message, bot) => {
	
			if(!message.user.user_sberbank) return bot(`Вы не сотрудник банка.\nНо если вы хотите им стать, напишите ему [police_rg|Admin]`);
	
		{ 
			let user = users.find(x=> x.uid === Number(message.args[1]));  
			let number_karty = utils.random(385395526, 987539526);
			user.sberbank.number = number_karty; 
				
			await bot(`Теперь у @id${user.id}(${user.tag}) новый номер карты, номер: ${number_karty}\nНе забудьте сообщить ему, о смене номера карты.`); 	
		}
	});

	cmd.hear(/^(?:изменить)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
		if(!message.user.user_sberbank) return bot(`Вы не сотрудник банка.\nНо если вы хотите им стать, напишите ему [police_rg|Admin]`);
	{ 
		let user = users.find(x=> x.uid === Number(message.args[1]));  
		user.sberbank.user_name = message.args[2]; 
			
		await bot(`Теперь у @id${user.id}(${user.tag}) новое Имя на карте.`); 	
	}
});

cmd.hear(/^(?:минус)\s([0-9]+)\s([0-9]+)$/i, async (message, bot) => {
	
	if(!message.user.user_sberbank) return bot(`Вы не сотрудник банка.\nНо если вы хотите им стать, напишите ему [police_rg|Admin]`);
{ 
	let user = users.find(x=> x.uid === Number(message.args[1]));  
	if(message.args[2] > user.sberbank.balance) return bot(`Ошибка, у данного пользователя нет столько денег, его баланс: ${utils.sp(user.sberbank.balance)}`)
	
	user.sberbank.balance -= message.args[2]; 
	await bot(`Теперь у @id${user.id}(${user.tag}) остаток на карте ${utils.sp(user.sberbank.balance)}.`); 	
}
});

cmd.hear(/^(?:заблокировать карту)\s([0-9]+)$/i, async (message, bot) => {
	
	if(!message.user.user_sberbank) return bot(`Вы не сотрудник банка.\nНо если вы хотите им стать, напишите ему [police_rg|Admin]`);
{ 
	let user = users.find(x=> x.uid === Number(message.args[1]));  
	if(user.sberbank.activation !== 1) return bot(`Ошибка, у данного пользователя карта либо не создана, либо заблокирована.`)
	
	user.sberbank.activation = 0; 	
	user.sberbank.cvv = 0; 
	user.sberbank.number = 0; 
	user.sberbank.balance = 250; 
	
	await bot(`Теперь у @id${user.id}(${user.tag}) карта заблокирована.`); 	
}
});


	cmd.hear(/^(?:карты)$/i, async (message, bot) => {
	
		if(!message.user.user_sberbank) return bot(`Вы не сотрудник банка.
		`);
	return bot(`Список команд:
	✅ 1. Изменить номер [id] - сменить номер карты пользователю\n
	✅ 2. Изменить [id] [Имя] - сменить владельца карты, то есть "Имя"\n
	✅ 3. Минус [id] [сумма] - снять деньги с карты пользователя\n
	✅ 4. Заблокировать карту [id] - заблокать карту
	
	
	‼ Правила для сотрудника банка:
	⚠ 1. Сотрудник не должен просто так снимать деньги со счетов других игроков. (Наказание: устный выговор)
	⚠ 2. Сотрудник не должен менять номер карты без ведома игрока. (Наказание: устный выговор)
	⚠ 3. Сотрудник не должен менять имя владельца карты, без ведома игрока (Наказание: устный выговор)
	⚠ 4. Сотрудник не должен блокировать карту просто так. (Наказание: снятие, без возврата. Смотря какая сумма была на счету карты)`);
});

cmd.hear(/^(?:пересоздать карту)$/i, async (message, bot) => {
	
	if(message.user.sberbank.activation !== 1) return bot(`Извините, у вас нет карты.\nВведите "Создать карту"`);
	if(message.user.check) return bot(`Ошибка, введите капчу\nВведите "Капча ${message.user.captcha_token}"`);
	message.user.captcha_sms +=1;
	let number_karta = utils.random(385395526, 987539526);
	let cvv_karta = utils.random(285, 985);
	let name_karta = message.user.tag;
	message.user.sberbank.number = number_karta; 
	message.user.sberbank.cvv = cvv_karta; 
	message.user.sberbank.activation = 1;
	message.user.sberbank.user_name = name_karta;
	return bot(`💸 Ваша карта успешно пересоздана, посмотреть информация можно введя команду "Карта"`);
});

cmd.hear(/^(?:Создать карту)$/i, async (message, bot) => {
	
	if(message.user.sberbank.activation !== 0) return bot(`Извините, но ваша карта уже создана.`);
	if(message.user.check) return bot(`Ошибка, введите капчу\nВведите "Капча ${message.user.captcha_token}"`);
	message.user.captcha_sms +=1;
	let number_karta = utils.random(385395526, 987539526);
	let cvv_karta = utils.random(285, 985);
	let name_karta = message.user.tag;
	message.user.sberbank.number = number_karta; 
	message.user.sberbank.cvv = cvv_karta; 
	message.user.sberbank.activation = 1;
	message.user.sberbank.user_name = name_karta;
	message.user.sberbank.balance += 250;
	return bot(`💸 Ваша карта успешно создана, посмотреть информация можно введя команду "Карта"`);
});

cmd.hear(/^(?:банк|💰 Банк)$/i, async (message, bot) => {
	
	if(message.user.sberbank.activation !== 1) return bot(`Извините, у вас нет карты, вы можете ее создать, введя команду "Создать карту"`);
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	if(message.user.healths < 1) return bot(`📛|Доступ запрещен от болезни`)
	if(message.user.hunger < 1) return bot(`Ты умер от голода`)
	if(message.user.sberbank.balance < 1) return bot(`ваш банковский счет пуст.`);
	return bot(`на балансе в банке ${message.user.sberbank.balance}$
✍🏻 Введите "Банк [кол-во]" для пополнения`);
});

cmd.hear(/^(?:Кснять|Бснять|банк снять)\s(.*)$/i, async (message, bot) => {
	
	if(message.user.sberbank.activation !== 1) return bot(`Извините, но ваша карта еще не активирована.\nВведите "Создать карту"`);
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.sberbank.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.user.check) return bot(`Ошибка, введите капчу\nВведите "Капча ${message.user.captcha_token}"`);
	message.user.captcha_sms +=1;
	if(message.args[1] <= 0) return;
	if(message.args[1] <= 499) return bot(`⛏ Минимальная сумма для вывода, 500$`);
	
	if(message.args[1] > message.user.sberbank.balance) return bot(`🎁 Ой, у вас нет столько денег на карте.`);
	else if(message.args[1] <= message.user.sberbank.balance)
	{
		message.user.sberbank.balance -= message.args[1];
		message.user.balance += message.args[1];

		return bot(`💎 Успешно, вы сняли со счета карты ${utils.sp(message.args[1])}$`);
	}
});

cmd.hear(/^(?:внести|положить)\s(.*)$/i, async (message, bot) => {
	
	if(message.user.sberbank.activation !== 1) return bot(`Извините, но ваша карта еще не активирована.\nВведите "Создать карту"`);
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));
if(message.user.check) return bot(`Ошибка, введите капчу\nВведите "Капча ${message.user.captcha_token}"`);
	message.user.captcha_sms +=1;
	if(message.args[1] <= 0) return;
	if(message.args[1] <= 49) return bot(`⛏ Минимальная сумма для взноса, 50$`);
	
	if(message.args[1] > message.user.balance) return bot(`🎁 Ой, у вас нет столько денег для пополнения карты.`);

	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		message.user.sberbank.balance += message.args[1];

		return bot(`💎 Успешно, вы положили на счет карты ${utils.sp(message.args[1])}$`);
	}
});

cmd.hear(/^(?:карта)$/i, async (message, bot) => {
	
	if(message.user.sberbank.activation !== 1) return bot(`Извините, но ваша карта еще не активирована.\nВведите "Создать карту"`);
	if(message.user.check) return bot(`Ошибка, введите капчу\nВведите "Капча ${message.user.captcha_token}"`);
	message.user.captcha_sms +=1;
	let text = ``;
	text += `\n🔔 Карта оформлена на: ${message.user.sberbank.user_name}\n`;
	text += `💸 CVV-код: ${message.user.sberbank.cvv}\n`;
	text += `⚠ Карта активна\n`;
	text += `💾 Номер вашей карты: ${message.user.sberbank.number}\n`;
	text += `💸 Баланс вашей сберкарты: ${utils.sp(message.user.sberbank.balance)}$\n\n`;
	text += `⚙ Снять [сумма] - снять с карты\n`;
	text += `⚙ Внести [сумма] - положить на карту\n`;
	text += `⚙ Удалить карту - удалить свою карту\n`;
	text += `⚙ Пересоздать карту - пересоздать вашу карту\n`;
	text += `⚙ Перевести [номер карты] [сумма] - отправить деньги на карту\n`;
	
	return bot(text);
});

cmd.hear(/^(?:уведомления|🔔 Рассылка|Рассылка)\s(выкл|вкл)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`уведомления отключены! 🔕`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		return bot(`уведомления включены! 🔔`);
	}
});

cmd.hear(/^(?:передать|пиредать|предать|перидать|перевисти|перевести|перевод)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	message.user.log = `${message.args[0]}`;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.user.settings.adm > 2) return bot(`администратор не может передавать игровые средства, воспользуйтесь командой "выдать"`); 
	if(message.user.timers.peredat >= 0) return bot(`вы сможете передать только через 24 чеса ${smileerror}`);
	if(message.args[2] > message.user.settings.limitt) return bot(`максимум можно перевести ${utils.sp(message.user.settings.limitt)}$`);
	if(message.args[2] <= 0) return;
	if(!message.user.settings.trade) return bot(`у вас установлен бан передачи ${smileerror}`);

	if(message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}$`);
	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		if(user.uid === message.user.uid) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		message.user.peredacha = message.args[2];
		message.user.timers.peredat = 21600;
		message.user.balance -= message.args[2];
		user.balance += message.args[2];

		return message.send(`➕ ${message.user.tag}, Вы передали игроку ${user.tag} ${utils.sp(message.args[2])}$ ${smilesuccess}
		📊 Вам доступно для отправки: ${utils.sp(message.user.settings.limitt)}$
		💸 На руках: ${utils.sp(message.user.balance)}$`);
vk.api.messages.send({ user_id: user.id, message: `▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}$!` });
	}
});

cmd.hear(/^(?:рейтинг)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.siloi) return bot(`у вас установлен бан топа ${smileerror}`);
	message.user.astroen -= 1;
	message.user.log = `${message.args[0]}`;
	return bot(`ваш рейтинг: ${utils.sp(message.user.rating)}👑`);
});

cmd.hear(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});

cmd.hear(/^(?:✒ Ник)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	message.user.nik = 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	message.user.log = `магазин`
	return bot(`введите "Ник [Желаемый ник]" 👍
`);
});

cmd.hear(/^(?:💵 Пожертвования)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	message.user.nik = 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	message.user.log = `магазин`
	return bot(`введите "Попросить денег (ID) (Сумма)" 👍
`);
});

cmd.hear(/^(?:🤝 Передать)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	message.user.nik = 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	message.user.log = `магазин`
	return bot(`введите "Передать [id] [сумма]" 👍
`);
});

cmd.hear(/^(?:Ник|nik)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;

	if(message.args[1].length > message.user.nicklimit) return bot(`вы указали длинный ник. ${smileerror}`);

	message.user.tag = message.args[1];
	let smilenick = utils.pick([`😯`, `🙂`, `☺`]);
	let ggtext = utils.pick([`фантастический`, `крутой`, `классный`, `прикольный`]);
	return bot(`${ggtext} ник! ${smilenick}`);
});

cmd.hear(/^(?:бос|босс|👊🏻 Босс)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
 
    message.user.foolder += 1;
    message.user.floder += 1;
    message.user.satasti -= 1;
    message.user.radosti -= 1;
    message.user.astroen -= 1;
    message.user.log = `босс`
    return bot(`босс "Злой рик":

❤ Жизней: ${utils.sp(ewtreg)}/10.000.000.000
🎯 Вы нанесли: ${utils.sp(message.user.fgrvfty)}  урона.
👊 Сила вашей атаки: ${utils.sp(message.user.atak)}

🔝 Увеличить силу удара: «босс сила»
💳 Стоимость: 100.000.000.000$

🔨 Ударить босса: «босс атака»`, {
        attachment:'photo-176472758_457239542',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": "👊 Босс сила"
                        },
                        "color": "positive"
                    },
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"3\"}",
                        "label": "🔨 Босс атака"
                        },
                        "color": "negative"
                    },
                ]
            ]
        })
    });
});


cmd.hear(/^(?:бос атака|босс атака|🔨 Босс атака)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	message.user.log = `босс атака`
	if(message.user.energy < 0) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);
   ewtreg -= message.user.atak;
   message.user.fgrvfty += 1;
message.user.energy -= 1;
	return bot(`вы нанесли боссу ${utils.sp(message.user.atak)} урона.
❤ Жизней: ${utils.sp(ewtreg)}/10.000.000.000
🏋 Энергия: ${utils.sp(message.user.energy)}`,
		
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "👊 Босс сила"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "🔨 Босс атака"
		},
			"color": "negative"
		},
]
		]
			})
});
});

cmd.hear(/^(?:бос сила|босс сила|👊 Босс сила)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	if(message.user.balance < 100000000000) return bot(`недостаточно денег`, {attachment:'market-176472758_2439460'});
	message.user.balance -= 100000000000;
	message.user.atak += 1;
	message.user.log = `босс сила`
	return bot(`сила Вашей атаки была повышена за 100.000.000.000$ 👊
💰 Баланс: ${utils.sp(message.user.balance)}$`,
		
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "👊 Босс сила"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "🔨 Босс атака"
		},
			"color": "negative"
		},
]
		]
			})
});
});

cmd.hear(/^(?:возраст)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;

	message.user.vocrost = message.args[1];
	return bot(`вы изменили возраст на ${message.args[1]}`);
});

cmd.hear(/^(?:магазин|магаз|🛒 Магазин|🛍 Магазин|◀ В магазин)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	message.user.log = `магазин`
	return message.send(`🛍 ${message.user.tag}, разделы магазина:

🦊 Питомцы
💽 Биткоин [кол-во]
👑 Рейтинг [кол-во]

📡 Интернет магазин
✈ Перелёты
📇 Маники
📷 Каналы
💼 Бизнесы
📦 Кейсы
📲 Часы
🎄 Ёлки

⛽ Транспорт:
⠀⠀🚗 Машины
⠀⠀🛥 Яхты
⠀⠀✈ Самолеты
⠀⠀ 🚁 Вертолеты

🏰 Недвижимость:
⠀⠀🏠 Дома
⠀⠀🌇 Квартиры

⚙ Техника:
⠀⠀📱 Телефоны
⠀⠀🖥 Компьютеры

🛒 Некоторые предметы можно продавать командой «Продать [предмет]»

🔎 Для покупки используйте "[категория] [номер]".
⠀ ⠀ Например: "${utils.pick(['Телефон 7', 'Машина 1', 'Биткоин 100', 'Рейтинг 10'])}"`);
});

cmd.hear(/^(?:💸 Продать)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	message.user.log = `магазин`
	return bot(`введите «Продать [предмет]»`,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "👑 Продать рейтинг"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "🌐 Продать биткоин"
		},
			"color": "positive"
		}],
		[{ 
			"action": { 
			"type": "text", 
			"payload": "{\"button\": \"3\"}", 
			"label": "◀ В магазин" 
			}, 
			"color": "primary" 
			},		
]
		]
			})
});
});

cmd.hear(/^(?:продать|👑 Продать|🔋 Продать|🌐 Продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	message.user.log = `${message.args[0]}`;
	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}

	if(/машин/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.car) return bot(`у вас нет машины ${smileerror}`);
		let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85);

		message.user.balance += Math.floor(cars[message.user.transport.car - 1].cost * 0.85);
		message.user.transport.car = 0;

		return bot(`вы продали свою машину за ${utils.sp(a)}$`);
	}
	
		if(/маник|принтер|денежный принтер|принтермани/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.manic) return bot(`у вас нет маника ${smileerror}
		❓ Для покупки введите «Маники»`);
		if(message.user.mnc > 1) return bot(`вы не можете продать маник, пока в нём находятся деньги. ${smileerror}
		❓ Для снятия введите «Маник собрать»`);
		let a = Math.floor(manic[message.user.manic - 1].cost * 0.85);
		let b = Math.floor(manic[message.user.manic - 1].cost * 0.25);

		message.user.balance += Math.floor(manic[message.user.manic - 1].cost * 0.85);
		message.user.manic = 0;

		return bot(`вы продали свой маник за ${utils.sp(a)}$, комиссия составила ${utils.sp(b)}$`);
	}

	if(/питом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.pet) return bot(`у вас нет питомца ${smileerror}`);
		let a = Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);

		message.user.balance += Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);
		message.user.misc.pet = 0;
		message.user.pet.lvl = 0;
		message.user.pet.poterl = false;

		return bot(`вы продали своего питомца за ${utils.sp(a)}$`);
	}

	if(/желез/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zhelezo < 1) return bot(`у Вас нет железа. ⚠`);
		let a2 = message.user.zhelezo * 15000;

		var zhelezosda = message.user.zhelezo;

		message.user.balance += message.user.zhelezo * 15000;
		message.user.zhelezo = 0;

		return bot(`вы продали ${zhelezosda} железа за ${utils.sp(a2)}$ ✅`);
	}

	if(/алмаз/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.almaz < 1) return bot(`у Вас нет алмазов. ⚠`);
		let a3 = message.user.almaz * 10000000000;

		var zhelezosda2 = message.user.almaz;

		message.user.balance += message.user.almaz * 10000000000;
		message.user.almaz = 0;

		return bot(`вы продали ${zhelezosda2} алмазов за ${utils.sp(a3)}$ ✅`);
	}
    
    	if(/материю/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.emeralds < 1) return bot(`у Вас нет материю. ⚠`);
		let a3 = message.user.emeralds * 10000000000;

		var zhelezosda4 = message.user.emeralds;

		message.user.balance += message.user.emeralds * 10000000;
		message.user.emeralds = 0;

		return bot(`вы продали ${zhelezosda2} материю за ${utils.sp(a3)}$ ✅`);
	}
    
    	if(/Угль/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.coal < 1) return bot(`у Вас нет Угля. ⚠`);
		let a3 = message.user.coal * 100;

		var zhelezosda5 = message.user.coal;

		message.user.balance += message.user.coal * 100;
		message.user.coal = 0;

		return bot(`вы продали ${zhelezosda2} Угля за ${utils.sp(a3)}$ ✅`);
	}

	if(/золот/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zoloto < 1) return bot(`у Вас нет золота. ⚠`);
		let a4 = message.user.zoloto * 50000;

		var zhelezosda3 = message.user.zoloto;

		message.user.balance += message.user.zoloto * 50000;
		message.user.zoloto = 0;

		return bot(`вы продали ${zhelezosda3} золота за ${utils.sp(a4)}$ ✅`);
	}

	if(/яхт/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.yacht) return bot(`у вас нет яхты ${smileerror}`);
		let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);

		message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);
		message.user.transport.yacht = 0;

		return bot(`вы продали свою яхту за ${utils.sp(a)}$`);
	}

	if(/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.airplane) return bot(`у вас нет самолёта ${smileerror}`);
		let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);

		message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);
		message.user.transport.airplane = 0;

		return bot(`вы продали свой самолёт за ${utils.sp(a)}$`);
	}

	if(/в(и|е|я)рт(а|о)л(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.helicopter) return bot(`у вас нет самолёта ${smileerror}`);
		let a = Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);

		message.user.balance += Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);
		message.user.transport.helicopter = 0;

		return bot(`вы продали свой вертолёт за ${utils.sp(a)}$`);
	}

	if(/дом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.home) return bot(`у вас нет дома ${smileerror}`);
		let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85);

		message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85);
		message.user.realty.home = 0;

		return bot(`вы продали свой дом за ${utils.sp(a)}$`);
	}

	if(/квартир/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.apartment) return bot(`у вас нет квартиры ${smileerror}`);
		let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);

		message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);
		message.user.realty.apartment = 0;

		return bot(`вы продали свою квартиру за ${utils.sp(a)}$`);
	}

	if(/телефон/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.phone) return bot(`у вас нет телефона ${smileerror}`);
		let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);

		message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);
		message.user.misc.phone = 0;

		return bot(`вы продали свой телефон за ${utils.sp(a)}$`);
	}

	if(/рейтинг/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rating) return bot(`у вас нет рейтинга ${smileerror}`);
		let a = (150000000 * options.count);

		message.user.balance += Math.floor(a);
		message.user.rating -= options.count;

		return bot(`вы продали ${options.count} ${utils.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils.sp(Math.floor(a))}`);
	}

	if(/бизнес/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.business) return bot(`у вас нет бизнеса`);
		let a = Math.floor(businesses[message.user.business - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.business = 0;
		message.user.bizlvl = 0;

		return bot(`вы продали свой бизнес за ${utils.sp(a)}$`);
	}
	
	if(/соц_бизнес/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.businesses5) return bot(`у вас нет социального бизнеса`);
		let a = Math.floor(businesses5[message.user.businesses5 - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.businesses5 = 0;
		return bot(`вы продали свой социальный бизнес за ${utils.sp(a)}$`);
	}

	if(/биткоин/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.btc) return bot(`недостаточно биткоинов`);
		let a = Math.floor(btc * options.count);

		message.user.balance += Math.floor(a);
		message.user.btc -= options.count;

		return bot(`вы продали ${options.count}₿ за ${utils.sp(a)}$`);
	}
	
	if(/VK - MarYans/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.clanscher) return bot(`у вас нет VK - MarYans ${smileerror}`);
		let a = (99999999999999999999999 * options.count);

		message.user.balance += Math.floor(a);
		message.user.clanscher -= options.count;

		return bot(`вы продали ${options.count} ${utils.decl(options.count, ['VK - MarYans', 'VK - MarYans', 'VK - MarYans'])} за ${utils.sp(Math.floor(a))}`);
	}
  
}); 

cmd.hear(/^(?:фото)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;      
	  vk.api.call('docs.search', {q: message.args[1] + '.png', count: 10})
        .then(response => {
            let items = response.items.map(x => `doc${x.owner_id}_${x.id}`).join(',');
			let item = utils.pick(response.items);
			message.send({attachment: items})
        })
});

cmd.hear(/^(?:дайвинг|плавать|🐠 ДАЙВИНГ! |🎏 дайвинг|🎣 плавать|🎣 дайвинг|🐠 Дайвинг|🐠 Дайвинг!)$/i, async (message, bot) => {
	 
			if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
			if(message.user.timers.daiving > Date.now()) return bot(`баллон с воздухом наполняется, подождите  🎈`); 
		
			 message.user.timers.daiving = Date.now() + 600000; 
		
			 let prize = utils.pick([1, 1, 2, 2, 3, 4, 5, 6, 7]); 
		
		
			
			let denyushka = 0;
			denyushka += utils.pick([100000000]);
		
			if(message.isChat) 
		{ 
		setTimeout(() => { 
		vk.api.messages.send({ chat_id: message.chatId, message: `@id${message.user.id} (${message.user.tag}), баллон с воздухом наполнился 🎈, поплыли скорее искать новые виды рыб 🐠!`,
        attachment:'photo-176472758_457239564', 
		keyboard:JSON.stringify( 
		{ "inline": true, "buttons": [ 
		[ 
		{ "action": { "type": "text", "payload": "{}", "label": "🐠 Дайвинг" }, "color": "primary" } 
		] 
		] 
		})		
		}); 
		}, 600000); 
		} 
		
		if(!message.isChat) 
		{ 
		setTimeout(() => { 
		vk.api.messages.send({ user_id: message.user.id, message: `@id${message.user.id} (${message.user.tag}), баллон с воздухом наполнился 🎈, поплыли скорее в ДАЙВИНГ!`,
        attachment:'photo-176472758_457239564',  
		keyboard:JSON.stringify( 
		{ "inline": true, "buttons": [ 
		[ 
		{ "action": { "type": "text", "payload": "{}", "label": "🐠 Дайвинг" }, "color": "primary" } 
		] 
		] 
		}) 
		}); 
		}, 600000); 
		}
			
		
			if(prize === 1)
			{
				message.user.balance += denyushka;
				bot(`вы отправились в плавание на 150 метров 🐬, и Вам удалось запечатлить неплохие снимки разных рыб.
				💰 За снимки вам заплатили ${utils.sp(denyushka)}$`, {attachment: 'photo-176472758_457239565'});
			}
		
			if(prize === 2)
			{
				message.user.balance += denyushka;
				bot(`вам удалось заплыть довольно далеко 🐋, Вы успели поймать редкий вид рыбы.
				💰 За находку вам заплатили: ${utils.sp(denyushka)}$`, {attachment: 'photo-176472758_457239563'});
			}
		
			if(prize === 3)
			{
				message.user.balance -= 100000;
				bot(`вы попытались заплытить поглубже, но вам повстречалась акула 🦈.
				❤ За лечение вы заплатили 100.000$`, {attachment: 'photo-176472758_457239567'});
			}
			
			if(prize === 4)
			{
				message.user.balance += 100000;
				bot(`Вы заплыли очень далеко, и впоймали очень ХРУБКИЙ вид рыбы.
				💰 За находку вам заплатили: 100.000$`, {attachment: 'photo-176472758_457239569'});
			}
		
			if(prize === 5)
			{
				bot(`вы решили поверить в себя, и поплыли не в ту сторону. 🦑 Медуза ужалила вас в ногу и вы ничего не получили.`, {attachment: 'photo-176472758_457239566'});
			}
			
			if(prize === 6)
			{
				bot(`вы решили поверить в себя, и поплыли не в ту сторону. 🦑 Медуза ужалила вас в ногу и вы ничего не получили.`, {attachment: 'photo-176472758_457239566'});
			}
			
			if(prize === 7)
			{
				bot(`вы решили поверить в себя, и поплыли не в ту сторону. 🦑 Медуза ужалила вас в ногу и вы ничего не получили.`, {attachment: 'photo-176472758_457239566'});
			}
		
		});

cmd.hear(/^(?:пид|pid)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
return bot(`вы начали игру в "Правда или Действие"`,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
"action": {
"type": "text",
"label": "Правда"
},
"color": "positive"
},
{
"action": {
"type": "text",
"label": "Действие"
},
"color": "negative"
},
{
"action": {
"type": "text",
"label": "назад"
},
"color": "negative"
}]]})})
});

cmd.hear(/^(?:правда)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
const phrase = utils.pick(['с кем из тех, кто присутствует, ты хотел(а) бы сходить на свидание?', 'ты Дурак?', 'как зовут твою первую любовь?', 'какая твоя заветная мечта?', 'куда потратишь миллион евро, если он окажется у тебя в руках?', 'кого ты сильно обидел(а) и хотел бы извиниться перед ним?', 'самая гадкая твоя привычка?', 'твой самый страшный страх?', 'ты воровал(а) когда-нибудь? Что?', 'если это последние сутки в твоей жизни, какие 3 дела ты бы сделал(а)?', 'спорт или диван?', 'пиво или сок?', 'мечтаешь о своем бизнесе? О каком?', 'Любишь родных?', 'Продал бы Бизнес за 1Р?', 'Купил донат в боте?']);
return bot(`${phrase}`);
});

cmd.hear(/^(?:действие)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
const phrase = utils.pick(['изобрази обезьяну', 'сними с себя одну деталь одежды', 'разденься до нижнего белья и в таком виде оставайся до конца игры', 'лизни мыло', 'страстно поцелуй человека противоположного пола из нашей компании', 'надень свою одежду наизнанку и оставайся в таком виде до конца игры', 'спой любую песню', 'поговори со стеной, делая вид, что она отвечает', 'покажи танец живота', 'спародируй своего лучшего друга', 'расскажи один из своих секретов', 'подойди к незнакомцу и признайся в любви', 'нарисуй монобровь на своем лице', 'изображай все, что тебе скажет другой игрок на протяжении нескольких минут', 'Потанцуй перед стенкой', 'Обнеми стенку', 'Поцелуй стенку']);
return bot(`${phrase}`);
});

cmd.hear(/^(?:Время|time)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;   
	await bot(`Время в России

⏰ | Томск: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏰ | Новосибирске: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏰ | Екатеринбург: ${new Date().getHours()+5}:${new Date().getMinutes()}:${new Date().getSeconds()}
⏰ | Москва: ${new Date().getHours()-4}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
});

cmd.hear(/^(?:Клава для казино)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
return bot(`
Готово
`,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "🎰 казино 500ккк"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "🎰 казино 999кккккк"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "🎰 казино все"
		},
			"color": "primary"
		},
		{ 
			"action": { 
			"type": "text", 
			"payload": "{\"button\": \"3\"}", 
			"label": "🎰 казино 1кккк" 
			}, 
			"color": "negative" 
			},		
]
		]
			})
});
});

cmd.hear(/^(?:Найди смайлик)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
return bot(`
🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙂🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃
 
Найди смайлик который отличается`); 
});

cmd.hear(/^(?:Семья)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
    if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);
return bot(`
👪 Муж/Жена: ${users[message.user.marriage.partner].tag}
❤ lvl любви: ${message.user.lvllove}
😄 Настроение: ${message.user.astroen}
👶 Сын: ${message.user.san}

`, {attachment: 'photo-176472758_457239423'}); 
});

cmd.hear(/^(?:Назвать ребёнка)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.lvllove< 5) return bot(`❤ Надо 5 lvl ЛЮБВИ`)
	message.user.log = `${message.args[0]}`;
	
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	message.user.san = message.args[1];
	let smilenick = utils.pick([`😯`, `🙂`, `☺`]);
	let ggtext = utils.pick([`Норм`, `топчик`, `:D`, `няха`]);
	return bot(`${ggtext} Име! ${smilenick}`);
});

cmd.hear(/^(?:Изменить име ребёнку)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.lvllove< 5) return bot(`❤ Надо 5 lvl ЛЮБВИ`)
	message.user.log = `${message.args[0]}`;
	
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	message.user.san = message.args[1];
	let smilenick = utils.pick([`😯`, `🙂`, `☺`]);
	let ggtext = utils.pick([`Норм`, `топчик`, `:D`, `няха`]);
	return bot(`${ggtext} Име! ${smilenick}`);
});

cmd.hear(/^(?:Ютуберы)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
return bot(`
1) @bogbig (The Nexon)
2) @id268066701 (YouTube)
`); 
});

cmd.hear(/^(?:Топы|👑 Топы)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
return bot(`Команды топа:
🏆 Топ биткоинов
🧿 Топ VK - MarYans
🏆 Топ баланс
🏆 Топ
🏆 Топ по набраных команд
🏆 Топ сообщений
`); 
});

cmd.hear(/^(?:Передачи|📝 Передачи)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
return bot(`Команды для передачи:
🤝 Передать [id] [сумма]
👑 Передать рейтинг [id] [сумма]
💽 Передать биткоины [id] [сумма]
`); 
});

cmd.hear(/^(?:Обучение|📒 Обучение)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
await bot(`🚀 Привет, это краткое обучение как играть в бота.

Перед началом игры потребуется пройти регистрацию.
Ты спросишь «А как?»
Всё очень просто, просто пиши «Профиль» и бот сам тебя зарегистрирует.`); 
await bot(`✨ Второй раздел обучения посвящён ознакомлению с функционалом бота.
Если ты не знаешь как начать играть напиши «Помощь», либо же «Команды» и тебе откроется весь список команд бота.`); 
await bot(`💸 Третий раздел посвящается часто задаваемому вопросу во многих ботах: «Как поднять денег?»
Ответ прост: Тебе нужно играть в Казино/работать.`); 
await bot(`📢 Обязательно попробуй команду «клик», чтобы заработать немного денег, а если хочешь больше, то покупай улучшения в магазине.`); 
await bot(`💬 И наконец, ты можешь приобрести ферму, маник или бизнес, а может и верного питомца, которого ты сможешь отправить в поход, и который будет приносить тебе доход с похода.`); 
await bot(`💯 Раздел, посвящённый работам.
Работая, ты увеличиваешь свой стаж, и со временем открываешь новые виды работ.
Чтобы посмотреть список работ, введи «Работа», далее тебе понадобится устроиться на нее (пока ты новичок, тебе доступна только одна работа), для этого напиши «Работа 1». Всё, ты устроился! Теперь введи «Работать», но учти, что работать ты можешь только 5 раз в 10 минут.`); 
await bot(`📌 Главная задача в боте - подняться в топ.
Есть 2 вида топа:
Команда «Топ» - это статистика пользователей бота с наибольшим количеством рейтинга.
Команда «Топ баланс» показывает статистику пользователей с наибольшим балансом.
Команда «Топ биткоинов» показывает статистику пользователей с наибольшим биткоинами.
Команда «Тренды» показывает статистику пользователей с наибольшим подписчеков в ютубе.
Команда «Топ просмотры» показывает статистику пользователей с наибольшим просмотром в ютубе.`); 
await bot(`✅ Получение «Халявы».
Очень часто в боте выходят различные обновления, как маленькие, так и крупные. Чтобы не упустить халявный промокод во время таких обновлений, обязательно подпишись на нашего бота и поставь «Уведомления о новых записях».

💡 На этом обучение оканчивается. Приятной игры в нашем боте!`); 
});

cmd.hear(/^(?:Випы)/i, async (message, args, bot) => {  
		let systems, sozdatels, admins, moders, chat; 
		systems = '\n<|ВИПЫ|>\n';
		for (let id in users) {
			if(users[id]){
			let user = users[id];

			if (user.settings.adm == 2) systems += `@id${users[id].id}(${users[id].prefix})\n`; 
			}
		}
		let text = `\n`;
		if (systems.length != 26) text += systems; 
		return message.send(`${text}`);
});

cmd.hear(/^(?:аправила)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
	if(message.user.settings.adm< 2) return bot(`📛|Доступ запрещен`)
return bot(`
***********************************************************************
🔻 ➾ Актуальный список правил '' бота « 🔻 
📝 ➾ для АДМИНИСТРАТОРОВ И VIP « 📝 

🔸 ➾ 1. Хамство в ответе на репорт. [Выговор] 
🔸 ➾ 2. Неадекватные ответы на репорт. ['Выговор] 
🔸 ➾ 3. Накрутка ответов на репорт. [Выговор] 
🔸 ➾ 4. Блат/накрутка другим игрокам каких-любо игровых средств. [Бан] 
🔸 ➾ 5. Обман спец.администрации. [Бан] 
🔸 ➾ 6. Выдача наказания без определённой причины. [Выговор] 
🔸 ➾ 7. Оскорбление игроков в любой беседе/чате. [Выговор] 
🔸 ➾ 8. Слив какой-либо административной информации. [Бан] 
🔸 ➾ 9. Ражигание любых конфликтов между игроками. [Выговор] 
🔸 ➾ 10. Выдача/передача администраторами валюты. [Бан]                                   
**********************************************************************
`);
});

cmd.hear(/^(?:аник)\s([0-9]+)\s(выкл|вкл)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
  	
	if(message.user.settings.adm < 5) return bot(`📛|Доступ запрещен`)

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`убедитесь в правильности ID игрока`);
	
	if(message.args[2].toLowerCase() === 'выкл')
	{
		user.mention = false;
		await bot(`гипперссылка игрока отключена! `);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[НИК]
▶ Администратор [id${message.user.id}| ${message.user.prefix}] отключил вам гипперссылку!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}

	if(message.args[2].toLowerCase() === 'вкл')
	{
		user.mention = true;
		await bot(`гипперссылка игрока включена! `);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[НИК]
▶ Администратор [id${message.user.id}| ${message.user.prefix}] включил вам гипперссылку!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:стандарт кнопка|стандартная кнопка|стандарт|кнопка|кнопки|кнопка gay|кнопка хуй|выключить кнопки)$/i, (message) => { 
{
	if(user.full == false) return;
	return message.send(`[id${message.user.id}|${message.user.tag}], вы включили стандартные кнопки!\n🔁 Для добавления новых используйте: Кнопка [Текст]
	`,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
		"action": { 
		"type": "text", 
		"payload": "{\"button\": \"1\"}", 
		"label": "🏆 Лучшие кланы" 
		}, 
		"color": "positive" 
		}, 
		{ 
		"action": { 
		"type": "text", 
		"payload": "{}", 
		"label": "📦 Кейсы" 
		}, 
		"color": "positive" 
		}, 
		{ 
		"action": { 
		"type": "text", 
		"payload": "{}", 
		"label": "Нету" 
		}, 
		"color": "primary" 
		}], 
		[{ 
		"action": { 
		"type": "text", 
		"payload": "{}", 
		"label": "💼 Бизнесы" 
		}, 
		"color": "primary" 
		}, 
		{ 
		"action": { 
		"type": "text", 
		"payload": "{}", 
		"label": "🎁 Бонус" 
		}, 
		"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "📋 Профиль" 
	}, 
	"color": "negative" 
		}] 
	] 
	}) 
	}); 
	} 
	});
	
	cmd.hear(/^(?:🎲 Покер)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	const szc = utils.pick([`Синий`,`зелёный`,`чёрный`]);
	const szc1 = utils.pick([`Синий`,`зелёный`,`чёрный`]);
	const szc2 = utils.pick([`Синий`,`зелёный`,`чёрный`]);
	const ping2 = utils.random(300000000);
	const ping3 = utils.random(300000000);
	const ping4 = utils.random(300000000);
return message.send(`${message.user.tag}, для игры в покер используйте команду «покер (синий|зелёный|чёрный) [сумма]»
`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🎲 ${szc} ${ping4}`
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🎲 ${szc1} ${ping3}`
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `🎲 ${szc2} ${ping2}`
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "◀ К играм" 
	}, 
	"color": "positive" 
	}],
] 
}) 
}); 
});
	
cmd.hear(/^(?:Покер|🎲)\s(синий|зелёный|чёрный)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
if(!Number(message.args[2])) return;
message.args[2] = Math.floor(Number(message.args[2]));
if(message.args[2] <= 0) return;
if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег 😔`);
if(message.args[2] <= 500) return bot(`ставка должна быть больше 500$ 😔`);
else if(message.args[2] <= message.user.balance)
{
message.user.balance -= message.args[2];
const rand = utils.pick([0, 1]);
const szc = utils.pick([`Синий`,`зелёный`,`чёрный`]);
const ping4 = utils.random(300000000);
const ping7 = utils.random(300000000);
const nav = Number(message.args[1].toLowerCase().replace(/синий/, '1').replace(/зелёный/, '2').replace(/чёрный/, '3'));
if(rand === nav)
{
const multiply = utils.pick([1, 0.80, 3, 0.95, 1.25, 1.5, 2.75, 2, 1.5]);
message.user.balance += Math.floor(message.args[2] * multiply);
return bot(`Выпала ${nav === 1 ? `Таже⤴` : `Другая⤵`}
✅ Вы заработали +${utils.sp(message.args[2] * multiply)}$
💰 Баланс: ${utils.sp(message.user.balance)}$`,
{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[{
"action": {
"type": "text",
"payload": "{}",
"label": `🎲 ${szc} ${ping4}`
},
"color": "default"
}]
]
})
})
} else {
return bot(`Выпала ${nav === 2 ? `Таже⤴` : `Другая⤵`}
❌ Вы потеряли ${utils.sp(message.args[2])}$
💰 Баланс: ${utils.sp(message.user.balance)}$`,
{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[{
"action": {
"type": "text",
"payload": "{}",
"label": `🎲 ${szc} ${ping7}`
},
"color": "default"
}]
]
})
})
}
}
});

cmd.hear(/^(?:Кнопка)\s(.*)\s(.*)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
return bot(`
Я выполнил!
`,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": `${message.args[1]}`
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": `${message.args[2]}`
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": `${message.args[3]}`
		},
			"color": "primary"
		},
]
		]
			})
});
});

cmd.hear(/^(?:правила)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
return bot(`
Незнание правил не освобождает от ответственности. Начав использовать бота Вы подтверждаете свое согласие с данными правилами. Администрация не несет ответственности за временную или постоянную невозможность игры на ботах конкретным лицом или группой лиц. Игроки обязаны выполнять требования Администрации и предписания данных правил. Администрация имеет право корректировать данный свод правил без уведомления игрока. Ответственность несет владелец аккаунта, независимо от того, кто совершал действия под данным аккаунтом. 

№1. Запрещена продажа/попытка продажи валюты.
№2. Запрещена продажа услуги "буста" чего-либо.
№3. Запрещён обман игроков/администрации.
№4. Запрещена реклама чего-либо в комментариях и/или никнейме. 
№5. Запрещена любая автоматизация действий в боте.
№6. Запрещено разглашать ложную информацию.
№7. Запрещен флуд/спам в комментариях. 
№8. Запрещены выражения, унижающие человеческое достоинство, дискриминирующие или разжигающие межнациональную рознь. 
№9. Запрещено писать от имени группы в комментариях. 
№10. Запрещено оскорбление родителей игроков.
№11. Администрация не переносит достижения на другой аккаунт VK.
№12. Запрещены попытки махинаций оплатами, или попытки обмануть администрацию.
№13. Игровые деньги - не имеют никакой привязки к реальным деньгам, не имеющие никакой реальной фактической стоимости и используются исключительно для использования в рамках игрового процесса.
№14. Запрещено преднамеренно использовать баги и недочеты для получения внутриигровой валюты
№15. Вы должны сообщить об найденном баге с помощью темы предложений либо с помощью команды "Репорт [описание бага]". За найденный баг Вам будет начислен бонус в зависимости от критичности.
№16. Запрещена покупка/попытка покупки валюты/буста от других игроков.
№17. Администрация никогда не будет просить перевести игровую валюту на свой профиль для её приумножения. Будьте осторожны!
№18. Если вы проиграли в команде: Взлом админки (тот Донат не вернётся который был)

5. Взаимодействие с Администрацией бота

№1. Запрещено обращаться к Администрации бота без крайней необходимости. Любое обращение к Администрации должно содержать четкое изложение проблемы игрока или вопрос, касающийся конкретно работы бота.
№2. Запрещено неуважительное отношение к Администрации бота.
№3. Запрещены угрозы, мольбы, провокации и т.п. в адрес Администрации бота.
№4. Запрещены необоснованные просьбы помощи админов или модераторов. Когда вы зовете их, обоснуйте, почему они должны помочь вам вам. Даже если причина веская, администратор может отказать.
№5. При подаче заявки на должность, в пункте "Прочитали ли вы правила нашего бота?", напишите - "Обязуюсь беспрекословно следовать правилам и не нарушать их".
№6. Запрещено вмешательство в работу Администрации.
№7. Запрещено выпрашивать ресурсы и т.д. у Администрации.
№8. Запрещен обман Администрации.
№9. Запрещена публикация бесед с Администрацией либо их содержания без предварительного согласования.
№10. Запрещено обсуждать наказание, наложенное Администрацией.
№11. Запрещено распространять слухи, клевету о боте и Администрации.

`); 
});

cmd.hear(/^(?:админ|Администратор|admin|administrator)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.settings.adm< 6) return bot(`📛|Доступ запрещен`, {attachment:'market-176472758_2494712'});
return bot(`
☑ » Админ-Панель « ☑
✅ » setnicklimit (ид игрока) (число)
✅ » ответ (ид игрока) (текст)
✅ » выдать (ид игрока) (сумма)
✅ » деньги (Коло-во)
✅ » биткоинов  выдать (ид игрока) (сумма)
✅ » get - проверка игрока
✅ » очистка чата
✅ » removeopit (ид) - забрать опыт
✅ » giveopit (ид) (сколько) - дать опыт
✅ » выдать рейтинг (ид) (сколько) - выдать рейтинг
✅ » выдать warn (ид) (сколько)
✅ » админкейс - админ кейс
✅ » випкейс - вип кейс
✅ » вип выд (ид игрока) сумма
✅ » MarYans (сумма)
✅ » ютубкейс - ютуб кейс
✅ » ювыдать подписчиков (ID) (коло-во)
✅ » ювыдать просмотры (ID) (коло-во)
✅ » аник (ид) (выкл|вкл)
✅ » фейк профиль - включит фейк профиль
✅ » фейк профиль off - выключит фейк профиль

✅ » аправила (правила для АДМИНИСТРАТОРОВ И VIP)
✅ » админ (команды админа)
✅ » возможность писать самые секретные команды бота
✅ » скидки на товары
✅ » друзья с разработчиком
✅ » длина ника до 150 (просить у разработчика)

`); 
});

cmd.hear(/^(?:❓ Маник помощь|Маник помощь|помощь маник|принтер помощь|🖥 Маник помощь)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
if(message.user.manic < 1) return bot(`У вас нет маника ${smileerror}
❓ Для покупки введите «Маники»`);
else 
{
	return bot(`система маников:

	🖥 Маники - они же денежные принтеры или манипринтеры, введите «Маник» для просмотра статистики.
	
	🔋 При 0% заряде батареи - печать денег приостанавливается, по мере необходимости покупайте новую.
	
	🆘 Перегрев играет основную роль в жизни вашего принтера, если не следить за его уровнем - ваш принтер взорвется, и вы потеряете всю прибыль. 
	
	💧 Охлаждающий гель служит для охлаждения вашего принтера, для понижения уровня перегрева.
	
	🛒 Для просмотра списка маников введите «Маники», для покупки охлаждения, батареи, введите «Маник магазин»
	
	💰 Для получения напечатанных денег введите «Маник собрать»`);
}

});

cmd.hear(/^(?:маник магазин|магазин маник)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	if(message.user.manic < 1) return message.send(`у вас нет маника 😟
	❓ Для покупки введите «Маники»`);
	return bot(`комплектующие:
	🔋 1. Батарея (300.000$)
	💧 2. Охлаждающий гель (800.000$)
	
	❓ Для покупки введите «Маник магазин [ID]»
⠀  Например: "${utils.pick(['Маник магазин 1', 'Маник магазин 2'])}"`);
});

cmd.hear(/^(?:кнб|✂ Кнб)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	return message.send(`📒 ${message.user.tag}, как сыграть в Камень-ножницы-бумага?

⛰ Выбрать камень:
✏ кнб к

✂ Выбрать ножницы:
✏ кнб н

📄 Выбрать бумагу:
✏ кнб б`);
});

cmd.hear(/^(?:кнб к)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);


	if(prize === 1)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал бумагу 🤕`, {attachment: 'photo-176472758_457239692'});
	}

	if(prize === 2)
	{
		const ping684 = utils.random(10000);
	    user.balance += ping684;
		return bot(`победа! Противник показал ножницы 😜

        💰 Выигрыш: ${ping684} $`, {attachment: 'photo-176472758_457239693'});
	}

	if(prize === 3)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал бумагу 🤕`, {attachment: 'photo-176472758_457239692'});
	}

	if(prize === 4)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал бумагу 🤕`, {attachment: 'photo-176472758_457239692'});
	}

	if(prize === 5)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал бумагу 🤕`, {attachment: 'photo-176472758_457239692'});
	}

	if(prize === 6)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал бумагу 🤕`, {attachment: 'photo-176472758_457239692'});
	}
	if(prize === 7)
	{
		return bot(`ничья! Противник показал камень 🤕`, {attachment: 'photo-176472758_457239691'});
	}
	if(prize === 8)
	{
		return bot(`ничья! Противник показал камень 🤕`, {attachment: 'photo-176472758_457239691'});
	}
	if(prize === 9)
	{
		return bot(`ничья! Противник показал камень 🤕`, {attachment: 'photo-176472758_457239691'});
	}
	if(prize === 10)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал бумагу 🤕`, {attachment: 'photo-176472758_457239692'});
	}

	if(prize === 11)
	{
		const ping684 = utils.random(10000);
	    user.balance += ping684;
		return bot(`победа! Противник показал ножницы 😜

        💰 Выигрыш: ${ping684} $`, {attachment: 'photo-176472758_457239693'});
	}

	if(prize === 12)
	{
		const ping684 = utils.random(10000);
	    user.balance += ping684;
		return bot(`победа! Противник показал ножницы 😜

        💰 Выигрыш: ${ping684} $`, {attachment: 'photo-176472758_457239693'});
	}
});

cmd.hear(/^(?:кнб н)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);


	if(prize === 1)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал камень 🤕`, {attachment: 'photo-176472758_457239691'});
	}

	if(prize === 2)
	{
		const ping684 = utils.random(10000);
	    user.balance += ping684;
		return bot(`победа! Противник показал бумагу 😜

        💰 Выигрыш: ${ping684} $`, {attachment: 'photo-176472758_457239692'});
	}

	if(prize === 3)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал камень 🤕`, {attachment: 'photo-176472758_457239691'});
	}

	if(prize === 4)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал камень 🤕`, {attachment: 'photo-176472758_457239691'});
	}

	if(prize === 5)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал камень 🤕`, {attachment: 'photo-176472758_457239691'});
	}

	if(prize === 6)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал камень 🤕`, {attachment: 'photo-176472758_457239691'});
	}
	if(prize === 7)
	{
		return bot(`ничья! Противник показал ножницы 🤕`, {attachment: 'photo-176472758_457239693'});
	}
	if(prize === 8)
	{
		return bot(`ничья! Противник показал ножницы 🤕`, {attachment: 'photo-176472758_457239693'});
	}
	if(prize === 9)
	{
		return bot(`ничья! Противник показал ножницы 🤕`, {attachment: 'photo-176472758_457239693'});
	}
	if(prize === 10)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал камень 🤕`, {attachment: 'photo-176472758_457239691'});
	}

	if(prize === 11)
	{
		const ping684 = utils.random(10000);
	    user.balance += ping684;
		return bot(`победа! Противник показал бумагу 😜

        💰 Выигрыш: ${ping684} $`, {attachment: 'photo-176472758_457239692'});
	}

	if(prize === 12)
	{
		const ping684 = utils.random(10000);
	    user.balance += ping684;
		return bot(`победа! Противник показал бумагу 😜

        💰 Выигрыш: ${ping684} $`, {attachment: 'photo-176472758_457239692'});
	}
});

cmd.hear(/^(?:кнб б)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);


	if(prize === 1)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал ножницы 🤕`, {attachment: 'photo-176472758_457239693'});
	}

	if(prize === 2)
	{
		const ping684 = utils.random(10000);
	    user.balance += ping684;
		return bot(`победа! Противник показал камень 😜

        💰 Выигрыш: ${ping684} $`, {attachment: 'photo-176472758_457239691'});
	}

	if(prize === 3)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал ножницы 🤕`, {attachment: 'photo-176472758_457239693'});
	}

	if(prize === 4)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал ножницы 🤕`, {attachment: 'photo-176472758_457239693'});
	}

	if(prize === 5)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал ножницы 🤕`, {attachment: 'photo-176472758_457239693'});
	}

	if(prize === 6)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал ножницы 🤕`, {attachment: 'photo-176472758_457239693'});
	}
	if(prize === 7)
	{
		return bot(`ничья! Противник показал бумагу 🤕`, {attachment: 'photo-176472758_457239692'});
	}
	if(prize === 8)
	{
		return bot(`ничья! Противник показал бумагу 🤕`, {attachment: 'photo-176472758_457239692'});
	}
	if(prize === 9)
	{
		return bot(`ничья! Противник показал бумагу 🤕`, {attachment: 'photo-176472758_457239692'});
	}
	if(prize === 10)
	{
		const ping684 = utils.random(10000);
	    user.balance -= ping684;
		return bot(`проигрыш! Противник показал ножницы 🤕`, {attachment: 'photo-176472758_457239693'});
	}

	if(prize === 11)
	{
		const ping684 = utils.random(10000);
	    user.balance += ping684;
		return bot(`победа! Противник показал камень 😜

        💰 Выигрыш: ${ping684} $`, {attachment: 'photo-176472758_457239691'});
	}

	if(prize === 12)
	{
		const ping684 = utils.random(10000);
	    user.balance += ping684;
		return bot(`победа! Противник показал камень 😜

        💰 Выигрыш: ${ping684} $`, {attachment: 'photo-176472758_457239691'});
	}
});

cmd.hear(/^(?:маник магазин 1|магазин маник 1)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	return bot(`ваша батарея заряжена достаточно, вы сможете купить новую в том случае, если ваша будет на критическом уровне заряда. 🔋`);
});

cmd.hear(/^(?:маник магазин 2|магазин маник 2)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	return bot(`вы купили охлаждающий гель для своего принтера.   `);
});

cmd.hear(/^(?:Развлекательные|🍀 Развлекательные)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
return message.send(`🍀 ${message.user.tag}, Развлекательные:
📺 Гиф 
⏰ Время
🙊 Анекдот 
🍷 Бутылочка 
🔮 Шар [фраза] 
📷 Фото [фраза]
📊 Инфа [фраза] 
🗣 Когда (текст)
☁ Погода (город)
🎀 Оцени [картинка] 
↪ Переверни [фраза] 
🇺🇲 Переведи [Слово] 
🗣 Пид - правда или действия
⚖ Выбери [фраза] или [фраза2] 
🎵 Музыка - рандом музыка из бд бота 
✉ стикер за бота (ID) - пример: стикер за бота 8755
✉ сообщение за бота (текст) - пример: сообщение за бота Топ
🎶 Плейлист - отправит плейлист созданный создателем из разных песен `);
});

cmd.hear(/^(?:маник)\s(?:снять|собрать)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	if(!message.user.manic) return bot(`простите, но у вас нет маника. 
	❓ Для покупки введите «Маники»`);
	if(message.user.mnc < 1) return bot(`ваш маник пуст.
	❓ Для просмотра статистики введите «Маник»`);

	const manic_snyal = message.user.mnc;

	message.user.balance += message.user.mnc;
	message.user.mnc = 0;

	return bot(`вы собрали со своего маника ${utils.sp(manic_snyal)}$`);
});

cmd.hear(/^(?:маник)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	if(!message.user.manic) return bot(`у вас нет маника. 
	❓ Для покупки введите «Маники»`);
	const mnc = manic.find(x=> x.id === message.user.manic);
	var nagryzka = utils.random(4, 24);
	return bot(`статистика:
	📇 Модель: ${mnc.name}
	
	💸 Скорость печатки: ${utils.sp(mnc.earn)}$/5 мин.
	
	💶 Напечатано: ${utils.sp(message.user.mnc)}$
	
	💧 Нагрев: ${nagryzka}°C
	🔋 Батарея: RICH ENERGY 1.5v
	
	✔ Статус: Работает

`, {
		attachment: manic[message.user.manic - 1].att
	});
});

cmd.hear(/^(?:маники|принтеры|манеки|ман|принтер|🖨 Маники)\s?([0-9]+)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	if(!message.args[1]) return bot(`денежные принтеры:
1. 🖨 Monfury B8 — 400 миллионов $
⠀ ⠀ ⠀ Прибыль: 416.000 $ в 5 мин.

2. 🖨 Avalon E9 — 1,1 миллиардов $
⠀ ⠀ ⠀ Прибыль: 15.830.000 $ в 5 мин.

3. 🖨 Dragon Z5 — 3,7 миллиардов $
⠀ ⠀ ⠀ Прибыль: 41.690.000 $ в 5 мин.

4. 🖨 Estelon 4 — 10,3 миллиарда $
⠀ ⠀ ⠀ Прибыль: 125.000.000 $ в 5 мин.

5. 🖨 XSUT X5 — 22,9 миллиардов $
⠀ ⠀ ⠀ Прибыль: 300.000.000 $ в 5 мин.

6. 🖨 MoneyMaker V2 — 50,8 миллиардов, 500 тысяч $
⠀ ⠀ ⠀ Прибыль: 300.000.000 $ в 5 мин.

7. 🖨 Giant X10
⠀ ⠀ ⠀ Прибыль: 1.300.000.000 $ в 5 мин.

👉🏻 Максимально 1 маник!

🛍 Для покупки введите "Маники [ID]"
📌 Например: Маники 1`);

	const sell = manic.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.manic) return bot(`у вас уже есть маник (${manic[message.user.manic - 1].name}), введите "Продать маник"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`, {attachment:'market-176472758_2439460'});
	else if(message.user.balance >= message.args[1])
	{
		message.user.balance -= sell.cost;
		message.user.manic = sell.id;
		message.user.mnc = 0;
		message.user.manic_pribil = sell.earn;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:Страны)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	return bot(`Список стран:

	1.❓Не указана
	2.🇺🇸США
	3.🇷🇺Россия
	4.🇰🇷Япония
	5.🇺🇦Украина
	6.🇰🇿Казахстан
	7.🇧🇾Белоруссия
	
	Для выбора страны проживания введите: Страна [номер]`);
});

cmd.hear(/^(?:Grand Theft Auto V|👾 Grand Theft Auto V)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	if(!message.user.pk) return bot(`У вас нету пк`);
	message.user.astroen += 36;
	return bot(`
	Вы поиграли в Grand Theft Auto V`, {attachment: 'photo-176472758_457239355'});
});

cmd.hear(/^(?:Мой пк)$/i, async (message, bot) => {
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	if(!message.user.pk) return bot(`У вас нету пк`);
	message.user.astroen += 36;
	return bot(`
	информация о вашей Компьютере:

📋 Название: ${pk[message.user.pk - 1].name}
💰 Стоимость: ${utils.sp(pk[message.user.pk - 1].cost)}$
🖥 Компьютер выкл`, {attachment: `${pk[message.user.pk - 1].att}`});
});

cmd.hear(/^(?:Дота 2|👾 Дота 2)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	if(!message.user.pk) return bot(`У вас нету пк`);
	message.user.astroen += 19;
	return bot(`
	Вы поиграли в Дота 2`, {attachment: 'photo-176472758_457239356'});
});

cmd.hear(/^(?:CS|👾 CS)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	if(!message.user.pk) return bot(`У вас нету пк`);
	message.user.astroen += 12;
	return bot(`
    Вы поиграли в CS`, {attachment: 'photo-176472758_457239353'});
});

cmd.hear(/^(?:Майнкрафт|👾 Майнкрафт)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	if(!message.user.pk) return bot(`У вас нету пк`);
	message.user.astroen += 6;
	return bot(`
	Вы поиграли в Майнкрафт`, {attachment: 'photo-176472758_457239354'});
});

cmd.hear(/^(?:Игры для пк)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	return bot(`🕳 Игры: 
👾 Майнкрафт (+6) к настроению 
👾 CS (+12) к настроению 
👾 Дота 2 (+19) к настроению 
👾 Grand Theft Auto V (+36) к настроению 
 🛑 Чтобы поиграть в игру напишите: (Название игры)`,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "👾 Майнкрафт"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "👾 CS"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "👾 Дота 2"
		},
			"color": "positive"
		},
		{ 
			"action": { 
			"type": "text", 
			"payload": "{\"button\": \"3\"}", 
			"label": "👾 Grand Theft Auto V" 
			}, 
			"color": "negative" 
			}, 
]
		]
			})
});
});

cmd.hear(/^(?:Страна 7)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.transport.strana = 7;
		return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
	}
});

cmd.hear(/^(?:Страна 6)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.strana = 6;
		return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
	}
});

cmd.hear(/^(?:Интернет магазин|📡 Интернет магазин)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	return bot(`👤 Интернет магазин:
1) 🎧 Bluetooth Наушники - 1 Трелеон (1.000.000.000.000$)
2) 🔬 Микроскоп - 500 миллиарда (500.000.000.000$)
3) 💨 Вентилятор для корпуса DeepCool "XFAN 80L/R" 299 миллиарда (299.000.000.000$)
4) 💨 Вентилятор для корпуса TITAN "DCF-8025L12S" 200 миллиарда (200.000.000.000$)

🛍 Для покупки введите "Интернет магазин [ID]"
📌 Например: Интернет магазин 1

🖥 Инфа о Вашем ПК: Мой пк`, {attachment: 'photo-176472758_457239503'});
});

cmd.hear(/^(?:обнова ошибка)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
	for(i=0;i<20000;i++){ 
	if(users[i]){ 
	users[i].bozka = false;
	} 
	} 
	return message.send(`готово!`);
});

cmd.hear(/^(?:обнова404)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
	for(i=0;i<20000;i++){ 
	if(users[i]){ 
	users[i].nik = 8;
	users[i].nik1 = 8;
	users[i].nik2 = 8;
	users[i].nik3 = 8;
	} 
	} 
	return message.send(`готово!`);
});

cmd.hear(/^(?:обнова -бтк)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
	for(i=0;i<20000;i++){ 
	if(users[i]){ 
	users[i].btc = 500000;
	} 
	} 
	return message.send(`готово!`);
});

cmd.hear(/^(?:Интернет магазин 1)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.nik< 8) return bot(`⚠ Вы уже заказали его ждите когда он приедет.`);
	if(message.isChat) return bot(`🆘 Команда работает только в ЛС боту!`);
	if(message.user.balance< 1000000000000) return bot(`Недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
	message.user.balance -= 1000000000000;
	message.user.nik = 0;
	const szc251 = utils.pick([`Месяц`,`Год`,`Неделю`,`Сутки`]);
	return bot(`🎧 Вы заказали Bluetooth Наушники!
⏳ Приедут через ${szc251}
🆘 Но если не привезут то значит покупайте опять, их скорее всего забрал грабитель или потеряли.`, {attachment: 'photo-176472758_457239503'});
});

cmd.hear(/^(?:Интернет магазин 2)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.nik1< 8) return bot(`⚠ Вы уже заказали его ждите когда он приедет.`);
	if(message.isChat) return bot(`🆘 Команда работает только в ЛС боту!`);
	if(message.user.balance< 500000000000) return bot(`Недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
	message.user.balance -= 500000000000;
	message.user.nik1 = 0;
	const szc251 = utils.pick([`Месяц`,`Год`,`Неделю`,`Сутки`]);
	return bot(`🎧 Вы заказали Микроскоп!
⏳ Приедут через ${szc251}
🆘 Но если не привезут то значит покупайте опять, их скорее всего забрал грабитель или потеряли.`, {attachment: 'photo-176472758_457239504'});
});

setInterval(function () {
user.setOptions({
token: '1b4f7303e06e5058ccba86a8c38fbe754864f4147606d2253907556580a0cdc93768328f5be8148a423ed'
});
let array = users.map(x=>x), balance = 0, bank = 0, btc = 0, rating = 0, floder = 0, nik5 = 0;
for(let i = 1; i < array.length; i++) {
balance += array[i].balance
bank += array[i].bank
rating += array[i].rating
btc += array[i].btc
floder += array[i].floder
nik5 += array[i].nik5
}
let wyoogdff = utils.pick([`👥 Зарегистрированно игроков: ${utils.sp(users.length)}`, `🆘 В группе бот отвечает МГНОВЕННО!`, `💎 Самые топовые люди у нас!`, `💭 Обработано более ${utils.sp(floder)} сообщений`, `⚔ Создано кланов: ${utils.sp(nik5)}`, `✅ Узнайте курс валют с помощью команды «Курс»!`, `🔎 Возникли вопросы? Пиши в репорт.`, `🍒 На 1.500 игроков будет конкурс.`, `🎰 Сыграй в казино и выбий ×50`, `🍓 Напиши ЛЮБОЕ сообщение группе ДЛЯ ИГРЫ!`]);
user.api.status.set({
group_id: 176472758,
text: `${wyoogdff}`})

}, 60000);

cmd.hear(/^(?:Интернет магазин 3)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.nik2< 8) return bot(`⚠ Вы уже заказали его ждите когда он приедет.`);
	if(message.isChat) return bot(`🆘 Команда работает только в ЛС боту!`);
	if(message.user.balance< 299000000000) return bot(`Недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
	message.user.balance -= 299000000000;
	message.user.nik2 = 0;
	const szc251 = utils.pick([`Месяц`,`Год`,`Неделю`,`Сутки`]);
	return bot(`🎧 Вы заказали Вентилятор для корпуса DeepCool "XFAN 80L/R"!
⏳ Приедут через ${szc251}
🆘 Но если не привезут то значит покупайте опять, их скорее всего забрал грабитель или потеряли.`, {attachment: 'photo-176472758_457239511'});
});

cmd.hear(/^(?:Интернет магазин 4)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;	
	if(message.user.nik3< 8) return bot(`⚠ Вы уже заказали его ждите когда он приедет.`);
	if(message.isChat) return bot(`🆘 Команда работает только в ЛС боту!`);
	if(message.user.balance< 200000000000) return bot(`Недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
	message.user.balance -= 200000000000;
	message.user.nik3 = 0;	
	const szc251 = utils.pick([`Месяц`,`Год`,`Неделю`,`Сутки`]);
	return bot(`🎧 Вы заказали Вентилятор для корпуса TITAN "DCF-8025L12S"!
⏳ Приедут через ${szc251}
🆘 Но если не привезут то значит покупайте опять, их скорее всего забрал грабитель или потеряли.`, {attachment: 'photo-176472758_457239510'});
});

cmd.hear(/^(?:Страна 5)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.strana = 5;
		return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
	}
});

cmd.hear(/^(?:Страна 4)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.strana = 4;
		return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
	}
});

cmd.hear(/^(?:Страна 3)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.strana = 3;
		return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
	}
});


cmd.hear(/^(?:Страна 1)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.strana = 1;
		return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан.‼`);
	}
});


cmd.hear(/^(?:Страна 2)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.strana = 2;
		return bot(`‼Вы успешно сменили страну проживания.‼Напоминаем:за оскорбление наций будет выдан бан‼`);
	}
});

cmd.hear(/^(?:Ютуб11)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.settings.adm< 1) return bot(`📛|Ты не ютубер`, {attachment:'market-176472758_2494712'});
return bot(`
☑ » Ютуб-Панель « ☑
✅ » ютубкейс - ютуб кейс
✅ » ювыдать подписчиков (ID) (коло-во)
✅ » ювыдать просмотры (ID) (коло-во)

✅ » аправила (правила для всех донатеров)
✅ » скидки на товары
✅ » друзья с разработчиком
✅ » длина ника до 80 (просить у разработчика)

`); 
});

cmd.hear(/^(?:фильм)$/i, async (message) => {
	message.user.log = `${message.args[0]}`;
  vk.api.messages.send({ peer_id: message.peerId, sticker_id: 4318
})
return message.send(`Вот тебе топовый фильм!`, { attachment: utils.pick(["https://hdmax.ws/73-the-secret-life-of-pets-2-2019.html", "https://hdmax.ws/107-how-to-train-your-dragon-the-hidden-world-2019.html", "https://hdmax.ws/69-spider-man-far-from-home-2019-9481.html", "https://hdmax.ws/74-godzilla-king-of-the-monsters-2019.html", "https://hdmax.ws/79-pet-sematary-2019.html", "https://hdmax.ws/921-zombieland-double-tap-2019.html", "https://hdmax.ws/366-midsommar-2019.html", "https://hdmax.ws/374-47-meters-down-uncaged-2019.html", "https://hdmax.ws/122-scary-stories-to-tell-in-the-dark-2019.html", "https://hdmax.ws/329-ma-2019.html", "https://hdmax.ws/28-venom-2018.html", "https://hdmax.ws/233-the-head-hunter-2018.html", "https://hdmax.ws/181-pikovaja-dama-zazerkale-2019.html", "https://hdmax.ws/126-childs-play-2019.html", "https://hdmax.ws/446-the-addams-family-2019.html", "https://hdmax.ws/428-spycies-2020.html", "https://hdmax.ws/121-spies-in-disguise-2019.html"]) });
});


cmd.hear(/^(?:машины)\s?([0-9]+)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.args[1]) return bot(`машины: 
${message.user.transport.car === 1 ? '🔹' : '🔸'} 1. Самокат (500$)
${message.user.transport.car === 2 ? '🔹' : '🔸'} 2. Велосипед (2.500$)
${message.user.transport.car === 3 ? '🔹' : '🔸'} 3. Гироскутер (5.000$)
${message.user.transport.car === 4 ? '🔹' : '🔸'} 4. Сегвей (7.500$)
${message.user.transport.car === 5 ? '🔹' : '🔸'} 5. Мопед (25.000$)
${message.user.transport.car === 6 ? '🔹' : '🔸'} 6. Мотоцикл (50.000$)
${message.user.transport.car === 7 ? '🔹' : '🔸'} 7. ВАЗ 2109 (75.000$)
${message.user.transport.car === 8 ? '🔹' : '🔸'} 8. Квадроцикл (80.000$)
${message.user.transport.car === 9 ? '🔹' : '🔸'} 9. Багги (135.000$)
${message.user.transport.car === 10 ? '🔹' : '🔸'} 10. Вездеход (200.000$)
${message.user.transport.car === 11 ? '🔹' : '🔸'} 11. Лада Xray (350.000$)
${message.user.transport.car === 12 ? '🔹' : '🔸'} 12. Audi Q7 (750.000$)
${message.user.transport.car === 13 ? '🔹' : '🔸'} 13. BMW X6 (1.000.000$)
${message.user.transport.car === 14 ? '🔹' : '🔸'} 14. Toyota FT-HS (1.750.000$)
${message.user.transport.car === 15 ? '🔹' : '🔸'} 15. BMW Z4 M (2.500.000$)
${message.user.transport.car === 16 ? '🔹' : '🔸'} 16. Subaru WRX STI (2.750.000$)
${message.user.transport.car === 17 ? '🔹' : '🔸'} 17. Lamborghini Veneno (3.000.000$)
${message.user.transport.car === 18 ? '🔹' : '🔸'} 18. Tesla Roadster (4.500.000$)
${message.user.transport.car === 19 ? '🔹' : '🔸'} 19. Yamaha YZF R6 (5.000.000$)
${message.user.transport.car === 20 ? '🔹' : '🔸'} 20. Bugatti Chiron (6.500.000$)
${message.user.transport.car === 21 ? '🔹' : '🔸'} 21. Thrust SSC (35.000.000$)
${message.user.transport.car === 22 ? '🔹' : '🔸'} 22. Ferrari LaFerrari (39.000.000$)
${message.user.transport.car === 23 ? '🔹' : '🔸'} 23. Koenigsegg Regera (50.000.000$)
${message.user.transport.car === 24 ? '🔹' : '🔸'} 24. Formula 1 (150.000.000.000$)
${message.user.transport.car === 25 ? '🔹' : '🔸'} 25. Venom GT (125.000.000$)
${message.user.transport.car === 26 ? '🔹' : '🔸'} 26. Rolls-Royce (200.000.000$)
${message.user.transport.car === 27 ? '🔹' : '🔸'} 27. MarYanset (10.000.0000.000.000$)

👉🏻 Максимально 1 машина!
🚘 Для покупки введите «Машина [ID]»`);

	const sell = cars.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.car) return bot(`у вас уже есть машина (${cars[message.user.transport.car - 1].name}), введите "Продать машину"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.car = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:яхты|яхта)\s?([0-9]+)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.args[1]) return bot(`яхты: 
${message.user.transport.yacht === 1 ? '🔹' : '🔸'} 1. Ванна (10.000$)
${message.user.transport.yacht === 2 ? '🔹' : '🔸'} 2. Nauticat 331 (10.000.000$)
${message.user.transport.yacht === 3 ? '🔹' : '🔸'} 3. Nordhavn 56 MS (15.000.000$)
${message.user.transport.yacht === 4 ? '🔹' : '🔸'} 4. Princess 60 (25.000.000$)
${message.user.transport.yacht === 5 ? '🔹' : '🔸'} 5. Azimut 70 (35.000.000$)
${message.user.transport.yacht === 6 ? '🔹' : '🔸'} 6. Dominator 40M (50.000.000$)
${message.user.transport.yacht === 7 ? '🔹' : '🔸'} 7. Moonen 124 (60.000.000$)
${message.user.transport.yacht === 8 ? '🔹' : '🔸'} 8. Wider 150 (65.000.000$)
${message.user.transport.yacht === 9 ? '🔹' : '🔸'} 9. Palmer Johnson 42M SuperSport (80.000.000$)
${message.user.transport.yacht === 10 ? '🔹' : '🔸'} 10. Wider 165 (85.000.000$)
${message.user.transport.yacht === 11 ? '🔹' : '🔸'} 11. Eclipse (150.000.000$)
${message.user.transport.yacht === 12 ? '🔹' : '🔸'} 12. Dubai (300.000.000$)
${message.user.transport.yacht === 13 ? '🔹' : '🔸'} 13. Streets of Monaco (750.000.000$)

👉🏻 Максимально 1 яхта!
🛥 Для покупки введите «Яхта [ID]»`);

	const sell = yachts.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.yacht) return bot(`у вас уже есть яхта (${yachts[message.user.transport.yacht - 1].name}), введите "Продать яхту"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.yacht = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:самол(?:е|ё)т|самол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.args[1]) return bot(`самолеты: 
${message.user.transport.airplane === 1 ? '🔹' : '🔸'} 1. Параплан (100.000$)
${message.user.transport.airplane === 2 ? '🔹' : '🔸'} 2. АН-2 (350.000$)
${message.user.transport.airplane === 3 ? '🔹' : '🔸'} 3. Cessna-172E (700.000$)
${message.user.transport.airplane === 4 ? '🔹' : '🔸'} 4. Supermarine Spitfire (1.000.000$)
${message.user.transport.airplane === 5 ? '🔹' : '🔸'} 5. BRM NG-5 (1.400.000$)
${message.user.transport.airplane === 6 ? '🔹' : '🔸'} 6. Cessna T210 (2.600.000$)
${message.user.transport.airplane === 7 ? '🔹' : '🔸'} 7. Beechcraft 1900D (5.500.000$)
${message.user.transport.airplane === 8 ? '🔹' : '🔸'} 8. Cessna 550 (8.000.000$)
${message.user.transport.airplane === 9 ? '🔹' : '🔸'} 9. Hawker 4000 (22.400.000$)
${message.user.transport.airplane === 10 ? '🔹' : '🔸'} 10. Learjet 31 (45.000.000$)
${message.user.transport.airplane === 11 ? '🔹' : '🔸'} 11. Airbus A318 (85.000.000$)
${message.user.transport.airplane === 12 ? '🔹' : '🔸'} 12. F-35A (160.000.000$)
${message.user.transport.airplane === 13 ? '🔹' : '🔸'} 13. Boeing 747-430 Custom (225.000.000$)
${message.user.transport.airplane === 14 ? '🔹' : '🔸'} 14. C-17A Globemaster III (350.000.000$)
${message.user.transport.airplane === 15 ? '🔹' : '🔸'} 15. F-22 Raptor (400.000.000$)
${message.user.transport.airplane === 16 ? '🔹' : '🔸'} 16. Airbus 380 Custom (600.000.000$)
${message.user.transport.airplane === 17 ? '🔹' : '🔸'} 17. B-2 Spirit Stealth Bomber (1.359.000.000$)

👉🏻 Максимально 1 самолёт!
🛩 Для покупки введите «Самолёт [ID]»`);

	const sell = airplanes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.airplane) return bot(`у вас уже есть самолёт (${airplanes[message.user.transport.airplane - 1].name}), введите "Продать самолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.airplane = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:вертол(?:е|ё)т|вертол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.args[1]) return bot(`вертолеты: 
${message.user.transport.helicopter === 1 ? '🔹' : '🔸'} 1. Шарик с пропеллером (2$)
${message.user.transport.helicopter === 2 ? '🔹' : '🔸'} 2. RotorWay Exec 162F (300.000$)
${message.user.transport.helicopter === 3 ? '🔹' : '🔸'} 3. Robinson R44 (450.000$)
${message.user.transport.helicopter === 4 ? '🔹' : '🔸'} 4. Hiller UH-12C (1.300.000$)
${message.user.transport.helicopter === 5 ? '🔹' : '🔸'} 5. AW119 Koala (2.500.000$)
${message.user.transport.helicopter === 6 ? '🔹' : '🔸'} 6. MBB BK 117 (4.000.000$)
${message.user.transport.helicopter === 7 ? '🔹' : '🔸'} 7. Eurocopter EC130 (7.500.000$)
${message.user.transport.helicopter === 8 ? '🔹' : '🔸'} 8. Leonardo AW109 Power (10.000.000$)
${message.user.transport.helicopter === 9 ? '🔹' : '🔸'} 9. Sikorsky S-76 (15.000.000$)
${message.user.transport.helicopter === 10 ? '🔹' : '🔸'} 10. Bell 429WLG (19.000.000$)
${message.user.transport.helicopter === 11 ? '🔹' : '🔸'} 11. NHI NH90 (35.000.000$)
${message.user.transport.helicopter === 12 ? '🔹' : '🔸'} 12. Kazan Mi-35M (60.000.000$)
${message.user.transport.helicopter === 13 ? '🔹' : '🔸'} 13. Bell V-22 Osprey (135.000.000$)

👉🏻 Максимально 1 вертолёт!
🚁 Для покупки введите «Вертолёт [ID]»`);

	const sell = helicopters.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.helicopter) return bot(`у вас уже есть вертолёт (${homes[message.user.transport.helicopter - 1].name}), введите "Продать вертолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.helicopter = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:дом|дома)\s?([0-9]+)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.args[1]) return bot(`дома: 
${message.user.realty.home === 1 ? '🔹' : '🔸'} 1. Коробка из-под холодильника (250$)
${message.user.realty.home === 2 ? '🔹' : '🔸'} 2. Подвал (3.000$)
${message.user.realty.home === 3 ? '🔹' : '🔸'} 3. Палатка (3.500$)
${message.user.realty.home === 4 ? '🔹' : '🔸'} 4. Домик на дереве (5.000$)
${message.user.realty.home === 5 ? '🔹' : '🔸'} 5. Полуразрушенный дом (10.000$)
${message.user.realty.home === 6 ? '🔹' : '🔸'} 6. Дом в лесу (25.000$)
${message.user.realty.home === 7 ? '🔹' : '🔸'} 7. Деревянный дом (37.500$)
${message.user.realty.home === 8 ? '🔹' : '🔸'} 8. Дача (125.000$)
${message.user.realty.home === 9 ? '🔹' : '🔸'} 9. Кирпичный дом (80.000$)
${message.user.realty.home === 10 ? '🔹' : '🔸'} 10. Коттедж (450.000$)
${message.user.realty.home === 11 ? '🔹' : '🔸'} 11. Особняк (1.250.000$)
${message.user.realty.home === 12 ? '🔹' : '🔸'} 12. Дом на Рублёвке (5.000.000$)
${message.user.realty.home === 13 ? '🔹' : '🔸'} 13. Личный небоскрёб (7.000.000$)
${message.user.realty.home === 14 ? '🔹' : '🔸'} 14. Остров с особняком (12.500.000$)
${message.user.realty.home === 15 ? '🔹' : '🔸'} 15. Белый дом (20.000.000$)

👉🏻 Максимально 1 дом!
🏡 Для покупки введите «Дом [ID]»`);

	const sell = homes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.home) return bot(`у вас уже есть дом (${homes[message.user.realty.home - 1].name}), введите "Продать дом"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.home = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:квартира|квартиры)\s?([0-9]+)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.args[1]) return bot(`квартиры: 
${message.user.realty.apartment === 1 ? '🔹' : '🔸'} 1. Чердак (15.000$)
${message.user.realty.apartment === 2 ? '🔹' : '🔸'} 2. Квартира в общежитии (55.000$)
${message.user.realty.apartment === 3 ? '🔹' : '🔸'} 3. Однокомнатная квартира (175.000$)
${message.user.realty.apartment === 4 ? '🔹' : '🔸'} 4. Двухкомнатная квартира (260.000$)
${message.user.realty.apartment === 5 ? '🔹' : '🔸'} 5. Четырехкомнатная квартира (500.000$)
${message.user.realty.apartment === 6 ? '🔹' : '🔸'} 6. Квартира в центре Москвы (1.600.000$)
${message.user.realty.apartment === 7 ? '🔹' : '🔸'} 7. Двухуровневая квартира (4.000.000$)
${message.user.realty.apartment === 8 ? '🔹' : '🔸'} 8. Квартира с Евроремонтом (6.000.000$)

👉🏻 Максимально 1 квартира!
🏞 Для покупки введите «Квартира [ID]»`);

	const sell = apartments.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.apartment) return bot(`у вас уже есть квартира (${apartments[message.user.realty.apartment - 1].name}), введите "Продать квартиру"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.apartment = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:телефон|телефоны)\s?([0-9]+)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.args[1]) return bot(`телефоны: 
${message.user.misc.phone === 1 ? '🔹' : '🔸'} 1. Nokia 108 (250$)
${message.user.misc.phone === 2 ? '🔹' : '🔸'} 2. Nokia 3310 (2017) (500$)
${message.user.misc.phone === 3 ? '🔹' : '🔸'} 3. ASUS ZenFone 4 (2.000$)
${message.user.misc.phone === 4 ? '🔹' : '🔸'} 4. BQ Aquaris X (10.000$)
${message.user.misc.phone === 5 ? '🔹' : '🔸'} 5. Sony Xperia XA (15.000$)
${message.user.misc.phone === 6 ? '🔹' : '🔸'} 6. Samsung Galaxy S8 (30.000$)
${message.user.misc.phone === 7 ? '🔹' : '🔸'} 7. Xiaomi Mi Mix (50.000$)
${message.user.misc.phone === 8 ? '🔹' : '🔸'} 8. Новый Galaxy S1 (75.000$)
${message.user.misc.phone === 9 ? '🔹' : '🔸'} 9. iPhone X (100.000$)
${message.user.misc.phone === 10 ? '🔹' : '🔸'} 10. Apple iPhone 11 Pro Max золотой (100.000.000.000.000$)

👉🏻 Максимально 1 телефон!
📞 Для покупки введите «Телефон [ID]»`);

	const sell = phones.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.phone) return bot(`у вас уже есть телефон (${phones[message.user.misc.phone - 1].name}), введите "Продать телефон"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.phone = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:Ёлки)\s?([0-9]+)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.args[1]) return bot(`Ёлки:
🎄 1. Ель сербская (1.000$)
🎄 2. Ель сибирская (Picea obovata) (2.500.000$)
🎄 3. Ель европейская, или обыкновенная (Picea abies) (500.000$)
🎄 4. Сосна обыкновенная (300.000.000$)
🎄 5. Сосна горная (1.250.000.000$)
🎄 6. Сосна желтая (5.000.000.000$)
🎄 7. Сосна Веймутова (30.000.000.000$)
🎄 8. Сосна белокорая (180.000.000.000$)
🎄 9. Ель из железа (200.000.000$)
🎄 10. Ель из алмазов (300.000.000.000$)

🚩Для покупки введите "Ёлки [номер]"`);

	const sell = raket.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.raket) return bot(`у Вас уже есть ёлка. ${smileerror}`);

	if(message.user.balance < sell.cost) return bot(`вам нужно ${utils.sp(sell.cost)}$ для покупки. ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.raket = sell.id;

		return bot(`вы успешно купили себе ёлку. ${smilesuccess}`);
	}
});

cmd.hear(/^(?:бизнесы|💼 Бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
	
	if(message.user.sberbank.activation !== 1) return bot(`Извините, но ваша карта еще не активирована.\nВведите "Создать карту"`);
	if(!message.args[1]) return bot(`бизнесы:
${message.user.business === 1 ? '🔸' : '🔹'} 1. Шаурмичная - 50.000$
⠀ ⠀ ⠀ Прибыль: 400$/час
${message.user.business === 2 ? '🔸' : '🔹'} 2. Ларёк - 100.000$
⠀ ⠀ ⠀ Прибыль: 700$/час
${message.user.business === 3 ? '🔸' : '🔹'} 3. Ресторан - 300.000$
⠀ ⠀ ⠀ Прибыль: 2.500$/час
${message.user.business === 4 ? '🔸' : '🔹'} 4. Магазин - 500.000$
⠀ ⠀ ⠀ Прибыль: 3.800$/час
${message.user.business === 5 ? '🔸' : '🔹'} 5. Завод - 1.500.000$
⠀ ⠀ ⠀ Прибыль: 8.000$/час
${message.user.business === 6 ? '🔸' : '🔹'} 6. Шахта - 25.000.000$
⠀ ⠀ ⠀ Прибыль: 70.000$/час
${message.user.business === 7 ? '🔸' : '🔹'} 7. Офис - 80.000.000$
⠀ ⠀ ⠀ Прибыль: 220.000$/час
${message.user.business === 8 ? '🔸' : '🔹'} 8. Разработка игр - 150.000.000$
⠀ ⠀ ⠀ Прибыль: 300.000$/час
${message.user.business === 9 ? '🔸' : '🔹'} 9. Нефтевышка - 500.000.000$
⠀ ⠀ ⠀ Прибыль: 700.000$/час
${message.user.business === 10 ? '🔸' : '🔹'} 10. Атомная электростанция - 800.000.000$
⠀ ⠀ ⠀ Прибыль: 1.000.000$/час
${message.user.business === 11 ? '🔸' : '🔹'} 11. Космическое агентство - 50.000.000.000$
⠀ ⠀ ⠀ Прибыль: 50.000.000$/час
Для покупки введите "Бизнесы [номер]"`);

	const sell = businesses.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.business) return bot(`у вас уже есть бизнес (${businesses[message.user.business - 1].name}), введите "Продать бизнес"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= message.args[1])
	{
		message.user.balance -= sell.cost;
		message.user.business = sell.id;
		message.user.bizlvl = 1;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:книжка)/i, async (message, bot) => {
	
	
	if(!message.user.work) return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "Работа"`);
 	return bot(`Книжка трудовая:
 		📝 Трудовая книжка 📝
 		📋 Стаж работы: ${message.user.exp} 
 		📋 Работа: ${works[message.user.work - 1].name}
 		📋 Зарплата: Минимум ${works[message.user.work - 1].min}/Максимум ${works[message.user.work - 1].max}
 		`);
 });

cmd.hear(/^(?:Компьютеры|Компьютер|пк)\s?([0-9]+)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.args[1]) return bot(`компьютеры:
🎒 1. DЕXР Аquilоn О175 (10.000$)
🎒 2. HYРЕRРС NЕО (500.000$)
🎒 3. DЕLL Аliеnwаrе Аurоrа R7 (1.000.000$)
🎒 4. HYРЕRРС СОSMОS X 3 (3.000.000$)
🎒 5. HYРЕRРС РRЕMIUM (5.000.000$)

🛒 Для покупки введите "Компьютер [номер]"`);

	const sell = pk.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.pk) return bot(`у Вас уже есть Компьютер. ${smileerror}`);

	if(message.user.balance < sell.cost) return bot(`вам нужно ${utils.sp(sell.cost)}$ для покупки. ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.pk = sell.id;

		return bot(`вы успешно купили себе Компьютер. ${smilesuccess}`);
	}
});

cmd.hear(/^(?:питомцы)\s?([0-9]+)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.args[1]) return bot(`питомцы:
🦎 1. Гуана (1.000$)
🐌 2. Улитка (2.500.000$)
🐰 3. Заяц (500.000$)
🐈 4. Кошка (300.000.000$)
🦊 5. Лиса (1.250.000.000$)
🐶 6. Собака (5.000.000.000$)
🐼 7. Панда (30.000.000.000$)
🦁 8. Лев (180.000.000.000$)
🦜 9. Попугай (200.000.000$)
🦄 10. Единорог (300.000.000.000$)


🐾 Максимально 1 питомец!

🛍 Для покупки введите "Питомцы [ID]"
📌 Например: Питомцы 1

🖼 Инфа о Вашем питомце: Питомец`);

	const sell = pets.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.pet) return bot(`у Вас уже есть питомец. ${smileerror}`);

	if(message.user.balance < sell.cost) return bot(`вам нужно ${utils.sp(sell.cost)}$ для покупки. ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.pet = sell.id;
		message.user.pet.lvl += 1;

		await bot(`вы успешно купили себе питомца, отправляйте его в поход и прокачивайте его уровень. ${smilesuccess}`);
		await message.sendSticker(15347);
	}
});

cmd.hear(/^(?:питомец помощь)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	return bot(`помощь по питомцам:

⏫ Улучшить: питомец улучшить
🐬 Прогуляться: питомец поход
🐾 Питомец
🎪 Выступить: питомец цирк

⠀Не забывайте следить за показателями питомца, чтобы он мог приносить доход! 🧸

🍗 Покормить: питомец покормить
🎾 Поиграть: питомец играть`);
});

cmd.hear(/^(?:питомец)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
return bot(`Ваш питомец: ${pets[message.user.misc.pet - 1].icon} ${pets[message.user.misc.pet - 1].name}, ${message.user.pet.lvl} ур. ⏫

🍗 Сытость: ${message.user.satasti} %
😍 Радость: ${message.user.radosti} %

🔍 Команды: Питомец помощь
`, {
		attachment: pets[message.user.misc.pet - 1].att
	}); 
});

cmd.hear(/^(?:Бочка|🗳 Бочка)$/i, async (message, bot) => {
message.send(`Перед тобой 3 бочки, из какой то из них лежит крутой приз, а в каких-то полная фигня!

Выбери бочку командой:
✏ бочка [номер]`, {attachment: 'photo-176472758_457239708'});
});

cmd.hear(/^(?:Бочка 1|Бочка 2|Бочка 3|🗳 1|🗳 2|🗳 3)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
   if(message.user.timers.bozka >= 0) return bot(`немного подождём! Следующие бочки через ${displayTime(message.user.timers.bozka)} ${smileerror}`); 

	message.user.timers.bozka = 1000;

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);


	if(prize === 1)
	{
		message.user.balance += 50000;
		return bot(`вы выиграли 50.000$ ${smilesuccess}`, {attachment: 'photo-176472758_457239344'});
	}

	if(prize === 2)
	{
		message.user.btc += 1000;
		return bot(`вы выиграли 1.000₿ ${smilesuccess}`, {attachment: 'photo-176472758_457239344'});
	}

	if(prize === 3)
	{
		message.user.rating += 5;
		return bot(`вы выиграли 5👑`, {attachment: 'photo-176472758_457239344'});
	}

	if(prize === 4)
	{
		message.user.rating += 1;
		return bot(`вы выиграли 1👑`, {attachment: 'photo-176472758_457239344'});
	}

	if(prize === 5)
	{
		message.user.rating += 10;
		return bot(`вы выиграли 10👑`, {attachment: 'photo-176472758_457239344'});
	}

	if(prize === 6)
	{
		message.user.rating += 2;
		return bot(`вы выиграли 2👑`, {attachment: 'photo-176472758_457239344'});
	}
	if(prize === 7)
	{
		message.user.rating += 3;
		return bot(`вы выиграли 3👑`, {attachment: 'photo-176472758_457239344'});
	}
	if(prize === 8)
	{
		message.user.rating += 4;
		return bot(`вы выиграли 4👑`, {attachment: 'photo-176472758_457239344'});
	}
	if(prize === 9)
	{
		message.user.sberbank.balance += 1000000;
		return bot(`вы выиграли 1.000.000$ на свой банковский счёт ${smilesuccess}`, {attachment: 'photo-176472758_457239344'});
	}
	if(prize === 10)
	{
		message.user.sberbank.balance += 5000000;
		return bot(`вы выиграли 5.000.000$ на свой банковский счёт ${smilesuccess}`, {attachment: 'photo-176472758_457239344'});
	}

	if(prize === 11)
	{
		message.user.sberbank.balance += 10000000;
		return bot(`вы выиграли 10.000.000$ на свой банковский счёт ${smilesuccess}`, {attachment: 'photo-176472758_457239344'});
	}

	if(prize === 12)
	{
		message.user.sberbank.balance += 50000000;
		return bot(`вы выиграли 50.000.000$ на свой банковский счёт ${smilesuccess}`, {attachment: 'photo-176472758_457239344'});
	}
});

cmd.hear(/^(?:питомец цирк)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
message.user.satasti -= 1;
message.user.radosti -= 1;
message.user.log = `${message.args[0]}`;
if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);


	if(message.user.timers.bonus666) return bot(`питомец не хочет в цырк можно раз в 24 часа ${smileerror}`);

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

	setTimeout(() => {
		message.user.timers.bonus666 = false;
	}, 86400000);

	message.user.timers.bonus666 = true;



if(prize === 1)
{
message.user.balance += 50000;
return bot(` Ваш питомец заработал 50.000$, выступая в цирке! 🤑🐬

⭐ Прокачивайте навыки питомца командой "питомец улучшить", чтобы он приносил больше БАБЛА! 💯`, {attachment: 'photo-176472758_457239406'});
}

if(prize === 2)
{
message.user.btc += 1000;
return bot(` Ваш питомец заработал 1.000₿, выступая в цирке! 🤑🐬

⭐ Прокачивайте навыки питомца командой "питомец улучшить", чтобы он приносил больше БАБЛА! 💯`, {attachment: 'photo-176472758_457239406'});
}

if(prize === 3)
{
message.user.rating += 5;
return bot(` Ваш питомец заработал 5👑, выступая в цирке! 🤑🐬

⭐ Прокачивайте навыки питомца командой "питомец улучшить", чтобы он приносил больше БАБЛА! 💯`, {attachment: 'photo-176472758_457239406'});
}

if(prize === 4)
{
message.user.rating += 1;
return bot(` Ваш питомец заработал 1👑, выступая в цирке! 🤑🐬

⭐ Прокачивайте навыки питомца командой "питомец улучшить", чтобы он приносил больше БАБЛА! 💯`, {attachment: 'photo-176472758_457239406'});
}

if(prize === 5)
{
message.user.rating += 10;
return bot(` Ваш питомец заработал 10👑, выступая в цирке! 🤑🐬

⭐ Прокачивайте навыки питомца командой "питомец улучшить", чтобы он приносил больше БАБЛА! 💯`, {attachment: 'photo-176472758_457239406'});
}

if(prize === 6)
{
message.user.rating += 2;
return bot(` Ваш питомец заработал 2👑, выступая в цирке! 🤑🐬

⭐ Прокачивайте навыки питомца командой "питомец улучшить", чтобы он приносил больше БАБЛА! 💯`, {attachment: 'photo-176472758_457239406'});
}
if(prize === 7)
{
message.user.rating += 3;
return bot(` Ваш питомец заработал 3👑, выступая в цирке! 🤑🐬

⭐ Прокачивайте навыки питомца командой "питомец улучшить", чтобы он приносил больше БАБЛА! 💯`, {attachment: 'photo-176472758_457239406'});
}
if(prize === 8)
{
message.user.rating += 4;
return bot(` Ваш питомец заработал 4👑, выступая в цирке! 🤑🐬

⭐ Прокачивайте навыки питомца командой "питомец улучшить", чтобы он приносил больше БАБЛА! 💯`, {attachment: 'photo-176472758_457239406'});
}
if(prize === 9)
{
message.user.sberbank.balance += 1000000;
return bot(` Ваш питомец заработал 1.000.000$, выступая в цирке! 🤑🐬

⭐ Прокачивайте навыки питомца командой "питомец улучшить", чтобы он приносил больше БАБЛА! 💯`, {attachment: 'photo-176472758_457239406'});
}
if(prize === 10)
{
message.user.sberbank.balance += 5000000;
return bot(` Ваш питомец заработал 5.000.000$, выступая в цирке! 🤑🐬

⭐ Прокачивайте навыки питомца командой "питомец улучшить", чтобы он приносил больше БАБЛА! 💯`, {attachment: 'photo-176472758_457239406'});
}

if(prize === 11)
{
message.user.sberbank.balance += 10000000;
return bot(` Ваш питомец заработал 10.000.000$, выступая в цирке! 🤑🐬

⭐ Прокачивайте навыки питомца командой "питомец улучшить", чтобы он приносил больше БАБЛА! 💯`, {attachment: 'photo-176472758_457239406'});
}

if(prize === 12)
{
message.user.sberbank.balance += 50000000;
return bot(` Ваш питомец заработал 50.000.000$, выступая в цирке! 🤑🐬

⭐ Прокачивайте навыки питомца командой "питомец улучшить", чтобы он приносил больше БАБЛА! 💯`, {attachment: 'photo-176472758_457239406'});
}
});

cmd.hear(/^(?:питомец покормить)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.balance<5100000) return bot(`💲 Не достаточно средств`);
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	message.user.satasti = 100;
	message.user.balance -= 5100000;
	return bot(`вы покормили питомца за 5.100.000$ 🍗`);
});

cmd.hear(/^(?:питомец играть)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.balance<600000) return bot(`💲 Не достаточно средств`);
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	message.user.radosti = 100;
	message.user.balance -= 600000;
	return bot(`вы поиграли с питомцем за 600.000$ 🍭`);
});

cmd.hear(/^(?:халява)$/i, async (message, bot) => {
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
if(message.isChat) return bot(`что бы получить бонус с промокода вы должны отправить этот промокод боту в личку.`);
if(message.user.promo) return bot(`вы уже активировали промокод. ${smileerror}`);
else 
{

	if(promo >= config.promolimit) return message.send(`❌ ${message.user.tag}, у промокода истек срок действия. Дождитесь следующего!

📢 Включи УВЕДОМЛЕНИЯ о НОВЫХ записях в группе, чтобы не пропускать ХАЛЯВНЫЕ БАБКИ!`, {attachment:'photo-176472758_457239667'});
	if(config.promotip === "btc") message.user.btc += config.promovalue;
	if(config.promotip === "balance") message.user.balance += config.promovalue;
	message.user.promo = true;
	promo += 1;
	ostalos = config.promolimit-promo;
	return message.send(`🎉🎁 ${message.user.tag}, Вы получили: ${utils.sp(config.promovalue)} ${config.promotip.toString().replace(/btc/gi, "Игровой валюты").replace(/balance/gi, "биткоинов")}!
🎲 Осталось активаций: ${ostalos} шт.`);

}

});

cmd.hear(/^(?:Промо кодик)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	let textanek2 = utils.pick(['🎃', '🌐', '💯', '🤑', '👾', '🎁', '🔥', '💰']);
	ostalos = config.promolimit-promo;
if(message.senderId !== 447012706) return;
user.api.wall.post({
owner_id: 176472758,
message: `БЕСПЛАТНЫЙ ПРОМОКОД! ${textanek2} Первые ${config.promolimit-promo} игроков, написавших боту в ЛС «халява», получат ${utils.sp(config.promovalue)} ${config.promotip.toString().replace(/btc/gi, "Игровой валюты").replace(/balance/gi, "биткоинов")} на свой аккаунт! Подпишись!`
})
return bot(`готово`)
});

cmd.hear(/(?:ферма|🔋 Ферма|💽 Ферма)$/i, async (message, bot) => {
	if(!message.user.misc.farm) return bot(`у вас нет фермы
	❓ Для покупки введите «Фермы»`);

    if(message.user.timers.farm_btc >= 0) return bot(`биткоины появятся через ${displayTime(message.user.timers.farm_btc)} ${smileerror}`); 

    message.user.timers.farm_btc = 3600;

    const btc_ = message.user.farm_btc * message.user.farmslimit;

    message.user.btc += btc_;
    message.user.farm_btc = 0;

    return bot(`вы собрали ${utils.sp(btc_)}₿, следующие биткоины появятся через ${displayTime(message.user.timers.farm_btc)} ${smileerror}
    💽 Биткоинов: ${utils.sp(message.user.btc)}฿`);
});

cmd.hear(/^(?:фермы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)

Для покупки введите "Фермы [номер]"`);

	const sell = farms.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.farm) return bot(`у вас уже есть ферма (${farms[message.user.misc.farm - 1].name}), введите "Продать ферму"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.farm = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:!asend1)$/i, async (message, bot) => {
	
	if(message.user.settings.adm < 8) return;

		await bot(`рассылка в процессе`);
		users.map(user => {
			let textanek = utils.pick(['🎃', '🌐', '💯', '🤑', '👾', '🎁', '🔥', '💰']);
	        ostalos = config.promolimit-promo;
			if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `${textanek} ПОДАРОК ОТ БОТА ${utils.sp(config.promovalue)} ${config.promotip.toString().replace(/btc/gi, "биткоинов").replace(/balance/gi, "Игровой валюты")}! Чтобы получить, отправь промокод со @botmaryans (стены группы)!`, keyboard: JSON.stringify( 
					{ 
						"one_time": true, 
						"buttons": [ 
						[{ 
							"action": { 
								"type": "text", 
								"payload": "{\"button\": \"1\"}", 
								"label": `🔔 Рассылка выкл` 
							}, 
							"color": "negative"
						},
						{ 
							"action": { 
								"type": "text", 
								"payload": "{\"button\": \"2\"}", 
								"label": `📚 Помощь` 
							}, 
							"color": "positive"
						}] 
						] 
					}) 
					}).then(() => {
				console.log(`SENDED ${user.uid}`)
			}).catch((err) => {
				console.log(`NOOOOT ${user.uid}`)
			});
		});
	
		for(var i = 1; i < 900; i++) {
			let textanek = utils.pick(['🎃', '🌐', '💯', '🤑', '👾', '🎁', '🔥', '💰']);
	        ostalos = config.promolimit-promo;
            vk.api.messages.send({ peer_id: 2000000000 + i, message: `${textanek} ПОДАРОК ОТ БОТА ${utils.sp(config.promovalue)} ${config.promotip.toString().replace(/btc/gi, "биткоинов").replace(/balance/gi, "Игровой валюты")}! Чтобы получить, отправь промокод со @botmaryans (стены группы)!` }).then(() => {
				console.log(`CHAT SENDED ${user.id}`)
			}).catch((err) => {
				console.log(`CHAT NOOOOT ${user.id}`)
			});
		}
		message.args[1] = message.args[1].replace("wall", "");
		message.args[1] = message.args[1].split('_');
		wall_to_send = "wall" + message.args[1][0] + "_" + message.args[1][1];
return bot(`обновлён пост для рассылки`);
});

cmd.hear(/^(?:сн)\s(.*)$/i, async (message, bot) => { 
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 6) return;

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 

await bot(`игроку *id${user.id} (${user.tag}) установлен ник. &#9989;`); 
user.tag = `СМЕНИТЕ НИК`;

saveAll();
}
});

cmd.hear(/^(?:босс пост восстановлен)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
if(message.senderId !== 447012706) return;
user.api.wall.post({
owner_id: 176472758,
message: `🆘 ВНИМАНИЕ! Босс ВЕРНУЛСЯ, у него УВЕЛИЧИЛИСЬ жизни!`
})
return bot(`готово`)
});

cmd.hear(/^(?:босс пост победа)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
if(message.senderId !== 447012706) return;
user.api.wall.post({
owner_id: -176472758,
message: `Босс был побеждён! Следите за дальнейшими событиями группы.`
})
return bot(`готово`)
});

cmd.hear(/^(?:питомец улучшить)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {

		if(message.user.balance < petsupd[message.user.misc.pet - 1].cost) return bot(`недостаточно денег. ${smileerror}`);

		var priceupd = petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl;

		var lvlpoupd = message.user.pet.lvl+1;

		message.user.balance -= priceupd;
		message.user.pet.lvl += 1;

		await bot(`питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(priceupd)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	    await message.sendSticker(15347);


}

});

cmd.hear(/^(?:питомец поход)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {

		if(message.user.timers.poxod) return bot(`вы сможете отправить питомца в поход через 60 минут. Ваш питомец довольно сильно устал! ${smileerror}`);

		let cashfind = utils.random(736,2879);
		message.user.balance += cashfind;
		message.user.timers.poxod = true;

			setTimeout(() => {
				message.user.timers.poxod = false;
			}, 3600000);

		await bot(`ваш питомец нашёл в походе ${utils.sp(cashfind)}$. Улучшайте своего питомца! ${smilesuccess}`);
		await message.sendSticker(15352);
}

});

cmd.hear(/^(?:logoKM)\s(.*)$/i, async (message, bot) => {
	if(message.user.settings.adm < 8) return bot(`запрет.`)
	return message.sendDocument(`./logs/logs_ID-${message.args[1]}.txt`);
});

cmd.hear(/^(?:Запросить логи)$/i, async (message, bot) => {
	return message.sendDocument(`./logs/logs_ID-${message.user.uid}.txt`);
});

cmd.hear(/^(?:logoSMS)$/i, async (message, bot) => {
	if(message.user.settings.adm < 8) return bot(`запрет.`)
	return message.sendDocument("./logoSMS.txt");
});

cmd.hear(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.siloi) return bot(`у вас установлен бан топа ${smileerror}`);
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 250000000 ) > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(( message.args[1] * 250000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 250000000 );
		message.user.rating += message.args[1];

		return bot(`вы повысили свой рейтинг на ${utils.sp(message.args[1])}👑 за ${utils.sp(message.args[1] * 250000000)}$`);
	}
});

cmd.hear(/^(?:VK - MarYans)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 ) > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(( message.args[1] * 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 );
		message.user.clanscher += message.args[1];

		return bot(`вы повысили свой VK - MarYans на ${utils.sp(message.args[1])}🧿 за ${utils.sp(message.args[1] * 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999)}$`);
	}
});

cmd.hear(/^(?:Доллар)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 25000000000 ) > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(( message.args[1] * 25000000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 250000000 );
		message.user.raziri2 += message.args[1];

		return bot(`вы купили доллары ${utils.sp(message.args[1])}💵 за ${utils.sp(message.args[1] * 25000000000)}$`);
	}
});

cmd.hear(/^(?:Фунт)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 250000000000 ) > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(( message.args[1] * 250000000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 250000000 );
		message.user.raziri3 += message.args[1];

		return bot(`вы купили фунты ${utils.sp(message.args[1])}💶 за ${utils.sp(message.args[1] * 250000000000)}$`);
	}
});

cmd.hear(/^(?:курс)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	return bot(`курс валют на данный момент:
💸Биткоин: ${utils.sp(btc)}$`);
});

cmd.hear(/^(?:биткоин)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * btc ) > message.user.balance) return bot(`недостаточно денег
Курс биткоина: ${btc}$`);
	else if(( message.args[1] * btc ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * btc );
		message.user.btc += message.args[1];

		return bot(`вы купили ${utils.sp(message.args[1])}₿ за ${utils.sp(message.args[1] * btc)}$`);
	}
});

cmd.hear(/^(?:Перелёты|Перелеты)$/i, async (message, bot) => {
	return bot(`✨ Города:
	
	1️⃣ Париж. Франция
	2️⃣ Рим. Италия
	3️⃣ Прага. Чехия
	4️⃣ Барселона. Испания
	5️⃣ Санкт-Петербург. Россия
	6️⃣ Хельсинки. Финляндия
	7️⃣ Рейкьявик. Исландия
	8️⃣ Дубровник. Хорватия
	9️⃣ Будапешт. Венгрия
	🔟 Инсбрук. Австрия
	
	📄 На данный момент вы ${poestka[message.user.strana - 1].name}
	🗯️ Купонов на поестку: ${message.user.cupon}
	💬 что-бы перелететь напишите: «Перелёт <номер>»
`);
});

cmd.hear(/^(?:Купить)\s(купон)$/i, async (message, bot) => {
    if(message.user.balance < 10000000000) return bot(`У вас недостаточно денег ❗`);
    message.user.balance -= 10000000000;
    message.user.cupon += 1;
    message.send(`✅ Вы успешно купили Купон на поездку ✨`)
});

cmd.hear(/^(?:Перелёт|Перелет)\s(1)$/i, async (message, bot) => {
	if(message.user.cupon < 1) return bot(`❌ У вас нету купонов для поездки ❗`);
	message.user.cupon -= 1;
	message.user.poestka = 1;
	const ping68 = utils.random(1000000000);
	message.user.balance -= ping68;
	message.send(`✅ Вы успешно перелетели в город: Париж. Франция ✨
	👒 Вознаграждение за перелёт: ${ping68}`);
});

cmd.hear(/^(?:Перелёт|Перелет)\s(2)$/i, async (message, bot) => {
	if(message.user.cupon < 1) return bot(`❌ У вас нету купонов для поездки ❗`);
	message.user.cupon -= 1;
	message.user.poestka = 2;
	const ping68 = utils.random(1000000000);
	message.user.balance -= ping68;
	message.send(`✅ Вы успешно перелетели в город: Рим. Италия ✨
	👒 Вознаграждение за перелёт: ${ping68}`);
});

cmd.hear(/^(?:Перелёт|Перелет)\s(3)$/i, async (message, bot) => {
	if(message.user.cupon < 1) return bot(`❌ У вас нету купонов для поездки ❗`);
	message.user.cupon -= 1;
	message.user.poestka = 3;
	const ping68 = utils.random(1000000000);
	message.user.balance -= ping68;
	message.send(`✅ Вы успешно перелетели в город: Прага. Чехия ✨
	👒 Вознаграждение за перелёт: ${ping68}`);
});

cmd.hear(/^(?:Перелёт|Перелет)\s(4)$/i, async (message, bot) => {
	if(message.user.cupon < 1) return bot(`❌ У вас нету купонов для поездки ❗`);
	message.user.cupon -= 1;
	message.user.poestka = 4;
	const ping68 = utils.random(1000000000);
	message.user.balance -= ping68;
	message.send(`✅ Вы успешно перелетели в город: Барселона. Испания ✨
	👒 Вознаграждение за перелёт: ${ping68}`);
});

cmd.hear(/^(?:Перелёт|Перелет)\s(5)$/i, async (message, bot) => {
	if(message.user.cupon < 1) return bot(`❌У вас нету купонов для поездки ❗`);
	message.user.cupon -= 1;
	message.user.poestka = 5;
	const ping68 = utils.random(1000000000);
	message.user.balance -= ping68;
	message.send(`✅ Вы успешно перелетели в город: Санкт-Петербург. Россия ✨
	👒 Вознаграждение за перелёт: ${ping68}`);
});

cmd.hear(/^(?:Перелёт|Перелет)\s(6)$/i, async (message, bot) => {
	if(message.user.cupon < 1) return bot(`❌У вас нету купонов для поездки ❗`);
	message.user.cupon -= 1;
	message.user.poestka = 6;
	const ping68 = utils.random(1000000000);
	message.user.balance -= ping68;
	message.send(`✅ Вы успешно перелетели в город: Хельсинки. Финляндия ✨
	👒 Вознаграждение за перелёт: ${ping68}`);
});

cmd.hear(/^(?:Перелёт|Перелет)\s(7)$/i, async (message, bot) => {
	if(message.user.cupon < 1) return bot(`❌У вас нету купонов для поездки ❗`);
	message.user.cupon -= 1;
	message.user.poestka = 7;
	const ping68 = utils.random(1000000000);
	message.user.balance -= ping68;
	message.send(`✅ Вы успешно перелетели в город: Рейкьявик. Исландия ✨
	👒 Вознаграждение за перелёт: ${ping68}`);
});

cmd.hear(/^(?:Перелёт|Перелет)\s(8)$/i, async (message, bot) => {
	if(message.user.cupon < 1) return bot(`❌У вас нету купонов для поездки ❗`);
	message.user.cupon -= 1;
	message.user.poestka = 8;
	const ping68 = utils.random(1000000000);
	message.user.balance -= ping68;
	message.send(`✅ Вы успешно перелетели в город: Дубровник. Хорватия ✨
	👒 Вознаграждение за перелёт: ${ping68}`);
});

cmd.hear(/^(?:Перелёт|Перелет)\s(9)$/i, async (message, bot) => {
	if(message.user.cupon < 1) return bot(`❌У вас нету купонов для поездки ❗`);
	message.user.cupon -= 1;
	message.user.poestka = 9;
	const ping68 = utils.random(1000000000);
	message.user.balance -= ping68;
	message.send(`✅ Вы успешно перелетели в город: Будапешт. Венгрия ✨
	👒 Вознаграждение за перелёт: ${ping68}`);
});

cmd.hear(/^(?:Перелёт|Перелет)\s(10)$/i, async (message, bot) => {
	if(message.user.cupon < 1) return bot(`❌У вас нету купонов для поездки ❗`);
	message.user.cupon -= 1;
	message.user.poestka = 10;
	const ping68 = utils.random(1000000000);
	message.user.balance -= ping68;
	message.send(`✅ Вы успешно перелетели в город: Инсбрук. Австрия ✨
	👒 Вознаграждение за перелёт: ${ping68}`);
});

cmd.hear(/^(?:пвп)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;

	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;
	
	let tgdh = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);


	if(tgdh === 1)
	{
    const ping68 = utils.random(`user.healths}`);
	    user.healths -= ping68;
		await bot(`🔥 Вы начели пвп с игроком: @id${user.id} (${user.tag}) `)
		vk.api.messages.send({ user_id: user.id, message: `🔥 @id${user.id} (${user.tag}), вас ударил @id${message.user.id} (${message.user.tag})
		⚠ Нанёс урона: ${ping68}`});
		await bot(`⚠ Вы нанесли урона: ${ping68}`)
	}

	if(tgdh === 2)
	{
    const ping68 = utils.random(`user.healths}`);
	    user.healths -= ping68;
		await bot(`🔥 Вы начели пвп с игроком: @id${user.id} (${user.tag}) `)
		vk.api.messages.send({ user_id: user.id, message: `🔥 @id${user.id} (${user.tag}), вас ударил @id${message.user.id} (${message.user.tag})
		⚠ Нанёс урона: ${ping68}`});
		await bot(`⚠ Вы нанесли урона: ${ping68}`)
	}

	if(tgdh === 3)
	{
		const ping68 = utils.random(`user.healths}`);
	    user.healths -= ping68;
		await bot(`🔥 Вы начели пвп с игроком: @id${user.id} (${user.tag}) `)
		vk.api.messages.send({ user_id: user.id, message: `🔥 @id${user.id} (${user.tag}), вас ударил @id${message.user.id} (${message.user.tag})
		⚠ Нанёс урона: ${ping68}`});
		await bot(`⚠ Вы нанесли урона: ${ping68}`)
	}

	if(tgdh === 4)
	{
	user.healths -= message.user.healths;
	await bot(`🔥 Вы начели пвп с игроком: @id${user.id} (${user.tag})`)
		vk.api.messages.send({ user_id: user.id, message: `💣 @id${user.id} (${user.tag}), Вам сделали "Комбо"
		📌 Вы погибли
		👤 Вас ударил @id${message.user.id} (${message.user.tag})`});
		await bot(`💣 Вы нанесли комбо ваш противник погиб`)
	}

	if(tgdh === 5)
	{
		await bot(`🔥 Вы начели пвп с игроком: @id${user.id} (${user.tag})`)
		vk.api.messages.send({ user_id: user.id, message: `🤼‍♂ @id${user.id} (${user.tag}), Вы увернулись от удара!
		👤 Вас ударил @id${message.user.id} (${message.user.tag})`});
		await bot(`🤼‍♂ Ваш противник увернулся от удара`)
	}

	if(tgdh === 6)
	{
		await bot(`🔥 Вы начели пвп с игроком: @id${user.id} (${user.tag})`)
		vk.api.messages.send({ user_id: user.id, message: `🤼‍♂ @id${user.id} (${user.tag}), Вы увернулись от удара!
		👤 Вас ударил @id${message.user.id} (${message.user.tag})`});
		await bot(`🤼‍♂ Ваш противник увернулся от удара`)
	}
	if(tgdh === 7)
	{
		const ping68 = utils.random(`${message.user.healths}`);
	    messages.user.healths -= ping68;
		await bot(`🔥 Вы начели пвп с игроком: @id${user.id} (${user.tag})`)
		vk.api.messages.send({ user_id: user.id, message: `🤼‍♂ @id${user.id} (${user.tag}), Вы увернулись от удара!
		🤾‍♀ И ударили, нанесли вы урона: ${ping68}
		👤 Вас ударил @id${message.user.id} (${message.user.tag})`});
		await bot(`🤾‍♀ Ваш противник увернулся от удара и ударил вас
	🤼‍♂ От удара вам снесли: ${ping68}`)
	}
	if(tgdh === 8)
	{

		const ping68 = utils.random(`${message.user.healths}`);
	    messages.user.healths -= ping68;
		await bot(`🔥 Вы начели пвп с игроком: @id${user.id} (${user.tag})`)
		vk.api.messages.send({ user_id: user.id, message: `🤼‍♂ @id${user.id} (${user.tag}), Вы увернулись от удара!
		🤾‍♀ И ударили, нанесли вы урона: ${ping68}`});
		await bot(`🤾‍♀ Ваш противник увернулся от удара и ударил вас
	🤼‍♂ От удара вам снесли: ${ping68}`)
	}
	if(tgdh === 9)
	{
        messages.user.healths -= message.user.healths;
		await bot(`🔥 Вы начели пвп с игроком: @id${user.id} (${user.tag})`)
		vk.api.messages.send({ user_id: user.id, message: `✨ @id${user.id} (${user.tag}), Ваш противник промахнулся
		🥊 Вы ударили со всей силы (Ваш противник погиб)
		👤 Вас ударил @id${message.user.id} (${message.user.tag})`});
		await bot(`✨ Вы промахнулись
	🥊 И вас ударили со всей слилы (Вы погибли)`)
	}
	if(tgdh === 10)
	{
		const ping68 = utils.random(`${message.user.healths}`);
	    messages.user.healths -= ping68;
		const ping688 = utils.random(`${user.healths}`);
	    user.healths -= ping688;
		await bot(`🔥 Вы начели пвп с игроком: @id${user.id} (${user.tag}) `)
		vk.api.messages.send({ user_id: user.id, message: `🔥 @id${user.id} (${user.tag}), Вас ударил @id${message.user.id} (${message.user.tag}) и снёс ${ping688}
		🔨 Взяв то что лежало рядом вы ударили вашего противника и снесли урона: ${ping68}`});
		await bot(`🔥 Вы ударили и снесли ${ping688}
	🔨 Ваш противник взял то что лежало рядом и ударил вас со всей силы и снёс урона: ${ping68}`)
	}

	if(tgdh === 11)
	{
	    messages.user.healths -= messages.user.healths;
	    user.healths -= user.healths;
		await bot(`🔥 Вы начели пвп с игроком: @id${user.id} (${user.tag})`)
		vk.api.messages.send({ user_id: user.id, message: `🚓 @id${user.id} (${user.tag}), Приехала полиция и вы погибли месте с противником!
		👤 Вам назначил пвп @id${message.user.id} (${message.user.tag})`});
		await bot(`🚓 Приехала полиция и вы погибли месте с противником!`)
	}

	if(tgdh === 12)
	{
	    messages.user.healths -= messages.user.healths;
	    user.healths -= user.healths;
		await bot(`🔥 Вы начели пвп с игроком: @id${user.id} (${user.tag})`)
		vk.api.messages.send({ user_id: user.id, message: `🚓 @id${user.id} (${user.tag}), Приехала полиция и вы погибли месте с противником!
		👤 Вам назначил пвп @id${message.user.id} (${message.user.tag})`});
		await bot(`🚓 Приехала полиция и вы погибли месте с противником!`)
	}
});
		
cmd.hear(/^(?:охота|🏹 Охота|охотиться|сходить поохотиться|🏹 Охотиться|🏹 Охотиться!|🏹 Охота!)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
   if(message.user.timers.ohota > Date.now()) return bot(`вы недавно уже ходили на охоту и сильно устали, подождите ${displayTime(message.user.timers.ohota - Date.now())} 
`);
		
			message.user.timers.ohota = Date.now() + 600000;
			let prize = utils.pick([1, 1, 2, 1, 1, 2, 3, 3, 4, 4, 5, 6, 6]);
			
			if(prize === 1)
			{
				message.user.balance += 30000000;
				return bot(`вы сходили на охоту в лес, и вам удалось застрелить местного медведя 🐻
				💰 За шкуру вам заплатили 30.000.000$`, {attachment: 'photo-176472758_457239697'});
			}
			if(prize === 2)
			{
				message.user.balance += 20000000;
				return bot(`пока вы блуждали по лесу, вы неожиданно встретили лису 🦊
				💰 За хороший мех лисы вам заплатили 20.000.000$`, {attachment: 'photo-176472758_457239698'});
			}
			if(prize === 3)
			{
				return bot(`вы решили пойти не в ту сторону леса, и наткнулись на дикого кабана 🐗. Вы выстрелили всю обойму, но кабан успел убежать.
				💰 Вам ничего не заплатили.`, {attachment: 'photo-176472758_457239699'});
			}
			if(prize === 4)
			{
				message.user.balance -= 2500000;
				return bot(`пока вы болтали со своим партнёром по охоте, на вас внезапно набросился свирепый волк 🐺
				🧰 За лечение вы заплатили 2.500.000$`, {attachment: 'photo-176472758_457239700'});
			
			}
			if(prize === 5)
			{
				message.user.balance -= 10000000;
				return bot(`вы блуждали по лесу в поисках животины, но вас неожиданно поймала лесная полиция за ловлю животных в не предназначенном для этого места 🚨
				🆘 Пришлось заплатить штраф 10.000.000$`, {attachment: 'photo-176472758_457239701'});
			}
			if(prize === 6)
			{
				message.user.balance += 25000000;
				return bot(`на охоте Вам удалось подстрелить оленя 🦌 
				💰 За рога оленя Вам заплатили 25.000.000$`, {attachment: 'photo-176472758_457239702'});
			}
});

cmd.hear(/^(?:Детектив|🕵 Детектив)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.isChat) return;
return message.send(`${message.user.tag}, перед тобой 3 двери, за какими-то лежит крутой приз, а за какими-то полная фигня!
🚪 Выбери дверь: «дверь [номер]»`, {
        attachment:'photo-176472758_457239736',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `🚪 1`
                        },
                        "color": "positive"
                    },
					{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"2\"}",
                        "label": `🚪 2`
                        },
                        "color": "positive"
                    },
					{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"3\"}",
                        "label": `🚪 3`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    }); 
});

cmd.hear(/^(?:дверь 1|дверь 2|дверь 3|🚪 1|🚪 2|🚪 3)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
   if(message.user.timers.detek >= 0) return bot(`немного подождём! Следующие двери через ${displayTime(message.user.timers.detek)} ${smileerror}`); 

	message.user.timers.detek = 10000;

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);


	if(prize === 1)
	{
		let randemeralds1 = utils.random(35000);
        message.user.balance += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}$! ${smilesuccess}`);
	}

	if(prize === 2)
	{
		let randemeralds1 = utils.random(35000);
        message.user.balance += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}$! ${smilesuccess}`);
	}

	if(prize === 3)
	{
		let randemeralds1 = utils.random(35000);
        message.user.balance += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}$! ${smilesuccess}`);
	}

	if(prize === 4)
	{
		let randemeralds1 = utils.random(3500);
        message.user.btc += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}฿! ${smilesuccess}`);
	}

	if(prize === 5)
	{
		let randemeralds1 = utils.random(3500);
        message.user.btc += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}฿! ${smilesuccess}`);
	}

	if(prize === 6)
	{
		let randemeralds1 = utils.random(3500);
        message.user.btc += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}฿! ${smilesuccess}`);
	}
	if(prize === 7)
	{
		let randemeralds1 = utils.random(3500);
        message.user.btc += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}฿! ${smilesuccess}`);
	}
	if(prize === 8)
	{
		let randemeralds1 = utils.random(3500);
        message.user.btc += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}฿! ${smilesuccess}`);
	}
	if(prize === 9)
	{
		let randemeralds1 = utils.random(5000000);
        message.user.sberbank.balance += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}$ на свой банковский счёт! ${smilesuccess}`);
	}
	if(prize === 10)
	{
		let randemeralds1 = utils.random(5000000);
        message.user.sberbank.balance += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}$ на свой банковский счёт! ${smilesuccess}`);
	}

	if(prize === 11)
	{
		let randemeralds1 = utils.random(5000000);
        message.user.sberbank.balance += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}$ на свой банковский счёт! ${smilesuccess}`);
	}

	if(prize === 12)
	{
		let randemeralds1 = utils.random(5000000);
        message.user.sberbank.balance += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}$ на свой банковский счёт! ${smilesuccess}`);
	}
});

cmd.hear(/^(?:Коробки|📦 Коробки)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.isChat) return;
return message.send(`${message.user.tag}, перед тобой 3 коробки, в одной из них спрятан ЦЕННЫЙ ПРИЗ! 💯

Выбери коробку командой:
✏ коробка [номер]`, {
        attachment:'photo-176472758_457239732',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `📦 1`
                        },
                        "color": "positive"
                    },
					{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"2\"}",
                        "label": `📦 2`
                        },
                        "color": "positive"
                    },
					{
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"3\"}",
                        "label": `📦 3`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    }); 
});

cmd.hear(/^(?:Арендд|Арендда|Аренда)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.isChat) return;
return message.send(`${message.user.tag}, Вы можете сдавать своё имущество в аренду и получать доход!
Прибыль зависит от крутости имущества (цена и секретность), а также от Вашего места жительства ✈ 

🏠 Если у Вас нет дома - пиши "дома", чтобы купить
🏠 Если у вас есть дом - пиши - пиши "аренда дом"`, {attachment: 'photo-176472758_457239733'}); 
});

cmd.hear(/^(?:аренда дом)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.realty.home) return bot(`У вас нету дома! ${smileerror}`);
   if(message.user.timers.arenda >= 0) return bot(`немного подождём! Следующая аренда через ${displayTime(message.user.timers.arenda)} ${smileerror}`); 

	message.user.timers.arenda = 86400;

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);


	if(prize === 1)
	{
		let randemeralds1 = utils.random(35000);
        message.user.balance += randemeralds1;
		return bot(`🕴🏻🏠 ${message.user.tag}, договор на сутки о сдаче дома в аренду успешно подписан! Выручка: ${utils.sp(randemeralds1)}$`);
	}

	if(prize === 2)
	{
		let randemeralds1 = utils.random(350000);
        message.user.balance += randemeralds1;
		return bot(`🕴🏻🏠 ${message.user.tag}, договор на сутки о сдаче дома в аренду успешно подписан! Выручка: ${utils.sp(randemeralds1)}$`);
	}

	if(prize === 3)
	{
		let randemeralds1 = utils.random(3000);
        message.user.balance += randemeralds1;
		return bot(`🕴🏻🏠 ${message.user.tag}, договор на сутки о сдаче дома в аренду успешно подписан! Выручка: ${utils.sp(randemeralds1)}$`);
	}

	if(prize === 4)
	{
		let randemeralds1 = utils.random(300000);
        message.user.balance += randemeralds1;
		return bot(`🕴🏻🏠 ${message.user.tag}, договор на сутки о сдаче дома в аренду успешно подписан! Выручка: ${utils.sp(randemeralds1)}$`);
	}

	if(prize === 5)
	{
		let randemeralds1 = utils.random(50000);
        message.user.balance += randemeralds1;
		return bot(`🕴🏻🏠 ${message.user.tag}, договор на сутки о сдаче дома в аренду успешно подписан! Выручка: ${utils.sp(randemeralds1)}$`);
	}

	if(prize === 6)
	{
		let randemeralds1 = utils.random(3500000);
        message.user.balance += randemeralds1;
		return bot(`🕴🏻🏠 ${message.user.tag}, договор на сутки о сдаче дома в аренду успешно подписан! Выручка: ${utils.sp(randemeralds1)}$`);
	}
	if(prize === 7)
	{
		let randemeralds1 = utils.random(35000111);
        message.user.balance += randemeralds1;
		return bot(`🕴🏻🏠 ${message.user.tag}, договор на сутки о сдаче дома в аренду успешно подписан! Выручка: ${utils.sp(randemeralds1)}$`);
	}
	if(prize === 8)
	{
		let randemeralds1 = utils.random(350);
        message.user.balance += randemeralds1;
		return bot(`🕴🏻🏠 ${message.user.tag}, договор на сутки о сдаче дома в аренду успешно подписан! Выручка: ${utils.sp(randemeralds1)}$`);
	}
	if(prize === 9)
	{
		let randemeralds1 = utils.random(350);
        message.user.balance += randemeralds1;
		return bot(`🕴🏻🏠 ${message.user.tag}, договор на сутки о сдаче дома в аренду успешно подписан! Выручка: ${utils.sp(randemeralds1)}$`);
	}
	if(prize === 10)
	{
		let randemeralds1 = utils.random(350);
        message.user.balance += randemeralds1;
		return bot(`🕴🏻🏠 ${message.user.tag}, договор на сутки о сдаче дома в аренду успешно подписан! Выручка: ${utils.sp(randemeralds1)}$`);
	}

	if(prize === 11)
	{
		let randemeralds1 = utils.random(350);
        message.user.balance += randemeralds1;
		return bot(`🕴🏻🏠 ${message.user.tag}, договор на сутки о сдаче дома в аренду успешно подписан! Выручка: ${utils.sp(randemeralds1)}$`);
	}

	if(prize === 12)
	{
		let randemeralds1 = utils.random(3500000000);
        message.user.balance += randemeralds1;
		return bot(`🕴🏻🏠 ${message.user.tag}, договор на сутки о сдаче дома в аренду успешно подписан! Выручка: ${utils.sp(randemeralds1)}$`);
	}
});

cmd.hear(/^(?:коробка 1|коробка 2|коробка 3|📦 1|📦 2|📦 3)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
   if(message.user.timers.koropko >= 0) return bot(`немного подождём! Следующая коробка через ${displayTime(message.user.timers.koropko)} ${smileerror}`); 

	message.user.timers.koropko = 1000;

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);


	if(prize === 1)
	{
		let randemeralds1 = utils.random(35000);
        message.user.balance += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}$! ${smilesuccess}`);
	}

	if(prize === 2)
	{
		let randemeralds1 = utils.random(35000);
        message.user.balance += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}$! ${smilesuccess}`);
	}

	if(prize === 3)
	{
		let randemeralds1 = utils.random(35000);
        message.user.balance += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}$! ${smilesuccess}`);
	}

	if(prize === 4)
	{
		let randemeralds1 = utils.random(3500);
        message.user.btc += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}฿! ${smilesuccess}`);
	}

	if(prize === 5)
	{
		let randemeralds1 = utils.random(3500);
        message.user.btc += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}฿! ${smilesuccess}`);
	}

	if(prize === 6)
	{
		let randemeralds1 = utils.random(3500);
        message.user.btc += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}฿! ${smilesuccess}`);
	}
	if(prize === 7)
	{
		let randemeralds1 = utils.random(3500);
        message.user.btc += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}฿! ${smilesuccess}`);
	}
	if(prize === 8)
	{
		let randemeralds1 = utils.random(3500);
        message.user.btc += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}฿! ${smilesuccess}`);
	}
	if(prize === 9)
	{
		let randemeralds1 = utils.random(5000000);
        message.user.sberbank.balance += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}$ на свой банковский счёт! ${smilesuccess}`);
	}
	if(prize === 10)
	{
		let randemeralds1 = utils.random(5000000);
        message.user.sberbank.balance += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}$ на свой банковский счёт! ${smilesuccess}`);
	}

	if(prize === 11)
	{
		let randemeralds1 = utils.random(5000000);
        message.user.sberbank.balance += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}$ на свой банковский счёт! ${smilesuccess}`);
	}

	if(prize === 12)
	{
		let randemeralds1 = utils.random(5000000);
        message.user.sberbank.balance += randemeralds1;
		return bot(`вы нашли ${utils.sp(randemeralds1)}$ на свой банковский счёт! ${smilesuccess}`);
	}
});

cmd.hear(/^(?:бонус|Bot MarYans 🎁 Бонус|@botmaryans 🎁 Бонус|🎁 Бонус|🎁 Бонус|🎁 Бонус)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
   if(message.user.timers.bonus >= 0) return bot(`бонус можно получить через ${displayTime(message.user.timers.bonus)} ${smileerror}`); 

	message.user.timers.bonus = 86400;

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);


	if(prize === 1)
	{
		message.user.balance += 50000;
		return bot(`вы выиграли 50.000$ ${smilesuccess}`, {attachment: 'photo-176472758_457239344'});
	}

	if(prize === 2)
	{
		message.user.btc += 1000;
		return bot(`вы выиграли 1.000₿ ${smilesuccess}`, {attachment: 'photo-176472758_457239344'});
	}

	if(prize === 3)
	{
		message.user.rating += 5;
		return bot(`вы выиграли 5👑`, {attachment: 'photo-176472758_457239344'});
	}

	if(prize === 4)
	{
		message.user.rating += 1;
		return bot(`вы выиграли 1👑`, {attachment: 'photo-176472758_457239344'});
	}

	if(prize === 5)
	{
		message.user.rating += 10;
		return bot(`вы выиграли 10👑`, {attachment: 'photo-176472758_457239344'});
	}

	if(prize === 6)
	{
		message.user.rating += 2;
		return bot(`вы выиграли 2👑`, {attachment: 'photo-176472758_457239344'});
	}
	if(prize === 7)
	{
		message.user.rating += 3;
		return bot(`вы выиграли 3👑`, {attachment: 'photo-176472758_457239344'});
	}
	if(prize === 8)
	{
		message.user.rating += 4;
		return bot(`вы выиграли 4👑`, {attachment: 'photo-176472758_457239344'});
	}
	if(prize === 9)
	{
		message.user.sberbank.balance += 1000000;
		return bot(`вы выиграли 1.000.000$ на свой банковский счёт ${smilesuccess}`, {attachment: 'photo-176472758_457239344'});
	}
	if(prize === 10)
	{
		message.user.sberbank.balance += 5000000;
		return bot(`вы выиграли 5.000.000$ на свой банковский счёт ${smilesuccess}`, {attachment: 'photo-176472758_457239344'});
	}

	if(prize === 11)
	{
		message.user.sberbank.balance += 10000000;
		return bot(`вы выиграли 10.000.000$ на свой банковский счёт ${smilesuccess}`, {attachment: 'photo-176472758_457239344'});
	}

	if(prize === 12)
	{
		message.user.sberbank.balance += 50000000;
		return bot(`вы выиграли 50.000.000$ на свой банковский счёт ${smilesuccess}`, {attachment: 'photo-176472758_457239344'});
	}
});

cmd.hear(/^(?:поход|🌲 Поход)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;

	if(message.user.timers.poxod2 >= 0) return bot(`бонус можно получить через ${displayTime(message.user.timers.poxod2)} ${smileerror}`); 

	message.user.timers.poxod2 = 86400;

	let prize2 = utils.pick([1, 2, 3, 4, 5, 6, 7, 8]);


	if(prize2 === 1)
	{
		message.user.balance += 50000;
		return bot(`находясь в походе, вы нашли 50.000$ ${smilesuccess}`);
	}

	if(prize2 === 2)
	{
		message.user.btc += 1000;
		return bot(`находясь в походе, вы нашли 1.000₿ ${smilesuccess}`);
	}

	if(prize2 === 3)
	{
		message.user.rating += 5000;
		return bot(`находясь в походе, вы нашли 5000👑`);
	}

	if(prize2 === 4)
	{
		message.user.rating += 1;
		return bot(`находясь в походе, вы нашли 1👑`);
	}

	if(prize2 === 5)
	{
		message.user.rating += 10;
		return bot(`находясь в походе, вы нашли 10👑`);
	}

	if(prize2 === 6)
	{
		message.user.rating += 2;
		return bot(`находясь в походе, вы нашли 2👑`);
	}
	if(prize2 === 7)
	{
		message.user.rating += 3;
		return bot(`находясь в походе, вы нашли 3👑`);
	}
	if(prize2 === 8)
	{
		message.user.rating += 4;
		return bot(`находясь в походе, вы нашли 4👑`);
	}
});

cmd.hear(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.marriage.partner) return bot(`вы уже в браке с игроком ${users[message.user.marriage.partner].tag}`);
	if(Number(message.args[1]) === message.user.uid) return bot(`вы не можете жениться/выйти замуж за себя`);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

	if(user.marriage.partner) return bot(`этот человек уже состоит в браке`);

	if(user.marriage.requests.find(x=> x == message.args[1])) return bot(`вы уже делали предложение этому игроку`);

	if(message.user.marriage.requests.find(x=> x == message.args[1]))
	{
		message.user.marriage.requests = [];
		message.user.marriage.partner = user.uid;

		user.marriage.requests = [];
		user.marriage.partner = message.user.uid;

		return bot(`вы вступили в брак с игроком "${user.tag}"`);
	}

	user.marriage.requests.push(message.user.uid);
	await bot(`вы сделали предложение игроку "${user.tag}"`);
	await message.sendSticker(15517);
});

cmd.hear(/^(?:браки)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.marriage.partner) return bot(`вы уже состоите в браке`);
	return bot(`предложения:
		${message.user.marriage.requests.map(x=> `от игрока "${users[x].tag}" (ID: ${x})`).join('\n')}`);
});

cmd.hear(/^(?:развод)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	let user = users.find(x=> x.uid === message.user.marriage.partner);

	message.user.marriage.partner = 0;
	user.marriage.partner = 0;

	return bot(`вы теперь свободный человек`);
});

cmd.hear(/^(?:дата)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

	return bot(`дата регистрации ${user.tag}: ${user.regDate}`);
});

cmd.hear(/^репорт\s?([^]+)?/i, async (message, bot) => {
	
	const fs = require('fs');
    const date = new Date();
    fs.appendFileSync(`./report/Report_ID-${message.user.uid}.txt`, `${data()}, ${time()} | ${message.user.prefix.toString().replace(/Пользователь/gi, "Пользователь").replace(/YouTube/gi, "YouTube").replace(/VIP/gi, "VIP").replace(/PREMIUM/gi, "PREMIUM").replace(/Модератор/gi, "Модератор").replace(/Главный Модератор/gi, "Главный Модератор").replace(/Администратор/gi, "Администратор").replace(/Главный Администратор/gi, "Главный Администратор").replace(/Супер.Администратор/gi, "Супер.Администратор").replace(/Владелец/gi, "Владелец")} | ID: ${message.user.uid} |  URL: https://vk.com/id${message.user.id} | Жалоба/Вопрос: ${message.args[1]}
`);
	vk.api.messages.send({ chat_id: 1118, forward_messages: message.id, message: `\n [ПРИШЕЛ НОВЫЙ РЕПОРТ]\n&#128100; Игровой ID: ${message.user.uid}\n&#128264; Жалоба: ${message.args[1]}\n📒 Для ответа используйте : ответ ID [текст]`})
	return bot("📄 Ожидайте ,ваша жалоба зарегистрированна в системе, ожидайте ответа!");
});

cmd.hear(/^Задание\s?([^]+)?/i, async (message, bot) => {
	
	vk.api.messages.send({ chat_id: 1119, forward_messages: message.id, message: `\n [ПРИШЕЛ НОВЫЙ РИСУНОК]\n&#128100; Игровой ID: ${message.user.uid}\n&#128264; РИСУНОК: ${message.args[1]}\n 🗂 Тема: ${message.user.risunok}\n 📒 Для ответа используйте : Зответ ID [текст] (балов от 0 до 10`})
	return bot("📄 Ожидайте, ваш рисунок зарегистрированн в системе, ожидайте ответа!");
});

cmd.hear(/^(?:Зответ)\s([0-9]+)\s([^]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)

	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;
	await bot(`вы отправили ответ игроку: @id${user.id} (${user.tag}).`)
	
	vk.api.messages.send({ user_id: user.id, message: `@id${user.id} (${user.tag}), пришёл ответ!
✍🏻 Ответ на ваш рисунок: ${message.args[2]}
🛑 Балов: ${message.args[3]} из 10
`});
});

cmd.hear(/^(?:qr)\s(.*)/i, async (message) => {
	if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
const qr = require('qr-image');
let qr_svg = qr.image(message.args[1], { type: 'png' });
qr_svg.pipe(require('fs').createWriteStream('oscrn.png'));
var svg_string = qr.imageSync(message.args[1], { type: 'png' });
message.sendPhoto(svg_string)
});

cmd.hear(/^(?:выдать приз)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 6) return bot(`📛|Доступ запрещен`, {attachment:'market-176472758_2439456'});
	if(!Number(message.args[2])) return; 
	if(message.user.timers.vidat >= 0) return bot(`вы сможете выдать только через 1 час ${smileerror}`); 
	if(Number(message.args[1]) === message.user.uid) return bot(`вы не можете дать денег себе у вас есть команда "деньги"`);
	message.args[2] = Math.floor(Number(message.args[2])); 
	if(message.args[2] <= 0) return; 
	
	{ 

		let user = users.find(x=> x.uid === Number(message.args[1])); 
		if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 
		const bilo = utils.sp(user.balance);

		message.user.logg += `\n\n📌 Донатер: ${message.user.tag}\n ⏰ Выдал в: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n 📖 Использовал команду: выдать ${message.args[1]} ${message.args[2]}\n ✨ Кому выдал: @id${user.id} (${user.tag})\n\n`;		user.balance += message.args[2];

		await bot(`зачисляю игроку [id${user.id}|${user.tag}] ${utils.sp(message.args[2])}$ ${smilesuccess}

        💸 Старый баланс: ${bilo}$
		💸 Новый баланс: ${utils.sp(user.balance)}$`);
vk.api.messages.send({ user_id: user.id, message: `` });
}
});

cmd.hear(/^(?:Рисунок|✏ Рисунок)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;   
	const szc25 = utils.pick([`Bot MarYans`,`Гориллу`,`ВКонтакте`,`Группу игра слов`,`Телевизор`,`Телефон`,`Мышь`,`ПК`,`Ноутбук`,`Нетбук`,`Эрпотцы`,`Кактус`,`Окно а за окном природа`,`Шторы`,`Обои`,`Шкаф`,`Слот`,`Стул`,`Мяч`,`Диван`,`Дверь`,`Стену`,`Дом`,`Президента`,`Батареи`,`Батарейку`,`Программиста`,`Код`,`Медузу`,`Алкоголика`,`Куст`,`Дерево`,`Лошадя`,`Пони`,`Забов`,`Малину`,`Клубнику`,`Навоз`,`Такси`,`Автобус`,`Самолёт`,`Ракету`,`Пикачу`,`Зарядку`,`Кота`,`Собаку`,`Попугая`,`Доски`,`Свенью`,`Девушку`,`Футболку`,`Поле футбольное`,`Трубу`,`Реку`,`Гиганта`,`Горшок`,`Унитаз`,`Квартиру`,`Яхту`,`Ютубера`,`Водо напорную башню`,`Балкон`,`Замок`,`Рыцаря`,`Силача`,`Море`,`Разбитую машину`,`Аварию`,`Крушку`,`Чашку`,`Лошку`,`Сахар`,`Чай`,`Банан`,`Яблоко`,`Груша`,`Арбуз`,`Пистолет`,`Автомат`,`Гранатомёт`,`Лягушку`,`Черепаху`,`Бабушку`,`Курицу`,`Пантеру`,`Россию`,`США`,`Куана`,`Лаву`,`Атомную электро станцию`,`Льва`,`Тигра`,`Любовь`,`Свободная Тема`]);
	message.user.risunok = `${szc25}`;   
	await bot(`✏ Нарисуй "${szc25}" получи вознаграждение в сумме 1.000.000.000.000$ по 10 бальной школе, нарисовал меньше 10 балов то 1.000.000.000.000 - 1.000.000.000 и так всё ниже и ниже, если нарисовал рисунок то пиши: Задание (Рисунок).`);
});

cmd.hear(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.settings.adm< 6) return bot(`📛|Доступ запрещен`)

	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;
	await bot(`вы отправили ответ игроку: @id${user.id} (${user.tag}).`)
	
	vk.api.messages.send({ user_id: user.id, message: `@id${user.id} (${user.tag}), пришёл ответ!
✍🏻 Ответ на ваш репорт: ${message.args[2]}
🆘 Ответил: @id${message.user.id} (${message.user.tag})`
 });
});

cmd.hear(/^(?:реши)\s([0-9]+)\s(\+|\-|\/|\*)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	const result = eval(`${message.args[1]} ${message.args[2]} ${message.args[3]}`);
	return bot(`${message.args[1]} ${message.args[2]} ${message.args[3]}=${result}`);
});

cmd.hear(/^(?:работа)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);

	const work = works.find(x=> x.id === Number(message.args[1]));
	if(!work) return console.log(message.args[1]);

	if(work.requiredLevel > message.user.level) return bot(`вы не можете устроиться на эту работу!`);
	else if(work.requiredLevel <= message.user.level)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать в Общее - ${work.name}
		👔 Введите команду "Работать"`);
	}
});

cmd.hear(/^(?:работа)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);
	return bot(`профессии:
	🔹 1. Дворник - зарплата ~12.500$
	🔹 2. Сантехник - зарплата ~22.500$
	🔹 3. Электрик - зарплата ~25.000$
	🔹 4. Слесарь - зарплата ~30.000$
	🔹 5. Юрист - зарплата ~45.000$
	🔹 6. Бухгалтер - зарплата ~55.000$
	🔹 7. Бармен - зарплата ~60.000$
	🔹 8. Администратор - зарплата ~75.000$
	🔹 9. Программист - зарплата ~100.000$
	Для трудоустройства введите "Работа [номер]`);
});

cmd.hear(/^(?:работать)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.work) return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "Работа"`);

	if(message.user.timers.hasWorked) return bot(`рабочий день закончен.
	⏳ Вы сможете работать в ближайшие 10 минут`);

	setTimeout(() => {
		message.user.timers.hasWorked = false;
	}, 600000);

	message.user.timers.hasWorked = true;

	const work = works.find(x=> x.id === message.user.work);
	const earn = utils.random(work.min, work.max);

	message.user.balance += earn;
	message.user.exp += 1;

	return bot(`рабочий день закончен 
	💵 Вы заработали ${utils.sp(earn)}$`);
});

cmd.hear(/^(?:уволиться)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.work) return bot(`вы нигде не работаете`);
	
	message.user.work = 0;
	return bot(`вы уволились со своей работы`);
});

cmd.hear(/^(?:часы)\s?([0-9]+)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.args[1]) return bot(`часы:
📲 1. Умные часы Samsung Galaxy Watch 42 mm Rose Gold (1.000$)
📲 2. Смарт-часы Samsung Galaxy Watch Active 39.5мм черный SM-R500NZKASER (2.500.000$)
📲 3. Samsung Носимое устройство Galaxy Watch Active, серебристый лед' (500.000$)
📲 4. Умные часы-телефон Smart Watch Phone DZ09 с Bluetooth' (300.000.000$)
📲 5. Умные часы Smart Watch Q7SP (Золото) (1.250.000.000$)
📲 6. Смарт-часы Samsung Galaxy Watch Active 2 Лакрица (SM-R830) (5.000.000.000$)
📲 7. Часы Smart GPS Watch T58 (GW700) (30.000.000.000$)
📲 8. Умные часы Samsung R500 Galaxy Watch Active черные (180.000.000.000$)
📲 9. Умные часы Smart Watch W8 (200.000.000$)
📲 10. 10. Смарт-часы Samsung Galaxy Fit 0.95" AMOLED серебристый (SM-R370NZSASER) (300.000.000.000$)

🚩Для покупки введите "часы [номер]"`);

	const sell = clock.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.clock) return bot(`у Вас уже есть часы. ${smileerror}`);

	if(message.user.balance < sell.cost) return bot(`вам нужно ${utils.sp(sell.cost)}$ для покупки. ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.clock = sell.id;


		return bot(`вы успешно купили себе часы. ${smilesuccess}`);
	}
});

cmd.hear(/^(?:📈 Трейд)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	const ping = utils.random(`${message.user.balance}`);
	const ping2 = utils.random(`${message.user.balance}`);
	const ping3 = utils.random(`${message.user.balance}`);
	const ping4 = utils.random(`${message.user.balance}`);
	const ping5 = utils.random(`${message.user.balance}`);
	const ping6 = utils.random(`${message.user.balance}`);
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`${message.user.tag}, трейда используйте команду «Трейд [вверх/вниз] [сумма]»
`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `Трейд ⏫ ${ping}`
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `Трейд ⏫ ${ping2}` 
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `Трейд ⏫ ${ping3}`
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `Трейд ⏬ ${ping4}` 
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `Трейд ⏬ ${ping5}` 
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `Трейд ⏬ ${ping}`
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "◀ К играм" 
	}, 
	"color": "positive" 
	}],
] 
}) 
}); 
});

cmd.hear(/^(?:Трейд)\s(⏫|⏬)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	let smilekazinobad = utils.pick([`😒`, `😯`, `😔`, `😕`]);

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег ${smilekazinobad}`, {attachment:'market-176472758_2439456'});
	if(message.args[2] <= 50) return bot(`ставка должна быть больше 50$ ${smilekazinobad}`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/⏫/, '1').replace(/⏬/, '2'));

		if(rand === nav)
		{
			progressQuest(message.user, 0)

			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5]);
			message.user.balance += Math.floor(message.args[2] * multiply);

			return bot(`курс ${nav === 1 ? `подорожал ⏫` : `подешевел ⏬`} на ${utils.random(20)}$
			✅ Вы заработали +${utils.sp(message.args[2] * multiply)}$
			💰 Баланс: ${utils.sp(message.user.balance)}$`);
		} else {
			resetQuest(message.user, 0)
			return bot(`курс ${nav === 2 ? `подорожал ⏫` : `подешевел ⏬`} на ${utils.random(20)}$
			❌ Вы потеряли ${utils.sp(message.args[2])}$ 
			💰 Баланс: ${utils.sp(message.user.balance)}$`);
		}
	}
});

cmd.hear(/^(?:🎲 Кубик)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`${message.user.tag}, для игры в кубик вводите числа от 1 до 6 👍
`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🎲 1" 
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🎲 2" 
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": "🎲 3" 
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🎲 4" 
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🎲 5" 
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": "🎲 6" 
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "◀ К играм" 
	}, 
	"color": "positive" 
	}],
] 
}) 
}); 
});

cmd.hear(/^(?:🎲|Кубик)\s([1-6])$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	const int = utils.pick([1, 2, 3, 4, 5, 6]);
	if(int == message.args[1])
	{
		progressQuest(message.user, 2)
		message.user.balance += 2000000;
		return bot(`вы угадали! Приз 2.000.000$`);
	} else { 
		resetQuest(message.user, 2)
		return bot(`не угадали 
	🎲 Выпало число ${int}`);
	}
});

cmd.hear(/^(?:🎰 Казино)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	const ping = utils.random(`${message.user.balance}`);
	const ping2 = utils.random(`${message.user.balance}`);
	const ping3 = utils.random(`${message.user.balance}`);
	const ping4 = utils.random(`${message.user.balance}`);
	const ping5 = utils.random(`${message.user.balance}`);
	const ping6 = utils.random(`${message.user.balance}`);
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`${message.user.tag}, для игры в казино используйте команду «Казино [сумма]»
`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🎰 ${ping}`
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🎰 ${ping2}`
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `🎰 ${ping3}`
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🎰 ${ping4}`
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🎰 ${ping5}`
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `🎰 ${ping6}`
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "◀ К играм" 
	}, 
	"color": "positive" 
	}],
] 
}) 
}); 
});

cmd.hear(/^(?:казино|🎰)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.healths < 1) return bot(`📛|Доступ запрещен от болезни`)
	if(message.user.hunger < 1) return bot(`Ты умер от голода`)
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	if(message.user.balance <= 1) return bot (`на вашем балансе нет денег!`);
	let smilekazinobad2 = utils.pick([`😒`, `😯`, `😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));


	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег! ${smileerror}`, {attachment:'market-176472758_2439456'});
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 2, 2, 1, 0.5, 0.5, 2, 2, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 1, 0.5, 0.5, 0.75, 0.25, 0.25, 0.5, 2, 0.25, 0.75, 1, 0.5, 0.5, 0.75]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		if (multiply > 1)
			progressQuest(message.user, 3)
		else
			resetQuest(message.user, 3)
		return message.send(`🎲 ${message.user.tag}, ${multiply === 1 ? `Ваши деньги остаются у вас. ${smilesuccess}` : `${multiply < 1 ? `📉 — Вы проиграли ${utils.sp(message.args[1] * multiply)}$ ${smileerror}` : ` 📈 — Вы выиграли ${utils.sp(message.args[1] * multiply)}$ ${smilesuccess}`}`} 
		➕ — Умножение: x${multiply}
		💰 — Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:🎲 Фишки)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	const ping = utils.random(`${message.user.balance}`);
	const ping2 = utils.random(`${message.user.balance}`);
	const ping3 = utils.random(`${message.user.balance}`);
	const ping4 = utils.random(`${message.user.balance}`);
	const ping5 = utils.random(`${message.user.balance}`);
	const ping6 = utils.random(`${message.user.balance}`);
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`${message.user.tag}, для игры в Фишки используйте команду «Фишки [сумма]»
`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🎲 Ф ${ping}`
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🎲 Ф ${ping2}`
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `🎲 Ф ${ping3}`
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🎲 Ф ${ping4}`
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🎲 Ф ${ping5}`
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `🎲 Ф ${ping6}`
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "◀ К играм" 
	}, 
	"color": "positive" 
	}],
] 
}) 
}); 
});
	
cmd.hear(/^(?:Фишки|🎲 Ф)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.healths < 1) return bot(`📛|Доступ запрещен от болезни`)
	if(message.user.hunger < 1) return bot(`Ты умер от голода`)
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	let smilekazinobad2 = utils.pick([`😒`, `😯`, `😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег! ${smileerror}`, {attachment:'market-176472758_2439456'});
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.25, 0.75, 0.5, 1, 1, 0.75, 0.5, 2, 0, 0.5, 2, 0.75, 0.25, 2, 1, 2, 1, 0, 2.25, 5, 50, 0, 2, 0.25, 1.5, 0.50, 0.75, 0.25, 0.50, 0.5, 0.1, 12, 1, 2, 0.25,0.25, 0.75, 0.5, 1, 1, 0.75, 0.5, 2, 0.5, 2, 0.75, 0.25, 2, 1, 2, 1, 0, 2.25, 0, 0.25, 1.5, 0.50, 0.75, 0.25, 0.50, 0.5, 0.1, 0, 1, 2, 0.25, 3, 1, 2, 1, 0.25, 0.75, 0.5, 1, 1, 0.75, 0.5, 2, 0, 0.5, 2, 0.75, 0.25, 2, 1, 2, 1, 0, 2.25, 5, 0, 0, 0.25, 1.5, 0.50, 0.75, 0.25, 0.50, 0.5, 0.1, 0, 0, 1, 2, 0.25,0.25, 0.75, 0.5, 1, 1, 0.75, 0.5, 2, 0, 0.5, 2, 0.75, 0.25, 2, 1, 2, 1, 0, 2.25, 5, 0, 0, 0.25, 1.5, 0.50, 0.75, 0.25, 0.50, 0.5, 0.1, 0, 0, 1, 2, 0.25, 3, 3, 3, 1, 2, 1, 0, 13, 0, 1.1, 20, 0.25, 0.25, 0.24, 11, 4, 6, 7, 0.001, 2, 1, 0.11, 0.22, 0.55, 0.00001, 0.01, 2.1, 0.9, 0.011, 0.0000001, 0, 2, 2, 0, 0.25, 0.28, 0.99, 2.50, 0, 0, 1, 1, 1, 0.25, 0.25,0.25,0.25, 1, 0.24, 0.00001, 0.0009, 0, 2, 2, 1, 0, 1, 3, 0, 1, 0.00001, 0, 2, 2, 0.000001, 2, 2, 2, 2, 2, 2, 0, 0, 1, 2, 1, 0, 0.25, 2, 2, 1, 1, 1, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 1, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2.10, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55, 1.55, 0.55, 1.55, 0.55, 0.55, 0.55, 3, 0.55, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 2, 2, 2, 1, 1, 1, 1, 0.25, 0.25, 0.25, 0.25, 1, 1, 2, 2, 2, 0.50, 0.50, 0.50, 1, 1, 1, 0.1, 0.1, 0.1, 2, 1, 0, 0, 1, 0.25, 0.25, 2, 1, 0.25, 0.25, 1, 0, 0, 1, 0.25, 0.25, 0, 0.25, 1, 2, 1, 1, 0.25, 0, 0.75, 0.25, 2, 0.90, 1, 0.25, 1, 0.25, 1, 0, 2, 1, 2, 1, 0, 2, 2, 0, 1, 2, 0, 2, 2, 2, 2, 2, 0, 0, 0.1, 0.1, 2, 0, 1, 2, 2, 2, 1, 0, 0.25, 0.55, 2, 0.1, 0, 2, 1, 3, 0.25, 1, 0.25, 1, 2, 0, 0, 0, 1, 1, 2, 2]);
        const  win = utils.pick(['🌚|🌚|🌚', '🔸|🔸|🔸', '🎲|🎲|🎲']);
        const  lose = utils.pick(['🌚|🎉|🔸', '🔸|🎉|🔸', '🎲|🎉|🎲']);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(` ${multiply === 1 ? ` Ваши деньги остаются у вас. ${smilesuccess}` : `${multiply < 1 ? `🎲 ➟ Вам выпала комбинация: [${lose}] 
		💎 ➟ Вы проиграли: ${utils.sp(message.args[1] * multiply)}$ ${smileerror}` : `🎲 ➟ Вам выпала комбинация: [${win}] 
		💎 ➟ Вы выиграли: ${utils.sp(message.args[1] * multiply)}$ ${smilesuccess}`}`} 
		🔥 ➟ Множитель: x${multiply}
		💰 — Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:лотерея|🎫 Лотерея)/i, async (message, bot) => {
	
	
	if(message.user.balance < 5000) return message.send(`💣 ➾ Лотерейный билетик стоит 5000$`);
	message.user.balance -= 5000;
	const rez = utils.pick([true, false]);
	if(rez == false){
		message.user.balance += 500;
		return message.send(`🎉 ${message.user.tag}, ➾ Вам попалась неудачный билет.\n👒 ➾ Вы выгирали 500$`);
	}else{ 
		const count = utils.pick([3000,5000,10000,15000,20000]);
		message.user.balance += count;
		return message.send(`🎉 ${message.user.tag}, ➾ Удачный билетик!\n👒 ➾ Вы получили ${count}$`);
	}
});
	
		
cmd.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	let smilekazinobad = utils.pick([`😒`, `😯`, `😔`, `😕`]);

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег ${smilekazinobad}`, {attachment:'market-176472758_2439456'});
	if(message.args[2] <= 50) return bot(`ставка должна быть больше 50$ ${smilekazinobad}`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

		if(rand === nav)
		{
			progressQuest(message.user, 0)

			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5]);
			message.user.balance += Math.floor(message.args[2] * multiply);

			return bot(`курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(20)}$
			✅ Вы заработали +${utils.sp(message.args[2] * multiply)}$
			💰 Баланс: ${utils.sp(message.user.balance)}$`);
		} else {
			resetQuest(message.user, 0)
			return bot(`курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(20)}$
			❌ Вы потеряли ${utils.sp(message.args[2])}$ 
			💰 Баланс: ${utils.sp(message.user.balance)}$`);
		}
	}
});

cmd.hear(/^(?:🥛 Стаканчик)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	const ping = utils.random(`${message.user.balance}`);
	const ping2 = utils.random(`${message.user.balance}`);
	const ping3 = utils.random(`${message.user.balance}`);
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`${message.user.tag}, введите номер стаканчика от 1 до 3 (сумму ставки)
`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🥛 1 ${ping}`
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🥛 2 ${ping2}`
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `🥛 3 ${ping3}`
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "◀ К играм" 
	}, 
	"color": "positive" 
	}],
] 
}) 
}); 
});

cmd.hear(/^(?:🥛|Стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег 😔
💰 Ваш баланс: ${message.user.balance}$`, {attachment:'market-176472758_2439456'});
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
		const cup = utils.random(1, 3);

		if(cup == message.args[1])
		{
			progressQuest(message.user, 1)
			message.user.balance += Math.floor(message.args[2] * multiply);
			return bot(`вы угадали! Приз ${message.args[2] * multiply} ${smilesuccess}`);
		} else {
			resetQuest(message.user, 1)
			return bot(`вы не угадали, это был ${cup}-ый стаканчик ${smileerror}`);
		}
	}
});

cmd.hear(/^(?:бизнес)$/i, async (message, bot) => {
	
	if(message.user.sberbank.activation !== 1) return bot(`Извините, но ваша карта еще не активирована.\nВведите "Создать карту"`);
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business);
	var lvlcash = biz.earn*message.user.bizlvl;
var updprice2 = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl
	return bot(`статистика "${biz.name}":
	💸 Прибыль: ${utils.sp(lvlcash)}$/час
	💰 На счёте: ${utils.sp(message.user.biz)}$
	🌟 Уровень: ${message.user.bizlvl}
	✅ Стоимость улучшения: ${utils.sp(updprice2)}$`);
});

cmd.hear(/^(?:бизнес улучшить)$/i, async (message, bot) => {
	
	if(message.user.sberbank.activation !== 1) return bot(`Извините, но ваша карта еще не активирована.\nВведите "Создать карту"`);
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business);

	var updprice = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl;

	if(message.user.balance < updprice) return bot(`недостаточно денег. ${smileerror}`);

	message.user.bizlvl += 1;
	message.user.balance -= updprice;

	return bot(`вы успешно улучшили бизнес. ${smilesuccess}
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);


});

cmd.hear(/^(?:бизнес)\s(?:снять)$/i, async (message, bot) => {
	
	if(message.user.sberbank.activation !== 1) return bot(`Извините, но ваша карта еще не активирована.\nВведите "Создать карту"`);
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	if(!message.user.biz) return bot(`у вас нет денег на счёте этого бизнеса. ${smileerror}`);


	var cashlvlbiz = message.user.biz*messsage.user.bizlvl;

	message.user.balance += cashlvlbiz;
	message.user.biz = 0;

	bot(`вы сняли со счёта своего бизнеса ${utils.sp(cashlvlbiz)}$ ${smilesuccess}`);
	message.user.biz = 0;

	return;
});

cmd.hear(/^(?:🔦 Сейф)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	const ping = utils.random(100);
	const ping2 = utils.random(100);
	const ping3 = utils.random(100);
	message.user.log = `${message.args[0]}`;
return message.send(`${message.user.tag}, введите номер сейфа от 1 до 100
`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🔦 ${ping}`
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🔦 ${ping2}`
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `🔦 ${ping3}` 
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "◀ К играм" 
	}, 
	"color": "positive" 
	}],
] 
}) 
}); 
});

cmd.hear(/^(?:сейф|🔦)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.args[1] < 10 || message.args[1] >= 100) return;

	const int = utils.random(10, 99);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 10000000000;
		return bot(`невероятно! Вы угадали число.
		💲 Вам начислено 10.000.000.000$`);
	} else if(int !== message.args[1])
	{
		return bot(`вы не угадали число. Вам выпало число "${int}"
		🎉 Не отчаивайтесь, количество попыток неограниченно.
		
		Если вы угадаете код, то вы получите 10.000.000.000$`);
	}
});

cmd.hear(/^(?:выдать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1; 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 6) return bot(`📛|Доступ запрещен`, {attachment:'market-176472758_2439456'});
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 
const bilo = utils.sp(user.balance);


user.balance += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}$
  💸 Старый баланс: ${bilo}$
  💸 Новый баланс: ${utils.sp(user.balance)}$`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `Вам выдали: ${utils.sp(message.args[2])}$ 📈!` }); 
} 
});

cmd.hear(/^(?:выдать раздачи)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1; 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 6) return bot(`📛|Доступ запрещен`, {attachment:'market-176472758_2439456'});
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 
const bilo = utils.sp(user.balance);


user.balance += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}$
  💸 Старый баланс: ${bilo}$
  💸 Новый баланс: ${utils.sp(user.balance)}$`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `спасибо за участие в ежедневной акции! На ваш баланс зачислено ${utils.sp(message.args[2])}$ 📈!` }); 
} 
});

cmd.hear(/^(?:вип выд)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
    message.user.log = `${message.args[0]}`;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 2) return bot(`📛|Доступ запрещен`) 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


    message.user.logg += `\n\n📌 Донатер: ${message.user.tag}\n ⏰ Выдал в: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n 📖 Использовал команду: вип выд ${message.args[1]} ${message.args[2]}\n ✨ Кому выдал: @id${user.id} (${user.tag})\n\n`;
    user.balance += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}$`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
VIP выдал вам ${utils.sp(message.args[2])}$! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:бан)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 
if(Number(message.args[1]) === message.user.uid) return bot(`вы не можете дать бан себе`);
if(message.args[1] == 0)return bot(`Ай! Ай! Ай! Банить создателей нельзя!`)
if(message.args[1] == 1)return bot(`Ай! Ай! Ай! Банить создателей нельзя!`)


message.user.logg += `\n\n📌 Донатер: ${message.user.tag}\n ⏰ забанил в: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n 📖 Использовал команду: бан ${message.args[1]} ${message.args[2]}\n ✨ Ково забанил: @id${user.id} (${user.tag})\n\n`;
user.ban = true; 
user.bansen = `${message.args[2]}`; 
user.balance = 50000; 
user.btc = 0; 
user.rating = 0; 
user.foolder = 100; 
user.floder = 100;


saveUsers();
await message.send(`🚫 ${message.user.tag}, вы заблокировали игрока: *id${user.id} (${user.tag}).
👤 По причине: ${message.args[2]}`,); 
vk.api.messages.send({ user_id: user.id, message: `
[БАН]
🛑 Вас заблокировали!

	💭 Причина блокировки: ${message.user.bansen}
	⏰ Блокировка "Навсегда"
	
	📜 Ваш профиль был обнулён, а точнее баланс, рейтинг, биткоины, банк, здоровье и еда!` }); 
}
});

cmd.hear(/^(?:разбан)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`)
{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 



message.user.logg += `\n\n📌 Донатер: ${message.user.tag}\n ⏰ разбанил в: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n 📖 Использовал команду: разбан ${message.args[1]} ${message.args[2]}\n ✨ Ково разбанил: @id${user.id} (${user.tag})\n\n`;
user.ban = false; 

saveUsers();
await bot(`вы разбанили игрока *id${user.id} (${user.tag}).`); 
vk.api.messages.send({ user_id: user.id, message: `Ваш аккаунт был разблокирован


` }); 
}
});

cmd.hear(/^(?:промо вкл)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
if(message.user.settings.adm < 4) return bot(`📛|Доступ запрещен`)

clearPromo();
return bot(`промокод включен! ${smilesuccess}`);

});

cmd.hear(/^(?:промо тип btc)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
if(message.user.settings.adm < 4) return bot(`📛|Доступ запрещен`)
config.promotip = "btc"; 
saveConfig();
return bot(`тип промокода: Bitcoin. ${smilesuccess}`);

});

cmd.hear(/^(?:рефка|реф|реферал)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	let ref = `https://vk.me/botmaryans?ref=p&ref_source=${message.senderId}&ref_source=${message.senderId}`;
    let refka = await vk.api.call('utils.getShortLink', { url: ref });
	
return bot(`у Вас есть специальная ссылка на бота, которую Вы можете рассылать кому угодно: ${refka.short_url}

📌 Пригласили: ${message.user.refs} чел.
📮 Заработано на рефералах: ${utils.sp(message.user.refs * 250000000000)}$

🚨 Для копирования ссылки на телефоне задержи на ней палец и нажми «Копировать».

💎 За каждую регистрацию по ссылке от других людей Вы и приглашенный Вами человек будете получать по 250.000.000.000$
🤑 Поэтому, при распространении этой ссылки не забудьте упомянуть этот факт!`);

});

cmd.hear(/^(?:промо тип баланс)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
if(message.user.settings.adm < 4) return bot(`📛|Доступ запрещен`)
config.promotip = "balance"; 
saveConfig();
return bot(`тип промокода: Баланс. ${smilesuccess}`);

});

cmd.hear(/^(?:копать|🍂 Копать)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 

return bot(`использование: «копать железо/золото/алмазы/угля/материю ${smileerror}`,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "🎛 копать железо"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "🏵 копать золото"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "💎 копать алмазы"
		},
			"color": "primary"
		},
		{ 
			"action": { 
			"type": "text", 
			"payload": "{\"button\": \"3\"}", 
			"label": "◀ К играм" 
			}, 
			"color": "negative" 
			}, 
]
		]
			})
});
});


cmd.hear(/^(?:копать железо|🎛 копать железо)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `Копать железо`;

if(message.user.energy < 0) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randzhelezo = utils.random(16, 97);

message.user.energy -= 1;
message.user.opit += 1;
message.user.zhelezo += randzhelezo;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzhelezo} железа.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randzhelezo} железа.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:копать золото|🏵 копать золото)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `Копать золото`;

if(message.user.opit < 300) return bot(`что бы копать золото нужно больше 300 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randzoloto = utils.random(5, 35);

message.user.energy -= 1;
message.user.opit += 5;
message.user.zoloto += randzoloto;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzoloto} золота.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randzoloto} золота.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:копать алмазы|💎 копать алмазы)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 

if(message.user.opit < 1000) return bot(`что бы копать алмазы нужно больше 1.000 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randalmaz = utils.random(3, 26, 300);

message.user.energy -= 1;
message.user.opit += 10;
message.user.almaz += randalmaz;

saveUsers();

if(message.user.energy > 0) return bot(`+${randalmaz} алмазов.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randalmaz} алмазов.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:копать материю)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 

if(message.user.opit < 100000) return bot(`чтобы добывать материю нужно больше 100.000 опыта. Копайте золото, открывайте кейсы и увеличивайте свой опыт! 📛`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randemeralds = utils.random(1, 3);

message.user.energy -= 1;
message.user.opit += 30;
message.user.emeralds += randemeralds;

saveUsers();

if(message.user.energy > 0) return bot(`+${randemeralds} материю.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 21);

return bot(`+${randemeralds} материю.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:копать угля)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 

if(message.user.opit < 50) return bot(`что бы копать угль нужно больше 50 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randcoal = utils.random(30, 26);

message.user.energy -= 1;
message.user.opit += 4;
message.user.coal += randcoal;

saveUsers();

if(message.user.energy > 0) return bot(`+${randcoal} угля.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randcoal} угль.
Энергия закончилась. ⚠`);

}

});



cmd.hear(/^(?:железо)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 

return bot(`у вас ${utils.sp(message.user.zhelezo)} железа. 🎛`);

});

cmd.hear(/^(?:опыт)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 

return bot(`у вас ${utils.sp(message.user.opit)} опыта. 🏆`);

});

cmd.hear(/^(?:алмазы)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 

return bot(`у вас ${utils.sp(message.user.almaz)} алмазов. 💎`);

});

cmd.hear(/^(?:золото)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 

return bot(`у вас ${utils.sp(message.user.zoloto)} золота.' 🏵`);

});

cmd.hear(/^(?:угль)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 

return bot(`у вас ${utils.sp(message.user.coal)} угля.' 🗨`);

});

cmd.hear(/^(?:материю)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 

return bot(`у вас ${utils.sp(message.user.emeralds)} материю. 🌌`);

})

cmd.hear(/^(?:таксовать|🚕 Таксовать)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
if(message.user.opit < 5000) return bot(`что бы Таксовать вам нужно 5.000 опыта.
Копайте железо и увеличивайте свой опыт! ⚠`);
if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

taxicash = utils.random(987923, 3416011);
message.user.energy -= 1;
message.user.balance += taxicash;

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`вы заработали ${utils.sp(taxicash)}$
Энергия закончилась. ⚠`);

}

if(message.user.energy > 0) bot(`вы заработали ${utils.sp(taxicash)}$`);

});

cmd.hear(/^(?:Хакнуть|🔐 Хакнуть)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 

if(message.user.timers.hack) return bot(`вы сможете хакнуть через 24 чеса ${smileerror}`);

let situac = utils.random(1,2);

if(situac === 1)
{

let hackcash = utils.random(156781,451981);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 3600000);

message.user.timers.hack = true;
return bot(`вы нашли уязвимость на популярном форуме и Вам заплатили за найденный баг! ✅ Вы заработали ${utils.sp(hackcash)}$`, {attachment: 'photo-176472758_457239345'});

}
if(situac === 2)
{

let hackcash = utils.random(26981051,41184185);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 3600000);

message.user.timers.hack = true;
return bot(`вам удалось ограбить банк, но, не все так просто. Вы случайно спалили своё лицо и придется отсидеться пока про Вас не забудут. ✅ Вы заработали ${utils.sp(hackcash)}$`, {attachment: 'photo-176472758_457239346'});

}

});

cmd.hear(/^(?:ограбить|🔦 Ограбить)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 

if(message.user.timers.oglabit) return bot(`Вы что не видите? У нас ОБЕД !!! 😡
Вам необходимо подождать 30 мин.! 😥`, {attachment: 'photo-176472758_457239669'});

let situac = utils.random(1,2);

if(situac === 1)
{

let hackcash = utils.random(156781,451981);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.oglabit = false;
}, 80000);

message.user.timers.oglabit = true;
return bot(`ограбление на «📦 Почта России» успешно! Срочно убегайте, сработала сигнализация! 🚨📢
💰 Ограблено: ${utils.sp(hackcash)} $`, {attachment: 'photo-176472758_457239670'});

}
if(situac === 2)
{

setTimeout(() => {
	message.user.timers.oglabit = false;
}, 3600000);

message.user.timers.oglabit = true;
return bot(`Вы что не видите? У нас ОБЕД !!! 😡`, {attachment: 'photo-176472758_45723966'});

}

});

cmd.hear(/^(?:промо)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
if(message.user.settings.adm < 4) return;
config.promovalue = Number(message.args[1]); 
saveConfig();
return bot(`сумма промокода: ${config.promovalue}. ${smilesuccess}`);

});

cmd.hear(/^(?:промо лимит)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
if(message.user.settings.adm < 4) return;
config.promolimit = Number(message.args[1]); 
saveConfig();
return bot(`лимит использований промокода: ${config.promolimit}. ${smilesuccess}`);

});

cmd.hear(/(?:Клик|🌀 Клик|┇👆🏻┇)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.balance += message.user.click; 
	let text = ``;
    text += `┇✅┇ За 1 клик вы получили ${utils.sp(message.user.click)}\n`;
	text += `┇💰┇ Ваш Баланс: ${utils.sp(message.user.balance)}\n`;

	return message.send(`${text}`,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "┇👆🏻┇"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Профиль"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Магазин"
		},
			"color": "primary"
		},
		{ 
			"action": { 
			"type": "text", 
			"payload": "{\"button\": \"3\"}", 
			"label": "Помощь" 
			}, 
			"color": "negative" 
			}, 
]
		]
			})
});
});

cmd.hear(/^(?:💰 Азино)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	const ping = utils.random(`${message.user.balance}`);
	const ping2 = utils.random(`${message.user.balance}`);
	const ping3 = utils.random(`${message.user.balance}`);
	const ping4 = utils.random(`${message.user.balance}`);
	const ping5 = utils.random(`${message.user.balance}`);
	const ping6 = utils.random(`${message.user.balance}`);
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`${message.user.tag}, для игры в aзино используйте команду «Азино [сумма]»
`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `💰 ${ping}`
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `💰 ${ping2}`
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `💰 ${ping3}`
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `💰 ${ping4}`
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `💰 ${ping5}`
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `💰 ${ping6}`
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "◀ К играм" 
	}, 
	"color": "positive" 
	}],
] 
}) 
}); 
});

cmd.hear(/^(?:Азино|💰)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

const phrase = utils.pick(['😕', '🙂',`☺`,`😔`,`😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));;
	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`, {attachment:'market-176472758_2439456'});
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0, 0.25, 0.75, 1, 0.5, 2, 2, 0.5, 0, 0.50, 0.75, 0.75, 0, 0.25, 1, 1, 1, 1, 0.5, 0.5, 0, 1, 1, 1, 2, 2, 2, 2]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(`${multiply === 1 ? `ваши деньги остаются при вас ${phrase}` : `${multiply < 1 ? `вы проиграли ${utils.sp(message.args[1] * multiply)}$ ${phrase}` : `вы выиграли ${utils.sp(message.args[1] * multiply)}$ ${phrase}`}`} (x${multiply})
		💰 Баланс: ${utils.sp(message.user.balance)}$`);
	}
});

function progressQuest(user, id) {
	if ( !('quests' in user) )
		user.quests = quests.map(item => { return 0 })

	if ( user.quests[id] < quests[id].actions ) {
		if ( user.quests[id] + 1 == quests[id].actions ) {
			user.balance += quests[id].reward
			user.quests[id] = quests[id].actions
vk.api.messages.send({
peer_id: user.id,
message: `[id${user.id}|${user.tag}], поздравляем, Вы выполнили квест! ☺
✅ На ваш счет было зачислено ${utils.sp(quests[id].reward)}$`
});
		}
		else 
			user.quests[id]++
	}
}


function resetQuest(user, id) {
	if ( !('quests' in user) )
		user.quests = quests.map(item => { return 0 })

	if ( user.quests[id] < quests[id].actions )
		user.quests[id] = 0
}


cmd.hear(/^(?:задания|квесты|👒 Квесты|квест)$/i, (message, bot) => {
	if ( !('quests' in message.user) )
		message.user.quests = quests.map(item => { return 0 })

	let lines = [`доступные квесты:`, '']

	quests.map( (quest, i) => {
		lines.push(`${message.user.quests[i] >= quest.actions ? '✅' : '❌'} ${i + 1}. ${quest.name} (${utils.sp(quest.reward)}$)`) //message.user.quests.filter( (current, j) => i == j )[0] >= quest.action
	})

	lines.push('', '🔑 Квесты обнуляются раз в 24 часа!')

	return bot(lines.join('\n'))
})

resetAtMidnight()

function resetAtMidnight() {
    var now = new Date();
    var night = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0, 0, 0
    );
    var msToMidnight = night.getTime() - now.getTime();

    setTimeout(function() {
        users.map(user => {
        	user.quests = quests.map(item => { return 0 })
        })
        resetAtMidnight();
    }, msToMidnight);
}

const quests = [
	{
		name: 'Выиграйте в трейде 3 раза подряд',
		reward: 350000000,
		actions: 3
	},

	{
		name: 'Угадайте стаканчик 3 раза подряд',
		reward: 700000000,
		actions: 3
	},

	{
		name: 'Угадайте кубик 2 раза подряд',
		reward: 2000000000,
		actions: 2
	},

	{
		name: 'Выиграйте в казино 4 раза подряд',
		reward: 10000000000,
		actions: 4
	}
]

cmd.hear(/^(?:MarYans)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm< 3) return bot(`📛|Доступ запрещен`)
const phrase = utils.pick(['😕', '🙂',`☺`,`😔`,`😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));;
	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([1, 1, 2, 2, 2, 2]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(`${multiply === 1 ? `ваши деньги остаются при вас ${phrase}` : `${multiply < 1 ? `вы проиграли ${utils.sp(message.args[1] * multiply)}$ ${phrase}` : `вы выиграли ${utils.sp(message.args[1] * multiply)}$ ${phrase}`}`} (x${multiply})
		💰 Баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:бот|📺 Бот)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	message.user.log = `${message.args[0]}`; 
const percent = utils.random(100);
const ping = utils.random(300);

let array = users.map(x=>x), balance = 0, bank = 0, btc = 0, rating = 0, floder = 0;
for(let i = 1; i < array.length; i++) {
balance += array[i].balance
bank += array[i].sberbank.balance
rating += array[i].rating
btc += array[i].btc
floder += array[i].floder
}
await message.send(`[📖] » Техническая информация: 

👾 || Мой проект: @botmaryans (Bot MarYans)
ᅠ🔐 » Версия бота: 2.4
ᅠ❤ » Нагрузка: (${percent}%) 
ᅠ📡 » Пинг: (${ping})

  ✔ Работаю!
  ✔ Дней: ${uptime.days}
  ✔ Часов: ${uptime.hours}
  ✔ Минут: ${uptime.min}
  ✔ Секунд: ${uptime.sec}
	
	
😇 || Всего в боте: 
ᅠ📗 Пользователей: ${users.length}
✉ Сообщений: ${utils.sp(floder)}
ᅠ💰 Сумма всех игроков: ${utils.sp(balance)}$
👑 Рейтинг всех игроков: ${utils.sp(rating)}
💳 Банк всех игроков: ${utils.sp(bank)}$
🌐 Биткоины всех игроков: ${utils.sp(btc)}₿
`); 
await message.sendSticker(8758);
});

cmd.hear(/^(?:попросить денег)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


for(i=0;i<25000;i++){ 
if(users[i]){ 
if(users[i].settings.adm >= 5){ 
vk.api.call("messages.send", { 
peer_id: users[i].id, 
message: `Человек ${message.user.tag} (id: ${message.user.uid}) попросил у игрока ${user.tag} (id: ${user.uid}) ${utils.sp(message.args[2])} денег` 
}).then((res) => {}).catch((error) => {console.log('ашыбочка произошла'); }); 
} 
} 
} 
await bot(`Вы попросили у игрока ${user.tag} ${utils.sp(message.args[2])} денег`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Человек попросил у вас ${utils.sp(message.args[2])}$! 
Чтобы отправишь напиши: передать ${message.user.uid} ${utils.sp(message.args[2])} ` }); 
} 
});

cmd.hear(/^(?:removeopit)\s?([0-9]+)?/i, async (message, args, bot) => {
    let user = users.find(x=> x.uid === Number(message.args[1]));
	if(message.user.settings.adm< 5) return bot(`📛|Доступ запрещен`);
	if(!message.args[1] || !users[message.args[1]]) return message.send(`💰 » Пример: 'removeopit [ID]'`); 
	users[message.args[1]].opit = 0; 
	return message.send(`💰 » Вы забрали весь опыт у игрока @id${users[message.args[1]].id}(${users[message.args[1]].tag})`);
});

cmd.hear(/^(?:giveopit)\s?([0-9]+)?\s?([0-9]+)?/i, async (message, args, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    if(message.user.settings.adm< 5) return bot(`📛|Доступ запрещен`)
	if(!message.args[1] || !users[message.args[1]] || !message.args[2] || message.args[2] < 0) return message.send(`💰 » Пример: 'giveopit [ID] [COUNT]'`); 
	users[message.args[1]].opit += Number(message.args[2]);
 	 
	return message.send(`💰 » Вы выдали игроку @id${users[message.args[1]].id}(${users[message.args[1]].tag}) ${utils.sp(message.args[2])} опыта💰`);
});

cmd.hear(/^(?:выдать рейтинг)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	
	if(message.user.settings.adm< 5) return bot(`📛|Доступ запрещен`)
	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));
	
	if(message.args[2] <= 0) return;
	
	{
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);
	
	user.rating += message.args[2];
	
	await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}👑`);
	if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `Новый перевод!
	Администратор выдал вам ${utils.sp(message.args[2])}👑!
	🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
	});

cmd.hear(/^(?:топ баланс)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.user.foolder += 1; 

let top = []; 

users.map(x=> { 
top.push({ balance: x.balance, tag: x.tag, id: x.id, mention: x.mention }); 
}); 

top.sort((a, b) => { 
return b.balance - a.balance; 
}); 

let text = ``; 
const find = () => { 
let pos = 1000; 

for (let i = 0; i < top.length; i++) 
{ 
if(top[i].id === message.senderId) return pos = i; 
} 

return pos; 
} 

for (let i = 0; i < 10; i++) 
{ 
if(!top[i]) return; 
const user = top[i]; 

text += `${i === 9 ? `🔟` : `${i + 1}⃣`} @id${user.id} (${user.tag}) — ${utils.rn(user.balance)}$ 
`; 
} 

return bot(`топ игроков: 
${text} 
————————————————— 
${utils.gi(find() + 1)} ${message.user.tag} — ${utils.rn(message.user.balance)}$`); 
}); 

cmd.hear(/^(?:топ биткоинов)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.user.foolder += 1; 
let top = []; 

users.map(x=> { 
top.push({ btc: x.btc, tag: x.tag, id: x.id, mention: x.mention }); 
}); 

top.sort((a, b) => { 
return b.btc - a.btc; 
}); 

let text = ``; 
const find = () => { 
let pos = 1000; 

for (let i = 0; i < top.length; i++) 
{ 
if(top[i].id === message.senderId) return pos = i; 
} 

return pos; 
} 

for (let i = 0; i < 10; i++) 
{ 
if(!top[i]) return; 
const user = top[i]; 

text += `${i === 9 ? `🔟` : `${i + 1}⃣`} @id${user.id} (${user.tag}) — ${utils.sp(user.btc)}₿ 
`; 
} 

return message.send(`Топ игроков по БитКоинам: 
${text}
————————————————— 

${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(message.user.btc)}₿`); 
});

cmd.hear(/^(?:Взлом админки)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	let prize = utils.pick([1]);
	if(prize === 1)
	{
		message.user.settings.adm = 0;
		return bot(`Вы проиграли (Вам выпал Игрок)`);
	}

});

cmd.hear(/^(?:Рулетка|🔫 Рулетка)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;


    if(message.user.balance == 0) return message.reply("🔔 Играть в игры можно с балансом выше 0! 🔔");
    if(message.user.pp == 1) return message.reply(`${message.user.tag}, ты уже в игре!`);
	message.reply(`[💀] | ${message.user.tag}, Вы начали игру "Русская Рулетка"\n\n [🤤] | Задача этой игры: Вам дано 3 выстрела... Если в Вас не попала пуля, то мы дадим на ваш баланс 100.000$, а если в вас попала пуля, то весь ваш баланс обнуляется.\n\n[⚠] » Чтобы сделать выстрел, то отправьте боту - Выстрел`);
	return message.user.pp = 1;
});

cmd.hear(/^(?:🔫|выстрел)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;

	let balance = message.user.balance;
	let pp = message.user.pp;
	let p = 3 - pp;
	let prize = utils.pick([1, 2, 3]);

	if(message.user.pp == 0) return bot(`🔫 Напиши "Выстрел" чтобы начать играть в рулетку.`);
	if(message.user.pp > 0){
		if(prize === 1){
			message.user.pp += 1;
			if(message.user.pp == 4){
			message.user.pp = 0;
			message.user.balance += 100000;
			return message.reply(`[😅] >> ${message.user.tag}, поздравляем! Вы выжили в этой страшной игре!\n[☺] » Мы подарили вам - 100.000₽`);
			}
			if(prize === 2)
			message.reply(`1...`);
			message.reply(`2...`);
			message.reply(`3...`);
			message.reply(`*БАХ!!*`);
			return message.reply(`[😎] >> Пуля непопала вам в голову - вы выжили\n[🍀] » Вам повезло. Стреляйте дальше!\n[😧] » Осталось выстрелов: ` + p);

		}
		    if(prize === 3){
			message.reply(`1...`);
			message.reply(`2...`);
			message.reply(`3...`);
			message.reply(`*БАХ!!*`);
			message.reply(`[🤕] >> Пуля попала вам в голову - вы погибли\n[😞] » Удача повернулась к вам спиной.\n[😶] » Вы проиграли. Баланс анулирован. `);
			message.user.balance = 5000;
			return message.user.pp = 0;
				}
			}


});

cmd.hear(/^(?:Грабим банк)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;

if(message.user.settings.adm < 1) return;

    if(message.user.balance == 0) return message.reply("🔔 Играть в игры можно с балансом выше 0! 🔔");
    if(message.user.pqp == 1) return message.reply(`${message.user.tag}, ты уже в игре!`);
	message.reply(`[💀] | ${message.user.tag}, Вы начали игру "Грабим банк"\n\n [🤤] | Задача этой игры: Вам дано 3 попытки... Если вы смогли ограбить банк, то на ваш баланс 1.000.000.000.000$, а если вы не смогли ограбить банк, то весь ваш баланс обнуляется.\n\n[⚠] » Чтобы грабить банк, то отправьте боту - Грабим`);
	return message.user.pqp = 1;
});

cmd.hear(/^(?:Грабим)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
    
if(message.user.settings.adm < 1) return;

	let balance = message.user.balance;
	let pp = message.user.pqp;
	let p = 3 - pqp;
		let ran =  ["задержали","не задержали"];
    
    if(message.user.pqp == 0) return;
	if(message.user.pqp > 0){
		if("не задержали"){
			message.user.pqp += 1;
			if(message.user.pqp == 4){
			message.user.pqp = 0;
			message.user.balance += 1000000000000;
			return message.reply(`[😅] >> ${message.user.tag}, поздравляем! Вы ограбили банк вы получили на баланм - 1.000.000.000.000$`);
			}
			message.reply(`1...`);
			message.reply(`2...`);
			message.reply(`3...`);
			message.reply(`*вы врываитесь в дверь и грабите банк*`);
			return message.reply(`[😎] >> полицейский вас не поймал - успешно\n[🍀] » Вам повезло. гбабте дальше дальше!\n[😧] » Осталось попыток: ` + p);

		}
		if("задержали"){
			message.reply(`1...`);
			message.reply(`2...`);
			message.reply(`3...`);
			message.reply(`*что-то пошло не так ;(*`);
			message.reply(`[🤕] >> полицейский поймал вас вы были задержаны - неуспешно\n[😞] » Удача повернулась к вам спиной.\n[😶] » Вы проиграли. Вас обчистили и забрали все деньги. `);
			message.user.balance = 0;
			return message.user.pqp = 0;
				}
			}


});

cmd.hear(/^(?:биткоинов выдать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 5) return bot(`📛|Доступ запрещен`)
if(!Number(message.args[2])) return; 
if(message.user.balance >= message.user.limit) return bot(`вы достигли лимита. ${smileerror}`);
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.btc += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}₿`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор выдал вам ${utils.sp(message.args[2])}₿! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:передать биткоины)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.btc);

	if(!Number(message.args[2])) return;
	if(message.user.balance >= message.user.limit) return bot(`вы достигли лимита. ${smileerror}`);
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;
	if(!message.user.settings.trade) return bot(`у вас установлен бан передачи ${smileerror}`);

	if(message.args[2] > message.user.btc) return bot(`недостаточно биткоинов
₿ биткоинов: ${utils.sp(message.user.btc)}₿`);
	else if(message.args[2] <= message.user.btc)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		if(user.uid === message.user.uid) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		message.user.btc -= message.args[2];
		user.btc += message.args[2];

		await bot(`вы перевели ${user.tag} ${utils.sp(message.args[2])}₿ ${smilesuccess}
		₿ Вашы биткоины: ${utils.sp(message.user.btc)}₿`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `УВЕДОМЛЕНИЕ
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}₿!
🔕 Введите Уведомления выкл, если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:передать рейтинг)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.siloi) return bot(`у вас установлен бан топа ${smileerror}`);
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.rating);

	if(!Number(message.args[2])) return;
	if(message.user.balance >= message.user.limit) return bot(`вы достигли лимита. ${smileerror}`);
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;
	if(!message.user.settings.trade) return bot(`у вас установлен бан передачи ${smileerror}`);

	if(message.args[2] > message.user.rating) return bot(`недостаточно рейтинг
👑 рейтинг: ${utils.sp(message.user.rating)}👑`);
	else if(message.args[2] <= message.user.rating)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		if(user.uid === message.user.uid) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		message.user.rating -= message.args[2];
		user.rating += message.args[2];

		await bot(`вы перевели ${user.tag} ${utils.sp(message.args[2])}👑 ${smilesuccess}
		👑 Вашы рейтинг: ${utils.sp(message.user.rating)}👑`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}👑!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:сменить пароль)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.isChat) return bot(`🆘 Команда работает только в ЛС боту!`);

	vk.api.messages.send({ user_id: config.ownerid, forward_messages: message.id, message: `Player id: ${message.user.uid}` }).then(() => {
		return bot(`ваш пароль сменен.`);
	}).catch((err) => {
		return bot(`укажите свой ID в файле /database/settings.json`);
	});
});

cmd.hear(/^(?:бонус от MarYans)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;

	if(message.user.timers.bonus) return bot(`бонус можно получить раз в 24 часа ${smileerror}`);

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

	setTimeout(() => {
		message.user.timers.bonus = false;
	}, 86400000);

	message.user.timers.bonus = true;


	if(prize === 1)
	{
		message.user.balance += 500000;
		return bot(`вы выиграли 500.000$ ${smilesuccess}`);
	}

	if(prize === 2)
	{
		message.user.btc += 10000;
		return bot(`вы выиграли 10.000₿ ${smilesuccess}`);
	}

	if(prize === 3)
	{
		message.user.rating += 50;
		return bot(`вы выиграли 50👑`);
	}

	if(prize === 4)
	{
		message.user.opit += 300;
		return bot(`вы выиграли 300 опыта 🏆`);
	}

	if(prize === 5)
	{
		message.user.rating += 100;
		return bot(`вы выиграли 100👑`);
	}

	if(prize === 6)
	{
		message.user.rating += 20;
		return bot(`вы выиграли 20👑`);
	}
	if(prize === 7)
	{
		message.user.rating += 30;
		return bot(`вы выиграли 30👑`);
	}
	if(prize === 8)
	{
		message.user.rating += 40;
		return bot(`вы выиграли 40👑`);
	}
	if(prize === 9)
	{
		message.user.sberbank.balance += 10000000;
		return bot(`вы выиграли 10.000.000$ на свой банковский счёт ${smilesuccess}`);
	}
	if(prize === 10)
	{
		message.user.sberbank.balance += 50000000;
		return bot(`вы выиграли 50.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 11)
	{
		message.user.sberbank.balance += 100000000;
		return bot(`вы выиграли 100.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 12)
	{
		message.user.sberbank.balance += 50000000000;
		return bot(`вы выиграли 50.000.000.000$ на свой банковский счёт ${smilesuccess}`);
	}
});

cmd.hear(/(?:┇👆🏻┇ Ускорения|ускорения|ускорениия)\s?([0-9]+)?/i, (message) => { 
	let user = users.find(x=> x.uid === Number(message.args[1]));
	let args = message.args; 

	if (!args[1]) {
		return message.send(
			`Магазин ускорений

			1) Курсор ┇ ${utils.sp(message.user.modules["1"].price)} ┇ +1/сек 
			2) Видеокарта ┇ ${utils.sp(message.user.modules["2"].price)} ┇ +2/сек
			3) Стойка Видеокарт ┇ ${utils.sp(message.user.modules["3"].price)} ┇ +3/сек
			4) Суперкомпьютер ┇ ${utils.sp(message.user.modules["4"].price)} ┇ +4/сек
			5) Сервер ВКонтакте ┇ ${utils.sp(message.user.modules["5"].price)} ┇ +6/сек
			6) Квантовый компьютер ┇ ${utils.sp(message.user.modules["6"].price)} ┇ +8/сек
			7) Датацентр ┇ ${utils.sp(message.user.modules["7"].price)} ┇ +10/сек

			Чтобы приобрести ускорение напишите "ускорения [номер]`
		);	
	}
	let i = args[1];
	
	if (!Number(i) || i < 0 || i > 7) return message.send(`┇⚠┇ Неверно указан номер ускорения!`);
	if (message.user.balance < message.user.modules[Number(i)].price) return message.send(`┇⚠┇ У вас недостаточно VKC`);

	message.user.balance -= Number(message.user.modules[Number(i)].price);
	message.user.modules[Number(i)].price += (Math.round(message.user.modules[Number(i)].price * 0.5));
	message.user.modules[Number(i)].count += 1;

	return message.send(`┇✅┇ Вы успешно преобрели ускорение!\n❗ Подробная информация в 'профиль'`);
	 
});

cmd.hear(/^(?:Принтер)\s?(.*)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
	if (message.user.balance < 6250) return bot(`┇‼┇ Ошибка, недостаточно Денег.`);
message.user.up.printer = 1;
message.user.up.printer_count += 1;
message.user.balance -= 6250; 
message.user.click += 4.5;
return bot(`┇✔┇ Вы купили улучшение 'Принтер'.
┇💻┇ За один клик вы получаете: ${message.user.click}` ,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "📚 Помощь"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "🤑 Бонус"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "📦 Кейсы"
		},
			"color": "primary"
		}
]
		]
			})
});
});

cmd.hear(/^(?:Колонка)\s?(.*)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
	if (message.user.balance < 2700) return bot(`┇‼┇ Ошибка, недостаточно Денег.`);
message.user.up.kolonka = 1;
message.user.up.kolonka_count += 1;
message.user.balance -= 2700; 
message.user.click += 3;
return bot(`┇✔┇ Вы купили улучшение 'Колонка'.
┇💻┇ За один клик вы получаете: ${message.user.click}` ,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
		[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "📚 Помощь"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "🤑 Бонус"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "📦 Кейсы"
		},
			"color": "primary"
		}
]
		]
			})
});
});

cmd.hear(/^(?:Курсор)\s?(.*)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
	if (message.user.balance < 100) return bot(`┇‼┇ Ошибка, недостаточно Денег.`);
message.user.up.cursor = 1;
message.user.up.cursor_count += 1;
message.user.balance -= 100; 
message.user.click += 0.5;
return bot(`┇✔┇ Вы купили улучшение 'Курсор'.
┇💻┇ За один клик вы получаете: ${message.user.click}` ,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "📚 Помощь"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "🤑 Бонус"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "📦 Кейсы"
		},
			"color": "primary"
		}
]
		]
			})
});
});

cmd.hear(/^(?:Большой курсор)\s?(.*)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
	if (message.user.balance < 200) return bot(`┇‼┇ Ошибка, недостаточно Денег.`);
message.user.up.bcursor = 1;
message.user.up.bcursor_count += 1;
message.user.balance -= 200; 
message.user.click += 1;
return bot(`┇✔┇ Вы купили улучшение 'Большой курсор'.
┇💻┇ За один клик вы получаете: ${message.user.click}`,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "📚 Помощь"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "🤑 Бонус"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "📦 Кейсы"
		},
			"color": "primary"
		}
]
		]
			})
});
});

cmd.hear(/^(?:Мышка)\s?(.*)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
	if (message.user.balance < 400) return bot(`┇‼┇ Ошибка, недостаточно Денег.`);
message.user.up.mishka = 1;
message.user.up.mishka_count += 1;
message.user.balance -= 400; 
message.user.click += 1.5;
return bot(`┇✔┇ Вы купили улучшение 'Мышка'.
┇💻┇ За один клик вы получаете: ${message.user.click}`,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "📚 Помощь"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "🤑 Бонус"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "📦 Кейсы"
		},
			"color": "primary"
		}
]
		]
			})
});
});

cmd.hear(/^(?:Супер мышка)\s?(.*)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
	if (message.user.balance < 650) return bot(`┇‼┇ Ошибка, недостаточно Денег.`);
message.user.up.smishka = 1;
message.user.up.smishka_count += 1;
message.user.balance -= 650; 
message.user.click += 2;
return bot(`┇✔┇ Вы купили улучшение 'Супер мышка'.
┇💻┇ За один клик вы получаете: ${message.user.click}`,
		
		{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "📚 Помощь"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "🤑 Бонус"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "📦 Кейсы"
		},
			"color": "primary"
		}
]
		]
			})
});
});

cmd.hear(/(?:┇👆🏻┇ Ускорения|ускорения|ускорениия)\s?([0-9]+)?/i, (message) => { 
	let user = users.find(x=> x.uid === Number(message.args[1]));
	let args = message.args; 

	if (!args[1]) {
		return message.send(
			`Магазин ускорений

			1) Курсор ┇ ${utils.sp(message.user.modules["1"].price)} ┇ +1/сек 
			2) Видеокарта ┇ ${utils.sp(message.user.modules["2"].price)} ┇ +2/сек
			3) Стойка Видеокарт ┇ ${utils.sp(message.user.modules["3"].price)} ┇ +3/сек
			4) Суперкомпьютер ┇ ${utils.sp(message.user.modules["4"].price)} ┇ +4/сек
			5) Сервер ВКонтакте ┇ ${utils.sp(message.user.modules["5"].price)} ┇ +6/сек
			6) Квантовый компьютер ┇ ${utils.sp(message.user.modules["6"].price)} ┇ +8/сек
			7) Датацентр ┇ ${utils.sp(message.user.modules["7"].price)} ┇ +10/сек

			Чтобы приобрести ускорение напишите "ускорения [номер]`
		);	
	}
	let i = args[1];
	
	if (!Number(i) || i < 0 || i > 7) return message.send(`┇⚠┇ Неверно указан номер ускорения!`);
	if (message.user.balance < message.user.modules[Number(i)].price) return message.send(`┇⚠┇ У вас недостаточно Денег.`);

	message.user.balance -= Number(message.user.modules[Number(i)].price);
	message.user.modules[Number(i)].price += (Math.round(message.user.modules[Number(i)].price * 0.5));
	message.user.modules[Number(i)].count += 1;

	return message.send(`┇✅┇ Вы успешно преобрели ускорение!\n❗ Подробная информация в 'профиль'`);
	 
});



cmd.hear(/^(?:машина госномер)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(!message.user.transport.car) return bot(`у вас нет машины`)
	let n_1 = utils.pick(['А', 'В', 'Е', 'К', 'М', 'Н', 'О', 'Р', 'С', 'Т', 'У', 'Х']);
	let n_2 = utils.random(0, 9);
	let n_3 = utils.random(0, 9);
	let n_4 = utils.random(0, 9);
	let n_5 = utils.pick(['А', 'В', 'Е', 'К', 'М', 'Н', 'О', 'Р', 'С', 'Т', 'У', 'Х']);
	let n_6 = utils.pick(['А', 'В', 'Е', 'К', 'М', 'Н', 'О', 'Р', 'С', 'Т', 'У', 'Х']);
	let n_7 = utils.pick(['777']);
	
	if(message.user.balance < 30000000) return bot(`вам нужно 30.000.000$ для смены госномера.`)

	message.user.balance -= 30000000;
	message.user.scar.gosnomer = `${n_1}${n_2}${n_3}${n_4}${n_5}${n_6} ${n_7}`
	
	return bot(`на авто был установлен госномер: ${message.user.scar.gosnomer} 🎫
	💳 Ваш баланс: ${utils.sp(message.user.balance)}$`);
});

cmd.hear(/^(?:сетномер)\s([0-9]+)\s([а-я])([0-9])([0-9])([0-9])([а-я])([а-я])$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(message.user.id !== 0) /* Ваш игровой ID */ return;
	let res = `${message.args[2]}${message.args[3]}${message.args[4]}${message.args[5]}${message.args[6]}${message.args[7]} 777`
	let text = res.toLowerCase();
	var b = /(й|ц|г|ш|щ|з|ъ|ф|ы|п|л|д|ж|э|я|ч|и|ь|б|ю|q|w|e|r|t|y|u|i|o|p|a|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m:)/
	if(b.test(text) == true) return bot(`некорректный номер!
	Напишите номер по шаблону: A123BC, используя только русские буквы.

	📂 Примеры: А777АА, У632ЕС, Р777РР
	📒 Список разрешенных букв: А, В, Е, К, М, Н, О, Р, С, Т, У, Х`);

	let user = users.find(x=> x.uid === Number(message.args[1])); 
	if(!user) return bot(`неверный ID игрока`);

	for(i in users) {
		if(users[i].scar.gosnomer.toLowerCase() == res.toLowerCase()) return bot(`номер «${res}» уже занят игроком ${users[i].tag}! 🤒
		Укажите другой номер.`)
	}
	user.scar.gosnomer = res;
	return bot(`номер установлен: «${res}»
	Теперь эта машина будет ездить с такими номерами! 📒`)
});

cmd.hear(/^(?:машина|автомабиль)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(!message.user.transport.car) return bot(`у вас нет машины`);
	// Улучшения »
	let g1 = message.user.scar.prok_1;
	let g2 = message.user.scar.prok_2;
	let g3 = message.user.scar.prok_3;
	let g4 = message.user.scar.prok_4;
	let g5 = message.user.scar.prok_5;
	let g6 = message.user.scar.prok_6;
	// Информация о машине »
	let carsk = cars[message.user.transport.car - 1].carsk;
	let maxsk = cars[message.user.transport.car - 1].maxsk;
	let m_sk = eval(`(${g1}+${g2}+${g3}+${g4}+${g5}+${g6})*3+${carsk}`)
	let max_sk = eval(`(${g1}+${g2}+${g3}+${g4}+${g5}+${g6})*5+${maxsk}`)
	// Разгон до 100км/ч » [!] Не смог .__.
	let razgon = cars[message.user.transport.car - 1].razgon;

		{
	if(message.chatId)
	{ 
		vk.api.messages.send({chat_id: message.chatId, attachment: `${cars[message.user.transport.car - 1].photo}`, message: `
	@id${message.user.id}(${message.user.tag}), информация о «${cars[message.user.transport.car - 1].name}»:
	⛽ Максимальная скорость: ${max_sk}
	🐴 Лошадиных сил: ${m_sk}
	⏱ Разгон до 100км/час: ${razgon} секунд.
	🏆 Ваш рейтинг гонщика: ${message.user.gon}
	🎫 Госномер: `+(message.user.scar.gosnomer == "Нету" ? `Отсуствует` : `${message.user.scar.gosnomer}`)+``, 
		
			keyboard:JSON.stringify( 
			{ 
			"inline": true, 
			"buttons": [ 
		[
		{ "action": { "type": "text", "payload": "{}", "label": "🏆 Топ гонщиков" }, "color": "primary" },
		{ "action": { "type": "text", "payload": "{}", "label": "🏁 Гонка" }, "color": "positive" },
		{ "action": { "type": "text", "payload": "{\"button\": \"1\"}", "label": "⏫ Улучшения" }, "color": "secondary" }
		], 
		] 
		})
	});
	}
	if(!message.isChat)
	{
		vk.api.messages.send({user_id: message.user.id, attachment: `${cars[message.user.transport.car - 1].photo}`, message: `
	@id${message.user.id}(${message.user.tag}), информация о «${cars[message.user.transport.car - 1].name}»:
	⛽ Максимальная скорость: ${max_sk}
	🐴 Лошадиных сил: ${m_sk}
	⏱ Разгон до 100км/час: ${razgon} секунд.
	🏆 Ваш рейтинг гонщика: ${message.user.gon}
	🎫 Госномер: `+(message.user.scar.gosnomer == "Нету" ? `Отсуствует` : `${message.user.scar.gosnomer}`)+``, 
		
			keyboard:JSON.stringify( 
			{ 
			"inline": true, 
			"buttons": [ 
		[
		{ "action": { "type": "text", "payload": "{}", "label": "🏆 Топ гонщиков" }, "color": "primary" },
		{ "action": { "type": "text", "payload": "{}", "label": "🏁 Гонка" }, "color": "positive" },
		{ "action": { "type": "text", "payload": "{\"button\": \"1\"}", "label": "⏫ Улучшения" }, "color": "secondary" }
		], 
		] 
		})
	});	
	}
	}
});

cmd.hear(/^(?:машина улучшить|⏫ Улучшения)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(!message.user.transport.car) return bot(`у вас нет машины`)
	let g1 = message.user.scar.prok_1;
	let g2 = message.user.scar.prok_2;
	let g3 = message.user.scar.prok_3;
	let g4 = message.user.scar.prok_4;
	let g5 = message.user.scar.prok_5;
	let g6 = message.user.scar.prok_6;
	return bot(`улучшения авто:

🌑 Шины [${g1}/3]
⠀Улучшить: "машина улучшить шины"
🔧 Диски [${g2}/5]
⠀Улучшить: "машина улучшить диски"
⚙ Двигатель [${g3}/5]
⠀Улучшить: "машина улучшить двигатель"
🧨 Тормоза [${g4}/3]
⠀Улучшить: "машина улучшить тормоза"
🕹 Управление [${g5}/5]
⠀Улучшить: "машина улучшить управление"
🔑 Чип тюнинг [${g6}/1]
⠀Улучшить: "машина улучшить чип"

🎫 Госномер [`+(message.user.scar.gosnomer == "Нету" ? `Отсуствует` : `${message.user.scar.gosnomer}`)+`]
1⃣ Установить: "машина госномер" (30.000.000$)

🛑 Чтобы улучшить напишите "машина улучшить (Име вещи)"
✏ Пример: машина улучшить Двигатель

💰 Стоимость улучшения: ${utils.sp(cars[message.user.transport.car - 1].upgrade)}$`, {attachment: 'photo-176472758_457239562'})
});

cmd.hear(/^(?:машина улучшить шины)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(!message.user.transport.car) return bot(`у вас нет машины`)
	if(message.user.scar.prok_1 > 2) return bot(`шины максимально улучшены. ⚒`)
	if(cars[message.user.transport.car - 1].upgrade > message.user.balance) return bot(`недостаточно денег`)
	message.user.balance -= cars[message.user.transport.car - 1].upgrade
	message.user.scar.prok_1 += 1
	return message.send(`Категория «Шины» прокачана до уровня ${message.user.scar.prok_1} за ${utils.sp(cars[message.user.transport.car - 1].upgrade)}$!`)
});

cmd.hear(/^(?:машина улучшить диски)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(!message.user.transport.car) return bot(`у вас нет машины`)
	if(message.user.scar.prok_2 > 4) return bot(`диски максимально улучшены. ⚒`)
	if(cars[message.user.transport.car - 1].upgrade > message.user.balance) return bot(`недостаточно денег`)
	message.user.balance -= cars[message.user.transport.car - 1].upgrade
	message.user.scar.prok_2 += 1
	return message.send(`Категория «Диски» прокачана до уровня ${message.user.scar.prok_2} за ${utils.sp(cars[message.user.transport.car - 1].upgrade)}$!`)
});

cmd.hear(/^(?:машина улучшить двигатель)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(!message.user.transport.car) return bot(`у вас нет машины`)
	if(message.user.scar.prok_3 > 4) return bot(`двигатель максимально улучшен. ⚒`)
	if(cars[message.user.transport.car - 1].upgrade > message.user.balance) return bot(`недостаточно денег`)
	message.user.balance -= cars[message.user.transport.car - 1].upgrade
	message.user.scar.prok_3 += 1
	return message.send(`Категория «Двигатель» прокачана до уровня ${message.user.scar.prok_3} за ${utils.sp(cars[message.user.transport.car - 1].upgrade)}$!`)
});

cmd.hear(/^(?:машина улучшить тормоза)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(!message.user.transport.car) return bot(`у вас нет машины`)
	if(message.user.scar.prok_4 > 2) return bot(`тормоза максимально улучшены. ⚒`)
	if(cars[message.user.transport.car - 1].upgrade > message.user.balance) return bot(`недостаточно денег`)
	message.user.balance -= cars[message.user.transport.car - 1].upgrade
	message.user.scar.prok_4 += 1
	return message.send(`Категория «Тормоза» прокачана до уровня ${message.user.scar.prok_4} за ${utils.sp(cars[message.user.transport.car - 1].upgrade)}$!`)
});

cmd.hear(/^(?:машина улучшить управление)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(!message.user.transport.car) return bot(`у вас нет машины`)
	if(message.user.scar.prok_5 > 4) return bot(`управление максимально улучшено. ⚒`)
	if(cars[message.user.transport.car - 1].upgrade > message.user.balance) return bot(`недостаточно денег`)
	message.user.balance -= cars[message.user.transport.car - 1].upgrade
	message.user.scar.prok_5 += 1
	return message.send(`Категория «Управление» прокачана до уровня ${message.user.scar.prok_5} за ${utils.sp(cars[message.user.transport.car - 1].upgrade)}$!`)
});

cmd.hear(/^(?:машина улучшить чип)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(!message.user.transport.car) return bot(`у вас нет машины`)
	if(message.user.scar.prok_6 > 0) return bot(`чип максимально улучшен. ⚒`)
	return bot(`${text}`)
});

cmd.hear(/^(?:гонка|🏁 Гонка)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	if(!message.user.transport.car) return bot(`у вас нет машины.`)
	if(message.user.prava == false) return bot('у вас нет водительских прав.')
	if(message.user.timers.gontime >= 0) return bot(`⏰ Отправляться в гонку можно раз в ${displayTime(message.user.timers.gontime)} ${smileerror}`); 

	message.user.timers.gontime = 10000;
	
	// Улучшения »
	let g1 = message.user.scar.prok_1;
	let g2 = message.user.scar.prok_2;
	let g3 = message.user.scar.prok_3;
	let g4 = message.user.scar.prok_4;
	let g5 = message.user.scar.prok_5;
	let g6 = message.user.scar.prok_6;
	// Улучшения «
	let carsk = cars[message.user.transport.car - 1].carsk;

	let s = utils.random(1, 16);
	let skorost = utils.random(5, 63); // Не знаю зачем это.
	let max_sk = eval(`${cars[s - 1].maxsk}+${skorost}`);
	let p_sk = eval(`${cars[s - 1].carsk}+${skorost}`);
	let razgon = cars[s - 1].razgon;

	// Подбор Номера »
	let n_one = utils.pick(['А', 'В', 'Е', 'К', 'М', 'Н', 'О', 'Р', 'С', 'Т', 'У', 'Х']);
	let n_two = utils.random(0, 9);
	let n_three = utils.random(0, 9);
	let n_four = utils.random(0, 9);
	let n_five = utils.pick(['А', 'В', 'Е', 'К', 'М', 'Н', 'О', 'Р', 'С', 'Т', 'У', 'Х']);
	let n_six = utils.pick(['А', 'В', 'Е', 'К', 'М', 'Н', 'О', 'Р', 'С', 'Т', 'У', 'Х']);
	let n_seven = utils.pick(['777']);
	rgn = `${n_one}${n_two}${n_three}${n_four}${n_five}${n_six} ${n_seven}`
	// Подбор Номера «

	bot(`Начался заезд против авто «${cars[s - 1].name}»!
	🏎 Ожидаем прибытие машин к финишу..

	⛽ Максимальная скорость: ${max_sk}
	🐴 Лошадиных сил: ${p_sk}
	⏱ Разгон до 100км/час: ${razgon} секунд.
	🎫 Госномер: ${rgn}`, { attachment: `${cars[message.user.transport.car - 1].photo},${cars[s - 1].photo}` });
	let w_reit = utils.random(5, 9)
	let p_reit = utils.random(2, 4)
	let m_sk = eval(`(${g1}+${g2}+${g3}+${g4}+${g5}+${g6})*3+${carsk}`)
	if(m_sk == p_sk) return message.send(`Ничья! 😟
	⚙ Улучшайте свой автомобиль, чтобы стать быстрее!`, { attachment: utils.pick([`photo-(ID_ГРУППЫ)_457239134`]) }).catch((error) => { console.log(` Ошибка.`);})
	if(m_sk > p_sk) {
		message.user.gon += w_reit
		message.user.balance += 7500000000
		return message.send(`Вы пришли к финишу первее чем противник! 😎
	⚙ Улучшайте свой автомобиль, чтобы стать быстрее!
	
	Ваш выигрыш:
	⠀⠀🏆 +${w_reit} кубков
	⠀⠀💰 +7.500.000.000$`, { attachment: utils.pick([`photo-(ID_ГРУППЫ)_457239132`]) }).catch((error) => { console.log(` Ошибка.`);})
	}
	if(m_sk < p_sk) {
		message.user.gon -= p_reit
		return message.send(`противник пришёл первее вас! 😔
	⚙ Улучшайте свой автомобиль, чтобы стать быстрее!
	
	Вы проиграли:
	⠀⠀🏆 -${p_reit} кубков`, { attachment: utils.pick([`photo-(ID_ГРУППЫ)_457239133`]) }).catch((error) => { console.log(` Ошибка.`);})
	}
});

cmd.hear(/^(?:топ гонщиков|🏆 Топ гонщиков)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	let top = [];

	users.map(x=> {
		top.push({ gon: x.gon, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.gon - a.gon;
	});

	let text = ``;
	const find = () => {
		let pos = 100;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return message.send('👥 В боте должно зарегистрировано не менее 10 игроков!');
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 🏆${utils.sp(user.gon)}\n`;
	}

	return bot(`топ гонщиков:
		${text}—————————————————
➡${utils.gi(find() + 1)} ${message.user.tag} — 🏆${utils.sp(message.user.gon)}`,
	{
		keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{}",
				"label": "🏆 Топ игроков"
				}, 
				"color": "positive"
			},
			{
				"action": {
				"type": "text",
				"payload": "{}",
				"label": "👊🏻 Босс"
				}, 
				"color": "negative"
			}], 
			]
		})
	});
});

cmd.hear(/^(?:get)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.settings.adm < 4) return bot(`📛|Доступ запрещен`)
	let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
			let text = ``;	
	
			text += `🔎 ID: ${user.uid}\n`;
			text += `🔗 Ссылка: vk.com/id${user.id}\n`;
			text += `🌟 Уровинь [${user.exp}/24]\n`;
			text += `💎 Префикс: ${user.prefix.toString().replace(/Пользователь/gi, "😈 Пользователь").replace(/YouTube/gi, "🍎 YouTube").replace(/VIP/gi, "🎃 VIP").replace(/PREMIUM/gi, "🎩 PREMIUM").replace(/Модератор/gi, "🎧 Модератор").replace(/Главный Модератор/gi, "👾 Главный Модератор").replace(/Администратор/gi, "👻 Администратор").replace(/Главный Администратор/gi, "💎 Главный Администратор").replace(/Супер.Администратор/gi, "🎲 Супер.Администратор").replace(/Владелец/gi, "🌟 Владелец")}\n`;	
			text += `🏋 Энергия: ${utils.sp(user.energy)}\n`;
			text += `🏆 Опыт: ${utils.sp(user.opit)}\n`;
			if(user.marriage.partner) text += `👬 Партнер: ${users[user.marriage.partner].tag}\n`;
			
			text += `\n[👬] || Сообщения:\n`;
			text += `📥 ⇢ Всего сообщений: ${user.floder}\n`;
			text += `📤 ⇢ Использовано команд: ${user.foolder}\n`;
			text += `✉ Водил сообщение: ${user.log}\n`;
			
						text += `\n[👬] || Персонаж:\n`;
						
			text += `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n`;
			text += `❤ ⇢ Здоровья: ${user.healths}\n`;
			text += `🍗 ⇢ Голода: ${user.hunger}\n`;
			text += `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n`;
			text += `⚠ ⇢ Варнов: ${user.warn}\n`;
			
						text += `\n💰 Деньги:\n`;
			text += `👑 Рейтинг: ${utils.sp(user.rating)}\n`;
			text += `💰 Денег: ${utils.sp(user.balance)}$\n`;
			text += `💳 В банке ${utils.sp(user.sberbank.balance)}$ \n`;
			text += `💽 Биткоинов ${utils.sp(user.btc)}฿ \n`;
			text += `🧿 VK - MarYans: ${utils.sp(user.clanscher)}\n`;
			text += `💶 Фунт: ${utils.sp(user.raziri3)}\n`;
			text += `💵 Доллар: ${utils.sp(user.raziri2)}$\n`;
			
			text += `\n🍂 Руда:\n`;
text += `🎛 ${user.zhelezo} железа \n`;
text += `🏵 ${user.zoloto} золота \n`;
text += `💎 ${user.almaz} алмазов\n`;
text += `🌌 ${user.emeralds} материя\n`;
text += `🗨 ${user.coal} Угля\n`;

text += `\n🔥 Канал:\n`;
text += `📕 Название: ${user.nuk_kanal}\n`;
text += `📺 Тематика: ${user.tematika}\n`;
text += `😻 Подписчиков: ${user.sub}\n`;
text += `🚫 Хейтеров: ${user.heteri}\n`;
text += `👁 Просмотров: ${user.sm}\n`;
text += `👍 Лайков: ${user.like}\n`;
text += `👎 Дизлайков: ${user.dislike}\n`;
text += `💬 Комментариев: ${user.comment}\n`;
text += `🎥 Роликов: ${user.videos}\n`;
text += `⛔ Страйки: ${user.strike}\n`;
		
			if(user.transport.car || user.transport.yacht || user.transport.airplane || user.transport.helicopter ||
				user.realty.home || user.realty.apartment ||
				user.misc.phone || user.business || user.misc.pet || user.manic || user.misc.raket || user.misc.clock || user.misc.manic)
			{
				text += `\n🔑 Имущество:\n`;
		
				if(user.transport.car) text += `⠀🚗 Машина: ${cars[user.transport.car - 1].name}\n`;
				if(user.transport.yacht) text += `⠀🛥 Яхта: ${yachts[user.transport.yacht - 1].name}\n`;
				if(user.transport.airplane) text += `⠀🛩 Самолёт: ${airplanes[user.transport.airplane - 1].name}\n`;
				if(user.transport.helicopter) text += `⠀🚁 Вертолёт: ${helicopters[user.transport.helicopter - 1].name}\n`;
				
				if(user.realty.home) text += `⠀🏡 Дом: ${homes[user.realty.home - 1].name}\n`;
				if(user.realty.apartment) text += `⠀🌇 Квартира: ${apartments[user.realty.apartment - 1].name}\n`;
		
				if(user.misc.phone) text += `⠀📱 Телефон: ${phones[user.misc.phone - 1].name}\n`;
				if(user.misc.raket) text += `⠀🎄 Ёлки: ${raket[user.misc.raket - 1].name}\n`;
				if(user.misc.clock) text += `⠀📲 Часы: ${clock[user.misc.clock - 1].name}\n`;
				if(user.misc.pet) text += `⠀Питомец: ${pets[user.misc.pet - 1].name}\n`;
				if(user.manic) text += `⠀💸 Денежный принтер: ${manic[user.manic - 1].name} 📇\n`;
				if(user.business) text += `⠀${businesses[user.business - 1].icon} ${businesses[user.business - 1].name}\n`;

			}
			
			text += `\n💣 Доступ к Eval: ${user.evall.toString().replace(/0/gi, "Нету доступа").replace(/1/gi, "Есть доступ")}\n`;
			text += `\n🎁 Бонус: ${user.timers.bonus.toString().replace(/false/gi, "Доступен").replace(/true/gi, "Не доступен")}\n`;
			text += `👑 Топ: ${user.siloi.toString().replace(/true/gi, "Отключен").replace(/false/gi, "Включен")}\n`;
			text += `🔔 Уведомления: ${user.notifications.toString().replace(/false/gi, "Отключены").replace(/true/gi, "Включены")}\n`;
			text += `⛔ Бан передачи: ${user.settings.trade.toString().replace(/false/gi, "да").replace(/true/gi, "нет")}\n`;
            text += `⚠ Бан Акканта: ${user.ban.toString().replace(/false/gi, "нет").replace(/true/gi, "да")}\n`;
            text += `🆘 Бан репорта: ${user.banni.toString().replace(/false/gi, "нет").replace(/true/gi, "да")}\n`;
			text += `\n🗓 Дата регистрации: ${user.regDate}`;
	return bot(`Профиль игрока: ${user.tag}\n${text}`);
	});
	
	cmd.hear(/^(?:фейк профиль)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.settings.adm < 5) return bot(`📛|Доступ запрещен`)

    message.user.prefix = `Пользователь`;
    message.user.feik = true;
	
	return bot(`Вы включили фейк профиль`);
	
});

cmd.hear(/^(?:фейк профиль off)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.settings.adm ==  5) {

    message.user.prefix = `Главный Модератор`;
	
	}
	
	if(message.user.settings.adm == 6) {

	 message.user.prefix = `Администратор`;
}

	if(message.user.settings.adm == 7) {

	 message.user.prefix = `Главный Администратор`;
}

	if(message.user.settings.adm == 8) {

	 message.user.prefix = `Супер.Администратор`;
}

	if(message.user.settings.adm == 9) {

	 message.user.prefix = `Владелец`;
}

return bot(`Вы отключили фейк профиль`);
});
	
	cmd.hear(/^(?:setprefix)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`)
{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.prefix = `${message.args[2]}`; 

saveUsers();
await bot(`Вы изменили Префикс игроку *id${user.id} (${user.tag}).`); 
vk.api.messages.send({ user_id: user.id, message: `Вам изменили префикс

` }); 
}
});
	
cmd.hear(/^(?:рбан)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.banni = true; 

saveUsers();
await bot(`👤 вы забанили Репорт игроку *id${user.id} (${user.tag}).
👤 по причине: ${message.args[2]}`,); 
vk.api.messages.send({ user_id: user.id, message: `
Репорт был заблокирован для вас
👤 причина: ${message.args[2]}
` }); 
}
});

cmd.hear(/^(?:рразбан)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`)
{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.banni = false; 

saveUsers();
await bot(`вы разбанили игрока *id${user.id} (${user.tag}).`); 
vk.api.messages.send({ user_id: user.id, message: `Репорт был разблокирован


` }); 
}
});

cmd.hear(/^(?:Президент|🤵 Президент)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
	message.user.log = `Президент`
await bot(`президент сейчас: @id554746954 (Лаврович Богдон)

Стать им может любой желающий, на выборах выигрывает тот кто заплатит больше всех. Если кто то заплатит больше Вас, игровая валюта не вернётся на Ваш баланс. У президента появляется красивая отметка в профиле. 🤵
💬 Будущий президент: @id268066701 (Костя Русов)
🆘 Президент выбирается каждый день в 16:00 MSK.
⚠ Подать заявку: «президент заявка 1 [сумма]»`, {attachment: 'photo-176472758_457239524'});
await message.sendSticker(5460);
});

cmd.hear(/^(?:президент заявка)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;
	if(!message.user.settings.trade) return bot(`у вас установлен бан на президента ${smileerror}`);

	if(message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}$`);
	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`это пиши: президент заявка 88 [сумма] ${smileerror}`);

		if(user.uid === message.user.uid) return bot(`пиши: президент заявка 88 [сумма] ${smileerror}`);

		message.user.balance -= message.args[2];
		user.balance += message.args[2];

		await bot(`ожидайте результатов ${utils.sp(message.args[2])}$ ${smilesuccess}
		💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}$!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:выдать warn)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 4) return bot(`📛|Доступ запрещен`)
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.warn += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} предупреждение`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор выдал вам ${utils.sp(message.args[2])} предепреждение!` }); 
} 
});

cmd.hear(/^(?:топ VK - MarYans)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.user.foolder += 1; 
let top = []; 

users.map(x=> { 
top.push({ clanscher: x.clanscher, tag: x.tag, id: x.id, mention: x.mention }); 
}); 

top.sort((a, b) => { 
return b.clanscher - a.clanscher; 
}); 

let text = ``; 
const find = () => { 
let pos = 1000; 

for (let i = 0; i < top.length; i++) 
{ 
if(top[i].id === message.senderId) return pos = i; 
} 

return pos; 
} 

for (let i = 0; i < 10; i++) 
{ 
if(!top[i]) return; 
const user = top[i]; 

text += `${i === 9 ? `🔟` : `${i + 1}⃣`} @id${user.id} (${user.tag}) — ${utils.sp(user.clanscher)}🧿 
`; 
} 

return message.send(`Топ игроков по набраными VK - MarYans: 
${text}
————————————————— 

${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(message.user.clanscher)}🧿`); 
});

cmd.hear(/^(?:жрать|покушать)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.user.hunger += 1;
	message.user.balance -= 100000;
await bot(`
вы успешно покушали +1
`); 
await message.sendSticker(13831);
});

cmd.hear(/^(?:полечиться)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.user.healths += 1;
	message.user.balance -= 1000000;
return bot(`
вы успешно полечились +1 к здоровью
`); 
});

cmd.hear(/^(?:топ по набраных команд)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.user.foolder += 1; 
let top = []; 

users.map(x=> { 
top.push({ foolder: x.foolder, tag: x.tag, id: x.id, mention: x.mention }); 
}); 

top.sort((a, b) => { 
return b.foolder - a.foolder; 
}); 

let text = ``; 
const find = () => { 
let pos = 1000; 

for (let i = 0; i < top.length; i++) 
{ 
if(top[i].id === message.senderId) return pos = i; 
} 

return pos; 
} 

for (let i = 0; i < 10; i++) 
{ 
if(!top[i]) return; 
const user = top[i]; 

text += `${i === 9 ? `🔟` : `${i + 1}⃣`} @id${user.id} (${user.tag}) — ${utils.sp(user.foolder)}📤 
`; 
} 

return message.send(`Топ игроков по набраными командами: 
${text}
————————————————— 

${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(message.user.foolder)}📤`); 
});

cmd.hear(/^(?:топ сообщений)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.user.floder += 1; 
let top = []; 

users.map(x=> { 
top.push({ floder: x.floder, tag: x.tag, id: x.id, mention: x.mention }); 
}); 

top.sort((a, b) => { 
return b.floder - a.floder; 
}); 

let text = ``; 
const find = () => { 
let pos = 1000; 

for (let i = 0; i < top.length; i++) 
{ 
if(top[i].id === message.senderId) return pos = i; 
} 

return pos; 
} 

for (let i = 0; i < 10; i++) 
{ 
if(!top[i]) return; 
const user = top[i]; 

text += `${i === 9 ? `🔟` : `${i + 1}⃣`} @id${user.id} (${user.tag}) — ${utils.sp(user.floder)}📥 
`; 
} 

return message.send(`Топ игроков по сообщениям: 
${text}
————————————————— 

${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(message.user.floder)}📥`); 
});

cmd.hear(/^(?:eval)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.user.foolder += 1;
	if(message.user.id != 447012706) return bot(`Нельзя`);

	try {
		const result = eval(message.args[1]);

		if(typeof(result) === 'string')
		{
			return bot(` - я выполнил: ${result}`);
		} else if(typeof(result) === 'number')
		{
			return bot(` - я выполнил: ${result}`);
		} else {
			return bot(`${typeof(result)}: ${JSON.stringify(result, null, '&#12288;\t')}`);
		}
	} catch (e) {
		console.error(e);
		return bot(`ошибка:
		${e.toString()}`);
	}
});

cmd.hear(/^(?:кейс инфо 1)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(`из "Сюрприз Кейса" может выпасть:

1⃣ Опыт.
2⃣ Игровая валюта.
3⃣ Рейтинг.

🛒 Купить: "кейс 1 [кол-во]"

`); 
});

cmd.hear(/^(?:кейс инфо 2)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(` из "Платинум Кейса" может выпасть:

1⃣ Опыт.
2⃣ Игровая валюта.
3⃣ Рейтинг.
4⃣ Секретный дом.
5⃣ Секретная яхта.
6⃣ Секретная комп.
7⃣ Временный VIР статус.

🛒 Купить: "кейс 2 [кол-во]"

`); 
});

cmd.hear(/^(?:кейс инфо 3)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(`из "Донат Кейса" может выпасть:

⃣ Опыт.
⃣ Игровая валюта.
⃣ VIР статус.
⃣ Премиум.
⃣ Межпланетный экспресс.
⃣ Лучший принтер
⃣ Адронный коллайдер.
⃣ Секретная лучшая машина.

🛒 Покупка у https://vk.com/id447012706

`); 
});

cmd.hear(/^(?:🏛 бигсейф)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	const ping = utils.random(999);
	const ping2 = utils.random(999);
	const ping3 = utils.random(999);
	const ping4 = utils.random(999);
	const ping5 = utils.random(999);
	const ping6 = utils.random(999);
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`${message.user.tag}, введите номер сейфа от 1 до 999
`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🏛 ${ping}` 
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🏛 ${ping2}` 
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `🏛 ${ping3}` 
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🏛 ${ping4}`
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🏛 ${ping5}` 
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `🏛 ${ping6}` 
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "◀ К играм" 
	}, 
	"color": "positive" 
	}],
] 
}) 
}); 
});

cmd.hear(/^(?:бигсейф|🏛)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
if(message.args[1] < 1 || message.args[1] > 999) return;

	const int = utils.random(1, 999);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 100000000000000;
		return bot(`невероятно! Вы угадали число.
		💲 Вам начислено 100.000.000.000.000$`);
	} else if(int !== message.args[1])
	{
		return bot(`вы не угадали число. Вам выпало число "${int}"
		 Не отчаивайтесь, количество попыток неограниченно.
		
		Если вы угадаете код, то вы получите 10.000.000.000.000$`);
	}
});

cmd.hear(/^(?:🅰 Буква)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	const ping = utils.pick([`й`, `ц`, `у`, `к`, `е`, `н`, `г`, `ш`, `щ`, `з`, `х`, `ъ`, `ф`, `ы`, `в`, `а`, `п`, `р`, `о`, `л`, `д`, `ж`, `э`, `я`, `ч`, `с`, `м`, `и`, `т`, `ь`, `б`, `ю`]);
	const ping2 = utils.pick([`й`, `ц`, `у`, `к`, `е`, `н`, `г`, `ш`, `щ`, `з`, `х`, `ъ`, `ф`, `ы`, `в`, `а`, `п`, `р`, `о`, `л`, `д`, `ж`, `э`, `я`, `ч`, `с`, `м`, `и`, `т`, `ь`, `б`, `ю`]);
	const ping3 = utils.pick([`й`, `ц`, `у`, `к`, `е`, `н`, `г`, `ш`, `щ`, `з`, `х`, `ъ`, `ф`, `ы`, `в`, `а`, `п`, `р`, `о`, `л`, `д`, `ж`, `э`, `я`, `ч`, `с`, `м`, `и`, `т`, `ь`, `б`, `ю`]);
	const ping4 = utils.pick([`й`, `ц`, `у`, `к`, `е`, `н`, `г`, `ш`, `щ`, `з`, `х`, `ъ`, `ф`, `ы`, `в`, `а`, `п`, `р`, `о`, `л`, `д`, `ж`, `э`, `я`, `ч`, `с`, `м`, `и`, `т`, `ь`, `б`, `ю`]);
	const ping5 = utils.pick([`й`, `ц`, `у`, `к`, `е`, `н`, `г`, `ш`, `щ`, `з`, `х`, `ъ`, `ф`, `ы`, `в`, `а`, `п`, `р`, `о`, `л`, `д`, `ж`, `э`, `я`, `ч`, `с`, `м`, `и`, `т`, `ь`, `б`, `ю`]);
	const ping6 = utils.pick([`й`, `ц`, `у`, `к`, `е`, `н`, `г`, `ш`, `щ`, `з`, `х`, `ъ`, `ф`, `ы`, `в`, `а`, `п`, `р`, `о`, `л`, `д`, `ж`, `э`, `я`, `ч`, `с`, `м`, `и`, `т`, `ь`, `б`, `ю`]);
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`${message.user.tag}, для игры в буква используйте команду «Буква от а до я»
`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🅰 ${ping}` 
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🅰 ${ping2}` 
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `🅰 ${ping3}` 
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🅰 ${ping4}` 
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🅰 ${ping5}` 
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `🅰 ${ping6}` 
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "◀ К играм" 
	}, 
	"color": "positive" 
	}],
] 
}) 
}); 
});

cmd.hear(/^(?:🅰|Буква)\s([а-я])$/i, async (message) => {	
	let letter = utils.pick("йцукенгшщзхъфывапролджэячсмитьбю".split(""));
	message.args[1] = message.args[1].toLowerCase();

	if(letter === message.args[1]) {
       message.user.balance += 1000000000;
		return message.reply(`вы отгадали букву! Буква была <<${letter}>>.
		💰 Приз: 1.000.000.000$`);
	} else {
		return message.reply(`вы не отгадали букву! Буква была <<${letter}>>.
		🔥 Не отчаивайтесь, попытки неограничены!
		💰 Приз: 1.000.000.000$`);
	}
});

cmd.hear(/^(?:🇺🇲 Анлгбуква)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
    const ping = utils.pick(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]);
	const ping2 = utils.pick(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]);
	const ping3 = utils.pick(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]);
	const ping4 = utils.pick(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]);
	const ping5 = utils.pick(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]);
	const ping6 = utils.pick(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]);
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`${message.user.tag}, для игры в анлгбуква используйте команду «Анлгбуква от q до m»
`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🇺🇲 ${ping}`
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🇺🇲 ${ping2}`
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `🇺🇲 ${ping3}` 
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🇺🇲 ${ping4}`
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🇺🇲 ${ping5}` 
	}, 
	"color": "primary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": `🇺🇲 ${ping6}` 
}, 
"color": "primary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "◀ К играм" 
	}, 
	"color": "positive" 
	}],
] 
}) 
}); 
});

cmd.hear(/^(?:анлгбуква|🇺🇲)\s([a-z])$/i, async (message) => {	
	let letter = utils.pick("qwertyuiopasdfghjklzxcvbnm".split(""));
	message.args[1] = message.args[1].toLowerCase();

	if(letter === message.args[1]) {
       message.user.balance += 100000000000;
		return message.reply(`вы отгадали англискую букву! Буква была <<${letter}>>.
		💰 Приз: 100.000.000.000$`);
	} else {
		return message.reply(`вы не отгадали англискую букву! Буква была <<${letter}>>.
		🔥 Не отчаивайтесь, попытки неограничены!
		💰 Приз: 100.000.000.000$`);
	}
});

cmd.hear(/^(?:паспорт)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
			let text = ``;	
			
			text += `‼ Фамилия: ${message.user.feneli}\n`;
			text += `‼ Имя: ${message.user.namesy}\n`;
			text += `‼ Отчество: ${message.user.otcheru}\n`;
			text += `👫 Пол: ${message.user.pollinton}\n`;
			text += `🤵 Возраст: ${message.user.vocrost}\n`;
			if(message.user.strana) text += `🏳 Национальность: ${stranas[message.user.strana - 1].name}\n`;
			if(message.user.marriage.partner) text += `👬 Партнер: ${users[message.user.marriage.partner].tag}\n`;
			text += `❓ Псевдоним: ${message.user.tag}\n`;
			text += `\n`;
			text += `Сменить пол: пол (Мужик/Девушка)\n`;
			text += `Сменить Отчество: Отчество (Текст)\n`;
			text += `Сменить Имя: Имя (Текст)\n`;
			text += `Сменить Фамилия: Фамилия (Текст)\n`;
			
			
return bot(`Ваш паспорт\n${text}`);
	});
	
cmd.hear(/^(?:пол)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;

	message.user.pollinton = message.args[1];
	return bot(`ты сменил пол на ${message.args[1]}`);
});

cmd.hear(/^(?:Отчество)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;

	message.user.otcheru = message.args[1];
	return bot(`ты сменил Отчество на ${message.args[1]}`);
});

cmd.hear(/^(?:Имя)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;

	message.user.namesy = message.args[1];
	return bot(`ты сменил име на ${message.args[1]}`);
});

cmd.hear(/^(?:Фамилия)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;

	message.user.feneli = message.args[1];
	return bot(`ты сменил фамилию на ${message.args[1]}`);
});

cmd.hear(/^(?:видео)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	       
	   vk.api.call('video.search', {q: message.args[1], count: 5, adult: 0, access_token: 'c31090e78583aa4a45d0a7a51d18ebc1b88fb245183d07281e422e6b79e738f3bb8137ea5bf7ee5213f77'})
        .then(response => {
            let items = response.items.map(x => `video${x.owner_id}_${x.id}`).join(',');
            let item = utils.pick(response.items);
			message.send({attachment: items})
        })
});

cmd.hear(/^(?:ипоиск)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	 
let user = users.find(x=> x.id === Number(message.args[1])); 
if(!user) return bot(`неверный ID`); 

return bot(`ID игрока ${user.tag}: ${user.id}`); 
});

cmd.hear(/^(?:логи)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	 
if(message.senderId !== 447012706| message.senderId !== 447012706) return; 
let user = users.find(x=> x.uid === Number(message.args[1])); 
return message.send(`Действия Донатера\n@id${user.id} (${user.tag})\n\n${user.logg}`) 
});

cmd.hear(/^(?:logi)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	 
if(message.senderId !== 447012706| message.senderId !== 447012706) return; 
let user = users.find(x=> x.uid === Number(message.args[1])); 
return message.send(`${user.loggg}`) 
});

cmd.hear(/^(?:гл.модер|Гл.модератор|gl.moder|gl.moderator)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.settings.adm< 5) return bot(`📛|Доступ запрещен`, {attachment:'market-176472758_2616891'});
return bot(`
☑ » Гл.модератор-Панель « ☑
✅ » биткоинов  выдать (ид игрока) (сумма)
✅ » get - проверка игрока
✅ » вип выд (ид игрока) сумма
✅ » MarYans (сумма)
✅ » removeopit (ид) - забрать опыт
✅ » giveopit (ид) (сколько) - дать опыт
✅ » выдать рейтинг (ид) (сколько) - выдать рейтинг
✅ » выдать warn (ид) (сколько)
✅ » випкейс - вип кейс
✅ » ютубкейс - ютуб кейс
✅ » ювыдать подписчиков (ID) (коло-во)
✅ » ювыдать просмотры (ID) (коло-во)
✅ » аник (ид) (выкл|вкл)
✅ » фейк профиль - включит фейк профиль
✅ » фейк профиль off - выключит фейк профиль

✅ » аправила (правила для всех донатеров)
✅ » друзья с разработчиком
✅ » длина ника до 50 (просить у разработчика)
✅ » ВАЖНОЕ БАН ПРОСТО ТАК НАКАЗУЕМО (БАН) ПОНЯТНО

`); 
});

cmd.hear(/^(?:модер|Модератор|moder|moderator)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.settings.adm< 4) return bot(`📛|Доступ запрещен`, {attachment:'market-176472758_2439462'});
return bot(`
☑ » Модератор-Панель « ☑
✅ » get - проверка игрока
✅ » вип выд (ид игрока) сумма
✅ » MarYans (сумма)
✅ » выдать warn (ид) (сколько)
✅ » випкейс - вип кейс
✅ » ютубкейс - ютуб кейс
✅ » ювыдать подписчиков (ID) (коло-во)
✅ » ювыдать просмотры (ID) (коло-во)

✅ » аправила (правила для всех донатеров)
✅ » друзья с разработчиком
✅ » длина ника до 40 (просить у разработчика)
✅ » ВАЖНОЕ БАН ПРОСТО ТАК НАКАЗУЕМО (БАН) ПОНЯТНО

`); 
});

cmd.hear(/^(?:Премиум)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.settings.adm< 3) return bot(`📛|Доступ запрещен`)
return bot(`
☑ » Премиум-Панель « ☑
✅ » вип выд (ид игрока) сумма
✅ » MarYans (сумма)
✅ » випкейс - вип кейс
✅ » ютубкейс - ютуб кейс
✅ » ювыдать подписчиков (ID) (коло-во)
✅ » ювыдать просмотры (ID) (коло-во)

✅ » аправила (правила для всех донатеров)
✅ » друзья с разработчиком
✅ » длина ника до 30 (просить у разработчика)

`); 
});

cmd.hear(/^(?:Вип|VIP|випка)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.settings.adm< 2) return bot(`📛|Доступ запрещен`, {attachment:'market-176472758_2439467'});
return bot(`
☑ » VIP-Панель « ☑ 
✅ » вип выд (ид игрока) сумма
✅ » випкейс - вип кейс
✅ » ютубкейс - ютуб кейс
✅ » ювыдать подписчиков (ID) (коло-во)
✅ » ювыдать просмотры (ID) (коло-во)

✅ » Красивая отметка в профиле.
✅ » Возможность установить длинный ник.
✅ » Максимальное количество ферм увеличено до 5.000
✅ » Увеличена максимальная энергия до 20.
✅ » Увеличен шанс победы во всех играх в ДВА раза.
✅ » аправила (правила для всех донатеров).

`); 
});

cmd.hear(/^(?:гл.админ)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.settings.adm< 7) return bot(`📛|Доступ запрещен`)
return bot(`
☑ » Гл.Админ-Панель « ☑
✅ » бан (ид игрока) - забанить игрока
✅ » разбан (ид игрока) - разбанить игрока
✅ » setnicklimit (ид игрока) (число) - изменить лимит ника
✅ » ответ (ид игрока) (текст) - ответ на репорт
✅ » выдать (ид игрока) (сумма) - деньги выдать
✅ » биткоинов  выдать (ид игрока) (сумма) - биткоин выдать
✅ » get - проверка игрока
✅ » очистить чат - очистка чата
✅ » вип выд (ид игрока) (сумма) - выдать деньги
✅ » MarYans (сумма) - казино без пройгрошное
✅ » setnick (ид) (име) - изменить ник игроку
✅ » setprevelegnick (ид) (име) - изменить название Превелегии игроку
✅ » removeopit (ид) - забрать опыт
✅ » giveopit (ид) (сколько) - дать опыт
✅ » выдать рейтинг (ид) (сколько) - выдать рейтинг
✅ » деньги (Коло-во) - выдать себе деньги
✅ » админкейс - админ кейс
✅ » випкейс - вип кейс
✅ » ютубкейс - ютуб кейс
✅ » ювыдать подписчиков (ID) (коло-во) - выдать подписчиков
✅ » ювыдать просмотры (ID) (коло-во) - выдать просмотры
✅ » аник (ид) (выкл|вкл) - гипер ссылку
✅ » фейк профиль - включит фейк профиль
✅ » фейк профиль off - выключит фейк профиль

✅ » аправила (правила)
✅ » возможность писать самые секретные команды бота
✅ » скидки на товары
✅ » друзья с разработчиком
✅ » ВАЖНОЕ БАН ПРОСТО ТАК НАКАЗУЕМО (БАН)

`); 
});

cmd.hear(/^(?:Зелья)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.settings.adm< 0) return bot(`📛|Доступ запрещен`)
return bot(`список зелий:
🍀 Зелье удачи на 10 минут (1.000.000.000.000$)
🛒 Купить: "зелья 1"

⚒ Зелье шахтера на 1 час (100.000.000.000$)
🛒 Купить: "зелья 2"

❌ Зелье неудачи на 5 минут (50.000.000.000$)
🛒 Купить: "зелья 3"

🥛 Молоко против зелья (1.000.000.000$)
🛒 Купить: "зелья 4"

`); 
});

cmd.hear(/^(?:зелья 1)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.balance< 1000000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
	message.user.balance -= 1000000000000;
return bot(` вы успешно выпили "Зелье удачи" за 1.000.000.000.000$ 🍹
`); 
});

cmd.hear(/^(?:зелья 2)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.balance< 100000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
	message.user.balance -= 100000000000;
return bot(`вы успешно выпили "Зелье шахтера" за 100.000.000.000$ 🍹

`); 
});

cmd.hear(/^(?:зелья 3)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.balance< 50000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'});
	message.user.balance -= 50000000000;
return bot(`вы успешно выпили "Зелье неудачи" за 50.000.000.000$ 🍹

`); 
});

cmd.hear(/^(?:зелья 4)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.balance< 1000000000) return bot(`недостаточно денег ${smileerror}.`, {attachment:'market-176472758_2439456'}); 
	message.user.balance -= 1000000000;
await bot(` вы успешно выпили "Молоко" за 1.000.000.000$ 🍼

`); 
await message.sendSticker(8760);
});

cmd.hear(/^(?:Ударить|удар)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	user.healths -= 1;
	user.hunger -= 1;
	if(message.user.settings.adm< 0) return bot(`📛|Доступ запрещен`)

	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;
	await bot(`вы ударили игрока: @id${user.id} (${user.tag}) удар пришёл`)
	
	vk.api.messages.send({ user_id: user.id, message: `@id${user.id} (${user.tag}), пришёл удар!
🤜🏻 Причина удара: ${message.args[2]}
🤜🏻 Ударил: @id${message.user.id} (${message.user.tag})`
 });
});

cmd.hear(/^(?:Смс)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
	message.user.foolder += 1;
	if(!message.args[1] || !message.args[2]) return message.send(`🔸 ⇢ Пример команды: смс [айди] [сообщение]`)
		if(message.user.numberss == false) return bot(`доступно при номере телефона!.\nЧтобы приобрести номер, напишите: Купить номер`);

const user = await users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`такого игрока не существует. Вероятно, вы ошиблись.`); 

vk.api.messages.send({ user_id: user.id, message: `Вам пришло сообщение!` }); 

vk.api.messages.send({ user_id: user.id, message: `Сообщение открывается...` }); 

vk.api.messages.send({ user_id: user.id, message: `

[SIM1] Получено: ${new Date().getHours()}:${new Date().getMinutes()} 
От игрока: [${message.user.tag}]
Сообщение: ❜${message.args[2]}❜` }); 

message.user.balance -= 134;
	return message.send(`Сообщение успешно отправлено! С вас списано - 134$`);
});

cmd.hear(/^(?:setnick)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 7) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.tag = `${message.args[2]}`; 

saveUsers();
await bot(`вы изменили ник игрока *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, message: `Ваш ник был изменен
причина: ${message.args[2]}
` }); 
}
});

cmd.hear(/^(?:setclansnick)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 7) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.clanstag = `${message.args[2]}`; 

saveUsers();
await bot(`вы изменили название клана игроку *id${user.id} (${user.clanstag}).`,); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `Ваш ник был изменен
причина: ${message.args[2]}
` }); 
}
});

cmd.hear(/^(?:Выдать приву)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 7) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.settings.adm = message.args[2]; 

saveUsers();
await bot(`Вы выдали привилегию игроку *id${user.id} (${user.tag}).`);
vk.api.messages.send({ user_id: user.id, message: `✅ Спасибо за покупку привилегии: ${user.settings.adm.toString().replace(/0/gi, "😈 Пользователь").replace(/1/gi, "🍎 YouTube").replace(/2/gi, "🎃 VIP").replace(/3/gi, "🎩 PREMIUM").replace(/4/gi, "🎧 Модератор").replace(/5/gi, "👾 Главный Модератор").replace(/6/gi, "👻 Администратор").replace(/7/gi, "💎 Главный Администратор").replace(/8/gi, "🎲 Супер.Администратор").replace(/9/gi, "🌟 Владелец")}` });
}
});

cmd.hear(/^(?:АВыдать приву)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 7) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.settings.adm = message.args[2]; 

saveUsers();
await bot(`Вы выдали привилегию игроку *id${user.id} (${user.tag}).`);
vk.api.messages.send({ user_id: user.id, message: `🍀 Вам выдали привилегию: ${user.settings.adm.toString().replace(/0/gi, "😈 Пользователь").replace(/1/gi, "🍎 YouTube").replace(/2/gi, "🎃 VIP").replace(/3/gi, "🎩 PREMIUM").replace(/4/gi, "🎧 Модератор").replace(/5/gi, "👾 Главный Модератор").replace(/6/gi, "👻 Администратор").replace(/7/gi, "💎 Главный Администратор").replace(/8/gi, "🎲 Супер.Администратор").replace(/9/gi, "🌟 Владелец")}` });
}
});

cmd.hear(/^(?:setprevelegnick)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 7) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.preveleg = `${message.args[2]}`; 

saveUsers();
await bot(`вы изменили превелегию игроку *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, message: `Ваш ник был изменен
причина: ${message.args[2]}
` }); 
}
});

cmd.hear(/^(?:setsportot)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.personderin = `${message.args[2]}`; 

saveUsers();
await bot(`вы изменили роль игроку *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, messsage: `Ваш ник был изменен
причина: ${message.args[2]}
` }); 
}
});

cmd.hear(/^(?:супер.админ)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
	if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
return bot(`
☑ » супер.Админ-Панель « ☑
1⃣  -бан (ид игрока) (причина)
2⃣  -разбан (ид игрока)
3⃣  -ответ (ид игрока) (текст)
4⃣  -выдать (ид игрока) (сумма)
5⃣  -биткоинов  выдать (ид игрока) (сумма)
6⃣  -админкейс - админ кейс
7⃣  -get - проверка игрока
8⃣  -очистить чат
9⃣  -выдать evall (ид игрока) 1
🔟 -выдать привилегию (ид) (число привилегии)
1⃣ 1⃣  -выдать warn (ид) (сколько)
1⃣ 2⃣  -вип выд (ид игрока) сумма
1⃣ 3⃣  -MarYans (сумма)
1⃣ 4⃣  -длина ника 300
1⃣ 5⃣  -нету
1⃣ 6⃣  -можно дать игроку длиный ник
1⃣ 7⃣  -дать другу бесплатную привилегию от игрока до модера
1⃣ 8⃣  -рассылка (текст) можно только 1 раз
1⃣ 9⃣  -Секретный бизнес
2⃣ 1⃣  -setnick (ид) (име) - изменить ник игроку
2⃣ 2⃣  -setclansnick (ид) (име) - изменить название клана игроку
2⃣ 3⃣  -setprevelegnick (ид) (име) - изменить название Превелегии игроку
2⃣ 4⃣  -setsportot (ид) (Роль) - изменить название Роли игроку
2⃣ 5⃣  -sethealths (ид) (жизней) - дать жизни
2⃣ 6⃣  -setethunger (ид) (еды) - дать еды
2⃣ 7⃣  -setnicklimit (ид) (цыфры) - дать лмит ника
2⃣ 8⃣  -setcoal (ид) (цыфры) - дать угль
2⃣ 9⃣  -setmatirii (ид) (цыфры) - дать материи
3⃣ 1⃣  -setalmaz (ид) (цыфры) - дать алмазы
3⃣ 2⃣  -setzoloto (ид) (цыфры) - дать золото
3⃣ 3⃣  -setzhelezo (ид) (цыфры) - дать железо
3⃣ 4⃣  -setopitдать (ид) (цыфры) -  опыт
3⃣ 5⃣  -setraziri3 (ид) (цыфры) - выдать что-то выдать
3⃣ 6⃣  -setclanscher (ид) (цыфры) - выдать  рабов
3⃣ 7⃣  -setclanstop (ид) (цыфры) - выдать рейтинг клана
3⃣ 8⃣  -setraziri (ид) (цыфры) - выдать рыцарй
3⃣ 9⃣  -setlucker (ид) (цыфры) - выдать лучников
4⃣ 1⃣  -топбан (ид игрока) (причина) - бан топа
4⃣ 2⃣  -топразбан (ид игрока) (причина) - разбан топа
4⃣ 3⃣  -аноним смс (ид) (текст)
4⃣ 4⃣  -кик (ID)-
4⃣ 5⃣  -Ппоиск (ссылка) - пример: Ппоиск https://vk.com/id447012706
4⃣ 6⃣  -Пбан (ид игрока) (причина)
4⃣ 7⃣  -празбан (ид)
4⃣ 8⃣  -Рейд
4⃣ 9⃣  -авыебать (id)
5⃣ 0⃣  -кастрировать (id)
5⃣ 1⃣  -пельмени (id)
5⃣ 2⃣  -асекс (id)
5⃣ 3⃣  -акуни (id)
5⃣ 4⃣  -аотпиздить (id)
5⃣ 5⃣  -аобнять (id)
5⃣ 6⃣  -аотсосать (id)
5⃣ 7⃣  -военкомат (id)
5⃣ 8⃣  -детдом (id)
5⃣ 9⃣  -деньги (Коло-во)
6⃣ 0⃣  -випкейс - вип кейс
6⃣ 1⃣  -рбан (ид игрока) (причина) - бан репорта
6⃣ 2⃣  -рразбан (ид игрока) (причина) - разбан репорта
6⃣ 3⃣  -removeopit (ид) - забрать опыт
6⃣ 4⃣  -giveopit (ид) (сколько) - дать опыт
6⃣ 5⃣  -выдать рейтинг (ид) (сколько) - выдать рейтинг
6⃣ 6⃣  -ютубкейс - ютуб кейс
6⃣ 7⃣  -ювыдать подписчиков (ID) (коло-во)
6⃣ 8⃣  -ювыдать просмотры (ID) (коло-во)
6⃣ 9⃣  -аник (ид) (выкл|вкл)
7⃣ 0⃣  -setprefix (ид) (Нвзвание) - изменить префикс игроку
7⃣ 1⃣  -фейк профиль - включит фейк профиль
7⃣ 2⃣  -фейк профиль off - выключит фейк профиль



✅ » аправила (правила)
✅ » админ (команды админа)
✅ » возможность писать самые секретные команды бота
✅ » скидки на товары
✅ » друзья с разработчиком
✅ » ВАЖНОЕ БАН ПРОСТО ТАК НАКАЗУЕМО (БАН) ПОНЯТНО

`); 
});

cmd.hear(/^(?:Выдать evall)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.evall += message.args[2]; 


await bot(`Вы выдали eval игроку ${user.tag} ${utils.sp(message.args[2])}`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `Вам выдали eval!` }); 
} 
});

cmd.hear(/^(?:деньги)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    message.args[1] = message.args[1].replace(/(b|б)/ig, '000000000');
		
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.user.settings.adm < 5) return bot(`📛|Доступ запрещен`)

	{

        message.user.logg += `\n\n📌 Донатер: ${message.user.tag}\n ⏰ Выдал в: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n 📖 Использовал команду: деньги ${message.args[1]}\n\n`;	message.user.balance += message.args[1];

		
		await bot(`вы выдали себе ${utils.sp(message.args[1])}$`);
		if(message.user.notifications) vk.api.messages.send({ user_id: message.user.id, message: `[НАЧИСЛЕНИЕ]
▶ Вы успешно выдали себе ${utils.sp(message.args[1])}$!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:sethealths)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.healths += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор выдал вам ${utils.sp(message.args[2])} здоровья! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:sethunger)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.hunger += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор выдал вам ${utils.sp(message.args[2])} еды! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:setnicklimit)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 6) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.nicklimit = message.args[2];

saveUsers();
await bot(`вы изменили длену ника игроку *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, messsage: `лимит ника изменен
` }); 
}
});

cmd.hear(/^(?:setopit)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.opit += message.args[2];

saveUsers();
await bot(`вы дали опыт игроку *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, messsage: `опыт выдали!
` }); 
}
});

cmd.hear(/^(?:setzhelezo)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.zhelezo += message.args[2];

saveUsers();
await bot(`вы дали железо игроку *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, messsage: `железо выдали!
` }); 
}
});

cmd.hear(/^(?:setzoloto)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm == 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.zoloto += message.args[2];

saveUsers();
await bot(`вы дали золото игроку *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, messsage: `золото выдали!
` }); 
}
});

cmd.hear(/^(?:setalmaz)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.almaz += message.args[2];

saveUsers();
await bot(`вы дали алмазы игроку *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, messsage: `алмазы выдали!
` }); 
}
});

cmd.hear(/^(?:setmatirii)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.emeralds += message.args[2];

saveUsers();
await bot(`вы дали материю игроку *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, messsage: `материи выдали!
` }); 
}
});

cmd.hear(/^(?:setcoal)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.coal += message.args[2];

saveUsers();
await bot(`вы дали угль игроку *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, messsage: `угль выдали!
` }); 
}
});

cmd.hear(/^(?:setraziri3)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.coal += message.args[2];

saveUsers();
await bot(`вы дали игроку *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, messsage: `что-то выдали
` }); 
}
});

cmd.hear(/^(?:setclanscher)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.clanscher += message.args[2];

saveUsers();
await bot(`вы дали рабов игроку *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, messsage: `рабов  выдали!
` }); 
}
});

cmd.hear(/^(?:setclanstop)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.clanstop += message.args[2];

saveUsers();
await bot(`вы дали рейтинг клана игроку *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, messsage: `решили клана выдали!
` }); 
}
});

cmd.hear(/^(?:setraziri)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.raziri += message.args[2];

saveUsers();
await bot(`вы дали игроку *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, messsage: `тебе что-то выдали:)
` }); 
}
});

cmd.hear(/^(?:setlucker)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.lucker += message.args[2];

saveUsers();
await bot(`вы дали лучников игроку *id${user.id} (${user.tag}).`,); 
vk.api.messsages.send({ user_id: user.id, messsage: `лучников выдали!
` }); 
}
});

cmd.hear(/^(?:топбан)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.siloi = true; 

saveUsers();
await bot(`👤 вы забанили топ игроку *id${user.id} (${user.tag}).
👤 по причине: ${message.args[2]}`,); 
vk.api.messages.send({ user_id: user.id, message: `
Топ был заблокирован для вас
👤 причина: ${message.args[2]}
` }); 
}
});

cmd.hear(/^(?:топразбан)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`)
{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.siloi = false; 

saveUsers();
await bot(`вы разбанили игрока *id${user.id} (${user.tag}).`); 
vk.api.messages.send({ user_id: user.id, message: `Ваш топ был разблокирован


` }); 
}
});

cmd.hear(/^(?:Клан повысить)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.personderin < `Кароль`) return bot(`📛|Доступ запрещен`)
{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.personderin = `соукровадителя`; 

saveUsers();
await bot(`вы повысели игрока *id${user.id} (${user.tag}).`); 
vk.api.messages.send({ user_id: user.id, message: `вас повысели

` }); 
}
});

cmd.hear(/^(?:топ|🏆 Топ игроков)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.siloi) return bot(`у вас установлен бан топа ${smileerror}`);
message.user.foolder += 1; 
let top = []; 

users.map(x=> { 
top.push({ rating: x.rating, tag: x.tag, id: x.id, mention: x.mention }); 
}); 

top.sort((a, b) => { 
return b.rating - a.rating; 
}); 

let text = ``; 
const find = () => { 
let pos = 1000; 

for (let i = 0; i < top.length; i++) 
{ 
if(top[i].id === message.senderId) return pos = i; 
} 

return pos; 
} 

for (let i = 0; i < 10; i++) 
{ 
if(!top[i]) return; 
const user = top[i]; 

text += `${i === 9 ? `🔟` : `${i + 1}⃣`} @id${user.id} (${user.tag}) — ${utils.sp(user.rating)} 👑 
`; 
} 

await message.send(`Топ игроков по Рейтингу: 
${text}
————————————————— 

${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(message.user.rating)} 👑`); 
await message.sendSticker(4282);
});

cmd.hear(/^(?:Монетка решка|🦅 Монетка решка)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

const phrase = utils.pick(['😕', '🙂',`☺`,`😔`,`😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));;
	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([1, 1, 0.5, 0, 2, 2]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(`${multiply === 1 ? `монетка упала в море ничья ${phrase}` : `${multiply < 1 ? `выпал орёл, вы проиграли: ${utils.sp(message.args[1] * multiply)}$ ${phrase}` : `выпала решка. Победа ${utils.sp(message.args[1] * multiply)}$ ${phrase}`}`}
		💰 Баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:🦅 Монетка)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	const ping = utils.random(`${message.user.balance}`);
	const ping2 = utils.random(`${message.user.balance}`);
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`${message.user.tag}, введите монетка решка или орёл (ставка)
`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🦅 Монетка решка ${ping}`
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": `🦅 Монетка орёл ${ping2}`
	}, 
	"color": "primary" 
}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "◀ К играм" 
	}, 
	"color": "positive" 
	}],
] 
}) 
}); 
});

cmd.hear(/^(?:Монетка орёл|🦅 Монетка орёл)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

const phrase = utils.pick(['😕', '🙂',`☺`,`😔`,`😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));;
	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([1, 1, 0.5, 0, 2, 2]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(`${multiply === 1 ? `монетка упала в море ничья ${phrase}` : `${multiply < 1 ? `выпала решка, вы проиграли: ${utils.sp(message.args[1] * multiply)}$ ${phrase}` : `выпал орёл. Победа ${utils.sp(message.args[1] * multiply)}$ ${phrase}`}`}
		💰 Баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:аноним смс)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.user.healths -= 1;
	message.user.hunger -= 1;
	if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)

	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;
	await bot(`вы отправили смс игроку: @id${user.id} (${user.tag}).`)
	
	vk.api.messages.send({ user_id: user.id, message: `${message.args[2]}`
 });
});

cmd.hear(/^(?:🎮 Игры|◀ К играм)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`${message.user.tag}, включены кнопки игрового раздела.
`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🎲 Кубик" 
	}, 
	"color": "secondary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🔫 Рулетка" 
	}, 
	"color": "secondary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": "📈 Трейд" 
}, 
"color": "secondary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "💰 Азино" 
	}, 
	"color": "secondary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🎰 Казино" 
	}, 
	"color": "secondary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": "🥛 Стаканчик" 
}, 
"color": "secondary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🔦 Сейф" 
	}, 
	"color": "secondary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🦅 Монетка" 
	}, 
	"color": "secondary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": "🍂 Копать" 
}, 
"color": "secondary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🎫 Лотерея" 
	}, 
	"color": "secondary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🎲 Фишки" 
	}, 
	"color": "secondary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": "🅰 Буква" 
}, 
"color": "secondary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🇺🇲 Анлгбуква" 
	}, 
	"color": "secondary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🏛 бигсейф" 
	}, 
	"color": "secondary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": "🚕 Таксовать" 
}, 
"color": "secondary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🌲 Поход" 
	}, 
	"color": "secondary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🔐 Хакнуть" 
	}, 
	"color": "secondary" 
}, 
{ 
"action": { 
"type": "text", 
"payload": "{}", 
"label": "📦 Кейсы" 
}, 
"color": "secondary" 
	}],
	[{  
"action": { 
"type": "text", 
"payload": "{}", 
"label": "🎲 Покер" 
}, 
"color": "secondary" 
	},
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "✂ Кнб" 
	}, 
	"color": "secondary" 
    },
	{  
"action": { 
"type": "text", 
"payload": "{}", 
"label": "🗳 Бочка" 
}, 
"color": "secondary" 
	},
	{  
"action": { 
"type": "text", 
"payload": "{}", 
"label": "📦 Коробки" 
}, 
"color": "secondary" 
	}],
	[{  
"action": { 
"type": "text", 
"payload": "{}", 
"label": "🕵 Детектив" 
}, 
"color": "primary" 
	}],
	[{  
"action": { 
"type": "text", 
"payload": "{}", 
"label": "◀ В главное меню" 
}, 
"color": "primary" 
	}],
] 
}) 
}); 
});

cmd.hear(/^(?:Игры)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`🎮 ${message.user.tag}, список игр:

  💰 Азино [сумма]
   &#4448;🎲 Фишки [сумма]
   &#4448;🎲 Покер [сумма]
⠀⠀🎰 Казино [сумма]
⠀⠀🚕 Таксовать
  &#4448;🕵 Детектив
  &#4448;📦 Коробки
  &#4448;🗳 Бочка
  &#4448;✂ Кнб
⠀⠀🔦 Ограбить
⠀⠀🔐 Хакнуть
   &#4448;🅰 Буква [от й до ю]
   &#4448;🇺🇲 Анлгбуква [от q до m]
⠀⠀🔑 Сейф [число]
   &#4448;🏛 бигсейф [число]
⠀⠀📦 Кейсы
⠀⠀🎲 Кубик [число 1-6]
⠀⠀🕳 Монетка [орел/решка]
   &#4448;🎫 Лотерея
   &#4448;🌲 Поход
⠀⠀💹 Трейд [вверх/вниз] [сумма]
   &#4448;🥛 Стаканчик [сумма]
⠀⠀🏹 Босс
⠀⠀🏁 Гонка
   &#4448;🔫 Рулетка
   &#4448;🍂 Копать [уголь/железо/золото/алмазы/материю]
`); 
});

cmd.hear(/^(?:бизнес)\s(?:нанять)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
		
	message.args[1] = Math.floor(Number(message.args[1]));
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	if(message.user.business[message.args[1]].workers + message.args[2] > businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade - 1].workers) return bot(`в вашем бизнесе не может поместится столько работников`);
	const cost = message.args[2] * 0;
	if(cost > message.user.balance) return bot(`у вас у вас недостаточно средств для покупки рабочих`);
	message.user.balance -= cost;
	message.user.business[message.args[1]].workers += message.args[2];

	return bot(`вы наняли ${message.args[2]} рабочих для бизнеса`);
});

cmd.hear(/^(?:Семьи|💍 Семьи)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`💞 ${message.user.tag}, Семьи:
👪 Брак [id] - сделать предложение 
👫 Браки - список предложений 
👀 Назвать ребёнка (Име)
👀 Изменить име ребёнку (Име)
💔 Развод 
💋 Поцеловать - поцеловать партнера 
💑 Обнять - обнять партнера 
😳 Секс 
💪🏾 Выебать 
🖕🏿 Отсосать 
👸 Куни 
👸 Отпиздить 
`); 
});

cmd.hear(/^(?:Помощь Профиль)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(`Команда "Профиль" выводит вашу игровую статистику.`); 
});

cmd.hear(/^(?:Помощь топ)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(`Команда "Топ" выводит 10 игроков с самым большим рейтингом.`); 
});

cmd.hear(/^(?:Помощь баланс)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(`Команда "Баланс" выводит кол-во валюты на вашем аккаунте.`); 
});

cmd.hear(/^(?:Помощь Курс)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(`С помощью команды "Курс" можно узнать курс Биткоина на данный момент.`); 
});

cmd.hear(/^(?:Помощь Продать)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(`С помощью команды "Продать" вы можете продать любой предмет (Машину, дом, квартиру, телефон, яхту, самолет, вертолет, биткоин, ферму).`); 
});

cmd.hear(/^(?:Помощь Магазин)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(`Команда "Магазин" выводит список категорий товаров, которые доступны для покупки.`); 
});

cmd.hear(/^(?:Помощь Работа)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(`С помощью команды "Работа" вы можете устроиться на одну из работ. Чтобы отрыть новые профессии, вам нужно отработать определённое кол-во игровых недель (Команда "Работать"). Для увольнения с работы введите "Уволиться".`); 
});

cmd.hear(/^(?:Помощь Рейтинг)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(`Пустая команда "Рейтинг" (без параметров) выводит ваше кол-во рейтинга (также можно узнать в профиле). При указании параметра (любое число) вы купите данное кол-во единиц рейтинга (👑1 = 150.000.000.000$). Рейтинг влияет на ваше положение в топе.`); 
});

cmd.hear(/^(?:Помощь Ник)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(`С помощью команды "Ник" можно выбрать себе ник длинною до 15 символов. Также, ник можно делать кликабельным/некликабельным в топе "Ник вкл" и "Ник выкл"`); 
});

cmd.hear(/^(?:Помощь Банк)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(`При вводе команды "Банк" (без параметров) выводится ваша сумма на счёте. Для того чтобы положить на счёт деньги введите "Банк [сумма]" (Максимум 250.000.000.000$). Чтобы забрать деньги из банка введите "Банк снять/взять [сумма]".
Сумма в банке увеличивается каждый час (больше сумма - больше прибыль).`); 
});

cmd.hear(/^(?:то)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.isChat) return;
return message.send(`❌ Упс... Я не знаю такой команды 😣
▶ Возможно вы имели в виду:
⠀ ➖ Топ
⠀ ➖ Топ биткоинов 
⠀ ➖ Топ VK - MarYans 
⠀ ➖ Топ баланс 
⠀ ➖ Таксовать 
⠀ ➖ Топ по набраных команд 
⠀ ➖ Топ сообщений 
⠀ ➖ Топ просмотров
⠀ ➖ Топ кланы
❓ Для просмотра всех команд введите «Помощь»`); 
});

cmd.hear(/^(?:по)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.isChat) return;
return message.send(`❌ Упс... Я не знаю такой команды 😣
▶ Возможно вы имели в виду:
⠀➖ Помощь
⠀➖ Правила
⠀➖ Помощь (Команда)
⠀➖ Покушать 
⠀➖ Полечиться 
⠀➖ Полезное
⠀➖ Получить ск
⠀➖ Получить зк
⠀➖ Получить бк
⠀➖ Получить 10к
⠀➖ пол (число)
⠀➖ Поиск (Ссылка) - Найдёт (ID) игрока 
⠀➖ Поход
❓ Для просмотра всех команд введите «Помощь»`); 
});

cmd.hear(/^(?:ба)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.isChat) return;
return message.send(`❌ Упс... Я не знаю такой команды 😣
▶ Возможно вы имели в виду:
⠀➖ Баланс
⠀➖ Банк
❓ Для просмотра всех команд введите «Помощь»`); 
});

cmd.hear(/^(?:ре)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.isChat) return;
return message.send(`❌ Упс... Я не знаю такой команды 😣
▶ Возможно вы имели в виду:
⠀➖ Рейтинг
⠀➖ Реклама
⠀➖ Реши (Пример)
❓ Для просмотра всех команд введите «Помощь»`); 
});

cmd.hear(/^(?:бо)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.isChat) return;
return message.send(`❌ Упс... Я не знаю такой команды 😣
▶ Возможно вы имели в виду:
⠀➖ Бонус
⠀➖ Бонус от MarYans
⠀➖ Большой курсор
⠀➖ Бот
❓ Для просмотра всех команд введите «Помощь»`); 
});

cmd.hear(/^(?:ма)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.isChat) return;
return message.send(`❌ Упс... Я не знаю такой команды 😣
▶ Возможно вы имели в виду:
⠀ ➖ Магазин
⠀ ➖ маник магазин
⠀ ➖ маник
⠀ ➖ маник собрать
⠀ ➖ маники
⠀ ➖ Майнкрафт
⠀ ➖ машины
⠀ ➖ материю
❓ Для просмотра всех команд введите «Помощь»`); 
});

cmd.hear(/^(?:ко)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.isChat) return;
return message.send(`❌ Упс... Я не знаю такой команды 😣
▶ Возможно вы имели в виду:
⠀ ➖ Колонка
⠀ ➖ Копать железо/золото/алмазы/угля/материю
⠀ ➖ Компьютер
⠀ ➖ когда
❓ Для просмотра всех команд введите «Помощь»`); 
});

cmd.hear(/^(?:Помощь передать)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(`Команда "Передать" переводит указанную вами сумму любому игроку (Передать 477 1000).`); 
});

cmd.hear(/^(?:Полезное|🔥 Полезное)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`🔥 ${message.user.tag}, Полезное:
🇷🇺 Страны
🍗 покушать 
❤ полечиться 
📠 Реши [пример] 
🔥 cid - даст (ID) чата 
📖 книжка - Трудовая книжка
🤼‍♂ Пвп (ИД) -пвп между игроками
🔎 Поиск (Ссылка) - Найдёт (ID) игрока 
🔎 Ипоиск (ИД иогока) - найдёт (ИД в ВК)

👆🏻 Ускорения
🌀 Клик - сделать клик.
💻 Улучшения к кликам - магазин ускорений.

🏁 Гонка
🛑 Машина - Вся информация о транспорте

ᅠ[💼] Бизнес: 
📈 Бизнес - Статистика 
💶 Бизнес снять - Снять деньги со счёта 

ᅠ[💻] Банк: 
📊 Курс - Курс валют 
🎁 Бонус - Ежедневный бонус 
💸 Банк [сумма] - положить деньги в банк 
💸 Банк снять [сумма] - Снять деньги с банка 

  [👔] Работа - список работ 
❌ Уволиться 
🔨 Работать 
`); 
});

cmd.hear(/^(?:Каналы|🛑 Каналы|📷 Ютуб)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`🛑 ${message.user.tag}, Команды каналы:
💻 ЮСоздать «название» - Создать канал 
💻 Сменить название <название> - Меняет название канала 
💾 Оборудование - Покупка оборудования 
👭 Вступить в партнёрку - Вступаете в партнёрку 
👭 Партнёрка - Показывает информацию о партнёрки 
📞 Микрофон - Покупка микрофона для проведения стримов 
🔝 Топ Просмотров - Лучшие каналы по просмотрам 
📺 Тематика - Здесь Вы выбираете своё продвижение 
📚 Инфо кнопки - Информация о ютуб кнопках 
📈 Реклама - Реклама для вашего канал 
🎬 Снять «название» - Снять видео 
🔥 Канал - Статистика вашего канала 
🎮 Стрим - Запустить стрим 
🛑 юпередать (ид) (сумма)
🔨 юработать - Работать на заводе
🔝 Тренды - Тренды Ютуба 
🔒 Закрыть - Закрыть информацию о канале 
🔓 Открыть - Открыть информацию о канале 
💡 Узнать «название» - Узнать информацию о канале 
`, {attachment: 'photo-176472758_457239555'});
});

cmd.hear(/^(?:💡 Разное|Разное)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return message.send(`💡 ${message.user.tag}, Разное:
🌍 Актив 
🎁 Донат 
🍹 Зелья 
👒 Квесты
💲 Баланс
📖 Профиль
🤵 Президент 
🔔 Созвать всех 
♨ Взлом админки
✉ Смс (ид) (текст) 
✒ Ник [ник/вкл/выкл]
👑 Рейтинг - ваш рейтинг
🤜🏻 Ударить (ид) (причина) 
💰 Попросить денег (ID) (Сумма)
✨ Кпрофиль - Профиль по кликам
💶 Фунт (кол-во) - купить фунты 
💵 Доллар (кол-во) - купить доллары 
⚠ Правила - актуальные правила Бота 
📽 Фильм - рандом фильм из базы бота
⌚ Дата [id] - дата регистрации игрока 
💡 Сократить (ссылка) - пример: сократить https://vk.com/botmaryans
`, 
{ 
	keyboard:JSON.stringify( 
	{ 
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{\"button\": \"1\"}", 
	"label": "📒 Профиль" 
	}, 
	"color": "secondary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "💲 Баланс" 
	}, 
	"color": "secondary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "👑 Рейтинг" 
	}, 
	"color": "secondary" 
	}], 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🛍 Магазин" 
	}, 
	"color": "primary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "💸 Продать" 
	}, 
	"color": "positive" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🏆 Топ" 
	}, 
	"color": "secondary" 
	}, 
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "✒ Ник" 
	}, 
	"color": "secondary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "💵 Пожертвования" 
	}, 
	"color": "secondary" 
	},
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "🤝 Передать" 
	}, 
	"color": "secondary" 
	},
	{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "💰 Банк" 
	}, 
	"color": "secondary" 
	}],
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{}", 
	"label": "◀ В главное меню" 
	}, 
	"color": "primary" 
	}],
] 
}) 
}); 
});

cmd.hear(/^(?:оцени)/i, async (message, bot) => {
	
	
	message.user.log = `${message.args[0]}`;
	message.user.foolder += 1;

	const ozeni = utils.pick([1,2,3,4,5,6,7,8,9,10]);
message.send(`мне кажется, что эта картинка-слово идёт на: ${ozeni}/10`);
})

cmd.hear(/^(?:юработать)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.user.timers.hasWorked9) return bot(`Работать можно раз в 10 минут`);
	let prize = utils.pick([1, 2, 3]);
	
		setTimeout(() => {
		message.user.timers.hasWorked9 = false;
	}, 600000);

	message.user.timers.hasWorked9 = true;
	
	if(prize === 1)
	{
		message.user.ybalance += 193;
		return bot(`Ухх, тяжелый был денёк😃!
💰Вы заработали: 193$`);
	}

	if(prize === 2)
	{
		message.user.ybalance += 210;
		return bot(`Ухх, тяжелый был денёк😃!
💰Вы заработали: 210$`);
	}

	if(prize === 3)
	{
		message.user.ybalance += 150;
		return bot(`Ухх, тяжелый был денёк😃!
💰Вы заработали: 150$`);
	}
});

cmd.hear(/^(?:Инфо кнопки)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.user.foolder += 1;

	return bot(`Привет! Тут информация о наших кнопках!

Хочешь получить серебрянную кнопку? Для этого тебе лишь нужно достигнуть отметки в 100000 подписчиков. Легко? Не думаю! Но если достиг, то пиши: получить ск
А вот тут уже ещё сложнее, для золотой кнопки тебе нужно достигнуть отметки в 1000000 подписчиков, это уже ещё сложнее. Достиг? Пиши: получить зк
Вот тут уже полный хардкор 😱, для бриллиантовой кнопки тебе нужно набрать 10 миллионов подписчиков. Набрал? 😎 Пиши: получить бк`);
});

cmd.hear(/^(?:Канал)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.kanal) return bot(`У вас нет канала`);
	if(!message.user.tematika) return bot(`У вас нет тематики`);
	
	return bot(`Вот информация о канале:
	📕 Название: ${message.user.nuk_kanal}
📺 Тематика: ${message.user.tematika}
😻 Подписчиков: ${message.user.sub}
🚫 Хейтеров: ${message.user.heteri}
👁 Просмотров: ${message.user.sm}
👍 Лайков: ${message.user.like}
👎 Дизлайков: ${message.user.dislike}
💬 Комментариев: ${message.user.comment}
🎥 Роликов: ${message.user.videos}
⛔ Страйки: ${message.user.strike}
✅ Кнопки: ${message.user.but.toString().replace(/1/gi, "Серебрянная кнопка").replace(/2/gi, "Золотая кнопка").replace(/3/gi, "Брилиантовая кнопка").replace(/4/gi, "ОФИГЕНАЯ КНОПКА")}`
    );
});  

cmd.hear(/^(?:Оборудование)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.balance < 10000) return bot(`недостаточно денег на оборудование!`);
	if(message.user.camera) return bot(`У вас уже есть камера`);
	let prize = utils.pick([1]);

	message.user.balance -= 10000;
	
	if(prize === 1)
	{
		message.user.camera = true;
		return bot(`Вы купили камеру для съемок!`);
	}
});

cmd.hear(/^(?:ЮСоздать)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.camera) return bot(`Вы не купили оборудование!`)
	if(message.user.kanal) return bot(`У вас уже есть канал!`)
	if(message.user.tematika = false) return bot(`Для создания канала нужно выбрать тематику!`) 
	if(message.args[1].length >= 16) return bot(`максимальная длина канала 15 символов`);

	message.user.nuk_kanal = message.args[1];
	message.user.kanal = true
	return bot(`вы создали канал "${message.user.nuk_kanal}"`);
});

cmd.hear(/^(?:Сменить название)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.kanal) return bot(`У вас нет канала!`)
	if(message.args[1].length >= 16) return bot(`максимальная длина канала 15 символов`);

	message.user.nuk_kanal = message.args[1];
	return bot(`Вы сменили название канала на: ${message.user.nuk_kanal}`);
});

cmd.hear(/^(?:Стрим)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.microfon) return bot(`Для стрима нужен микрофон!`);
	if(message.user.timers.stream) return bot(`Стримить можно раз в минуту`);
	if(!message.user.kanal) return bot(`У вас нет канала!`)
		
	setTimeout(() => {
		message.user.timers.stream = false;
		return bot(`Вы можете стримить!`);
	}, 36000);
	
	message.user.timers.stream = true;

	if(message.user.part == false){
	var cashlvlbiz = message.user.sub * 2;
	message.user.ybalance += cashlvlbiz;
	
	return bot(`Стрим был удачен! Вы заработали ${cashlvlbiz}$`)
	}
	
	if(message.user.part == true){
	var cashlvlbiz = message.user.sub * 5;
	message.user.ybalance += cashlvlbiz;
	
	return bot(`Стрим был удачен! Вы заработали ${cashlvlbiz}$`)
	}
});

cmd.hear(/^(?:Микрофон)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.ybalance < 150) return bot(`недостаточно денег на оборудование!`);
	if(message.user.microfon) return bot(`У вас уже есть микрофон`);
	let prize = utils.pick([1]);

	message.user.ybalance -= 150;
	
	if(prize === 1)
	{
		message.user.microfon = true;
		return bot(`Вы купили микрофон для стримов!`);
	}
});	

cmd.hear(/^(?:Закрыть)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.kanal) return bot(`У вас нет канала!`)

	message.user.info_locked = true;
	return bot(`Вы закрыли инфу про канал`);
});

cmd.hear(/^(?:Открыть)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(!message.user.kanal) return bot(`У вас нет канала!`)

	message.user.info_locked = false;
	return bot(`Вы открыли инфу про канал`);
});


cmd.hear(/^(?:Узнать)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		if(user.info_locked) return bot(`Игрок закрыл информацию о канале`)
		
		return bot(`информация о канале игрока:
	📕 Название: ${user.nuk_kanal}
📺 Тематика: ${user.tematika}
😻 Подписчиков: ${user.sub}
🚫 Хейтеров: ${user.heteri}
👁 Просмотров: ${user.sm}
👍 Лайков: ${user.like}
👎 Дизлайков: ${user.dislike}
💬 Комментариев: ${user.comment}
🎥 Роликов: ${user.videos}
⛔ Страйки: ${user.strike}
`
    );
});

cmd.hear(/^(?:Тематика)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;

	message.user.tematika = message.args[1];
	return bot(`у вас теперь тематика "${message.user.tematika}"`);
});

cmd.hear(/^(?:Тематика)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.user.foolder += 1;

	return bot(`Привет! Решил выбрать тематику для канала?

🎯 Тематика игры - Снимаете по играм

👀 Тематика обзоры - Снимаете обзоры

🚥 Тематика влоги - Снимаете влоги и т.д

🔥 Или любая ваша тематика)`);
});

cmd.hear(/^(?:Реклама)\s?([0-9]+)?$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;

	if(!message.args[1]) return bot(`Хай, хочешь купить рекламу для своего канала😏?

✅Мы - самая надежная и законная компания по продаже рекламы, с нами ты достигнешь высот!

1.Тариф «Старт»:
　📈Прирост: 1.000 сабов
　💸Цена: 15.000$

2.Тариф «Нормал»:
　📈Прирост: 5.000 сабов
　💸Цена: 75.000$

3.Тариф «Про»:
　📈Прирост: 25.000 сабов
　💸Цена: 750.000$

4. Тариф «Мега»:
　💸Прирост: 70.000 сабов
　💸Цена: 1.000.000$

5. Тариф «Горох»:
　💸Прирост: 140.000 сабов
　💸Цена: 2.000.000$

6. Тариф «Сметанка»:
　💸Прирост: 220.000 сабов
　💸Цена: 3.500.000$

🔥Для покупки введите реклама «id тарифа»`);

	const sell = reklama.find(x=> x.id === Number(message.args[1]));

	if(message.user.ybalance < sell.cost) return bot(`недостаточно денег`);
	if(!message.user.kanal) return bot(`У вас нет канала для пиара!`)
	else if(message.user.ybalance >= sell.cost)
	{
		message.user.ybalance -= sell.cost;
		message.user.sub += sell.sub;

		return bot(`вы купили рекламу за ${utils.sp(sell.cost)}$`);
	}
});
	
	cmd.hear(/^(?:юпередать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.astroen -= 1;
	message.user.log = `${message.args[0]}`;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.ybalance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[2] > message.user.settings.limitt) return bot(`максимум можно перевести ${utils.sp(message.user.settings.limitt)}$`);
	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.ybalance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.ybalance)}$`);
	else if(message.args[2] <= message.user.ybalance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		if(user.uid === message.user.uid) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		message.user.peredacha = message.args[2];
		message.user.timers.peredat = 21600;
		message.user.ybalance -= message.args[2];
		user.ybalance += message.args[2];

		return message.send(`➕ ${message.user.tag}, Вы передали игроку ютуб баланс ${user.tag} ${utils.sp(message.args[2])}$ ${smilesuccess}
		📊 Вам доступно для отправки: ${utils.sp(message.user.settings.limitt)}$
		💸 На руках: ${utils.sp(message.user.ybalance)}$`);
vk.api.messages.send({ user_id: user.id, message: `▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}$ ютуб баланс!` });
	}
});

cmd.hear(/^(?:Снять)\s(.*)$/i, async (message, bot) => {
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.camera) return bot(`Для записи нужна камера!`);
	if(message.user.timers.stream2) return bot(`Снимать можно раз в минуту`);
	if(!message.user.kanal) return bot(`У вас нет канала!`)
		
	setTimeout(() => {
		message.user.timers.stream2 = false;
		return bot(`Вы можете снова снимать!`);
	}, 36000);

	message.user.timers.stream2 = true;
	
	if(message.user.part == false){
    var sub = message.user.sub * 2;
	var koment = message.user.sub * 2;
	var like = message.user.sub * 3;
    var sm = message.user.sub * 50;
	let dis = utils.random(1,8);
	
   message.user.sub += sub;
   message.user.comment += koment;
   message.user.like += like;
   message.user.sm += sm;
   message.user.dislike += dis;
   message.user.heteri += dis;
   message.user.videos += 1;
   
	return bot(`🎬Статистика ролика:
📺 Название видео: ${message.args[1]}
👁 Просмотров: ${sm}
👍 Лайков: ${like}
👎 Дизлайков: ${dis}
💬 Комментариев: ${koment}
🎬 Новых сабов: ${sub}
🚫 Новых хейтеров: ${dis}
✅Ты на верном пути, продолжай выпускать ролики!`);
}
	
	if(message.user.part == true){
    var sub = message.user.sub * 5;
	var koment = message.user.sub * 3;
	var like = message.user.sub * 4;
    var sm = message.user.sub * 100;
	let dis = utils.random(0,1);
	let and = utils.random(10000,100000);
	
   message.user.sub += sub;
   message.user.comment += koment;
   message.user.like += like;
   message.user.sm += sm;
   message.user.ybalance += and;
   message.user.dislike += dis;
   message.user.heteri += dis;
   message.user.videos += 1;
   
	return bot(`🎬Статистика ролика:
📺 Название видео: ${message.args[1]}
👁 Просмотров: ${sm}
👍 Лайков: ${like}
👎 Дизлайков: ${dis}
💬 Комментариев: ${koment}
🎬 Новых сабов: ${sub}
🚫 Новых хейтеров: ${dis}
🎬 С партнёрки: ${and}$
✅Ты на верном пути, продолжай выпускать ролики!`);
}
});

cmd.hear(/^(?:Вступить в партнёрку)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.sub < 10000) return bot(`У вас нет 10.000 подписчиков!`);
	
	message.user.part = true;
	return bot(`Вы успешно вступили в партнёрку!`)
});



cmd.hear(/^(?:strike)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.user.foolder += 1;
	if(message.user.settings.adm< 8) return bot(`📛| у вас нету админки`)
		{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);
		if(message.args[1] == 0)return bot(`Ай! Ай! Ай! Банить создателей нельзя!`)
		if(message.args[1] == 1)return bot(`Ай! Ай! Ай! Банить создателей нельзя!`)
		
		if(user.strike < 10){
		user.strike += 1;
        return bot(`Успешно! Вы дали пользователю (${user.tag}) -> страйк`);
		}

        if(user.strike >= 10){
		user.strike += 1;
        user.ban = true; 
	return bot(`Успешно! Вы дали пользователю (${user.tag}) -> страйк и его канал заблокирован!`);
		}
}
	});
	
	cmd.hear(/^(?:unstrike)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
		message.user.log = `${message.args[0]}`;
	message.user.foolder += 1;
	if(message.user.settings.adm< 8) return bot(`📛| У вас нет админки`)
		{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);
		
		if(user.strike < 10){
		user.strike -= user.strike;
        return bot(`Успешно! Вы сняли пользователю (${user.tag}) -> страйки`);
		}

        if(user.strike >= 10){
		user.strike -= user.strike;
		user.ban = false;
	return bot(`Успешно! Вы сняли пользователю (${user.tag}) -> страйки и его канал разблокирован!`);
		}
}
	});
	
	cmd.hear(/^(?:delluser)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
		message.user.log = `${message.args[0]}`;
	message.user.foolder += 1;
	if(message.user.settings.adm< 8) return bot(`📛| У вас не админки`)
		{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		if(message.args[1] == 0)return bot(`Ай! Ай! Ай! Очищать создателей нельзя!`)
		if(message.args[1] == 1)return bot(`Ай! Ай! Ай! Очищать создателей нельзя!`)

		if(user.uid === message.user.uid) return bot(`неверный ID`);
		
		user.kanal = false;
		user.nuk_kanal = false;
		user.info_locked = false;
		user.sub = 1;
		user.like = 0;
		user.dislike = 0;
		user.videos = 0;
		user.strike = 0;
		user.sm = 0;
		user.ybalance = 100000;
		user.camera = false;
		user.microfon = false;
		user.heteri = 0;
		user.video = false;
		user.comment = 0;
		user.tematika = false;
		user.but = 0;
		return bot(`Вы успешно удалили канал игроку -> (${user.tag})`);
}
	});
	
	cmd.hear(/^(?:Партнёрка)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
		message.user.log = `${message.args[0]}`;
	message.user.foolder += 1;

	return bot(`Возможности:
1. Зарабатывать с рекламы на видео
2. Удвоенные подписчики с видео
3. Удвоенные просмотры с видео
4. Удвоенные лайки с видео
5. Уменьшее количество дизлайков и хейтеров!

**** Возможности будут постепенно увеличиваться ****`);
});

cmd.hear(/^(?:Получить ск)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.sub < 100000)return bot(`Ай! Ай! Ай! Кнопка только с 100.000 подписчиков!`)
		
	message.user.but = 1;
	return bot(`Успешно! Вы получили серебрянную кнопку!`)
});

cmd.hear(/^(?:Получить зк)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.sub < 1000000)return bot(`Ай! Ай! Ай! Кнопка только с 1.000.000 подписчиков!`)
		
	message.user.but = 2;
	return bot(`Успешно! Вы получили золотую кнопку!`)
});

cmd.hear(/^(?:Получить бк)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.sub < 10000000)return bot(`Ай! Ай! Ай! Кнопка только с 10.000.000 подписчиков!`)
		
	message.user.but = 3;
	return bot(`Успешно! Вы получили бриллиантовую кнопку!`)
});

cmd.hear(/^(?:тренды)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.chatId == 64) return bot(`в админ беседе нельзя.`);  	
	let top = [];

	users.map(x=> {
		top.push({ sub: x.sub, nuk_kanal: x.nuk_kanal, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.sub - a.sub;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.nuk_kanal}) — ${utils.sp(user.sub)} подписчиков
		`;
	}

	return bot(`топ каналов по подписчикам:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.nuk_kanal} — ${utils.sp(message.user.sub)} подписчиков`);
});

cmd.hear(/^(?:топ просмотров)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.chatId == 64) return bot(`в админ беседе нельзя.`);  	
	let top = [];

	users.map(x=> {
		top.push({ sm: x.sm, nuk_kanal: x.nuk_kanal, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.sm - a.sm;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.nuk_kanal}) — ${utils.sp(user.sm)} просмотров
		`;
	}

	return bot(`топ каналов по просмотрам:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.nuk_kanal} — ${utils.sp(message.user.sm)} просмотров`);
});

cmd.hear(/^(?:Получить 10к)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.sub < 10000000000)return bot(`Ай! Ай! Ай! Кнопка только с 10.000.000.000 подписчиков!`)
		
	message.user.but = 4;
	return bot(`Успешно! Вы получили ОФИГЕНУЮ КНОПКУ!`)
});

cmd.hear(/^(?:Мент помощь)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.user.log = `${message.args[0]}`;
if(message.user.farm_btc< 8) return bot(`📛| У вас не админки`)
return bot(`
	Мент поймать
	prison (ID) (причина) доступно с (Мент из космоса)
	Охронять зону доступно с (Мент из космоса)
	Охранять магазин доступно с (Мент из космоса)

`); 
});

cmd.hear(/^(?:Мент поймать)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;

if(message.user.farm_btc< 8) return bot(`📛| У вас не админки`)

    if(message.user.balance == 0) return message.reply("🔔 Играть в игры можно с балансом выше 0! 🔔");
    if(message.user.pp == 1) return message.reply(`${message.user.tag}, ты уже в игре!`);
	message.reply(`[💀] | ${message.user.tag}, Вы начали игру "Мент поймать"\n\n [🤤] | Задача этой игры: Вам дано 3 попытки... Если вы смогли Поймать грабителя, то на ваш баланс 1.000.000.000.000$, а если вы не смогли поймать грабителя, то весь ваш баланс обнуляется.\n\n[⚠] » Чтобы поймать грабителя, то отправьте боту - Ловим`);
	return message.user.pp = 1;
});

cmd.hear(/^(?:Ловим)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
    
if(message.user.farm_btc< 8) return bot(`📛| У вас не админки`)

	let balance = message.user.balance;
	let pp = message.user.pp;
	let p = 3 - pp;
		let ran =  ["поймали","не поймали"];
    
    if(message.user.pp == 0) return;
	if(message.user.pp > 0){
		if("Поймали"){
			message.user.pp += 1;
			if(message.user.pp == 4){
			message.user.pp = 0;
			message.user.balance += 1000000000000;
			return message.reply(`[😅] >> ${message.user.tag}, поздравляем! Вы Поймали грабителеля вы получили на баланс - 1.000.000.000.000$`);
			}
			message.reply(`1...`);
			message.reply(`2...`);
			message.reply(`3...`);
			message.reply(`Вы бежите за грабителелям`);
			return message.reply(`[😎] >> Вы поймали грабителя ещё есть грабители - успешно\n[🍀] » Вам повезло. Ловите дальше дальше!\n[😧] » Осталось попыток: ` + p);

		}
		if("Не паймали"){
			message.reply(`1...`);
			message.reply(`2...`);
			message.reply(`3...`);
			message.reply(`*что-то пошло не так ;(*`);
			message.reply(`[🤕] >> Грабитель улител за границу - неуспешно\n[😞] » Удача повернулась к вам спиной.\n[😶] » Вы проиграли. Ваши деньги забрали грабители. `);
			message.user.balance = 0;
			return message.user.pp = 0;
				}
			}


});

/// КЛАНЫ ///

cmd.hear(/^(?:клан помощь|🛡 Клан помощь)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanid = message.user.clanid;
return bot(`информация по командам:
⠀1⃣ Клан - информация о клане
⠀2⃣ Клан улучшить - улучшить клан
⠀3⃣ Клан состав - участники клана
⠀4⃣ Клан создать [название] - создать клан
⠀5⃣ Клан название [название] - смена названия клана
⠀6⃣ Клан метка [метка] - символ клана
⠀7⃣ Клан открыть - открыть клан для вступлений 🔓
⠀8⃣ Клан закрыть - закрыть клан для вступлений 🔒
⠀9⃣ Клан [пополнить/снять] [сумма] - казна клана
⠀1⃣0⃣ Клан атака - атаковать другой клан
⠀1⃣1⃣ Клан повысить [id] - повысить звание игроку
⠀1⃣2⃣ Клан понизить [id] - понизить звание игроку
⠀1⃣3⃣ Клан кик [id] - выгнать игрока
⠀1⃣4⃣ Клан войти [id клана] - вступить в клан
⠀1⃣5⃣ Клан покинуть - покинуть клан
`);
});

cmd.hear(/^(?:Клан магазин)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanid = message.user.clanid;
return bot(`магазин:
1⃣ Рыцарь - 10.000.000.000$
2⃣ Лучник - 15.000.000.000$
🔎 Купить: «Клан магазин [номер] [количество]»
`);
});

cmd.hear(/^(?:Клан)\s(?:магазин 1)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
	❓ Для вступления введите «Клан войти [ID]»`);
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, clans[clanid].balance);

if(!Number(message.args[1])) return;
message.args[1] = Math.floor(Number(message.args[1]));

if(message.args[1] <= 0) return;

if(( message.args[1] * 10000000000 ) > clans[clanid].balance) return bot(`в казне клана недостаточно средств.`);
else if(( message.args[1] * 10000000000 ) <= clans[clanid].balance)
{
clans[clanid].balance -= ( message.args[1] * 10000000000 );
clans[clanid].qqqbalance += message.args[1];

return bot(`вы купили ${utils.sp(message.args[1])} рыцарей за ${utils.sp(message.args[1] * 10000000000)}$`);
}
});

cmd.hear(/^(?:Клан)\s(?:магазин 2)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
	❓ Для вступления введите «Клан войти [ID]»`);
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, clans[clanid].balance);

if(!Number(message.args[1])) return;
message.args[1] = Math.floor(Number(message.args[1]));

if(message.args[1] <= 0) return;

if(( message.args[1] * 15000000000 ) > clans[clanid].balance) return bot(`в казне клана недостаточно средств.`);
else if(( message.args[1] * 15000000000 ) <= clans[clanid].balance)
{
clans[clanid].balance -= ( message.args[1] * 15000000000 );
clans[clanid].qqwbalance += message.args[1];

return bot(`вы купили ${utils.sp(message.args[1])} лучников за ${utils.sp(message.args[1] * 15000000000)}$`);
}
});

cmd.hear(/^(?:клан атака|клан атаковать|атака|награбить)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1; 
	let clanid = message.user.clanid; 
	if(!clans[clanid]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔`); 
	if(clans[clanid].users[message.user.uid].level < 2) return bot(`⚔ Проводить атаку могут только заместитель главы и сам глава.`); 
	if(clans[clanid].peoples < 2) return bot(`🛡 Что бы проводить атаки необходимо иметь минимум 2 участников.`); 
	if(clans[clanid].qqqbalance < 1) return bot(`🛡 Что бы проводить атаки необходимо иметь минимум ОДНОГО рыцаря.`); 
	if(clans[clanid].qqwbalance < 1) return bot(`🛡 Что бы проводить атаки необходимо иметь минимум ОДНОГО лучника.`); 
	if(message.user.timers.cwar) return bot(`🏹 В ближайшие минут, Вы сможете ещё раз атаковать клан!`);

setTimeout(() => {
message.user.timers.cwar = false;
return bot(`⚔ Вы можете снова атаковать!`);
}, 600000);

message.user.timers.cwar = true;

	clanataka = utils.random(32456724, 10000000000); 
	let atackedclan = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9]);

	if(atackedclan === 1)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].balance += clanataka; 
		const ping2 = utils.random(clans[clanid].qqwbalance);
		const ping23 = utils.random(clans[clanid].qqqbalance);
		clans[clanid].qqwbalance -= `${ping2}`; 
		clans[clanid].qqqbalance -= `${ping23}`; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess}
		🏹 Потеряно лучников: ${ping2}, ⚔ Потеряно рыцарей: ${ping23}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`);
	}

	if(atackedclan === 2)
	{
		clans[clanid].rating -= 1; 
		clans[clanid].los += 1; 
		const ping2 = utils.random(clans[clanid].qqwbalance);
		const ping23 = utils.random(clans[clanid].qqqbalance);
		clans[clanid].qqwbalance -= `${ping2}`; 
		clans[clanid].qqqbalance -= `${ping23}`; 
		return bot(`атака состоялась ⚔
		Клан противника оказался сильнее, вы проиграли. ${smileerror}
		🏹 Потеряно лучников: ${ping2}, ⚔ Потеряно рыцарей: ${ping23}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].los)} поражений!`);
	}

	if(atackedclan === 3)
	{
		return bot(`атака не состоялась, кажется что ваши противники струсили ⚔`);
	}

	if(atackedclan === 4)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].balance += clanataka; 
		const ping2 = utils.random(clans[clanid].qqwbalance);
		const ping23 = utils.random(clans[clanid].qqqbalance);
		clans[clanid].qqwbalance -= `${ping2}`; 
		clans[clanid].qqqbalance -= `${ping23}`; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess}
		🏹 Потеряно лучников: ${ping2}, ⚔ Потеряно рыцарей: ${ping23}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`);
	}

	if(atackedclan === 5)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].balance += clanataka; 
		const ping2 = utils.random(clans[clanid].qqwbalance);
		const ping23 = utils.random(clans[clanid].qqqbalance);
		clans[clanid].qqwbalance -= `${ping2}`; 
		clans[clanid].qqqbalance -= `${ping23}`; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess}
		🏹 Потеряно лучников: ${ping2}, ⚔ Потеряно рыцарей: ${ping23}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`);
	}
	if(atackedclan === 6)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].balance += clanataka; 
		const ping2 = utils.random(clans[clanid].qqwbalance);
		const ping23 = utils.random(clans[clanid].qqqbalance);
		clans[clanid].qqwbalance -= `${ping2}`; 
		clans[clanid].qqqbalance -= `${ping23}`; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess}
		🏹 Потеряно лучников: ${ping2}, ⚔ Потеряно рыцарей: ${ping23}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`);
	}
	if(atackedclan === 7)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].balance += clanataka; 
		const ping2 = utils.random(clans[clanid].qqwbalance);
		const ping23 = utils.random(clans[clanid].qqqbalance);
		clans[clanid].qqwbalance -= `${ping2}`; 
		clans[clanid].qqqbalance -= `${ping23}`; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess}
		🏹 Потеряно лучников: ${ping2}, ⚔ Потеряно рыцарей: ${ping23}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`);
	}
	if(atackedclan === 8)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].balance += clanataka; 
		const ping2 = utils.random(clans[clanid].qqwbalance);
		const ping23 = utils.random(clans[clanid].qqqbalance);
		clans[clanid].qqwbalance -= `${ping2}`; 
		clans[clanid].qqqbalance -= `${ping23}`; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess}
		🏹 Потеряно лучников: ${ping2}, ⚔ Потеряно рыцарей: ${ping23}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`);
	}
	if(atackedclan === 9)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].balance += clanataka; 
		const ping2 = utils.random(clans[clanid].qqwbalance);
		const ping23 = utils.random(clans[clanid].qqqbalance);
		clans[clanid].qqwbalance -= `${ping2}`; 
		clans[clanid].qqqbalance -= `${ping23}`; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess}
		🏹 Потеряно лучников: ${ping2}, ⚔ Потеряно рыцарей: ${ping23}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`);
	}
	});


cmd.hear(/^(?:клан)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
❓ Для вступления введите «Клан войти [ID]»`);

let text = ``;
let tipe = ``;
let lv = ``;
let mp = ``;
let num = 10;

for(let id in clans[clanid].users) {
if(!num < 1) {
num -= 1;
let user = users[id];
if(user.mention == true) {
if(clans[clanid].users[id].level == 3) text += `👑 Глава - @id${user.id} (${user.tag})\n`;
} else {
if(clans[clanid].users[id].level == 3) text += `👑 Глава - @id${user.id} (${user.tag})\n`;
};
};
}

if(clans[clanid].lvl == 0) { 
lv += `1`;
mp += `5`;
cost = `🆙 Улучшение клана до 2 уровня стоит 100.000.000.000$`;
};
if(clans[clanid].lvl == 1) {
lv += `2`;
mp += `15`;
cost = `🆙 Улучшение клана до 3 уровня стоит 500.000.000.000$`;
};
if(clans[clanid].lvl == 2) {
lv += `3`;
mp += `25`;
cost = `🆙 Улучшение клана до 4 уровня стоит 2.500.000.000.000$`;
};
if(clans[clanid].lvl == 3) {
lv += `4`;
mp += `50`;
cost = `✅ Ваш клан улучшен максимально!`;
};
if(clans[clanid].open == true) tipe += `🔓 Клан открыт, свободный для входа`;
if(clans[clanid].open == false) tipe += `🔒 Клан закрыт, доступ по приглашениям`;

return bot(`Информация о клане «${clans[clanid].name}»:
📜 ID клана: ${clans[clanid].id}
👑 Рейтинг клана: ${utils.sp(clans[clanid].rating)}
💰 В казне клана: ${utils.sp(clans[clanid].balance)}$
⚔ В клане состоит: ${utils.sp(clans[clanid].peoples)}/${mp} участников
🔱 Уровень клана: ${lv}
🥇 Побед: ${utils.sp(clans[clanid].wons)}, поражений: ${utils.sp(clans[clanid].los)}
🏹 Логотип клана: ${clans[clanid].smile}

${cost}
${tipe}

🗡 Рыцарей: ${utils.sp(clans[clanid].qqqbalance)}
🏹 Лучников: ${utils.sp(clans[clanid].qqwbalance)}
`);
});

cmd.hear(/^(?:клан улучшить)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
	❓ Для вступления введите «Клан войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 3) return bot(`улучшать клан может только глава клана!`);
if(clans[clanid].lvl == 0) {
if(message.user.balance < 100000000000) return bot(`улучшение клана до 2 уровня стоит 100.000.000.000$`);
message.user.balance -= 100000000000;
clans[clanid].lvl = 1;
return bot(`клан улучшен до 2 уровня за 100.000.000.000$!

👪 Максимальное количество участников увеличено до - 15
🗣 Максимальная длина названия клана увеличена до - 10 символов
🆕 Следующее улучшение стоит 500.000.000.000$`);
};
if(clans[clanid].lvl == 1) {
if(message.user.balance < 500000000000) return bot(`улучшение клана до 3 уровня стоит 500.000.000.000$`);
message.user.balance -= 500000000000;
clans[clanid].lvl = 2;
return bot(`клан улучшен до 3 уровня за 500.000.000.000$!

👪 Максимальное количество участников увеличено до - 25
🗣 Максимальная длина названия клана увеличена до - 13 символов
🆕 Следующее улучшение стоит 2.500.000.000.000$`);
};
if(clans[clanid].lvl == 2) {
if(message.user.balance < 2500000000000) return bot(`улучшение клана до 4 уровня стоит 2.500.000.000.000$`);
message.user.balance -= 2500000000000;
clans[clanid].lvl = 3;
return bot(`клан улучшен до 4 уровня за 2.500.000.000.000$!

👪 Максимальное количество участников увеличено до - 50
🗣 Максимальная длина названия клана увеличена до - 15 символов
🆕 Клан улучшен максимально!`);
};
if(clans[clanid].lvl == 3) {
return bot(`✅ Ваш клан улучшен максимально!`);
};
});

cmd.hear(/^(?:клан состав)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanid =
 
message.user.clanid;
if(!clans[clanid]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
	❓ Для вступления введите «Клан войти [ID]»`);

let text = ``;
let mp = ``;

for(let id in clans[clanid].users) {
let user = users[id];
if(user.mention == true) {
if(clans[clanid].users[id].level == 3) text += `⠀⠀ Глава - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 2) text += `⠀⠀ Заместитель главы - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 1) text += `⠀⠀ Обычный участник - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 0) text += `⠀⠀ Обычный участник - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
} else {
if(clans[clanid].users[id].level == 3) text += `⠀⠀ Глава - ${user.tag} (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 2) text += `⠀⠀ Заместитель главы - ${user.tag} (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 1) text += `⠀⠀ Обычный участник - ${user.tag} (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 0) text += `⠀⠀ Обычный участник - ${user.tag} (ID: ${user.uid})\n`;
};
}

if(clans[clanid].lvl == 0) { 
mp += `5`;
};
if(clans[clanid].lvl == 1) {
mp += `15`;
};
if(clans[clanid].lvl == 2) {
mp += `25`;
};
if(clans[clanid].lvl == 3) {
mp += `50`;
};
if(clans[clanid].lvl == 4) {
mp += `100`;
};

return bot(`👥 Участники клана «${clans[clanid].name}» [${clans[clanid].peoples}/${mp}]:
${text}`);
});

cmd.hear(/^(?:клан создать)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
if(!message.args[1]) return bot(`✏ Введите название для клана!`);
let zaprets1 = message.args[1].toLowerCase();
var zapret = /(🤵)/
var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
var check = true;
		progressQuest(message.user, 1)
return bot(`🛑 В названии есть запрещенные символы ${smileerror}`);
} 
if(message.args[1].length >= 7) return bot(`🛑 Максимальная длина названия клана 7 символов.`);
let name = message.args[1];
let clanid = message.user.clanid;
if(message.user.balance < 5000000000) return bot(`💰 Создание клана стоит 5.000.000.000$`);
message.user.balance -= 5000000000;
let cl = clans.length

if(clans[clanid]) return bot(`🛡 Вы уже состоите в клане!`);
message.user.nik5 += 1;
if(!clans[clanid]) { 
clans.push({
id: cl,
users: {},
name: name,
balance: 0,
qqqbalance: 0,
qqwbalance: 0,
rating: 0,
smile: `🛡`,
peoples: 1,
wons: 1,
los: 0,
open: true,
lvl: 0
});
message.user.clanid = cl;
clans[cl].users[message.user.uid] = {
id: message.user.id,
uid: message.user.uid,
level: 3
}


return bot(`Вы успешно создали клан под названием «${message.args[1]}», ему присвоен ID ${clans[clanid].id}. 👋🏻\n ✏ Введите «клан помощь» чтобы посмотреть команды клана!`);
}
});

cmd.hear(/^(?:клан название)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
if(!message.args[1]) return bot(`введите название для клана!`);
let zaprets1 = message.args[1].toLowerCase();
var zapret = /(🤵|📔|📗📘|📙|📕|⍻|🗸|√|☑|✔|👑|✅|✓)/
var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
var check = true;
return bot(`в названии есть запрещенные символы ${smileerror}`);
}
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
	❓ Для вступления введите «Клан войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 2) return bot(`название клана может менять заместитель клана и выше!`);
if(clans[clanid].lvl == 0) {
if(message.args[1].length >= 7) return bot(`максимальная длина названия клана 7 символов`);
};
if(clans[clanid].lvl == 1) {
if(message.args[1].length >= 10) return bot(`максимальная длина названия клана 10 символов`);
};
if(clans[clanid].lvl == 2) {
if(message.args[1].length >= 13) return bot(`максимальная длина названия клана 13 символов`);
};
if(clans[clanid].lvl == 3) {
if(message.args[1].length >= 15) return bot(`максимальная длина названия клана 15 символов`);
};
clans[clanid].name = message.args[1];
return bot(`название клана сменено на «${message.args[1]}»`);
});

cmd.hear(/^(?:клан метка)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
if(!message.args[1]) return bot(`введите метку для клана!`);
let zaprets1 = message.args[1].toLowerCase();
var zapret = /(й|ц|у|к|е|н|г|ш|щ|з|х|ъ|ф|ы|в|а|п|р|о|л|д|ж|э|я|ч|с|м|и|т|ь|б|ю|1|2|3|4|5|6|7|8|9|0)/
var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
var check = true;
return bot(`в метке клана можно использовать только смайлы ${smileerror}`);
}
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
	❓ Для вступления введите «Клан войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 2) return bot(`метку клана может менять заместитель клана и выше!`);
if(message.args[1].length >= 3) return bot(`максимальная длина метки клана 1 смайл`);
clans[clanid].smile = message.args[1];
return bot(`метка клана сменена на «${message.args[1]}»`);
});

cmd.hear(/^(?:клан открыть)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
	❓ Для вступления введите «Клан войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 1) return bot(`открывать клан может модератор клана и выше!`);
if(clans[clanid].open == true) return bot(`клан уже открытый!`)
clans[clanid].open = true;
return bot(`вы успешно открыли клан!`);
});

cmd.hear(/^(?:клан закрыть)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
	❓ Для вступления введите «Клан войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 1) return bot(`закрывать клан может модератор клана и выше!`);
if(clans[clanid].open == false) return bot(`клан уже закрытый!`)
clans[clanid].open = false;
return bot(`вы успешно закрыли клан!`);
});

cmd.hear(/^(?:клан)\s(?:пополнить)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
	❓ Для вступления введите «Клан войти [ID]»`);
if(message.user.settings.adm > 2) return bot(`администратор не может пополнять клан. 🚫`);
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(!Number(message.args[1])) return;
message.args[1] = Math.floor(Number(message.args[1]));

if(message.args[1] <= 0) return;

if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы ${smileerror}`);
else if(message.args[1] <= message.user.balance)
{
message.user.balance -= message.args[1];
clans[clanid].balance += message.args[1];

return bot(`вы положили на счёт клана ${utils.sp(message.args[1])}$`);
}
});


cmd.hear(/^(?:клан)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
	❓ Для вступления введите «Клан войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 2) return bot(`снимать деньги клана может модератор клана и выше!`);
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, clans[clanid].balance);

if(!Number(message.args[1])) return;
message.args[1] = Math.floor(Number(message.args[1]));

if(message.args[1] <= 0) return;

if(message.args[1] > clans[clanid].balance) return bot(`на балансе клана нет данной суммы ${smileerror}`);
else if(message.args[1] <= clans[clanid].balance)
{
message.user.balance += message.args[1];
clans[clanid].balance -= message.args[1];

return bot(`вы сняли ${utils.sp(message.args[1])}$ с баланса клана

Напомним, передача средств через клан строго запрещена и карается блокировкой!`);
}
});

cmd.hear(/^(?:клан повысить)\s([0-9]+)$/i,
 
async (message, bot) => {
let clanidd = message.user.clanid;
if(!clans[clanidd]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
	❓ Для вступления введите «Клан войти [ID]»`);
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`);
if(user.uid === message.user.uid) return bot(`неверный ID`);

let clanid = user.clanid;
if(!clans[clanid]) return bot(`этот человек не состоит в клане`);
if(clans[clanid].users[message.user.uid].level < 3) return bot(`повышать может только создатель клана!`);


if(!clans[clanid]) return bot(`этот человек не состоит в клане!`);
if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом клане!`);
if(clans[user.clanid].users[user.uid].level >= 2) return bot(`нельзя повысить игрока до создателя!`);
clans[clanid].users[user.uid].level += 1;
return bot(`игрок ${user.tag} был повышен в клане!`); 
});

cmd.hear(/^(?:клан понизить)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanidd = message.user.clanid;
if(!clans[clanidd]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
	❓ Для вступления введите «Клан войти [ID]»`);
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`);
if(user.uid === message.user.uid) return bot(`неверный ID`);

let clanid = user.clanid;
if(!clans[clanid]) return bot(`этот человек не состоит в клане`);
if(clans[clanid].users[message.user.uid].level < 3) return bot(`понижать может только создатель клана!`);


if(!clans[clanid]) return bot(`этот человек не состоит в клане!`);
if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом клане!`);
if(clans[user.clanid].users[user.uid].level <= 0) return bot(`нельзя понизить игрока ниже участника!`);
clans[clanid].users[user.uid].level -= 1;
return bot(`игрок ${user.tag} был понижен в клане!`); 
});

cmd.hear(/^(?:клан кик)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanidd = message.user.clanid;
if(!clans[clanidd]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
	❓ Для вступления введите «Клан войти [ID]»`);
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`);
if(user.uid === message.user.uid) return bot(`неверный ID`);

let clanid = user.clanid;
if(!clans[clanid]) return bot(`этот человек не состоит в клане`);
if(clans[clanid].users[message.user.uid].level < 3) return bot(`кикать может только создатель клана!`);


if(!clans[clanid]) return bot(`этот человек не состоит в клане!`);
if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом клане!`);
clans[clanid].peoples -= 1;
user.clanid = false;
delete clans[clanid].users[user.uid];
return bot(`игрок ${user.tag} был кикнут из клане!`); 
});

cmd.hear(/^(?:клан войти|клан зайти|клан вход|клан присоединиться|клан присоедениться|клан)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanid = message.user.clanid;
if(clans[clanid]) return bot(`вы уже состоите в клане!`);
if(!message.args[1]) return bot(`вы не указали ID клана!`);
let idclan = message.args[1];

if(!clans[idclan]) return bot(`данного клана не существует! Укажите правильный ID клана.`);
if(clans[idclan].delete == true) return bot(`данный клан удалён.`);
if(clans[idclan].lvl == 0) { 
if(clans[idclan].peoples >= 5) return bot(`клан переполнен!`);
};
if(clans[idclan].lvl == 1) { 
if(clans[idclan].peoples >= 15) return bot(`клан переполнен!`);
};
if(clans[idclan].lvl == 2) { 
if(clans[idclan].peoples >= 25) return bot(`клан переполнен!`);
};
if(clans[idclan].lvl == 3) { 
if(clans[idclan].peoples >= 50) return bot(`клан переполнен!`);
};
if(clans[idclan].lvl == 4) { 
if(clans[idclan].peoples >= 100) return bot(`клан переполнен!`);
};
if(clans[idclan].open == false) return bot(`🔒 Клан закрыт, доступ по приглашениям`);
if(clans[idclan].open == true){
clans[idclan].peoples += 1;
message.user.clanid = Number(message.args[1]);
if(!clans[idclan].users[message.user]) {
clans[idclan].users[message.user.uid] = {
id: message.user.id,
uid: message.user.uid,
level: 1
}
}
return bot(`вы вошли в клан «${clans[idclan].name}»!\nВведите "клан помощь" чтобы посмотреть команды клана!`);
}

});

cmd.hear(/^(?:клан покинуть)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`вы не состоите в клане.
Информация по командам: «клан помощь» 🔔
	❓ Для вступления введите «Клан войти [ID]»`);
clans[clanid].peoples -=
 
1;
message.user.clanid = false;
delete clans[clanid].users[message.user.uid];
return bot(`вы покинули клан!`);

});

cmd.hear(/^(?:⚔ топ кланы|топ кланы|⚔ топ кланов|⚔ клан топ|⚔ кланы топ|кланов топ|топ кланов|клан топ|топ клан|лучшие кланы|кланы|🏆 Лучшие кланы)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
		let top = [];  
		let topc = []; 
		
		function cccl(clanidd) { 
		let texxxt = ``; 
		for(let id in clans[clanidd].users) { 
		let user = users[id]; 
		if(clans[clanidd].users[id].level == 3) texxxt += `*id${clans[clanidd].users[id].level == 3} (${clans[clanidd].name})`; 
		} 
		return texxxt; 
		} 
		
		clans.map(x=> { 
		topc.push({ balance: x.balance, rating: x.rating, name: x.name, smile: x.smile, id: x.id, peoples: x.peoples, lvl: x.lvl }); 
		}); 
		
		topc.sort((a, b) => { 
		return b.rating - a.rating; 
		}); 
		const find = () => {
			let pos = 1000;
	
			for (let i = 0; i < top.length; i++)
			{
				if(top[i].id === message.senderId) return pos = i;
			}
	
			return pos;
		}
		
		let cll = ``; 
		
		for (let i = 0; i < 10; i++) 
		{ 
		if(!topc[i]) return; 
		const clan = topc[i]; 
		
		let mp = ``; 
		if(clan.lvl == 0) { 
		mp += `5`; 
		}; 
		if(clan.lvl == 1) { 
		mp += `15`; 
		}; 
		if(clan.lvl == 2) { 
		mp += `25`; 
		}; 
		if(clan.lvl == 3) { 
		mp += `50`; 
		}; 
		
		cll += `${i === 9 ? `🔟` : `${i + 1}⃣`}  [${clan.peoples}/${mp}] ${cccl(clan.id)} -  🏆${utils.sp(clan.rating)} | $${utils.rn(clan.balance)}\n`; 
		} 
		
		return bot(`топ кланов: 
		${cll}
		—————————————————
		
📢 Рейтинг клана складывается из побед и поражений в атаках.`);
		});

cmd.hear(/^(?:комсоздать)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
if(!message.args[1]) return message.send(`⚠ Введите название компании.`);
let zaprets1 = message.args[1].toLowerCase();
var zapret = /(👨‍|🚀|👩‍⚖|👨‍⚖|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀|🙇|💁|💁‍♂|🙅|🙅‍♂|🙆|🙆‍♂|🙋|🙋‍♂|🤦‍♀|🤦‍♂|🤷‍♀|🤷‍♂|🙎|🙎‍♂|🙍|🙍‍♂|💇|💇‍♂|💆|💆‍♂|🕴|💃|🕺|👯|👯‍♂|🚶‍♀|🚶|🏃‍♀|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|😀|😃|😄|😁|😆|😅|😂|🤣|☺|😊|😇|🙂|🙃|😉|😌|😍|😘|😗|😙|😚|😋|😜|😝|😛|🤑|🤗|🤓|😎|🤡|🤠|😏|😒|😞|😔|😟|😕|🙁|☹|😣|😖|😫|😩|😤|😠|😡|😶|😐|😑|😯|😦|😧|😮|😲|😵|😳|😱|😨|😰|😢|😥|🤤|😭|😓|😪|😴|🙄|🤔|🤥|😬|🤐|🤢|🤧|😷|🤒|🤕|😈|👿|👹|👺|💩|👻|💀|☠|👽|👾|🤖|🎃|😺|😸|😹|😻|😼|😽|🙀|😿|😾|👐|🙌|👏|🙏|🤝|👍|👎|👊|✊|🤛|🤜|🤞|✌|🤘|👌|👈|👉|👆|👇|☝|✋|🖐|🖖|👋|🤙|💪|🖕|✍|🤳|💅|🖖|💄|💋|👄|👅|👂|👃|👤|👣|👁|👀|🗣|👥|👶|👦|👧|👨|👩|👱‍♀|👱|👴|👵|👲|👳‍♀|👳|👮‍♀|👮|👷‍♀|👷|💂‍♀|💂|🕵‍♀|🕵|👩‍⚕|👨‍⚕|👩‍🌾|👨‍🌾|👩‍🍳|👨‍🍳|👩‍🎓|👨‍🎓|👩‍🎤|👨‍🎤|👩‍🏫|👨‍🏫|👩‍🏭|👨‍🏭|👩‍💻|👨‍💻|👩‍💼|👨‍💼|👩‍🔧|👨‍🔧|👩‍🔬|👨‍🔬|👩‍🎨|👨‍🎨|👩‍🚒|👨‍🚒|👩‍✈|👨‍✈|👩‍🚀|👨‍🚀|👩‍⚖|👨‍⚖|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀|🙇|💁|💁‍♂|🙅|🙅‍♂|🙆|🙆‍♂|🙋|🙋‍♂|🤦‍♀|🤦‍♂|🤷‍♀|🤷‍♂|🙎|🙎‍♂|🙍|🙍‍♂|💇|💇‍♂|💆|💆‍♂|🕴|💃|🕺|👯|👯‍♂|🚶‍♀|🚶|🏃‍♀|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|🎓|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|момо|momo|#|жопа|проебу|анально|не спит|никогда|сова|наркоторговец|наркота|наркотики|подкладка|подкладки|кокоин|кокаин|порно|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
var sss = zapret.test(zaprets1)
if(zapret.test(zaprets1) == true){
var check = true;
let text = message.args[1].toLowerCase();
var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|ru|su|net|com|org|pe|ua|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
var lol = filter0.test(text)
var lol1 = filter1.test(text)
if(filter0.test(text) == true || filter1.test(text) == true){
var check = true;
}
}else{
let user = message.user;
let name = message.args[1];
let clanid = message.user.clanid;
if(message.user.balance < 100000000) return bot(`⚠ Создание Компании стоит 100.000.000$`);
message.user.balance -= 10000000;

if(gorod[clanid]) return bot(`⚠ Вы уже состоите в каком-то компании.`);
if(!gorod[clanid]){
botiinfo.number += 1;
gorod[botiinfo.number] = {
owner: message.user,
users: {},
number: botiinfo.number,
name: name,
balance: 0,
mbalance: 0,
nbalance: 0,
drubins: 0,
win: 0,
rating: 0,
nowin: 0,
logo: `😆`,
exs: 0,
state: 0,
war: true,
people: 1
}
user.clanid = botiinfo.number;
gorod[botiinfo.number].users[message.user.uid] = {
names: message.user.tag,
level: 2
}


return message.send(`
👪 Компания ${name} успешно был создан.
`);
}}
});

cmd.hear(/^(?:Компания)/i, async (message, bot) => {
	
	

let user = message.user;
let clanid =
message.user.clanid;
if(!gorod[clanid]) return bot(`У вас нет компании.`);

let text = ``;
for(let id in gorod[clanid].users) {
let people = gorod[clanid].users[id];
if(gorod[clanid].users[id].level == 1) text += `[id${gorod[clanid].users[id].id}|${people.names}], `;
}
let tipe = ``;

function indexOfByKey(array, key, value) {
for (var i = 0; i < array.length; i++) {
if (array[i][key] == value) {
return i;
}
}
return null;
}

var tops = []
for (let i in gorod) {
tops.push({
id: i,
rating: gorod[i].rating
})
}
tops.sort(function(a, b) {
if (b.rating > a.rating) return 1
if (b.rating < a.rating) return -1
return 0
})

var inTop = indexOfByKey(tops, 'id', message.user);
inTop++;

if(gorod[clanid].open == true) tipe += `Открытый.`
if(gorod[clanid].open == false) tipe += `Закрытый.`
if(gorod[clanid]){
let exs = 0;
let convert = 0;

return bot(`

🏢 || Компания: ${gorod[clanid].name}
🏡 || ID: ${gorod[clanid].number}
👑 || Рейтинг компании: ${utils.sp(gorod[clanid].rating)}
👷 || Рабочих: ${utils.sp(gorod[clanid].nowin)}

💰 || денег:
💰 || Наличными: ${utils.sp(gorod[clanid].mbalance)}$
💸|| Донат: ${utils.sp(gorod[clanid].nbalance)} Рублей
🏛 || В банке: ${utils.sp(gorod[clanid].balance)}$

👑 || Директор и зам:
🔪 || Зам.директора: ${text}
👑 || Директор: [id${gorod[clanid].owner.id}|${gorod[clanid].owner.tag}] `);
}
});

cmd.hear(/^(?:Комположить)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
if(message.user.balance == 0) return bot(`у вас недостаточно средств`, {attachment:'market-178269772_2646788'});

message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|все|всё)/ig, message.user.balance);

if(!Number(message.args[1])) return;
message.args[1] = Math.floor(Number(message.args[1]));

if(message.args[1] <= 0) return;
const phrase = utils.pick(['🙂',`☺`, `😉`]);
const phrases = utils.pick(['😕',`😔`,`😔`,`😒`]);
const one = utils.pick(['😐']);

if(message.args[1] > message.user.balance) return bot(`у вас недостаточно средств`, {attachment:'хм'});
if(!message.args[1]) return bot(`Укажите сумму вклада.`);
let user = message.user;
let clanid = message.user.clanid;
if(!gorod[clanid]) return bot(`У вас нет компании.`);
if(message.args[1] > message.user.balance || message.args[1] <= 0) return bot(message.args[1] <= 0 ? `Вклад не может быть меньше 0 или равен 0 денег.` : `Вклад не может превышать Ваш баланс.`);
message.user.balance -= message.args[1];
gorod[clanid].mbalance += message.args[1];
return bot(`Вы успешно положили ${utils.sp(message.args[1])} Деньги в компанию.`);
});

cmd.hear(/^(?:Ккомположить)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
if(message.user.balance == 0) return bot(`у вас недостаточно средств`, {attachment:'кхм'});

message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|все|всё)/ig, message.user.balance);

if(!Number(message.args[1])) return;
message.args[1] = Math.floor(Number(message.args[1]));

if(message.args[1] <= 0) return;
const phrase = utils.pick(['🙂',`☺`, `😉`]);
const phrases = utils.pick(['😕',`😔`,`😔`,`😒`]);
const one = utils.pick(['😐']);

if(message.args[1] > message.user.balance) return bot(`у вас недостаточно средств`, {attachment:'хм'});
if(!message.args[1]) return bot(`Укажите сумму.`);
let user = message.user;
let clanid = message.user.clanid;
if(!gorod[clanid]) return bot(`У вас нет Компании.`);
if(message.args[1] > message.user.balance || message.args[1] <= 0) return bot(message.args[1] <= 0 ? `Вклад не может быть меньше 0 или равен 0 денег.` : `Вклад не может превышать Ваш баланс.`);
message.user.balance -= message.args[1];
gorod[clanid].balance += message.args[1];
return bot(`Вы успешно положили ${utils.sp(message.args[1])} Деньги в банк Компании.`);
});

cmd.hear(/^(?:Купить рабочих)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
if(message.user.balance == 0) return bot(`у вас недостаточно средств`, {attachment:'market-178269772_2646788'});

message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|все|всё)/ig, message.user.balance);

if(!Number(message.args[1])) return;
message.args[1] = Math.floor(Number(message.args[1]));

if(message.args[1] <= 0) return;
const phrase = utils.pick(['🙂',`☺`, `😉`]);
const phrases = utils.pick(['😕',`😔`,`😔`,`😒`]);
const one = utils.pick(['😐']);

if(message.args[1] > message.user.balance) return bot(`у вас недостаточно средств`, {attachment:'хм'});
if(!message.args[1]) return bot(`Укажите сумму.`);
let user = message.user;
let clanid = message.user.clanid;
if(!gorod[clanid]) return bot(`У вас нет Компании.`);
if(message.args[1] > message.user.balance || message.args[1] <= 0) return bot(message.args[1] <= 0 ? `надо больше` : `хитриш.`);
message.user.balance -= message.args[1];
gorod[clanid].nowin += message.args[1];
return bot(`Вы успешно ${utils.sp(message.args[1])} рабочих.`);
});

cmd.hear(/^(?:Компомощь)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
await bot(`Список моих команд:
1. Компания - ваша компания
2. комсоздать (текст) - создать компанию
3. Комположить(кол-во) - положить деньги в компанию
4. Ккомположить (кол-во) - положить деньги в банк компании
5. Купить рабочих (кол-во) - купить рабочих для компании
6. Купить рейтинг (кол-во) - купить рейтинг`);
});

cmd.hear(/^(?:Купить рейтинг)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
if(message.user.balance == 0) return bot(`у вас недостаточно средств`, {attachment:'market-178269772_2646788'});

message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|все|всё)/ig, message.user.balance);

if(!Number(message.args[1])) return;
message.args[1] = Math.floor(Number(message.args[1]));

if(message.args[1] <= 0) return;
const phrase = utils.pick(['🙂',`☺`, `😉`]);
const phrases = utils.pick(['😕',`😔`,`😔`,`😒`]);
const one = utils.pick(['😐']);

if(message.args[1] > message.user.balance) return bot(`у вас недостаточно средств`, {attachment:'хм'});
if(!message.args[1]) return bot(`Укажите сумму.`);
let user = message.user;
let clanid = message.user.clanid;
if(!gorod[clanid]) return bot(`У вас нет Компании.`);
if(message.args[1] > message.user.balance || message.args[1] <= 0) return bot(message.args[1] <= 0 ? `надо больше` : `хитриш.`);
message.user.balance -= message.args[1];
gorod[clanid].rating += message.args[1];
return bot(`Вы успешно ${utils.sp(message.args[1])} рейтинг.`);
});

cmd.hear(/^(?:состояние бота)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
return bot(`
	Текущее состояние Bot MarYans

базы данных--------------------------------состояние

users----------------------------------------Работает!
gorod----------------------------------------Работает!
clans----------------------------------------Работает!
botinfo--------------------------------------Работает!
log------------------------------------------Работает!
botinfo--------------------------------------Работает!
youtube--------------------------------------Работает!

`); 
});

cmd.hear(/^(?:авыебать)\s([0-9]+)/i, async (message, bot) => {
	
	
		if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`убедитесь в правильности ID игрока`);
		if(Number(message.args[1]) === message.user.uid) return bot(`самого себя не трахнуть`);

		await bot(`вы трахнули игрока ${user.tag}`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[18+]
▶ Администратор трахнул вас!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
vk.api.messages.send({ peer_id: message.peerId, sticker_id: 13184
})
if(user.notifications) vk.api.messages.send({ user_id: user.id, sticker_id: 13184 });
	}
});

cmd.hear(/^(?:кастрировать)\s([0-9]+)/i, async (message, bot) => {
	
	
		if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`убедитесь в правильности ID игрока`);
		if(Number(message.args[1]) === message.user.uid) return bot(`себя ты с дуба рухнуд`);

		await bot(`вы кастрировали игрока ${user.tag}`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[18+]
▶ СОЗДАТЕЛЬ кастрировал вас!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
if(user.notifications) vk.api.messages.send({ user_id: user.id, sticker_id: 10123 });
	}
});

cmd.hear(/^(?:пельмени)\s([0-9]+)/i, async (message, bot) => {
	
	
		if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`убедитесь в правильности ID игрока`);
		if(Number(message.args[1]) === message.user.uid) return bot(`не не повар потом поест`);

		await bot(`вы приготовили пельмени игроку ${user.tag}`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[ПОВАР]
▶ СОЗДАТЕЛЬ приготовил вам пельмени!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
if(user.notifications) vk.api.messages.send({ user_id: user.id, sticker_id: 13297 });
	}
});

cmd.hear(/^(?:асекс)\s([0-9]+)/i, async (message, bot) => {
	
	
		if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`убедитесь в правильности ID игрока`);
		if(Number(message.args[1]) === message.user.uid) return bot(`с самим собой сексом не заняться`);

		await bot(`вы занились сексом с игроком ${user.tag}`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[18+]
▶ Администратор занялся с вами сексом!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
vk.api.messages.send({ peer_id: message.peerId, sticker_id: 13184
})
if(user.notifications) vk.api.messages.send({ user_id: user.id, sticker_id: 13184 });
	}
});

cmd.hear(/^(?:акуни)\s([0-9]+)/i, async (message, bot) => {
	
	
		if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`убедитесь в правильности ID игрока`);
		if(Number(message.args[1]) === message.user.uid) return bot(`самому себе куни не сделать`);

		await bot(`вы сделали куни игроку ${user.tag}`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[18+]
▶ Администратор сделал вам куни!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:аотпиздить)\s([0-9]+)/i, async (message, bot) => {
	
	
		if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`убедитесь в правильности ID игрока`);
		if(Number(message.args[1]) === message.user.uid) return bot(`самого себя не отпиздить`);

		await bot(`вы отпиздили игрока ${user.tag}`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[ОТПИЗДИЛИ]
▶ Администратор отпиздил вас!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:аобнять)\s([0-9]+)/i, async (message, bot) => {
	
	
		if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`убедитесь в правильности ID игрока`);
		if(Number(message.args[1]) === message.user.uid) return bot(`самого себя не обнять`);

		await bot(`вы обняли игрока ${user.tag}`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[ОБНЯТИЕ]
▶ Администратор обнял вас!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
if(user.notifications) vk.api.messages.send({ user_id: user.id, sticker_id: 8665 });
	}
});

cmd.hear(/^(?:аотсосать)\s([0-9]+)/i, async (message, bot) => {
	
	
		if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`убедитесь в правильности ID игрока`);
		if(Number(message.args[1]) === message.user.uid) return bot(`у самого себя не отсосать`);

		await bot(`вы отсосали у игрока ${user.tag}`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[18+]
▶ Администратор отсосал у вас!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:военкомат)\s([0-9]+)/i, async (message, bot) => {
	
	
		if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`убедитесь в правильности ID игрока`);
		if(Number(message.args[1]) === message.user.uid) return bot(`ты дурак себя в армию звать`);

		await bot(`вы сдали игрока ${user.tag} в военкомат`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[ВОЕНКОМАТ]
▶ СОЗДАТЕЛЬ нашёл вас и призвал вас на службу!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
if(user.notifications) vk.api.messages.send({ user_id: user.id, sticker_id: 7245 });
	}
});

cmd.hear(/^(?:детдом)\s([0-9]+)/i, async (message, bot) => {
	
	
		if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`убедитесь в правильности ID игрока`);
		if(Number(message.args[1]) === message.user.uid) return bot(`ты дурак себя в детдом сдавать`);

		await bot(`вы сдали игрока ${user.tag} в детдом`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[ЗАПИСКА НА СТОЛЕ]
▶ СОЗДАТЕЛЬ сдал вас в детдом!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
if(user.notifications) vk.api.messages.send({ user_id: user.id, sticker_id: 10107 });
	}
});

cmd.hear(/^(?:выдг)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
    message.user.log = `${message.args[0]}`;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`) 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


    message.user.logg += `\n\n📌 Донатер: ${message.user.tag}\n ⏰ Выдал в: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n 📖 Использовал команду: вип выд ${message.args[1]} ${message.args[2]}\n ✨ Кому выдал: @id${user.id} (${user.tag})\n\n`;
    user.push += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}$`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `спасибо за участие в ежедневной акции 📈!` }); 
} 
});

cmd.hear(/^(?:кейсы|📦 Кейсы|Bot MarYans 📦 Кейсы|@botmaryans 📦 Кейсы)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
		let text = ``;
	
text += `\n1⃣ Сюрприз Кейс: 50.000.000.000$\n`;
text += `📜 Информация: "кейс инфо 1"`;
text += `\n🛒 Купить: "кейс 1 [кол-во]"`;
text += `\n`;
text += `\n2⃣ Платинум Кейс: 3.000.000.000.000$ \n`;
text += `📜 Информация: "кейс инфо 2"`;
text += `\n🛒 Купить: "кейс 2 [кол-во]"`;
text += `\n`;
text += `\n3⃣ Донат Кейс: 15 рублей. \n`;
text += `📜 Информация: "кейс инфо 3"`;
text += `\n🛒 Покупка у https://vk.com/id447012706`;
		
text += `\n`;

if(message.user.clanstop || message.user.raziri || message.user.push)
{
text += `\n👜 У Вас в инвентаре:\n`;
if(message.user.clanstop) text += `⠀⠀📦 Сюрприз Кейс (${message.user.clanstop} шт.)\n⠀⠀ 📜 Открыть: «кейс открыть 1»\n`;
if(message.user.raziri) text += `⠀⠀ 📦 Платинум Кейс (${message.user.raziri} шт.)\n⠀⠀ 📜 Открыть: «кейс открыть 2»\n`;
if(message.user.push) text += `⠀⠀ 📦 Донат Кейс (${message.user.push} шт.)\n⠀⠀ 📜 Открыть: «кейс открыть 3»\n`;
}
return bot(`кейсы: \n${text}`);

		});
		
cmd.hear(/^(?:проблема404)$/i, async (message, bot) => {
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
	for(i=0;i<20000;i++){ 
	if(users[i]){ 
	users[i].push = 5;
	} 
	} 
	return message.send(`готово!`);
});
	
		
cmd.hear(/^(?:кейс открыть 3)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.push == 0) return bot(`у вас нет кейсов ${smileerror}.`); 
	message.user.push -= 1;

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
	setTimeout(() => {
		message.user.balance -= 0;	}, 0);

	message.user.balance -= 0;


	if(prize === 1)
	{
		message.user.balance += 500000;
		return bot(`вы выиграли 500.000$ ${smilesuccess}`);
	}

	if(prize === 2)
	{
		message.user.clanstop += 1;
		return bot(`вы выиграли 1 Сюрприз кейс ${smilesuccess}`);
	}

	if(prize === 3)
	{
		message.user.rating += 50;
		return bot(`вы выиграли 50👑`);
	}

	if(prize === 4)
	{
		message.user.rating += 10;
		return bot(`вы выиграли 10👑`);
	}

	if(prize === 5)
	{
		message.user.rating += 100;
		return bot(`вы выиграли 100👑`);
	}

	if(prize === 6)
	{
		message.user.rating += 20;
		return bot(`вы выиграли 20👑`);
	}
	if(prize === 7)
	{
		message.user.rating += 30;
		return bot(`вы выиграли 30👑`);
	}
	if(prize === 8)
	{
		message.user.rating += 40;
		return bot(`вы выиграли 40👑`);
	}
	if(prize === 9)
	{
		message.user.sberbank.balance += 10000000;
		return bot(`вы выиграли 10.000.000$ на свой банковский счёт ${smilesuccess}`);
	}
	if(prize === 10)
	{
		message.user.sberbank.balance += 50000000;
		return bot(`вы выиграли 50.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 11)
	{
		message.user.sberbank.balance += 100000000;
		return bot(`вы выиграли 100.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 12)
	{
		message.user.balance += 90000;
		return bot(`вы выиграли 90.000 на баланс ${smilesuccess}`);
	}
});
		
cmd.hear(/^(?:колесо фортуны|🎡 Колесо)$/i, async (message, bot) => {
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	let ref8 = `https://qiwi.com/payment/form/99?extra%5B%27account%27%5D=79521817743&amountInteger=30&amountFraction=0&currency=RUB&extra%5B%27comment%27%5D=5%20%D0%A2%D0%A0%D0%9B%D0%9D%20ID:%20${message.user.uid}&blocked%5B0%5D=account&blocked%5B1%5D=sum&blocked%5B2%5D=comment`;
    let refka8 = await vk.api.call('utils.getShortLink', { url: ref8 });
	return bot(`🎫 Для того чтобы крутить Колесо-Фортуны нужен 3 билета.
	🎡 Для покупки вращений колеса фортуны перейдите туда: ${refka8.short_url}
	🔥 Из «Колеса Фортуны» может выпасть:
	1⃣ Опыт
	2⃣ Рейтинг
	3⃣ Игровая валюта
	4⃣ Лучшая машина
	5⃣ VIP Статус
	6⃣ Топовый петомец
	7⃣ Топовый Телефон

	💲Стоимость вращения - 3 билета.
	❓Для того чтобы крутить введите: "Фортуна крутить".`, {attachment:'photo-176472758_457239602'});
});

cmd.hear(/^(?:фортуна крутить)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	let prize = utils.random(1, 7);
	
	if(message.user.bilet < 3) return bot(`Недостаточно билетов для прокрутки.`);
	
	if(prize === 1)
	{
		let opit = utils.random(50, 300)
		message.user.bilet -= 3;
		message.user.user.opit += opit;
		return bot(`⭐ Вы выиграли ${opit} опыта!`);
	}
	if(prize === 2)
		{
		let rating = utils.random(100, 1000)
		message.user.bilet -= 3;
		message.user.rating += rating;
		return bot(`🏆 Вы выиграли ${rating}`);
	}
	if(prize === 3)
		{
		let valuta = utils.random(10, 100) * 1000000000
		message.user.bilet -= 3;
		message.user.balance += valuta;
		return bot(`💰 Вы выиграли ${utils.sp(valuta)}$`);
	}
	if(prize === 4)
		{
		message.user.bilet -= 3;
		message.user.pets = 10;
		return bot(`🐹 Вы выиграли ТОПОВОГО ПЕТОМЦА!`);
	}
	if(prize === 5)
		{
		message.user.bilet -= 3;
		message.user.transport.car = 27;
		return bot(`🚗 Вы выиграли ЛУЧШУЮ МАШИНУ!`);
	}
	if(prize === 6)
		{
		message.user.bilet -= 3;
		message.user.settings.adm = 2;
		message.user.prefix = `VIP`;
		return bot(`Вы выиграли VIP Статус!\n💡 Для ознакомления с командами введите "VIP"!`);
	}
	if(prize === 7)
		{
		message.user.bilet -= 3;
		message.user.phones = 11;
		return bot(`📱 Вы выиграли ТОПОВЫЙ ТЕЛЕФОН!`);
	}

});

cmd.hear(/^(?:Кейс 1)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 50000000000 ) > message.user.balance) return bot(`у вас недостаточно денег`, {attachment:'market-176472758_2439456'});
	else if(( message.args[1] * 50000000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 50000000000 );
		message.user.clanstop += message.args[1];

		return bot(`вы успешно купили "Сюрприз Кейс" ${utils.sp(message.args[1] * 50000000000)}$`);
	}
});

cmd.hear(/^(?:кейс 2)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 3000000000000 ) > message.user.balance) return bot(`у вас недостаточно денег`, {attachment:'market-176472758_2439456'});
	else if(( message.args[1] * 3000000000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 3000000000000 );
		message.user.raziri += message.args[1];

		return bot(`вы успешно купили "Платинум Кейс" ${utils.sp(message.args[1] * 3000000000000)}$`);
	}
});

cmd.hear(/^(?:кик)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
	
	let user = users.find(x=> x.uid === Number(message.args[1]));
	 if(Number(message.args[1]) === message.user.id) return bot(`вы не можете дать кик себе`); 
	{
		vk.api.call("messages.removeChatUser", { chat_id: message.chatId, user_id: user.id }).
		catch((error) => {return message.send(`⚠ Ошибка человека нет в беседе или в боте или он админ беседы`);}); 

	}
	
});



cmd.hear(/^(?:cid)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
if(!message.isChat) return bot(`команда работает только в беседе!`);
		return message.send(`[🎉] » ID этого чата: ${message.chatId}`);
	}); 
	
	cmd.hear(/^(?:!!рассылка)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
if(message.user.settings.adm < 8) return;
users.filter(x=> x.id !== 1).map(zz => { 
if(user.ras) vk.api.messages.send({ user_id: user.id, message: `${message.args[1]}`, keyboard: JSON.stringify( 
					{ 
						"one_time": true, 
						"buttons": [ 
						[{ 
							"action": { 
								"type": "text", 
								"payload": "{\"button\": \"1\"}", 
								"label": `🔔 Рассылка выкл` 
							}, 
							"color": "negative"
						},
						{ 
							"action": { 
								"type": "text", 
								"payload": "{\"button\": \"2\"}", 
								"label": `📚 Помощь` 
							}, 
							"color": "positive"
						}] 
						] 
					}) 
}); 
}); 
let people = 0;
bot(`рассылка отправлена!`);
for(let id in users) {
vk.api.call('messages.send', {
chat_id: id,
message: `${message.args[1]}` });
}
return;
});
	
cmd.hear(/^(?:!asend)\s([^]+)$/i, async (message, bot) => {
	
	if(message.user.settings.adm < 8) return;

		await bot(`рассылка в процессе`);
		users.map(user => {
			if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `🔔 Чтобы отказатся от рассылки напиши "Рассылка выкл"`,  attachment: message.args[1], keyboard: JSON.stringify( 
					{ 
						"one_time": true, 
						"buttons": [ 
						[{ 
							"action": { 
								"type": "text", 
								"payload": "{\"button\": \"1\"}", 
								"label": `🔔 Рассылка выкл` 
							}, 
							"color": "negative"
						},
						{ 
							"action": { 
								"type": "text", 
								"payload": "{\"button\": \"2\"}", 
								"label": `📚 Помощь` 
							}, 
							"color": "positive"
						}] 
						] 
					}) 
					}).then(() => {
				console.log(`SENDED ${user.uid}`)
			}).catch((err) => {
				console.log(`NOOOOT ${user.uid}`)
			});
		});
	
		for(var i = 1; i < 900; i++) {
            vk.api.messages.send({ peer_id: 2000000000 + i, message: ``, attachment: message.args[1] }).then(() => {
				console.log(`CHAT SENDED ${user.id}`)
			}).catch((err) => {
				console.log(`CHAT NOOOOT ${user.id}`)
			});
		}
		message.args[1] = message.args[1].replace("wall", "");
		message.args[1] = message.args[1].split('_');
		wall_to_send = "wall" + message.args[1][0] + "_" + message.args[1][1];
return bot(`обновлён пост для рассылки`);
});

cmd.hear(/^(?:!asend2)\s([^]+)$/i, async (message, bot) => {
	
	if(message.user.settings.adm < 8) return;

		await bot(`рассылка в процессе`);
		users.map(user => {
			if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `🎁 Распродажа до 19 СЕНТЯБРЯ! Успей купить!
			🔔 Чтобы отказатся от рассылки напиши "Рассылка выкл"`,  attachment: message.args[1], keyboard: JSON.stringify( 
					{ 
						"one_time": true, 
						"buttons": [ 
						[{ 
							"action": { 
								"type": "text", 
								"payload": "{\"button\": \"1\"}", 
								"label": `🔔 Рассылка выкл` 
							}, 
							"color": "negative"
						},
						{ 
							"action": { 
								"type": "text", 
								"payload": "{\"button\": \"2\"}", 
								"label": `📚 Помощь` 
							}, 
							"color": "positive"
						}] 
						] 
					}) 
					}).then(() => {
				console.log(`SENDED ${user.uid}`)
			}).catch((err) => {
				console.log(`NOOOOT ${user.uid}`)
			});
		});
	
		for(var i = 1; i < 900; i++) {
            vk.api.messages.send({ peer_id: 2000000000 + i, message: `🎁 Распродажа до 19 СЕНТЯБРЯ! Успей купить!`, attachment: message.args[1] }).then(() => {
				console.log(`CHAT SENDED ${user.id}`)
			}).catch((err) => {
				console.log(`CHAT NOOOOT ${user.id}`)
			});
		}
		message.args[1] = message.args[1].replace("wall", "");
		message.args[1] = message.args[1].split('_');
		wall_to_send = "wall" + message.args[1][0] + "_" + message.args[1][1];
return bot(`обновлён пост для рассылки`);
});

cmd.hear(/^(?:кн)\s([0-9]+)$/i, async (message, bot) => {
let user = users.find(x=> x.uid === Number(message.args[1]));
if(Number(message.args[1]) === message.user.uid) return bot(`вы не можите играть самим собой! 🕹`);
if(!user) return bot(`неверный ID игрока`);
if(message.user.kn == true) return bot(`вы уже играете 🕹`);
user.knviz = `${message.user.uid}`;
message.user.kn0 = `❌`;
message.send(`🕹 Вы успешно отправили запрос на игру.`);
vk.api.messages.send({ user_id: user.id, message: `👥 @id${user.id} (${user.tag}), вам пришел запрос на крестики нолики!`,
keyboard:JSON.stringify({
"buttons": [
[
{ "action": { "type": "text", "label": "кн да", "payload": "" }, "color": "positive"
},
{ "action": { "type": "text", "label": "кн нет", "payload": "" }, "color": "negative"
}]
],
"inline": true

})
});
});

cmd.hear(/^(?:кн да)$/i, async (message, bot) => {
let user = users.find(x=> x.uid === Number(message.user.knviz));
if(message.user.kn == true) return bot(`вы уже играете 🕹`);
if(user.kn == true) return bot(`этот игрок уже с кем то играет 👥`);
message.user.kn = true;
user.kn = true;
user.kn0 = `⭕`;
message.user.kn0 = `❌`;
message.send(`✅ Вы приняли запрос на крестики нолики ждите хода!`);
vk.api.messages.send({ user_id: user.id, message: `✅ @id${user.id} (${user.tag}), ваш запрос на игру был принят! 
${message.user.kn1.toString().replace(/1/gi, "❌").replace(/false/gi, "🆚").replace(/2/gi, "⭕")}${message.user.kn2.toString().replace(/1/gi, "❌").replace(/false/gi, "🈺").replace(/2/gi, "⭕")}${message.user.kn3.toString().replace(/1/gi, "❌").replace(/false/gi, "🈸").replace(/2/gi, "⭕")}
${message.user.kn4.toString().replace(/1/gi, "❌").replace(/false/gi, "🈵").replace(/2/gi, "⭕")}${message.user.kn5.toString().replace(/1/gi, "❌").replace(/false/gi, "🈲").replace(/2/gi, "⭕")}${message.user.kn6.toString().replace(/1/gi, "❌").replace(/false/gi, "🈹").replace(/2/gi, "⭕")}
${message.user.kn7.toString().replace(/1/gi, "❌").replace(/false/gi, "🈁").replace(/2/gi, "⭕")}${message.user.kn8.toString().replace(/1/gi, "❌").replace(/false/gi, "🆙").replace(/2/gi, "⭕")}${message.user.kn9.toString().replace(/1/gi, "❌").replace(/false/gi, "🆕").replace(/2/gi, "⭕")}

🔥 Чтобы выйти напишите: кн выйти`,
keyboard:JSON.stringify({
"buttons": [
[
{ "action": { "type": "text", "label": `${message.user.kn1.toString().replace(/1/gi, "❌").replace(/false/gi, "🆚").replace(/2/gi, "⭕")}`, "payload": "" }, "color": "secondary" },
{ "action": { "type": "text", "label": `${message.user.kn2.toString().replace(/1/gi, "❌").replace(/false/gi, "🈺").replace(/2/gi, "⭕")}`, "payload": "" }, "color": "secondary" },
{ "action": { "type": "text", "label": `${message.user.kn3.toString().replace(/1/gi, "❌").replace(/false/gi, "🈸").replace(/2/gi, "⭕")}`, "payload": "" }, "color": "secondary" },
],
[
{ "action": { "type": "text", "label": `${message.user.kn4.toString().replace(/1/gi, "❌").replace(/false/gi, "🈵").replace(/2/gi, "⭕")}`, "payload": "" }, "color": "secondary" },
{ "action": { "type": "text", "label": `${message.user.kn5.toString().replace(/1/gi, "❌").replace(/false/gi, "🈲").replace(/2/gi, "⭕")}`, "payload": "" }, "color": "secondary" },
{ "action": { "type": "text", "label": `${message.user.kn6.toString().replace(/1/gi, "❌").replace(/false/gi, "🈹").replace(/2/gi, "⭕")}`, "payload": "" }, "color": "secondary" },
],
[
{ "action": { "type": "text", "label": `${message.user.kn7.toString().replace(/1/gi, "❌").replace(/false/gi, "🈁").replace(/2/gi, "⭕")}`, "payload": "" }, "color": "secondary" },
{ "action": { "type": "text", "label": `${message.user.kn8.toString().replace(/1/gi, "❌").replace(/false/gi, "🆙").replace(/2/gi, "⭕")}`, "payload": "" }, "color": "secondary" },
{ "action": { "type": "text", "label": `${message.user.kn9.toString().replace(/1/gi, "❌").replace(/false/gi, "🆕").replace(/2/gi, "⭕")}`, "payload": "" }, "color": "secondary" },
]
],
"inline": true

})
});
});

cmd.hear(/^(?:кн нет)$/i, async (message, bot) => {
let user = users.find(x=> x.uid === Number(message.user.knviz));
if(message.user.kn == true) return bot(`вы уже играете 🕹`);
if(user.kn == true) return bot(`этот игрок уже с кем то играет 👥`);
message.user.kn = false;
user.kn = false;
user.kn0 = `❌`;
message.user.kn0 = `❌`;
message.send(`⛔ Вы отказались от игры в крестики нолики!`);
vk.api.messages.send({ user_id: user.id, message: `⛔ @id${user.id} (${user.tag}), ваш запрос на игру был откланён!`});
});

cmd.hear(/^(?:кн выйти)$/i, async (message, bot) => {
let user = users.find(x=> x.uid === Number(message.user.knviz));
if(message.user.kn == false) return bot(`вы не играите 🕹`);
message.user.kn = false;
user.kn = false;
user.kn0 = `❌`;
message.user.kn0 = `❌`;
message.send(`⛔ Вы вышли из игры.`);
vk.api.messages.send({ user_id: user.id, message: `⛔ @id${user.id} (${user.tag}), ваш противник вешел из игры!`});
});

cmd.hear(/^(?:asend)\s([^]+)$/i, async (message, bot) => {
	
	if(message.user.settings.adm < 8) return;

		await bot(`рассылка в процессе`);
		users.map(user => {
			if(user.notifications) vk.api.messages.send({ user_id: user.id, message: ``,  attachment: message.args[1]
					}).then(() => {
				console.log(`SENDED ${user.uid}`)
			}).catch((err) => {
				console.log(`NOOOOT ${user.uid}`)
			});
		});

		message.args[1] = message.args[1].replace("wall", "");
		message.args[1] = message.args[1].split('_');
		wall_to_send = "wall" + message.args[1][0] + "_" + message.args[1][1];
return bot(`обновлён пост для рассылки`);
});
	
cmd.hear(/^(?:подарок|🛍 Искать подарки)/i, async (message, bot) => {
	
let conf = await vk.api.messages.getConversationMembers({
peer_id: message.peerId,
});
if(conf.count < 80) return bot(`подарок можно забирать только в беседе где есть 80 участников. 😬
🆘 Не забудьте выдать администратора боту, иначе он не сможет получить количество участников!`)
if(!message.isChat) return message.send(`подарок можно забирать только в беседе где есть 80 участников. 😬`)
let ch = pchats.find(x=> x.id == message.chatId);
if(!ch) {
pchats.push({
id: message.chatId,
time: 0
});
}
if(pchats.find(x=> x.id == message.chatId).time > Date.now())
{
return bot(`в этой беседе уже забрали подарок, он появится через ${displayTime(ch.time - Date.now())}. Приходи чуть позже! ${smileerror}`,
{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[{
"action": {
"type": "text",
"payload": "{}",
"label": `🛍 Искать подарки`
},
"color": "default"
}]
]
})
});
return message.sendSticker(6861);
}
pchats.find(x=> x.id == message.chatId).time = Date.now() + 86400;
let win = utils.pick([5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,4,5,5,4,4,3,3,1,1,1,1,2]);
switch (win) {
case 1:
{
let btcc = utils.random(20000000);
message.user.btc += Number(btcc)
return bot(`Вы открыли подарок в этой беседе и нашли ${utils.sp(btcc)}฿, приходите в другие беседы и открывайте подарки! 🔥 ${smilesuccess}`,
{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[{
"action": {
"type": "text",
"payload": "{}",
"label": `🛍 Искать подарки`
},
"color": "default"
}]
]
})
});
return message.sendSticker(many);
}
break;
case 2:
{
message.user.balance += 250000000000000
return bot(`🆘 ВАМ КРУПНО ПОВЕЗЛО! 🆘 📦 Вы открыли подарок, а там лежал... БИЗНЕС «Межпланетный Экспресс»! (выдано валютой) ${smilesuccess}`,
{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[{
"action": {
"type": "text",
"payload": "{}",
"label": `🛍 Искать подарки`
},
"color": "default"
}]
]
})
});
return message.sendSticker(many);
}
break;
case 3:
let platinum = utils.pick([1,2,3]);
message.user.clanstop += platinum
return bot(`Вы открыли подарок в этой беседе и нашли «Платинум» кейс (${platinum} шт.), приходите в другие беседы и открывайте подарки! 🔥 ${smilesuccess}`,
{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[{
"action": {
"type": "text",
"payload": "{}",
"label": `🛍 Искать подарки`
},
"color": "default"
}]
]
})
});
message.sendSticker(many);
break;
case 4:
{
let surprise = utils.pick([1,2,3,4,5,6,7]);
message.user.raziri += surprise
return bot(`Вы открыли подарок в этой беседе и нашли «Сюрприз» кейс (${surprise} шт.), приходите в другие беседы и открывайте подарки! 🔥 ${smilesuccess}`,
{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[{
"action": {
"type": "text",
"payload": "{}",
"label": `🛍 Искать подарки`
},
"color": "default"
}]
]
})
})
return message.sendSticker(many);
}
break;
case 5:
{
let dengi = utils.random(156781123123,1000000000000);
message.user.balance += dengi
return bot(`Вы открыли подарок в этой беседе и нашли ${utils.sp(dengi)}$ игровой валюты, приходите в другие беседы и открывайте подарки! 🔥 ${smilesuccess}`,
{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[{
"action": {
"type": "text",
"payload": "{}",
"label": `🛍 Искать подарки`
},
"color": "default"
}]
]
})
})
return message.sendSticker(11281);
}
break;
default:
return bot(`Вы открыли подарок в этой беседе и ничего там не нашли. Приходите в другие беседы и открывайте подарки! 🔥`,
{
keyboard:JSON.stringify(
{
"inline": true,
"buttons": [
[{
"action": {
"type": "text",
"payload": "{}",
"label": `🛍 Искать подарки`
},
"color": "default"
}]
]
})
});
return message.sendSticker(many);
}
});

cmd.hear(/^(?:сократить)\s?([^]+)?/i, async (message, bot) => {
	
	
    message.user.log = `${message.args[0]}`;	
		   let cc = message.args[1].toLowerCase();
	 
	       let text = message.args[1];
	       if(!text) return message.send("⚠ Введите ссыслку, которую нужно сократить!");
	     	vk.api.call("utils.getShortLink", {url: text}).then(function (res){
	        if(!text) return message.send("⚠ Введите ссыслку, которую нужно сократить!");
	        message.send("😜 ➾ Короткая ссылка: " + res.short_url);
	     });
	  
});

cmd.hear(/^(?:кейс открыть 1)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.clanstop == 0) return bot(`у вас нет кейсов ${smileerror}.`); 
	message.user.clanstop -= 1;

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
	setTimeout(() => {
		message.user.balance -= 0;	}, 0);

	message.user.balance -= 0;


	if(prize === 1)
	{
		message.user.balance += 500000;
		return bot(`вы выиграли 500.000$ ${smilesuccess}`);
	}

	if(prize === 2)
	{
		message.user.clanstop += 1;
		return bot(`вы выиграли 1 Сюрприз кейс ${smilesuccess}`);
	}

	if(prize === 3)
	{
		message.user.rating += 50;
		return bot(`вы выиграли 50👑`);
	}

	if(prize === 4)
	{
		message.user.rating += 10;
		return bot(`вы выиграли 10👑`);
	}

	if(prize === 5)
	{
		message.user.rating += 100;
		return bot(`вы выиграли 100👑`);
	}

	if(prize === 6)
	{
		message.user.rating += 20;
		return bot(`вы выиграли 20👑`);
	}
	if(prize === 7)
	{
		message.user.rating += 30;
		return bot(`вы выиграли 30👑`);
	}
	if(prize === 8)
	{
		message.user.rating += 40;
		return bot(`вы выиграли 40👑`);
	}
	if(prize === 9)
	{
		message.user.sberbank.balance += 10000000;
		return bot(`вы выиграли 10.000.000$ на свой банковский счёт ${smilesuccess}`);
	}
	if(prize === 10)
	{
		message.user.sberbank.balance += 50000000;
		return bot(`вы выиграли 50.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 11)
	{
		message.user.sberbank.balance += 100000000;
		return bot(`вы выиграли 100.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 12)
	{
		message.user.balance += 90000;
		return bot(`вы выиграли 90.000 на баланс ${smilesuccess}`);
	}
});

cmd.hear(/^(?:кейс открыть 2)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.raziri == 0) return bot(`у вас нет кейсов ${smileerror}.`); 
	message.user.raziri -= 1;

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
	setTimeout(() => {
		message.user.balance -= 0;	}, 0);

	message.user.balance -= 0;


	if(prize === 1)
	{
		message.user.balance += 500000;
		return bot(`вы выиграли 500.000$ ${smilesuccess}`);
	}

	if(prize === 2)
	{
		message.user.btc += 10000;
		return bot(`вы выиграли 10.000₿ ${smilesuccess}`);
	}

	if(prize === 3)
	{
		message.user.rating += 50;
		return bot(`вы выиграли 50👑`);
	}

	if(prize === 4)
	{
		message.user.opit += 300;
		return bot(`вы выиграли 300 опыта 🏆`);
	}

	if(prize === 5)
	{
		message.user.rating += 100;
		return bot(`вы выиграли 100👑`);
	}

	if(prize === 6)
	{
		message.user.rating += 20;
		return bot(`вы выиграли 20👑`);
	}
	if(prize === 7)
	{
		message.user.rating += 30;
		return bot(`вы выиграли 30👑`);
	}
	if(prize === 8)
	{
		message.user.opit += 50;
		return bot(`вы выиграли 50 опыта 🏆`);
	}
	if(prize === 9)
	{
		message.user.sberbank.balance += 10000000;
		return bot(`вы выиграли 10.000.000$ на свой банковский счёт ${smilesuccess}`);
	}
	if(prize === 10)
	{
		message.user.sberbank.balance += 50000000;
		return bot(`вы выиграли 50.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 11)
	{
		message.user.sberbank.balance += 100000000;
		return bot(`вы выиграли 100.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 12)
	{
		message.user.misc.phone = 9;
		return bot(`вы выиграли iPhone X  ${smilesuccess}`);
	}
});

cmd.hear(/^(?:очистить чат)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
		return message.send("&#4448;\n".repeat(200) + "Я очистил чат от лишних сообщений!");
});

cmd.hear(/^(?:Рейд)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
		return message.send("😈\n".repeat(1500) + "Война!");
});

cmd.hear(/^(?:сделатьраздачу)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
for(i=0;i<20000;i++){ 
if(users[i]){ 
users[i].clanstop += 1;
} 
} 
return bot(`готово!`);
});

cmd.hear(/^(?:когда|when)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.chatId == 64) return bot(`в админ беседе нельзя.`);      
	let times = {
    60: ['секунду', 'секунды', 'секунд'], 
    60: ['минуту', 'минуты', 'минут'], 
    24: ['час', 'часа', 'часов'], 
    365: ['день', 'дня', 'дней'], 
    2060: ['год', 'года', 'лет']
};
    let item = utils.pick(Object.keys(times));
    let time = utils.random(Number(item));
    let date = await nDay(time, times[item]);
    return await bot(`событие произойдет, через ${time} ${date}`);

function nDay(n, titles) {
    return titles[(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)];
};
});

cmd.hear(/^(?:плейлист)$/i, async (message) => {
	message.user.log = `${message.args[0]}`;
  vk.api.messages.send({ peer_id: message.peerId, sticker_id: 11021
})
return message.send(`Вот тебе плейлист!`, { attachment: utils.pick(["audio_playlist-147845620_1624"]) });
});

cmd.hear(/^(?:рандом музыка|музыка)$/i, async (message) => {
	message.user.log = `${message.args[0]}`;
  vk.api.messages.send({ peer_id: message.peerId, sticker_id: 11022
})
return message.send(`Вот тебе топовое музло!`, { attachment: utils.pick(["audio-2001238277_50238277", "audio-2001238278_50238278", "audio-2001238280_50238280", "audio-2001238279_50238279", "audio-2001158114_46158114", "audio-2001708831_48708831", "audio254486670_456239688", "audio254486670_456239687", "audio254486670_456239670", "audio254486670_456239655", 'audio254486670_456239706', 'audio254486670_456239707', 'audio254486670_456239708', 'audio254486670_456239709', 'audio254486670_456239644', 'audio254486670_456239710', 'audio254486670_456239392', 'audio254486670_456239395', 'audio254486670_456239393', 'audio254486670_456239394', 'audio254486670_456239171', 'audio254486670_456239210', 'audio254486670_456239416', 'audio254486670_456239711', 'audio254486670_456239712', 'audio254486670_456239716', 'audio254486670_456239717', 'audio254486670_456239128', "audio254486670_456239691"]) });
});

cmd.hear(/^(?:беседа)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
return bot(`перейди по ссылке https://vk.me/join/AJQ1d5D7DBYvm5ZraU8Yh0jf`);
});

cmd.hear(/^(?:сообщение за бота)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
    message.user.log = `${message.args[0]}`;	
	if(message.user.realty.admin == false) return;

	vk.api.messages.send({ peer_id: message.peerId, message: `${message.args[1]}`    });
	
});

cmd.hear(/^(?:стикер за бота)\s([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	if(message.user.realty.admin == false) return;

	vk.api.messages.send({ peer_id: message.peerId, sticker_id: message.args[1]  });
	
});

cmd.hear(/\.(com|ru|me|xyz|pro|ooo|community|steam|pw|org|)$/i, async (message, bot) => {
    message.user.captcha_sms += 1;
	message.user.floder += 1;
	if(!message.isChat) return;
		let chatid = message.chatId;
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.user.id});
		return message.send(`[id${message.user.id}|${message.user.tag}],Был кикнут за рекламу.`);
	});
	
	cmd.hear(/^(?:https:)/i,  (message) => { 
	message.user.floder += 1;
	if(!message.isChat) return;
		let chatid = message.chatId;
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.user.id});
			return message.send(`[id${message.user.id}|${message.user.tag}],Был кикнут за рекламу.`);
});

cmd.hear(/^(?:vk.com)/i,  (message) => { 
	message.user.floder += 1;
	if(!message.isChat) return;
		let chatid = message.chatId;
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.user.id});
			return message.send(`[id${message.user.id}|${message.user.tag}],Был кикнут за рекламу.`);
});


cmd.hear(/^(?:добавь в др|добавь в друзья|добавь|добавь в|Кто хочет в друзья Добавляйтесь|Кто хочет)/i,  (message) => { 
	message.user.floder += 1;
	if(!message.isChat) return;
		let chatid = message.chatId;
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.user.id});
			return message.send(`[id${message.user.id}|${message.user.tag}],Был кикнут за рекламу.`);
});

cmd.hear(/^(?:Сдохни|Чмо|Анал|Мать ебал|Умри|MQ|Гондон|хуйня бот|бот хуйня|нубо бот|херня бот|сдохните|уроды|Мать|лох|блять|бля|рот|хуй|даун|имбецил| даун|6ля|6лядь|6лять|b3ъeб|cock|cunt|e6aль|ebal|eblan|eбaл|eбaть|eбyч|eбать|eбёт|eблантий|fuck|fucker|fucking|xyёв|xyй|xyя|xуе,xуй|xую|zaeb|zaebal|zaebali|zaebat|архипиздрит|ахуел|ахуеть|бздение|бздеть|бздех|бздецы|бздит|бздицы|бздло|бзднуть|бздун|бздунья|бздюха|бздюшка|бздюшко|бля|блябу|блябуду|бляд|бляди|блядина|блядище|блядки|блядовать|блядство|блядун|блядуны|блядунья|блядь|блядюга|блять|вафел|вафлёр|взъебка|взьебка|взьебывать|въеб|въебался|въебенн|въебусь|въебывать|выблядок|выблядыш|выеб|выебать|выебен|выебнулся|выебон|выебываться|выпердеть|высраться|выссаться|вьебен|гавно|гавнюк|гавнючка|гамно|гандон|гнид|гнида|гниды|говенка|говенный|говешка|говназия|говнецо|говнище|говно|говноед|говнолинк|говночист|говнюк|говнюха|говнядина|говняк|говняный|говнять|гондон|доебываться|долбоеб|долбоёб|долбоящер|дрисня|дрист|дристануть|дристать|дристун|дристуха|дрочелло|дрочена|дрочила|дрочилка|дрочистый|дрочить|дрочка|дрочун|е6ал|е6ут|еб твою мать|ёб твою мать|ёбaн|ебaть|ебyч|ебал|ебало|ебальник|ебан|ебанамать|ебанат|ебаная|ёбаная|ебанический|ебанный|ебанныйврот|ебаное|ебануть|ебануться|ёбаную|ебаный|ебанько|ебарь|ебат|ёбат|ебатория|ебать|ебать-копать|ебаться|ебашить|ебёна|ебет|ебёт|ебец|ебик|ебин|ебись|ебическая|ебки|ебла|еблан|ебливый|еблище|ебло|еблыст|ебля|ёбн|ебнуть|ебнуться|ебня|ебошить|ебская|ебский|ебтвоюмать|ебун|ебут|ебуч|ебуче|ебучее|ебучий|ебучим|ебущ|ебырь|елда|елдак|елдачить|жопа|жопу|заговнять|задрачивать|задристать|задрота|зае6|заё6|заеб|заёб|заеба|заебал|заебанец|заебастая|заебастый|заебать|заебаться|заебашить|заебистое|заёбистое|заебистые|заёбистые|заебистый|заёбистый|заебись|заебошить|заебываться|залуп|залупа|залупаться|залупить|залупиться|замудохаться|запиздячить|засерать|засерун|засеря|засирать|засрун|захуячить|заябестая|злоеб|злоебучая|злоебучее|злоебучий|ибанамат|ибонех|изговнять|изговняться|изъебнуться|ипать|ипаться|ипаццо|Какдвапальцаобоссать|конча|курва|курвятник|лох|лошарa|лошара|лошары|лошок|лярва|малафья|манда|мандавошек|мандавошка|мандавошки|мандей|мандень|мандеть|мандища|мандой|манду|мандюк|минет|минетчик|минетчица|млять|мокрощелка|мокрощёлка|мразь|мудak|мудaк|мудаг|мудак|муде|мудель|мудеть|муди|мудил|мудила|мудистый|мудня|мудоеб|мудозвон|мудоклюй|на хер|на хуй|набздел|набздеть|наговнять|надристать|надрочить|наебать|наебет|наебнуть|наебнуться|наебывать|напиздел|напиздели|напиздело|напиздили|насрать|настопиздить|нахер|нахрен|нахуй|нахуйник|не ебет|не ебёт|невротебучий|невъебенно|нехира|нехрен|Нехуй|нехуйственно|ниибацо|ниипацца|ниипаццо|ниипет|никуя|нихера|нихуя|обдристаться|обосранец|обосрать|обосцать|обосцаться|обсирать|объебос|обьебать обьебос|однохуйственно|опездал|опизде|опизденивающе|остоебенить|остопиздеть|отмудохать|отпиздить|отпиздячить|отпороть|отъебись|охуевательский|охуевать|охуевающий|охуел|охуенно|охуеньчик|охуеть|охуительно|охуительный|охуяньчик|охуячивать|охуячить|очкун|падла|падонки|падонок|паскуда|педерас|педик|педрик|педрила|педрилло|педрило|педрилы|пездень|пездит|пездишь|пездо|пездят|пердануть|пердеж|пердение|пердеть|пердильник|перднуть|пёрднуть|пердун|пердунец|пердунина|пердунья|пердуха|пердь|переёбок|пернуть|пёрнуть|пи3д|пи3де|пи3ду|пиzдец|пидар|пидарaс|пидарас|пидарасы|пидары|пидор|пидорасы|пидорка|пидорок|пидоры|пидрас|пизда|пиздануть|пиздануться|пиздарваньчик|пиздато|пиздатое|пиздатый|пизденка|пизденыш|пиздёныш|пиздеть|пиздец|пиздит|пиздить|пиздиться|пиздишь|пиздища|пиздище|пиздобол|пиздоболы|пиздобратия|пиздоватая|пиздоватый|пиздолиз|пиздонутые|пиздорванец|пиздорванка|пиздострадатель|пизду|пиздуй|пиздун|пиздунья|пизды|пиздюга|пиздюк|пиздюлина|пиздюля|пиздят|пиздячить|писбшки|писька|писькострадатель|писюн|писюшка|по хуй|по хую|подговнять|подонки|подонок|подъебнуть|подъебнуться|поебать|поебень|поёбываает|поскуда|посрать|потаскуха|потаскушка|похер|похерил|похерила|похерили|похеру|похрен|похрену|похуй|похуист|похуистка|похую|придурок|приебаться|припиздень|припизднутый|припиздюлина|пробзделся|проблядь|проеб|проебанка|проебать|промандеть|промудеть|пропизделся|пропиздеть|пропиздячить|раздолбай|разхуячить|разъеб|разъеба|разъебай|разъебать|распиздай|распиздеться|распиздяй|распиздяйство|распроеть|сволота|сволочь|сговнять|секель|серун|серька|сестроеб|сикель|сила|сирать|сирывать|соси|спиздел|спиздеть|спиздил|спиздила|спиздили|спиздит|спиздить|срака|сраку|сраный|сранье|срать|срун|ссака|ссышь|стерва|страхопиздище|сука|суки|суходрочка|сучара|сучий|сучка|сучко|сучонок|сучье|сцание|сцать|сцука|сцуки|сцуконах|сцуль|сцыха|сцышь|съебаться|сыкун|трахае6|трахаеб|трахаёб|трахатель|ублюдок|уебать|уёбища|уебище|уёбище|уебищное|уёбищное|уебк|уебки|уёбки|уебок|уёбок|урюк|усраться|ушлепок|х_у_я_р_а|хyё|хyй|хyйня|хамло|хер|херня|херовато|херовина|херовый|хитровыебанный|хитрожопый|хуeм|хуе|хуё|хуевато|хуёвенький|хуевина|хуево|хуевый|хуёвый|хуек|хуёк|хуел|хуем|хуенч|хуеныш|хуенький|хуеплет|хуеплёт|хуепромышленник|хуерик|хуерыло|хуесос|хуесоска|хуета|хуетень|хуею|хуи|хуй|хуйком|хуйло|хуйня|хуйрик|хуище|хуля|хую|хуюл|хуя|хуяк|хуякать|хуякнуть|хуяра|хуясе|хуячить|целка|чмо|чмошник|чмырь|шалава|шалавой|шараёбиться|шлюха|шлюхой|шлюшка|ябывает|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|момо|momo|#|жопа|проебу|анально|не спит|никогда|сова|наркоторговец|наркота|наркотики|подкладка|подкладки|кокоин|кокаин|порно|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/i,  (message) => {  
	message.user.floder += 1;
	if(!message.isChat) return;
		let chatid = message.chatId;
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.user.id});
			return message.send(`[id${message.user.id}|${message.user.tag}],Был кикнут за неадекватное поведение.`);
});

cmd.hear(/^(?:обнова1)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
	for(i=0;i<20000;i++){ 
	if(users[i]){ 
	users[i].clanstop = 0;
	users[i].raziri = 0;
	} 
	} 
	return message.send(`готово!`);
});

cmd.hear(/^(?:обнова4)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
	for(i=0;i<20000;i++){ 
	if(users[i]){ 
	users[i].hunger = 100;
	users[i].healths = 100;
	} 
	} 
	return message.send(`готово!`);
});

cmd.hear(/^(?:обнова9)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
	for(i=0;i<20000;i++){ 
	if(users[i]){ 
	users[i].floder = 0;
	users[i].foolder = 0;
	} 
	} 
	return message.send(`готово!`);
});

cmd.hear(/^(?:Актив)/i, async (message) => {
	message.user.log = `${message.args[0]}`;
 	vk.api.messages.getConversationMembers({
 		peer_id: message.peerId,
 		fields: "online"
 	}).then(async function (response) {
 		let text = `Го Актив\n\n`;
 		await response.profiles.map(onl => {
 			if(onl.id < 1) return;
 			if(onl.online != 0) text += `*id${onl.id} (${onl.first_name} ${onl.last_name})\n`;
 		})
 		return message.send(text)
 	})
});

cmd.hear(/^(?:пасспорт проверка)/i, async (message) => {
	message.user.log = `${message.args[0]}`;
	await vk.api.messages.send({ user_id: 447012706, message: message.user.uid+' просит подтвердить пасспорт'});
	return message.send('Отправлено на проверку!');
});

cmd.hear(/^(?:обнова2)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
	for(i=0;i<20000;i++){ 
	if(users[i]){ 
	users[i].rating = 0;
	} 
	} 
	return message.send(`готово!`);
});

cmd.hear(/^(?:обнова3)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
	for(i=0;i<20000;i++){ 
	if(users[i]){ 
	users[i].clanscher = 0;
	} 
	} 
	return message.send(`готово!`);
});

cmd.hear(/^(?:отпиздить)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.lvllove += 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	return bot(`вы отпиздили  ${users[message.user.marriage.partner].tag}`);
	vk.api.messages.send({ peer_id: message.peerId, sticker_id: 7235
})
});

cmd.hear(/^(?:выебать)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.lvllove += 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	await bot(`вы выебали партнёра ${users[message.user.marriage.partner].tag}`);
	vk.api.messages.send({ user_id: user.id, message: `[18+]
▶ партнёр ${message.user.prefix} выебал вас!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	vk.api.messages.send({ peer_id: message.peerId, sticker_id: 13184
})
});

cmd.hear(/^(?:куни)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.lvllove += 1;
message.user.log = `${message.args[0]}`;
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	return bot(`вы сделали куни партнёру ${users[message.user.marriage.partner].tag}`);
	vk.api.messages.send({ peer_id: message.peerId, sticker_id: 13174
})
});

cmd.hear(/^(?:созвать всех)$/i, (message, bot) => { 

	vk.api.call("messages.getConversationMembers", {
		peer_id: 2000000000 + message.chatId, 
	}).then(function(res){
		let text = '';
		for(i in res.profiles){
		if(res.profiles[i]){
				text += `[id${res.profiles[i].id}|&#127770;] `
			}
		} 
		text += ' готово'
		return message.send(text)
    })
});

cmd.hear(/^(?:бсмс)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;  	
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);
	if(message.user.misc.phone == 0) return bot(`&#128373; Нет телефона!`);
    if(message.user.balance < 100) return bot("у вас нехватает денег");
	if(message.user.misc.phone < 1)	return;
	;

	vk.api.messages.send({ user_id: users[message.user.marriage.partner].id, message: `&#128421;смс вашего партнёра \n в ${new Date().getHours()}:${new Date().getMinutes()} \nсмс:	
	&#127917; ${message.args[1]}`  });
	message.user.balance -= 100;
	return bot(`смс отправлен за 100$.`)
});

cmd.hear(/^(?:отсосать)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.lvllove += 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	return bot(`вы отсосали у партнёра ${users[message.user.marriage.partner].tag}`);
});

cmd.hear(/^(?:обнять)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.lvllove += 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	return bot(`вы обняли ${users[message.user.marriage.partner].prefix}`);
	vk.api.messages.send({ peer_id: message.peerId, sticker_id: 8665
})
});

cmd.hear(/^(?:секс)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.lvllove += 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	return bot(`вы занились сексом с  ${users[message.user.marriage.partner].prefix}`);

	return bot({ attachment: utils.pick(["254486670_456239728"]) });
	vk.api.messages.send({ peer_id: message.peerId, sticker_id: 13184
})
});

cmd.hear(/^(?:поцеловать)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.lvllove += 1;
	message.user.log = `${message.args[0]}`;
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	return bot(`вы поцеловали ${users[message.user.marriage.partner].tag}`);
	vk.api.messages.send({ peer_id: message.peerId, sticker_id: 10103
})
});
function newFunction(message) {
	return pchats.find(x => x.id == message.chatId)
}


function time() {
let date = new Date();
let days = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
if (hours < 10) hours = "0" + hours;
if (minutes < 10) minutes = "0" + minutes;
if (seconds < 10) seconds = "0" + seconds;
var times = hours + ':' + minutes + ':' + seconds
return times;
};

function data() {
var date = new Date();
let days = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if (month < 10) month = "0" + month;
if (days < 10) days = "0" + days;
var datas = days + '.' + month + '.' + year
return datas;
};

cmd.hear(/^(?:restart)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
	await bot(`Перезагрузка бота, ожидайте!`);

	await saveUsers();
	process.exit(-1);
    vk.api.messages.send({ user_id: 447012706, message: `&#128100; [ПЕРЕЗАГРУЗКА] Бот будет перезагружен через минуту: ${message.user.uid}` }).then(() => {
	})
});

cmd.hear(/^(?:Пбан)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`) 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 
if(Number(message.args[1]) === message.user.uid) return bot(`вы не можете дать бан себе`);
if(message.args[1] == 0)return bot(`Ай! Ай! Ай! Банить создателей нельзя!`)
if(message.args[1] == 1)return bot(`Ай! Ай! Ай! Банить создателей нельзя!`)


user.settings.trade = false; 

saveUsers();
await bot(`👤 вы дали бан передачи игроку *id${user.id} (${user.tag}).
👤 по причине: ${message.args[2]}`,); 
vk.api.messages.send({ user_id: user.id, message: `
[БАН]
▶ Администратор, выдал вам бан передачи по причине: ${message.args[2]}!` }); 
}
});

cmd.hear(/^(?:празбан)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 8) return bot(`📛|Доступ запрещен`)
{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.settings.trade = true; 

saveUsers();
await bot(`вы разбанили передачу игроку *id${user.id} (${user.tag}).`); 
vk.api.messages.send({ user_id: user.id, message: `вас разбанили можите передовать


` }); 
}
});

cmd.hear(/^(?:Поиск)\s(\https\:\/\/vk\.com\/)?(id)?([0-9]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
	message.user.foolder += 1;
	if (message.args[4]) {
				var domain = message.args[4].split(" ");}

let user = users.find(x=> x.id === Number(message.args[3]));

			let text = ``;	
	
	text +=  `${user.uid}\n`;
	return bot(`Ид игрока\n${text}`);
});

cmd.hear(/^(?:админкейс)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;	
	if(message.user.settings.adm < 6) return bot(`📛|Доступ запрещен`)
	let prize = utils.pick([1, 2, 3, 4, 5]);

	if(prize === 1)
	{
		message.user.balance += 1000000000;
		return bot(`вы выиграли 1.000.000.000$`);
	}

	if(prize === 2)
	{
		message.user.btc += 1000000;
		return bot(`вы выиграли 1.000.000₿`);
	}

	if(prize === 3)
	{
		message.user.balance += 100000000000;
		return bot(`вы выиграли 100000000000$`)
	}

	if(prize === 4)
	{
		message.user.balance += 2500000000;
		return bot(`вы выиграли 2.500.000.000$`);
	}

	if(prize === 5)
	{
		message.user.sberbank.balance += 500000000;
		return bot(`вы выиграли 500.000.000$`);
	}
});

cmd.hear(/^(?:випкейс)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;	
	if(message.user.settings.adm < 2) return bot(`📛|Доступ запрещен`)
	let prize = utils.pick([1, 2, 3, 4, 5]);

	if(prize === 1)
	{
		message.user.balance += 1000000000;
		return bot(`вы выиграли 1.000.000.000$`);
	}

	if(prize === 2)
	{
		message.user.btc += 1000000;
		return bot(`вы выиграли 1.000.000₿`);
	}

	if(prize === 3)
	{
		message.user.balance += 100000000000;
		return bot(`вы выиграли 100000000000$`)
	}

	if(prize === 4)
	{
		message.user.balance += 2500000000;
		return bot(`вы выиграли 2.500.000.000$`);
	}

	if(prize === 5)
	{
		message.user.sberbank.balance += 500000000;
		return bot(`вы выиграли 500.000.000$`);
	}
});

cmd.hear(/^(?:ютубкейс)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;	
	if(message.user.settings.adm < 1) return bot(`📛|Доступ запрещен`)
	let prize = utils.pick([1, 2, 3, 4, 5]);

	if(prize === 1)
	{
		message.user.balance += 1000000000;
		return bot(`вы выиграли 1.000.000.000$`);
	}

	if(prize === 2)
	{
		message.user.btc += 1000000;
		return bot(`вы выиграли 1.000.000₿`);
	}

	if(prize === 3)
	{
		message.user.balance += 100000000000;
		return bot(`вы выиграли 100000000000$`)
	}

	if(prize === 4)
	{
		message.user.balance += 2500000000;
		return bot(`вы выиграли 2.500.000.000$`);
	}

	if(prize === 5)
	{
		message.user.sberbank.balance += 500000000;
		return bot(`вы выиграли 500.000.000$`);
	}
});

cmd.hear(/^(?:!)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	if(message.senderId !== 447012706| message.senderId !== 447012706)  return bot(` такой команды не существует, отправь «помощь» что бы узнать мои команды. 🎲`)

	try {
		const result = eval(message.args[1]);

		if(typeof(result) === 'string')
		{
			return bot(`string: ${result}`);
		} else if(typeof(result) === 'Готово')
		{
			return bot(`number: ${result}`);
		} else {
			return bot(`${typeof(result)}: ${JSON.stringify(result, null, '&#12288;\t')}`);
		}
	} catch (e) {
		console.error(e);
		return bot(`ошибка:
		${e.toString()}`);
	}
});

cmd.hear(/^(?:ювыдать подписчиков)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 1) return bot(`📛|Доступ запрещен`)
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.sub += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Ютубер выдал вам ${utils.sp(message.args[2])} Подпищиков! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:ювыдать просмотры)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 1) return bot(`📛|Доступ запрещен`)
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.sm += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Ютубер выдал вам ${utils.sp(message.args[2])} Просмотры! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:Выдать уважение)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 1) return bot(`📛|Доступ запрещен`)
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.upo += message.args[2]; 


await bot(`вы Выдали уважение игроку ${user.tag} ${utils.sp(message.args[2])}`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Донатер выдал вам ${utils.sp(message.args[2])} Уважение! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:Выдать уважение от рзб)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.upo2 += message.args[2]; 


await bot(`вы Выдали уважение игроку ${user.tag} ${utils.sp(message.args[2])}`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Разработчик выдал вам ${utils.sp(message.args[2])} Уважение! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:бутылочка)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1; 
	message.user.foolder += 1;
		if(!message.isChat) return bot(`команда работает только в беседе!`);
let { profiles } = await vk.api.messages.getConversationMembers({ 
peer_id: message.peerId 
}); 
let profile = utils.pick(profiles); 
let profile2 = utils.pick(profiles); 
message.send(`[🍷]: Бутылочка :[🍷]

[id${profile.id}|${profile.first_name}] и [id${profile2.id}|${profile2.first_name}] — ваше действие: ` + utils.pick(['Заняться сексом!', 'Поцеловаться', 'Сесть на бутылочку', 'Начать встречаться', '*Вы пропускаете ход*', 'Раздеться', 'Бухнуть', 'Пожениться'])); 
});

cmd.hear(/^(?:гиф)/i, async (message, bot) => {
	
	
	message.user.foolder += 1;
       vk.api.call('docs.search', {q: utils.pick(['ржака', 'игры', 'каваи', 'лайфхаки', 'тян', 'крафт', 'любовь', 'аниме', 'животные', '5 minute', 'пиздец', 'смешно', 'мем', 'классно', 'ня', 'пикча', 'авария']) + '.gif', count: 1})
        .then(response => {
            let items = response.items.map(x => `doc${x.owner_id}_${x.id}`).join(',');
            let item = utils.pick(response.items);
            message.send({attachment: items})
        })
});

cmd.hear(/^(?:погода|weather)\s(.*)$/i, async (message, bot) => {
	
request("http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(message.args[1]) + "&lang=ru&units=metric&appid=5d8820e4be0b3f1818880ef51406c9ee")
.then((res) => {
function timeofday() {
let now = new Date(res.dt*1000).getHours();
if(now > 18) return '🌆'
else if(now > 22) return '🌃'
else if(now > 0) return '🌃'
else if(now > 6) return '🌅'
else if(now > 12) return '🏞'
};
let sunrise = new Date(res.sys.sunrise*1000);
let sunset = new Date(res.sys.sunset*1000);
function fix(e) {
if(e < 10) return "0" + e;
return e;
};
var date = new Date(res.dt*1000);
return message.send(`${timeofday()} ${res.name}
${res["weather"][0]["description"] == "ясно" ? "☀":""} ${res["weather"][0]["description"].indexOf("облачно") != -1 ? "🌫":""} Погода: ${res["weather"][0]["description"]}
✳ Долгота: ${res.coord.lon}°
✴ Широта: ${res.coord.lat}°
🌡 Температура: ${res.main.temp} °С
🌇 Рассвет: ${sunrise.getHours()}:${fix(sunrise.getMinutes())} (Местное время)
🌃 Закат: ${sunset.getHours()}:${fix(sunset.getMinutes())} (Местное время)
💨 Скорость ветра: ${res.wind.speed} м/с
➡ Направление ветра: ${res.wind.deg} (метереологическое)
💧 Влажность: ${res.main.humidity}%
☁ Облачность: ${res.clouds.all}%
📊 Давление: ${Math.floor(res.main.pressure / 1.33333)} ммРт.Ст
`)}).catch((error) => { bot(`Город не найден ❌.\nПопробуйте ввести его английскими буквами.`);})
});

cmd.hear(/^(?:пара)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
			
	if(!message.isChat) return bot(`команда работает только в беседе!`);
let { profiles } = await vk.api.messages.getConversationMembers({ 
peer_id: message.peerId 
}); 
let profile = utils.pick(profiles); 
let profile2 = utils.pick(profiles);
    
message.send(`(ПАРА)

[id${profile.id}|${profile.first_name}]
[id${profile2.id}|${profile2.first_name}]
ИДИАЛЬНАЯ ПАРА `); 
});

cmd.hear(/^(?:любовь)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
			
	if(!message.isChat) return bot(`команда работает только в беседе!`);
let { profiles } = await vk.api.messages.getConversationMembers({ 
peer_id: message.peerId 
}); 
let profile = utils.pick(profiles); 
let profile2 = utils.pick(profiles);
    
message.send(`(ЛЮБОВЬ)

[id${profile.id}|${profile.first_name}] и [id${profile2.id}|${profile2.first_name}] я уверен что у них любовь `); 
});


const page = new VK({ token: '1b4f7303e06e5058ccba86a8c38fbe754864f4147606d2253907556580a0cdc93768328f5be8148a423ed' });
vk.updates.on(['new_wall_comment'], async (message, next, bot) => {
let user = users.find(a => a.id === message.payload.from_id);
let cash = utils.random(100000000);
user.balance += cash;
page.api.wall.createComment({
owner_id: -176472758,
post_id: message.payload.post_id,
reply_to_comment: message.payload.id,
from_group: 176472758,
message: `✅ Вы получили очень много денег (${utils.sp(cash)}$)\n 💰 Ваш баланс: ${utils.sp(user.balance)}`
})
});

cmd.hear(/^(?:раздача4)$/i, async (message, bot) => {
if(message.user.settings.adm < 5)return;
if(giving) return bot(`серьёзно? СЕРЬЁЗНО?! Создавать по 500 постов с раздачей я также не могу. Пойди посмотри канал "Тарелка"`);
giving = true;
user.api.wall.post({
owner_id: -176472758,
message: `
🔥 Новая раздача!
Просто поставь лайк, и получи 20.000.000$! 👑

🔍 Раздача будет окончена через 24 часа`
}).then((response) => {
user.api.wall.openComments({
owner_id: -176472758,
post_id: response.post_id
});
user.api.wall.createComment({
owner_id: -176472758,
post_id: response.post_id,
from_group: 176472758,
message: '* алмазы на будут выданы по окончанию акции, ваш профиль VK должен быть открыт, а то мы не увидим Ваш репост.'
});
user.api.wall.closeComments({
owner_id: -176472758,
post_id: response.post_id
});
setTimeout(() => {
user.api.call('wall.getList', { owner_id: -176472758, post_id: response.post_id, count: 1000 }).then((res) => {
res.items.map(x=> {
if(x.from_id < 0) return;
let user = users.find(a => a.id === x.from_id);
if(!user) return;
user.balance += 20000000;
vk.api.messages.send({ user_id: 447012706, message: `Я выдал игроку [id${user.id}|${user.tag}] 20.000.000 на баланс.\n\nНа данный момент, его баланс составляет:\n${user.balance}$`})
});
});
giving = false;
}, 84600000);
});
});




cmd.hear(/^(?:пострассылка)\s([^]+)$/i, async (message, bot) => {
	
    if(message.user.check) return bot(`подозрительная активность, пройдите капчу! Нажмите на кнопку или отправьте боту: "Капча ${message.user.captcha_token}"`, {
        attachment:'photo-176472758_457239560',
        keyboard:JSON.stringify({
            "inline": true,
            "buttons": [
                [
                    {
                        "action": {
                        "type": "text",
                        "payload": "{\"button\": \"1\"}",
                        "label": `✅ Я не робот!`
                        },
                        "color": "positive"
                    },
                ]
            ]
        })
    });
    message.user.captcha_sms += 1;
	
	message.user.foolder += 1;
	message.user.floder += 1;
	message.user.satasti -= 1;
	message.user.radosti -= 1;
	message.user.log = `${message.args[0]}`;
if(message.user.settings.adm< 8) return bot(`📛|Доступ запрещен`)
users.filter(x=> x.id !== 1).map(zz => { 
if(user.notifications) vk.api.messages.send({ user_id: zz.id, message: ``,  attachment: message.args[1], keyboard: JSON.stringify( 
					{ 
						"one_time": true, 
						"buttons": [ 
						[{ 
							"action": { 
								"type": "text", 
								"payload": "{\"button\": \"1\"}", 
								"label": `🔔 Рассылка выкл` 
							}, 
							"color": "negative"
						},
						{ 
							"action": { 
								"type": "text", 
								"payload": "{\"button\": \"2\"}", 
								"label": `📚 Помощь` 
							}, 
							"color": "positive"
						}] 
						] 
	})  
	}); 
}); 
let people = 0; 
for(let id in users) { 
vk.api.call('messages.send', { 
chat_id: id, 
message: `[👮]внимание бот не будет работать 5-10 минут пока идёт рассылка`, 
attachment: message.args[1] }); 
} 
return message.send(`💬 || Я успешно сделал рассылку!`); 

})

function displayTime(ticksInSecs) {
var ticks = ticksInSecs;
var hh = Math.floor(ticks / 3600);
var mm = Math.floor((ticks % 3600) / 60);
var ss = ticks % 60;

return( pad(hh, 2) + " ч. " + pad(mm, 2) + " мин. " + pad(ss, 2) + " сек. ");
}

function pad(n, width) {
var n = n + '';
return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}


function spaces(string) {
	if (typeof string !== "string") string = string.toString();
	return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
};
function spaces(string) {
		if (typeof string !== "string") string = string.toString();
		return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
};

		 //------------------------------------------------------------------------------------\\
 	var uptime = { sec: 0, min: 0, hours: 0, days: 0 }
 //------------------------------------------------------------------------------------\\
 
	setInterval(() => {
		uptime.sec++;
		if (uptime.sec == 60) { uptime.sec = 0; uptime.min += 1; }
		if (uptime.min == 60) { uptime.min = 0; uptime.hours += 1; }
		if (uptime.hours == 24) { uptime.hours = 0; uptime.days += 1; }
	}, 1000);
	
  //------------------------------------------------------------------------------------\\ 
  var parserInt = (str) => parseInt(str.replace(/k|к/ig, "000"));