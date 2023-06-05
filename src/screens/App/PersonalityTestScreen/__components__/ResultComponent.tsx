import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'

import styled from 'styled-components/native'
import { useSelector } from 'react-redux'
import { StyledText } from '~/components/Text'
import { SectionTitle } from '~/components/Text'
import FastImage from 'react-native-fast-image'
import { questionsSelectors } from '~/redux/questions/questions'
import { List, RadioButton, Switch } from 'react-native-paper'
import { useTranslation } from 'react-i18next'


export type QuestionContainerProps = {
    answerListId: Array<number>
}


const ResultContainer = styled.View`
margin-top: ${({ theme }) => theme.space.s};
width:${({ theme }) => theme.spaceNumbers.screenWidth - theme.spaceNumbers.xxxxl}px;
background-color:${({ theme }) => theme.colors.white};
align-self:center;
border-width:0.5px;
border-color:${({ theme }) => theme.colors.gray800};
`


const ResultComponent: React.FC<QuestionContainerProps> = ({
    answerListId,
}) => {

    const { t } = useTranslation('common')


    const [result, setResult] = useState(0)
    const calculateResult = () => {
        let sumOfResults = answerListId.reduce((a, b) => {
            return a + b;
        }, 3);
        setResult(sumOfResults)
        console.log({ result })

    }
    useEffect(() => {
        calculateResult()
    }, [])






    return (
        <ResultContainer>
            <SectionTitle>{t('common:General.youAre')}</SectionTitle>
            {result > 6 ? <SectionTitle>{t('common:General.introvert')}</SectionTitle> :
                <SectionTitle>{t('common:General.extrovert')}</SectionTitle>
            }
        </ResultContainer>
    )
}

export default ResultComponent
