export interface ISpecialist {
    profSpeciality: number;
    isCertified: boolean;
    userId: string;
    name: string;
    rating: number;
    onlineStatus: number;
    lastActivityTime: string;
    photoUrl: string;
    defaultSubjectName: string;
    sex: number;
    birthDate: string;
    age: number;
    subjectsCount: number;
    isFavorite: boolean;
    hasVideo: boolean;
}

export interface GetSpecialistsData {
    items: ISpecialist[],
    totalCount: number
}