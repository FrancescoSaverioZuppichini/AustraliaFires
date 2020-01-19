import { Container } from "unstated"
import Twitter from "twitter"

export default class TwitterContainer extends Container {
  state = { data: [] }

  constructor() {
    super()
    this.client = new Twitter({
      consumer_key: "o3la89HNEjIiuRBSy3NxyfDdv",
      consumer_secret: "xuBaSU7VJYfud4N9nNGqsBRodcM41jUrL083Mr9bQtMBZBBhwz",
      access_token_key: "4513528876-IKsEHxJ5qKWls3WhXzkz0Hol0aABZBzSONr6eOl",
      access_token_secret: "GBxLTB34GGiDDzODYw7UmsV5M4e25ARLU4QyCmhBYn7EL",
    })
    this.client.get('/1.1/search/tweets.json',  {q: 'node.js'})
    .then( data => console.log(data))
    .catch( err => console.log(err))
  }
}
