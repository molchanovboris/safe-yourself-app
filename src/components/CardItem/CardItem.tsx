import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import styles from "./CardItem.module.scss";
import { ISpecialist } from '../../libs/store/models/getSpecialistList.dto';
import { FC } from 'react';
import classNames from "classnames";
import onlineIcon from "../../assets/online-icon.svg";
import avatarMale from "../../assets/avatar_male.svg";
import avatarFemale from "../../assets/avatar_female.svg";


interface CarditemProps {
    specialist: ISpecialist
}

export const CardItem: FC<CarditemProps> = (props): JSX.Element => {
    const { specialist } = props;

    const genderText = specialist.sex === 1 ? "Был" : "Была";

    const genderImage = specialist.sex === 1 ? avatarMale : avatarFemale;


    return (
        <Card className={styles.cardItem}>
            <Box className={styles.cardRating}>
                <span className={styles.cardRatingTitle}>рейтинг</span>
                <span className={classNames(styles.cardRatingInfo, specialist.rating === 0 && styles.newSpecialist)}>
                    {specialist.rating > 0 ? specialist.rating : "NEW"}
                </span>
            </Box>
            <CardMedia
                className={styles.cardImage}
                component="img"
                height="194"
                image={specialist.photoUrl ? specialist.photoUrl : genderImage}
                alt="Paella dish"
            />
            <CardContent className={styles.cardTextContainer}>
                <Typography className={styles.cardTitle} gutterBottom variant="h5" component="div">
                    {specialist.name}, {specialist.age}
                    {specialist.onlineStatus === 1 && (
                        <img className={styles.cardOnline} src={onlineIcon} alt='online' />
                    )}
                </Typography>
                <Box className={styles.cardSubjects}>
                    <Typography variant="body2" color="text.secondary">
                        {specialist.defaultSubjectName}&nbsp;
                    </Typography>
                    {specialist.subjectsCount > 0 && (
                        <Typography className={styles.cardSubjectCounts} variant="body2" color="text.secondary">
                            и еще {specialist.subjectsCount} темы
                        </Typography>
                    )}
                </Box>
                {specialist.onlineStatus === 1 && (
                    <Typography className={styles.cardOnlineInfo} variant="body2" color="text.secondary">
                        {genderText} часа назад
                    </Typography>
                )}
            </CardContent>
        </Card>
    )
}