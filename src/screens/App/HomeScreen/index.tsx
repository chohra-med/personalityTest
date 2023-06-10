import React, { useCallback, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/native'
import { questionsActions } from '~/redux/questions/questions'
import useActions from '~/hooks/useActions'
import Button from '~/components/Button'
import { SectionTitle } from '~/components/Text'
import { useNavigation } from '@react-navigation/native'
import { OnAppScreenNavigationProps } from '~/navigation/types'
import AppScreens from '~/navigation/AppNavigation/AppScreens'

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${({ theme }) => theme.space.xxxxxl};
  align-items:center;
  justify-content:center;
`

const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => theme.space.xxxxxl};
  align-items:center;
`
function HomeScreen() {
    const { t } = useTranslation('common')
    const navigation = useNavigation<OnAppScreenNavigationProps>()

    const [loadAllQuestions] = useActions([questionsActions.loadAllQuestions])

    useEffect(() => {
        loadAllQuestions()
    }, [loadAllQuestions])

    const handleStartTest = useCallback(() => {
        navigation.navigate(AppScreens.PERSONALITY_TEST_SCREEN)
    }, [navigation])

    return (
        <StyledSafeAreaView testID="screen.HomeScreen">
            <SectionTitle>{t('common:General.welcome')}</SectionTitle>
            <StyledButton title='Start Personality Test' mode='contained' onPress={handleStartTest} testID='button.startTest' />
        </StyledSafeAreaView>
    )
}
export default HomeScreen

