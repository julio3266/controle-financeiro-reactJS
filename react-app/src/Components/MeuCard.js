import React from 'react';
import { Card,  CardContent, Typography} from '@material-ui/core';

export default function MeuCard(props){
    return(
        <Card>
          
            <CardContent>
                R$ {props.valor}
            </CardContent>
        </Card>
    )
}