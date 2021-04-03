import { getManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LayersRepository {

  async getFiscalizacoes(): Promise<string> {
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

  async getMunicipios(): Promise<string> {
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
FROM municipios`,
      []);

    const result = await fileQuery;

    if (result && result[0] && result[0]['json_build_object']) {
      return result[0]['json_build_object'];
    }

    return null;
  }

  async getHidrografia(): Promise<string> {
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
FROM hidrografia`,
      []);

    const result = await fileQuery;

    if (result && result[0] && result[0]['json_build_object']) {
      return result[0]['json_build_object'];
    }

    return null;
  }
}
