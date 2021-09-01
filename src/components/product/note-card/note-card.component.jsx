import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
// import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/Card';
import { IconButton, Typography } from '@material-ui/core';

const NoteCard = ({title, note, handleDeletNote, productId}) => {
    return(
        <Card elevation={1}>
            <CardHeader
                action={
                    <IconButton onClick={() => handleDeletNote(productId)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={title}
                subheader={note}
            />
            <CardContent>
                <Typography variant='body2' color='textSecondary'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, molestiae.
                </Typography>
            </CardContent>
        </Card>
    )   
}

export default NoteCard;