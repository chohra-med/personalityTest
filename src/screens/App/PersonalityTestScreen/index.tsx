import React, { useCallback, useEffect, useState } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/native'
import { questionsActions, questionsSelectors } from '~/redux/questions/questions'
import useActions from '~/hooks/useActions'
import { useSelector } from 'react-redux'
import Button from '~/components/Button'
import { SectionText, SectionTitle } from '~/components/Text'
import { useNavigation } from '@react-navigation/native'

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${({ theme }) => theme.space.xxl};
  align-items:center;
`

const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => theme.space.xxxxl};
  align-items:center;
`
function PersonalityTestScreen() {

  const [pageNumber, setPageNumber] = useState(0)
  const { t } = useTranslation('common')
  const navigation = useNavigation()

  const questionsList = useSelector(questionsSelectors.selectAllQuestions)


  return (
    <StyledSafeAreaView testID="screen.PersonalityTestScreen">
      <SectionTitle>{t('common:General.welcome')}</SectionTitle>
      <SectionText>This the Personality Screen</SectionText>
      <StyledButton title='Next' mode='contained' />
    </StyledSafeAreaView>
  )
}
export default PersonalityTestScreen
