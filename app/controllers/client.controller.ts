import db from '@adonisjs/lucid/services/db'
import { HttpContext } from '@adonisjs/core/http'

export default class ClientsController {
  async index({ request, params }: HttpContext) {
    const page = request.input('page', params.page || 1)
    const limit = 10

    const clients = await db
      .query()
      .from('clients')
      .select('*')
      .orderBy('id', 'asc')
      .paginate(page, limit)

    return clients
  }

  async store({ request }: HttpContext) {
    await db
      .insertQuery()
      .table('clients')
      .insert({ ...request.body })
      .returning('id')
  }

  async update({ request, params }: HttpContext) {
    const id = params.id

    await db
      .query()
      .from('clients')
      .where('id', id)
      .update({ ...request.body })
  }

  async delete({ params }: HttpContext) {
    const id = params.id

    await db.query().from('clients').where('id', id).update({ active: false })
  }
}
