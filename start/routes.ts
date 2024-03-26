/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return 'This is my promart clients microservice'
})

const ClientsController = () => import('#controllers/client.controller')

router.get('api/clients', [ClientsController, 'index'])
router.post('api/clients', [ClientsController, 'store'])
router.put('api/clients/:id', [ClientsController, 'update'])
router.get('api/clients/:id', [ClientsController, 'delete'])
