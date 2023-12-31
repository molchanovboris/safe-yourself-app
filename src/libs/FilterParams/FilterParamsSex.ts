export type TFilterItem = {
    id: number;
    name: string | number;
}

export type TFilterParams = {
    subjectId?: number;
    isCertified?: number;
    sex: number;
    rating: number;
}

export type TQueryParams = {
    sex?: "0" | "1" | "2",
    limit: number
    offset: number;
}

export const SEX: TFilterItem[] = [
    {
        id: 0,
        name: "Любой"
    },
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


