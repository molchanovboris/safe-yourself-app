import { ActionButton } from "../ActionButton";
import { FilterItem } from "../FilterItem";
import styles from './FilrerContainer.module.scss'

export const FilterContainer = () => {
    return (
        <div className={styles.filterContainer}>
            <FilterItem />
            <FilterItem />
            <FilterItem />
            <FilterItem />
            <ActionButton text="Показать анкеты" />
        </div>
    )
}