import { Button } from "@mui/material";
import { FC } from "react";
import styles from './ActionButton.module.scss';

interface ActionButtonProps {
    text: string;
    onClick: any;
}

export const ActionButton: FC<ActionButtonProps> = (props): JSX.Element => {
    const { text, onClick } = props;

    return (
        <Button
            className={styles.actionButton}
            variant="contained"
            onClick={onClick}
        >
            {text}
        </Button>
    )
}