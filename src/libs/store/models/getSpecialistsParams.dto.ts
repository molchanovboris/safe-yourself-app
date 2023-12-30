export interface GetSpecialistsParams {
    level?: number;
    sex?: number;
    subjectId?: number;
    profSpeciality?: number;
    isCertified?: boolean;
    ratingFrom?: number;
    ratingTo?: number;
    ageFrom?: number;
    ageTo?: number;
    filterType?: number;
    limit: number;
    offset: number;
    [key: string]: number | boolean | undefined;
}