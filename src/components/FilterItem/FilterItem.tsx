import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';
import { FC } from 'react';
import styles from "./FilterItem.module.scss";
import { Control, Controller } from "react-hook-form";
import { TFilterParams } from '../../libs/FilterParams/FilterParamsSex';

interface FilterItemProps {
    title: string;
    defaultValue?: number | undefined;
    control: Control<TFilterParams, any>;
    children: any;
    name: "subjectId" | "isCertified" | "sex" | "rating";
}

export const FilterItem: FC<FilterItemProps> = (props): JSX.Element => {
    const {
        title,
        defaultValue,
        control,
        children,
        name
    } = props;


    const checkType = (item: string | number) => {
        if (typeof item === "number") {
            return `до ${item}`
        } else {
            return item
        }
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <p className={styles.filterTitle}>{title}</p>
            <FormControl fullWidth>
                <Controller
                    render={({ field }) => (
                        <Select labelId={title} label={title} {...field}>
                            {children}
                        </Select>
                    )}
                    name={name}
                    control={control}
                    defaultValue={defaultValue}
                />
                {/* <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={defaultValue}
                >
                    {items.map((item) => (
                        <MenuItem key={item.id} value={item.id}>{checkType(item.name)}</MenuItem>
                    ))}
                </Select> */}
            </FormControl>
        </Box>
    )
}