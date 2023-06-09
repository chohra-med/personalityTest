import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/native'
import { questionsSelectors } from '~/redux/questions/questions'
import { useSelector } from 'react-redux'
import Button from '~/components/Button'
import { ScreenTitle, SectionTitle } from '~/components/Text'
import { useNavigation } from '@react-navigation/native'
import QuestionContainer from './__components__/QuestionContainer'
import ResultComponent from './__components__/ResultComponent'

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${({ theme }) => theme.space.xxl};
`

const ButtonContainer = styled.View`
  flex-direction:row;
  width: ${({ theme }) => theme.space.screenWidth};
  justify-content:space-around;
  padding-top: ${({ theme }) => theme.space.l};
`

const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => theme.space.xl};

  align-items:center;
`
function PersonalityTestScreen() {

  const [pageNumber, setPageNumber] = useState(0)
  const [answersList, setAnswersList] = useState<number[]>([])
  const { t } = useTranslation('common')

  const goToNextQuestion = () => {
    if (pageNumber < 3 && answersList[pageNumber])
      setPageNumber(prev => prev + 1)
  }
  const goToPreviousQuestion = () => {
    if (pageNumber > 0 && answersList[pageNumber])
      setPageNumber(prev => prev - 1)
  }
  const onChooseAnswer = (answerId: string) => {
    let nextAnswerList = answersList
    nextAnswerList[pageNumber] = parseInt(answerId)

    setAnswersList(nextAnswerList)
  }

  return (
    <StyledSafeAreaView testID="screen.PersonalityTestScreen">
      {pageNumber < 3 ?
        <>
          <QuestionContainer questionId={pageNumber} onPress={(answerId) => onChooseAnswer(answerId)} />
          <ButtonContainer>
            <StyledButton title={t('common:General.previous')} mode='contained' onPress={goToPreviousQuestion} />
            <StyledButton title={t('common:General.next')} mode='contained' onPress={goToNextQuestion} />
          </ButtonContainer>
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
