// import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare surname: string

  @column()
  declare mothers_surname: string

  @column()
  declare email: string

  @column()
  declare birthdate: string // DateTime

  @column()
  declare age: string

  @column()
  declare active: boolean
}
