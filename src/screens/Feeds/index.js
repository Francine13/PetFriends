import React from "react";

import { FlatList, View } from "react-native";

import FeedCard from "../../components/FeedCard";
import feedsEstaticos from "../../assests/dicionarios/feeds.json";

// import { useNavigation, useRoute } from '@react-navigation/native';

const FEEDS_POR_PAGINA = 4;

export default class Feeds extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            proximaPagina: 0,
            feeds: [],

            atualizando: false,
            carregando: false
        }
    }

    carregarFeeds = () => {
        const { proximaPagina, feeds, carregarFeeds } = this.state;

        this.setState({
            carregando: true
        })

        const idInicial = proximaPagina * FEEDS_POR_PAGINA + 1;
        const idFinal = idInicial + FEEDS_POR_PAGINA - 1;
        const maisFeeds = feedsEstaticos.feeds.filter((feed) => feed._id >= idInicial && feed._id <= idFinal)

        if (maisFeeds.length) {
            console.log("adicionando " + maisFeeds.length + " feeds");

            this.setState({
                proximaPagina: proximaPagina + 1,
                feeds: [...feeds, ...maisFeeds],

                atualizando: false,
                carregando: false
            });
        } else {
            this.setState({
                atualizando: false,
                carregando: false
            })
        }
    }

    componentDidMount = () => {
        this.carregarMaisFeeds();
    }

    carregarMaisFeeds = () => {
        const { carregando } = this.state;

        if (carregando) {
            return;
        }
        this.carregarFeeds();
    }

    atualizar = () => {
        this.setState({ atualizando: true, feeds: [], proximaPagina: 0 },
            () => {
                this.carregarFeeds();
            });
    }

    mostrarFeed = (feed) => {
        return (
            <FeedCard feed={feed} navegador={this.props.navigation} />
        );
    }

    mostrarFeeds = (feeds) => {
        const { atualizando } = this.state;

        return (
            <FlatList data={feeds}
                numColumns={2}

                onEndReached={() => this.carregarMaisFeeds()}
                onEndReachedThreshold={0.1}

                onRefresh={() => this.atualizar()}
                refreshing={atualizando}

                keyExtractor={(item) => String(item._id)}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: "100%" }}>
                            {this.mostrarFeed(item)}
                        </View>
                    )
                }}
            >
            </FlatList>
        )
    }

    render = () => {
        const { feeds } = this.state

        if (feeds.length) {
            console.log("exibindo " + feeds.length + " feeds")

            return (
                this.mostrarFeeds(feeds)
            )
        }
    }
}