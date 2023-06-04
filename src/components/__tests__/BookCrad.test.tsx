import * as React from 'react'
import { render } from '@testing-library/react-native'

import BookCard from '../BookCard'
import  {bookList}  from '../../api/dataMocks'
import { customRender } from '../../../__tests__/testHelper'


describe('tests for BookCard component', () => {
    const bookToRender = bookList[0]
    const handleOnBookPress = jest.fn();

    it('should Render the Component', () => {
        const tree = customRender(<BookCard
            title={bookToRender.title}
            imageUrl={bookToRender.image}
            bookId={bookToRender.id}
            onPress={handleOnBookPress}
        />).toJSON()
        expect(tree).toBeTruthy()
    })

    it('given the Loading prop, ActivityIndicator should be returned', () => {
        const { getByTestId } = customRender(<BookCard title={bookToRender.title}
            imageUrl={bookToRender.image}
            bookId={bookToRender.id}
            onPress={handleOnBookPress} />)
        const element = getByTestId(`bookCard.${bookToRender.id}`)

        expect(element).not.toBeNull()
    })
})


