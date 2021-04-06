import { getManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FiscalizacoesRepository {
  async index(page: number, type: string, search?: string): Promise<any[]> {
    const entityManager = getManager();

    let fileQuery;

    if (type == 'recent' && search) {
      const query = `
    SELECT * 
    FROM fiscalizacoes
    WHERE sit_proc NOT IN ('ARQUIVADO')
      AND (
      denunciado ILIKE $3
      OR nome ILIKE $3
      OR logradouro ILIKE $3
      OR bairro ILIKE $3
      OR municipio ILIKE $3
      OR bacia ILIKE $3
      OR uso ILIKE $3
      )
    ORDER BY REVERSE(dt_entrada) DESC
    OFFSET $1
    LIMIT $2`
      fileQuery = entityManager.query(query,[
        100 * (page - 1),
        100,
        `%${search}%`
      ]);

    } else if (type == 'recent') {
      const query = `
    SELECT * 
    FROM fiscalizacoes
    WHERE sit_proc NOT IN ('ARQUIVADO')
    ORDER BY REVERSE(dt_entrada) DESC
    OFFSET $1
    LIMIT $2`
      fileQuery = entityManager.query(query,[
        100 * (page - 1),
        100
      ]);

    } /*else if (type == 'archived') {
      query = `
    SELECT * 
    FROM fiscalizacoes
    ORDER BY REVERSE(dt_entrada) DESC
    WHERE sit_proc = $3
    OFFSET $1
    LIMIT $2`
    } else if (type == '') {
      query = `
    SELECT * 
    FROM fiscalizacoes
    ORDER BY RANDOM()
    OFFSET $1
    LIMIT $2`
    }*/



    const result = await fileQuery;

    return result;
  }

}
