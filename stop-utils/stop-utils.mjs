import roadTypesList from './road-types.json' with { type: 'json' }
const roadTypes = Object.values(roadTypesList).concat([
  'Street',
  'Avenue',
  'Way'
])

function getPrimaryStopName(stopName) {
  let slashIndex = stopName.lastIndexOf('/')
  if (slashIndex === -1) return stopName

  return stopName.slice(0, slashIndex)
}

function getSecondaryStopName(stopName) {
  let slashIndex = stopName.lastIndexOf('/')
  if (slashIndex === -1) return ''

  return stopName.slice(slashIndex + 1)
}

function isStreetStop(stopName) {
  let primaryStopName = getPrimaryStopName(stopName)
  return roadTypes.some(type => primaryStopName.endsWith(type))
}

function sanitiseName(stopName) {
  return stopName.toLowerCase().replace(/[^\w\d ]/g, '-').replace(/  */g, '-').replace(/--+/g, '-').replace(/-$/, '').replace(/^-/, '')
}

export default {
  getPrimaryStopName,
  getSecondaryStopName,
  isStreetStop,
  sanitiseName
}