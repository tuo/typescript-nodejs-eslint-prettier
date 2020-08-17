import { Teacher } from '../models'

async function list(): Promise<any[]> {
    return await Teacher.findAll({
        order: [['id', 'ASC']],
    })
}


 

export default {
    list
}