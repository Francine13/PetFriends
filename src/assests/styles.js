import styled from "styled-components/native";

export const Avatar = styled.Image`
    padding: 4px;
    width: 36px;
    height: 36px;
    border-radius: 18px; 
`;

export const NomeEmpresa = styled.Text`
    padding: 8px;
    font-size: 16;
    color: #59594a;
`;

export const NomeProduto = styled.Text`
    font-size: 16;
    font-weight: bold;
    color: #59594a;
`;

export const DescricaoProduto = styled.Text.attrs({
    numberOfLines: 2,
    ellipsizeMode: "tail",
})`
    font-size: 14;
    font-weight: bold;
    color: #59594a;
`;

export const PrecoProduto = styled.Text`
    font-size: 14;
    font-weight: bold;
    color: #59594a;
`;

export const Likes = styled.Text`
    font-size: 14;
    color: #59594a;
`;

export const CentralizadoNaMesmaLinha = styled.View`
    flexDirection: row;
    justify-content: center;
    align-items: center;
`;

export const imagem = styled.Image`
        width: '100%',
        marginTop: 5
`;