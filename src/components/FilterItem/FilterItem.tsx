import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@mui/material';
import { FC } from 'react';
import styles from "./FilterItem.module.scss";

type TItem = {
    id: number;
    name: string | number;
    sequence?: number;
}

interface FilterItemProps {
    title: string;
    items: TItem[];
}

export const FilterItem: FC<FilterItemProps> = (props): JSX.Element => {
    const { title, items } = props
    const [age, setAge] = React.useState('');
    console.log('items', items)
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
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
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    // onChange={handleChange}
                >
                    {items.map((item) => (
                        <MenuItem key={item.id} value={item.name}>{checkType(item.name)}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}