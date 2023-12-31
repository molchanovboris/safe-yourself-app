import { MenuItem } from "@mui/material";
import { CERTIFICATE, RAITING, SEX, TFilterParams } from "../../libs/FilterParams/FilterParamsSex";
import { GetCategoriesData } from "../../libs/store/models/getCategory.dto";
import { ActionButton } from "../ActionButton";
import { FilterItem } from "../FilterItem";
import styles from './FilrerContainer.module.scss';
import { FC } from 'react';
import { Control, UseFormHandleSubmit } from "react-hook-form"


interface FilterContainerProps {
    categories?: GetCategoriesData[];
    handleSubmit: UseFormHandleSubmit<TFilterParams, undefined>;
    control: Control<TFilterParams, any>;
    saveData: (form_data: TFilterParams) => void
}

export const FilterContainer: FC<FilterContainerProps> = (props): JSX.Element => {
    const {
        categories,
        handleSubmit,
        control,
        saveData
    } = props;

    return (
        <div className={styles.filterContainer}>
            <FilterItem
                title="Я ищу психолога"
                control={control}
                defaultValue={SEX[0].id}
                name="sex"
            >
                {SEX.map((item) => (
                    <MenuItem key={`sex${item.id}`} value={item.id}>{item.name}</MenuItem>
                ))}
            </FilterItem>
            {categories && (
                <FilterItem
                    control={control}
                    name="subjectId" title="Тема" >
                    {categories.map((item) => (
                        <MenuItem key={`subjectId${item.id}`} value={item.id}>{item.name}</MenuItem>
                    ))}
                </FilterItem>
            )}
            <FilterItem
                control={control}
                name="isCertified"
                title="Квалификация"
                defaultValue={CERTIFICATE[0].id}
            >
                {CERTIFICATE.map((item) => (
                    <MenuItem key={`isCertified${item.id}`} value={item.id}>{item.name}</MenuItem>
                ))}
            </FilterItem>
            <FilterItem
                control={control}
                name="rating"
                title="Рейтинг"
            >
                {RAITING.map((item) => (
                    <MenuItem key={`rating${item.id}`} value={item.name}>{item.name}</MenuItem>
                ))}
            </FilterItem>
            <div className={styles.filterContainerButton}>
                <ActionButton text="Показать анкеты" onClick={handleSubmit(saveData)} />
            </div>
        </div>
    )
}