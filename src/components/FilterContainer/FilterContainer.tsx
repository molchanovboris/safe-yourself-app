import { CERTIFICATE, RAITING, SEX } from "../../libs/FilterParams/FilterParamsSex";
import { GetCategoriesData } from "../../libs/store/models/getCategory.dto";
import { ActionButton } from "../ActionButton";
// import { ActionButton } from "../ActionButton";
import { FilterItem } from "../FilterItem";
import styles from './FilrerContainer.module.scss';
import { FC } from 'react';

interface FilterContainerProps {
    categories?: GetCategoriesData[];
}

export const FilterContainer: FC<FilterContainerProps> = (props): JSX.Element => {
    const { categories } = props;

    return (
        <div className={styles.filterContainer}>
            <FilterItem 
                title="Я ищу психолога" 
                items={SEX} />
            {categories && (
                <FilterItem title="Тема" items={categories} />
            )}
            <FilterItem title="Квалификация" items={CERTIFICATE} />
            <FilterItem title="Рейтинг" items={RAITING} />
            <div className={styles.filterContainerButton}>
                <ActionButton text="Показать анкеты" onClick={() => console.log('first')} />
            </div>
        </div>
    )
}