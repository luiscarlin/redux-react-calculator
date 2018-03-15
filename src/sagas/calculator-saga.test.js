import { CALCULATE } from '../actions/actionTypes'
import calculatorSaga from './calculator-saga'
import { take, select } from 'redux-saga/effects'

let getDisplayValueSpy = jest.fn()
jest.setMock('../selectors/display-selectors', { getDisplayValue: getDisplayValueSpy })

describe('Calculator Saga', () => {
  describe('happy path', () => {
    let nextEffectWithPreviousResult, gen
    gen = calculatorSaga()
    
    it('catches every CALCULATE dispatch', () => {
      nextEffectWithPreviousResult = gen.next()
      expect(nextEffectWithPreviousResult.value).toEqual(take(CALCULATE))
    })

    it('retrieves the current value in the display', () => {
      // nextEffectWithPreviousResult = gen.next()
      // expect(nextEffectWithPreviousResult.value).toEqual(select(getDisplayValueSpy))
    })

    it('evaluates the value', () => {

    })

    it('dispatches an action to clear the display', () => {

    })

    it('dispatches an action to push the evaluated result to the display', () => {

    })
  })
})