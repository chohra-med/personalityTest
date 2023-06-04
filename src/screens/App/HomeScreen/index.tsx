import React, { useEffect } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/native'
import { questionsActions } from '~/redux/questions/questions'
import useActions from '~/hooks/useActions'
import { useSelector } from 'react-redux'

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${({ theme }) => theme.space.xxl};
  align-items:center;
`
function HomeScreen() {
    const { t } = useTranslation('common')

    const [loadAllQuestions] = useActions([questionsActions.loadAllQuestions])
    useEffect(() => {
        loadAllQuestions()
    }, [loadAllQuestions])

    return (
        <StyledSafeAreaView testID="screen.HomeScreen">
            <Text>{t('common:General.welcome')}</Text>
            <Text>This the Home Screen</Text>
        </StyledSafeAreaView>
    )
}
export default HomeScreen
