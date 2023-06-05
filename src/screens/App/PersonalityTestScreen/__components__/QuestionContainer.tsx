import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import styled from 'styled-components/native'
import { useSelector } from 'react-redux'
import { SectionTitle } from '~/components/Text'
import { questionsSelectors } from '~/redux/questions/questions'
import { List, RadioButton, Switch } from 'react-native-paper'


export type QuestionContainerProps = {
    questionId: number
    onPress?: (answerId: string) => void
}


const AnswerContainer = styled.View`
margin-top: ${({ theme }) => theme.space.s};
width:${({ theme }) => theme.spaceNumbers.screenWidth - theme.spaceNumbers.xxxxl}px;
background-color:${({ theme }) => theme.colors.white};
align-self:center;
border-width:0.5px;
border-color:${({ theme }) => theme.colors.gray800};
`

const StyledListItem = styled(List.Item).attrs(
    ({ description, theme }: { description: string, theme }) => ({
        titleStyle: {
            fontFamily: theme.allFonts.bold,
            fontSize: description
                ? theme.fontSizeNumbers.s
                : theme.fontSizeNumbers.xs,
            color: theme.colors.text,
        },
        descriptionStyle: {
            fontFamily: theme.allFonts.regular,
            fontSize: theme.fontSizeNumbers.xs,
            color: theme.colors.text,
        },
    })
)`
    background-color: ${({ theme }) => theme.colors?.background};
    padding-horizontal: ${({ theme }) => theme.space.xl};
    border-bottom-color: ${({ theme }) => theme.colors.purple900};
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

    const {id, title, answers } = question



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
                {answers.map((answer) => (<AnswerContainer>
                    <RadioButton.Item key={answer.id} status='unchecked' label={answer.title} value={String(answer.id)} />
                </AnswerContainer>)
                )
                }
            </RadioButton.Group >}
        />
    )
}

export default QuestionContainer
