import { Button } from "@mui/material";
import { FC } from "react";
import styles from './ActionButton.module.scss';

interface ActionButtonProps {
    text: string;
}

export const ActionButton: FC<ActionButtonProps> = (props): JSX.Element => {
    const { text } = props;

    return (
        <Button className={styles.actionButton} variant="contained">{text}</Button>
    )
}