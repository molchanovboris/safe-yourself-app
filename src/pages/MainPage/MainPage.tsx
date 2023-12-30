import { CardItem, FilterContainer } from '../../components';
import { useGetSpecialistsQuery } from '../../libs/store/services/safeYourselfApi';
import styles from "./MainPage.module.scss";
import emptyListIcon from "../../assets/empty_list_icon.svg";

export const MainPage = () => {
    const params = {
        limit: 12,
        offset: 0,
    }
    const {
        data: specialistData,
        isLoading: isLoadingSpecialistData,
        isError: isErrorSpecialistData
    } = useGetSpecialistsQuery(params);

    const specialistList = specialistData?.items;

    if (isLoadingSpecialistData) return (<h1>Loading....</h1>)
    if (isErrorSpecialistData) return (<h1>Error loading data!!!</h1>)

    return (
        <div className={styles.mainPageContainer}>
            <FilterContainer />
            {specialistList && specialistList.length > 0 ? (
                <div className={styles.cardList}>
                    {specialistList.map((item) => (
                        <div key={item.userId}>
                            <CardItem specialist={item} />
                        </div>
                    ))}
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