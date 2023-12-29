import { CardItem, FilterContainer } from '../../components';
import styles from "./MainPage.module.scss";

export const MainPage = () => {
    return (
        <div className={styles.mainPageContainer}>
            <FilterContainer />
            <div className={styles.cardList}>
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        </div>
    )
}