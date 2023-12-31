import { ActionButton, CardItem, FilterContainer } from '../../components';
import { useGetCategoriesQuery, useGetSpecialistsQuery } from '../../libs/store/services/safeYourselfApi';
import styles from "./MainPage.module.scss";
import emptyListIcon from "../../assets/empty_list_icon.svg";
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setAllUsers, setUsersByFilter } from '../../store/specialistSlice';
import { useForm } from 'react-hook-form';
import { TFilterParams } from '../../libs/FilterParams/FilterParamsSex';
import { GetSpecialistsParams } from '../../libs/store/models/getSpecialistsParams.dto';


export const MainPage = () => {
    const [offset, setOffset] = useState<number>(0);
    const dispatch = useAppDispatch();
    const specialistsData = useAppSelector((state) => state.specialists.data);
    const { handleSubmit, control, setValue } = useForm<TFilterParams>();
    const limit = 12;

    const defaultParams: GetSpecialistsParams = {
        limit,
        offset,
    };
    const [queryParams, setQueryParams] = useState<GetSpecialistsParams>(defaultParams)

    const saveData = (form_data: TFilterParams) => {
        setValue("sex", form_data.sex);
        setValue("subjectId", form_data.subjectId);
        setValue("isCertified", form_data.isCertified);
        setValue("rating", form_data.rating);
        setQueryParams(prev => ({
            ...prev,
            "sex": form_data.sex,
            "subjectId": form_data.subjectId,
            "ratingFrom": form_data.rating - 10 || 0,
            "ratingTo": form_data.rating || 100,
            "isCertified": true
        }));
        if (specialists) {
            dispatch(setUsersByFilter(specialists))
        }
    };


    const handleMoreButton = () => {
        setOffset((prev) => prev + limit);
    }
    
    const {
        data: specialists,
        isLoading: isLoadingSpecialistData,
        isError: isErrorSpecialistData
    } = useGetSpecialistsQuery(queryParams);

    const {
        data: categories,
        isLoading: isLoadingCategories,
        isError: isErrorCategories
    } = useGetCategoriesQuery();

    useEffect(() => {
        if (specialists) {
            dispatch(setAllUsers(specialists))
        }
    }, [dispatch, specialists]);

    if (isLoadingSpecialistData || isLoadingCategories) return (<h1>Loading....</h1>);
    if (isErrorSpecialistData || isErrorCategories) return (<h1>Error loading data!!!</h1>);

    return (
        <div className={styles.mainPageContainer}>
            <FilterContainer
                categories={categories}
                handleSubmit={handleSubmit}
                control={control}
                saveData={saveData}
            />
            {specialistsData && specialistsData.length > 0 ? (
                <div className={styles.specialistListContainer}>
                    <div className={styles.cardList}>
                        {specialistsData.map((item) => (
                            <div key={item.userId}>
                                <CardItem specialist={item} />
                            </div>
                        ))}
                    </div>
                    <ActionButton text="Показать еще" onClick={handleMoreButton} />
                </div>
            ) : (
                <div className={styles.message}>
                    <img src={emptyListIcon} alt='empty-list-icon' />
                    <p>К сожалению, нет анкет с такими параметрами </p>
                </div>
            )}
        </div>
    )
}