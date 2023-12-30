export const LEVELS = [
    {
        id: 0,
        name: "Базовый"
    },
    {
        id: 1,
        name: "Премиум"
    }
];

export type TFilterItem = {
    id: number;
    name: string | number
}

export const SEX: TFilterItem[] = [
    {
        id: 1,
        name: "М"
    },
    {
        id: 2,
        name: "Ж"
    }
];

export const CERTIFICATE: TFilterItem[] = [
    {
        id: 1,
        name: "Есть"
    },
    {
        id: 2,
        name: "Нет диплома психолога"
    }
]

export const RAITING: TFilterItem[] = [
    {
        id: 1,
        name: 0,
    },
    {
        id: 2,
        name: 10
    },
    {
        id: 3,
        name: 20
    }, {
        id: 4,
        name: 30
    }, {
        id: 5,
        name: 40
    }, {
        id: 6,
        name: 50
    }, {
        id: 7,
        name: 60
    }, {
        id: 8,
        name: 70
    }, {
        id: 9,
        name: 80
    }, {
        id: 10,
        name: 90
    }, {
        id: 11,
        name: 100
    },
]

export const PROFESSIONAL_SPECIALITIES = [
    {
        id: 1,
        name: "Консультант"
    },
    {
        id: 2,
        name: "Сексолог"
    },
    {
        id: 3,
        name: "Коуч"
    }
];

export const FILTER_TYPES = [
    {
        id: 0,
        name: "Все"
    },
    {
        id: 1,
        name: "Онлайн"
    },
    {
        id: 2,
        name: "Избранные"
    }
];
