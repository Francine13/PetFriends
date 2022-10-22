import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Card, CardImage, CardContent } from 'react-native-cards';
import Icon from "react-native-vector-icons/AntDesign";

// import { useNavigation, useRoute } from '@react-navigation/native';

import {
    Avatar, NomeEmpresa, NomeProduto, DescricaoProduto, PrecoProduto, Likes
} from '../../assests/styles.js';
import pet from '../../assests/imgs/auau.jpeg';


export default class FeedCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            feed: this.props.feed,
            navegador: this.props.navegador
        }
    }

    render = () => {
        const { feed, navegador } = this.state;

        return (
            <TouchableOpacity onPress={
                () => {
                    navegador.navigate("Detalhes", { feedId: feed._id })
                }
            }>
                <Card>
                    <CardImage source={pet} />
                    <CardContent>
                        <NomeEmpresa>{feed.company.name}</NomeEmpresa>
                    </CardContent>
                    <CardContent>
                        <NomeProduto>{feed.pet.name}</NomeProduto>
                    </CardContent>
                    <CardContent>
                        <DescricaoProduto>{feed.pet.description}</DescricaoProduto>
                    </CardContent>
                </Card>
            </TouchableOpacity>
        );
    }
}