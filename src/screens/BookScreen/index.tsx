import React from "react"
import { useSelector } from "react-redux";
import styled, { useTheme } from 'styled-components/native';
import { SafeAreaView } from "react-native-safe-area-context";
import FastImage from 'react-native-fast-image'

import { booksSelectors } from "~/redux/questions/books";
import { authorsSelectors } from "~/redux/authors/authors";
import AppScreens, { AppScreenProps } from "~/navigation/AppNavigation/AppScreens";
import StyledText from "~/components/Text";
import { useTranslation } from 'react-i18next';


type ActivityDetailScreenProps = AppScreenProps<AppScreens.BOOK_SCREEN>;

const Container = styled(SafeAreaView)`
background-color: ${({ theme }) => theme.colors.background};
`;
const StyledScrollContainer = styled.ScrollView.attrs(({ theme }) => ({
    contentContainerStyle: {
        justifyContent: 'space-around',
        flexGrow: 1,
        paddingVertical: theme.spaceNumbers.l,
    },
}))`
    background-color: ${({ theme }) => theme.colors.background};
  `;

const StyledImage = styled(FastImage)` 
        flex:1;
        height: 300px;
        width: 200px;
        align-self:center;
     `;

const ImageContainer = styled.View`
     align-items: center;
     justify-content: center;
     margin-bottom: ${({ theme }) => theme.space.xl};
     background-color: ${({ theme }) => theme.colors.background};
     flex:1;
   `;

const TitleContainer = styled.View`
     align-items: flex-start;
     justify-content: center;
     background-color: ${({ theme }) => theme.colors.background};
     padding: ${(props) => props.theme.space.s};

   `;

const SummaryContainer = styled.View`
     justify-content: center;
     padding: ${(props) => props.theme.space.s};
     `;

const BookScreen = ({
    route,
    navigation,
}: ActivityDetailScreenProps) => {
    const { t } = useTranslation('common');
    const { bookId } = route.params || {};
    const book = useSelector(booksSelectors.selectBookById(bookId));
    const author = useSelector(authorsSelectors.selectAuthorById(book?.authorId || ''));
    const theme = useTheme();

    return (
        <Container testID={`screen.Book`}>
            <StyledScrollContainer>
                <ImageContainer >
                    <StyledImage source={book?.image} resizeMode={FastImage.resizeMode.contain} />
                </ImageContainer>
                <TitleContainer>
                    <StyledText title={`${book?.title} ${t('common:General.by')} ${author?.name}`}
                       bold textColor={theme.colors.primary}
                        h5 />
                </TitleContainer>
                <SummaryContainer>
                    <StyledText title={book?.summary} p textColor={theme.colors.text} />
                </SummaryContainer>
            </StyledScrollContainer>

        </Container >
    )

}


export default BookScreen;