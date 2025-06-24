import { DateTime } from 'luxon'
import CONSTANTS from '../constants.mjs'

const { TIMEZONES } = CONSTANTS

export function parseDate(date) {
  return DateTime.fromFormat(date, 'yyyyMMdd', { zone: TIMEZONES.melbourne })
}

export function toGTFSDate(date) {
  return date.toFormat('yyyyMMdd')
}