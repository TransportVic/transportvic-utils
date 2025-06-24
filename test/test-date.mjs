import { expect } from 'chai'
import { getDayOfWeek, parseDate, toGTFSDate } from '../utils/date-utils.mjs'

describe('The utils class', () => {
  describe('The parseDate function', () => {
    it('Should convert a GTFS date to a Melbourne timezoned date', () => {
      expect(parseDate('20241122').toUTC().toISO()).to.equal('2024-11-21T13:00:00.000Z')
    })
  })

  describe('The toGTFSDate function', () => {
    it('Should convert a Luxon date back into a GTFS date', () => {
      let date = parseDate('20241122')
      expect(toGTFSDate(date.plus({ day: 3 }))).to.equal('20241125')
    })
  })

  describe('The getDayOfWeek function', () => {
    it('Should return the day of the week', () => {
      let date = parseDate('20250624')
      expect(getDayOfWeek(date)).to.equal('Tue')
    })
  })
})