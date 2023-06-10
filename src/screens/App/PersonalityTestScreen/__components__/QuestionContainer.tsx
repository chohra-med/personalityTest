import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import styled from 'styled-components/native'
import { useSelector } from 'react-redux'
import { SectionTitle } from '~/components/Text'
import { questionsSelectors } from '~/redux/questions/questions'
import { List, RadioButton } from 'react-native-paper'


export type QuestionContainerProps = {
    questionId: number
    onPress?: (answerId: string) => void
}


const AnswerContainer = styled.View`
margin-top: ${({ theme }) => theme.space.s};
width:${({ theme }) => theme.spaceNumbers.screenWidth - theme.spaceNumbers.xxxxl}px;
background-color:${({ theme }) => theme.colors.background};
align-self:center;
border-width:0.5px;
border-color:${({ theme }) => theme.colors.onSurface};
`

const StyledListItem = styled(List.Item)`
    background-color: ${({ theme }) => theme.colors?.background};
    padding-horizontal: ${({ theme }) => theme.space.xl};
    border-bottom-color: ${({ theme }) => theme.color?.onSurface};
    border-bottom-width: 1px;
    border-bottom-width:  1px ;
    justify-content: center;
  `

const QuestionContainer: React.FC<QuestionContainerProps> = ({
    onPress,
    questionId
}) => {

    const [answeValue, setAnswerValue] = useState('')
    useEffect(() => {
        setAnswerValue('')
    }, [questionId])
    const question = useSelector(questionsSelectors.selectQuestionById(questionId))
    if (!question) {
        return <View />
    }

    const { id, title, answers } = question



    const selectAnswer = (answerId: string) => {
        setAnswerValue(answerId)
        if (onPress) {
            onPress(answerId)
        }
    }




    return (
        <StyledListItem
            key={id}
            title={<SectionTitle>{title}</SectionTitle>}
            titleNumberOfLines={3}
            description={<RadioButton.Group onValueChange={value => selectAnswer(value)} value={answeValue}  >
                {answers.map((answer) => (<AnswerContainer key={answer.id} >
                    <RadioButton.Item status='unchecked' label={answer.title}
                        labelVariant='labelMedium' value={String(answer.id)} />
                </AnswerContainer>)
                )
                }
            </RadioButton.Group >}
        />
    )
}

export default QuestionContainer
