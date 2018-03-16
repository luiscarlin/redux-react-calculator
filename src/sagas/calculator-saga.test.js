/* eslint no-eval: 0 */

import { CALCULATE } from '../actions/actionTypes'
import { take, select, call, put } from 'redux-saga/effects'
import { pushToDisplay, clearDisplay } from '../actions/displayActions'

let getDisplayValueSpy = jest.fn()
jest.setMock('../selectors/display-selectors', { getDisplayValue: getDisplayValueSpy })

const calculatorSaga = require('./calculator-saga').default

describe('Calculator Saga', () => {
  describe('happy path', () => {
    let nextEffectWithPreviousResult, gen
    gen = calculatorSaga()
    
    it('catches a CALCULATE dispatch', () => {
      nextEffectWithPreviousResult = gen.next()
      expect(nextEffectWithPreviousResult.value).toEqual(take(CALCULATE))
    })

    it('retrieves the current value in the display', () => {
      nextEffectWithPreviousResult = gen.next()
      expect(nextEffectWithPreviousResult.value).toEqual(select(getDisplayValueSpy))
    })

    it('evaluates the value', () => {
      nextEffectWithPreviousResult = gen.next('1+1')
      expect(nextEffectWithPreviousResult.value).toEqual(call(eval, '1+1'))
    })

    it('dispatches an action to clear the display', () => {
      nextEffectWithPreviousResult = gen.next('1')
      expect(nextEffectWithPreviousResult.value).toEqual(put(clearDisplay()))
    })

    it('dispatches an action to push the evaluated result to the display', () => {
      nextEffectWithPreviousResult = gen.next('1')
      expect(nextEffectWithPreviousResult.value).toEqual(put(pushToDisplay('1')))
    })

    it('continues to handle dispatches', () => {
      nextEffectWithPreviousResult = gen.next()
      expect(nextEffectWithPreviousResult.value).toEqual(take(CALCULATE))
    })
  })

  describe('display is empty', () => {
    let gen

    beforeEach(() => {
      gen = calculatorSaga()
      gen.next()
      gen.next()
    })

    it('skips and continues catching CALCULATE dispatches when empty string', () => {
      expect(gen.next('').value).toEqual(take(CALCULATE))
    })

    it('skips and continues catching CALCULATE dispatches when null', () => {
      expect(gen.next(null).value).toEqual(take(CALCULATE))
    })

    it('skips and continues catching CALCULATE dispatches when undefined', () => {
      expect(gen.next(undefined).value).toEqual(take(CALCULATE))
    })
  })

  describe('when eval blows up', () => {
    let gen

    beforeEach(() => {
      gen = calculatorSaga()
      gen.next()
      gen.next()
      gen.next('1+')
    })

    it('skips and continues catching CALCULATE dispatches', () => {
      expect(gen.throw('error').value).toEqual(take(CALCULATE))
    })
  })
})
