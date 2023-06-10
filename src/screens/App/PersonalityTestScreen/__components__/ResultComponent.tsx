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
background-color:${({ theme }) => theme.colors.background};
align-self:center;
border-width:0.5px;
border-color:${({ theme }) => theme.colors.onSurface};
`
const TextResult = styled(SectionTitle)`
margin-top: ${({ theme }) => theme.space.s};
width:${({ theme }) => theme.spaceNumbers.screenWidth - theme.spaceNumbers.xxxxl}px;
background-color:${({ theme }) => theme.colors.background};
align-self:center;
border-width:0.5px;
border-color:${({ theme }) => theme.colors.onSurface};
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
                <TextResult>{t('common:General.extrovert')}</TextResult>
            }
        </ResultContainer>
    )
}

export default ResultComponent
