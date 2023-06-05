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
import QuestionContainer from './__components__/QuestionContainer'
import ResultComponent from './__components__/ResultComponent'

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${({ theme }) => theme.space.xxl};
`

const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => theme.space.xxxxl};
  align-items:center;
`
function PersonalityTestScreen() {

  const [pageNumber, setPageNumber] = useState(0)
  const [answersList, setAnswersList] = useState([4])
  const { t } = useTranslation('common')
  const navigation = useNavigation()

  const questionsLength = useSelector(questionsSelectors.selectLengthOfAllQuestions)
  console.log({ questionsLength })
  const goToNextQuestion = () => {
    setPageNumber(prev => prev + 1)
  }
  const onChooseAnswer = (answerId: string) => {
    let nextAnswerList = answersList
    nextAnswerList[pageNumber] = parseInt(answerId)
    setAnswersList(nextAnswerList)
  }

  return (
    <StyledSafeAreaView testID="screen.PersonalityTestScreen">
      <SectionTitle>{t('common:General.welcome')}</SectionTitle>
      {pageNumber < 3 ?
        <>
          <QuestionContainer questionId={pageNumber} onPress={(answerId) => onChooseAnswer(answerId)} />
          <StyledButton title={t('common:General.next')} mode='contained' onPress={goToNextQuestion} />
        </>
        :
        <>
          <ResultComponent answerListId={answersList} />
        </>
      }
    </StyledSafeAreaView>
  )
}
export default PersonalityTestScreen
