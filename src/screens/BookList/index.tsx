import { ListRenderItem, FlatList, Button } from "react-native"
import React, { useCallback } from "react"
import styled, { useTheme } from 'styled-components/native';
import { useTranslation } from 'react-i18next';

import { Book } from "~/api/types";
import BookCard from "~/components/BookCard";
import { useBooks } from "~/hooks/useBooks";
import { useNavigation } from '@react-navigation/native';
import AppScreens from "~/navigation/AppNavigation/AppScreens";
import { OnAppScreenNavigationProps } from "~/navigation/types";
import Wrapper from "~/components/Wrapper";
import { SafeAreaView } from "react-native-safe-area-context";
import StyledText from "~/components/Text";


const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;


const Container = styled(Wrapper)`
align-items:center;
flex:1;
`;


const BookFlatList = styled(FlatList as new () => FlatList<Book>)`
flex: 1;
padding: 20px;
padding-bottom: ${({ theme }) => theme.space.xxl};
background-color: ${({ theme }) => theme.colors.background};

`;



export default function BookList() {

    const navigation = useNavigation<OnAppScreenNavigationProps>();
    const { t } = useTranslation('common');
    const theme = useTheme();

    const { books } = useBooks()


    const handleOnBookPress = useCallback((bookId: string) => {
        navigation.navigate({
            name: AppScreens.BOOK_SCREEN,
            params: {
                bookId: bookId
            },
        });
    }, [navigation]);



    const renderBookItem: ListRenderItem<Book> = ({ item }: { item: Book, index: number }) => {
        return (
            <BookCard
                title={item.title}
                imageUrl={item.image}
                bookId={item.id}
                onPress={handleOnBookPress}
            />
        )
    };
    return (
        <StyledSafeAreaView testID="screen.BookListScreen">
            <Container >
                <StyledText h3 title={`${t('common:General.welcome')}`} textColor={theme.colors.text} />

                <BookFlatList
                    data={books}
                    numColumns={2}
                    initialNumToRender={6}
                    maxToRenderPerBatch={10}
                    renderItem={renderBookItem}
                    keyExtractor={(item: Book) => item.id}

                />
            </Container>
        </StyledSafeAreaView>
    )

}

