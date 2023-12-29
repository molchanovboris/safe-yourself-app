import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import styles from "./CardItem.module.scss";
export const CardItem = () => {
    return (
        <Card className={styles.cardItem}>
            <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Катерина, 45
                </Typography>
                <Box>
                    <Typography variant="body2" color="text.secondary">
                        #тема
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        и еще 4 темы
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}