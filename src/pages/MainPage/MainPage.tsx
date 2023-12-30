import { ActionButton, CardItem, FilterContainer } from '../../components';
import { useGetSpecialistsQuery } from '../../libs/store/services/safeYourselfApi';
import styles from "./MainPage.module.scss";
import emptyListIcon from "../../assets/empty_list_icon.svg";
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setAllUsers } from '../../store/specialistSlice';

export const MainPage = () => {
    const [offset, setOffset] = useState<number>(12);
    const dispatch = useAppDispatch();
    const specialistsData = useAppSelector((state) => state.specialists.data);

    const limit = 12;

    const handleMoreButton = () => {
        setOffset((prev) => prev + limit);
    }
    const params = {
        limit,
        offset,
    };

    const {
        data: specialists,
        isLoading: isLoadingSpecialistData,
        isError: isErrorSpecialistData
    } = useGetSpecialistsQuery(params);

    useEffect(() => {
        if (specialists) {
            dispatch(setAllUsers(specialists))
        }
    }, [dispatch, specialists]);

    const specialistList = specialistsData;

    if (isLoadingSpecialistData) return (<h1>Loading....</h1>)
    if (isErrorSpecialistData) return (<h1>Error loading data!!!</h1>)

    return (
        <div className={styles.mainPageContainer}>
            <FilterContainer />
            {specialistList && specialistList.length > 0 ? (
                <div className={styles.specialistListContainer}>
                    <div className={styles.cardList}>
                        {specialistList.map((item) => (
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