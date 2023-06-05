import React, { useEffect, useState } from 'react'

import styled from 'styled-components/native'
import { SectionTitle } from '~/components/Text'
import { useTranslation } from 'react-i18next'
import questionApi from '~/api/questionApi/questionApi'


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

    const [result, setResult] = useState(0)

    const { t } = useTranslation('common')




    const calculateResult = async () => {
        const nextResults = await questionApi.getResult(answerListId)
        setResult(nextResults)
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
