class Resource {
  constructor(name, description, cost, level) {
    this.name = name
    this.description = description
    this.cost = cost
    this.level = level
  }
}

export const costs = [
  'FREE',
  '$',
  '$$',
  '$$$'
]

export const levels = [
  'Beginner',
  'Intermediate',
  'Advanced'
]

const resources = [
  new Resource(
    'freeCodeCamp',
    'A supportive community where you can learn to code for free',
    costs[0],
    levels[0]
  ),
  new Resource(
    'The Complete 2019 Web Development Bootcamp',
    'A self-paced course that will teach you the basics of web development',
    costs[1],
    levels[0]
  ),
  new Resource(
    'Eloquent JavaScript',
    'A free, online book that will teach you the ins and outs of the JavaScript language',
    costs[0],
    levels[1]
  )
]

export default resources

