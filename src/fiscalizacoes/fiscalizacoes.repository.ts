import { getManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FiscalizacoesRepository {
  async getFile(): Promise<string> {
    const entityManager = getManager();
    const fileQuery = entityManager.query(`
SELECT json_build_object(
    'type', 'FeatureCollection',
    'crs',  json_build_object(
        'type',      'name', 
        'properties', json_build_object(
            'name', 'EPSG:4326'  
        )
    ), 
    'features', json_agg(
        json_build_object(
            'type',       'Feature',
            'id',         'id', -- the GeoJson spec includes an 'id' field, but it is optional, replace {id} with your id field
            'geometry',   ST_AsGeoJSON(geom)::json,
            'properties', json_build_object(
                'geom', 
                'to',
                'nome', 
                'cep'
            )
        )
    )
)
FROM fiscalizacoes`,
      []);

    const result = await fileQuery;

    if (result && result[0] && result[0]['json_build_object']) {
      return result[0]['json_build_object'];
    }

    return null;
  }

  async test(): Promise<string> {
    const entityManager = getManager();
    const someQuery = entityManager.query(`SELECT * FROM "users" as u WHERE id > $1`,
      [uuidv4()]);
    console.log(someQuery);
    return someQuery;
  }

}
