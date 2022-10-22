// import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import pet from "../../assests/imgs/auau.jpeg";

import { getFeed } from "../../api";

export default class Detalhes extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            feedId: this.props.navigation.state.params.feedId,
            feed: null
        };
    }

    carregarFeed = () => {
        const { feedId } = this.state;
        console.log("recuperando o feed: " + feedId);

        getFeed(feedId).then((umFeed) => {
            this.setState({
                feed: umFeed
            });
        }).catch((erro) => {
            console.error("ocorreu um erro recuperando o feed:", erro);
        });

    }

    componentDidMount = () => {
        this.carregarFeed();
    }

    render = () => {
        const { feed } = this.state;

        // console.log(feed);

        if (feed) {
            return (
                <>
                    <View style={Styles.container}>
                        <Image style={Styles.image} source={pet} />
                        <View>
                            <Text style={Styles.name}>{feed.company.name}</Text>
                            <Text style={Styles.description}>{feed.pet.description}</Text>
                        </View>
                    </View>
                </>
            );
        } else {
            return (null);
        }

    }
}
const Styles = StyleSheet.create({
    container: { flex: 1 },
    image: {
        width: '100%',
        height: 250
    },
    name: {
        fontSize: 24,
        color: '#000',
        fontWeight: "400",
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    description: {
        fontSize: 16,
        textAlign: 'center'
    }
})
