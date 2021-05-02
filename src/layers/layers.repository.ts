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
            'id',         "id",
            'geometry',   ST_AsGeoJSON(geom)::json,
            'properties', json_build_object(
                'type', 'fiscalizacao',
                'title', 'Fiscalizações',
                'pf', "proc.fisc.",
                'dt', "dt_entrada",
                'pa', "proc_outor"
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
            'id',         "id",
            'geometry',   ST_AsGeoJSON(geom)::json,
            'properties', json_build_object(
                'type', 'municipio',
                'title', 'Municipios',
                'name', "nm_municip"
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
            'id',         "id",
            'geometry',   ST_AsGeoJSON(geom)::json,
            'properties', json_build_object(            
                'type', 'hidrografia',
                'title', 'Hidrografia',
                'name', "name", 
                'rio', "rioscsv_ba"
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

  async getMunicipiosEmergencia(): Promise<string> {
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
            'id',         "id",
            'geometry',   ST_AsGeoJSON(geom)::json,
            'properties', json_build_object(            
                'type', 'municipios_emergencia',
                'title', 'Municipios Emergencia',
                'name', "NM_MUNICIP"
            )
        )
    )
)
FROM municipios_emergencia`,
      []);

    const result = await fileQuery;

    if (result && result[0] && result[0]['json_build_object']) {
      return result[0]['json_build_object'];
    }

    return null;
  }

  async getFederalRios(): Promise<string> {
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
            'id',         "id",
            'geometry',   ST_AsGeoJSON(geom)::json,
            'properties', json_build_object(            
                'type', 'federal_rios',
                'title', 'Federal Rios',
                'name', "NORIOORIGI"
            )
        )
    )
)
FROM federal_rios`,
      []);

    const result = await fileQuery;

    if (result && result[0] && result[0]['json_build_object']) {
      return result[0]['json_build_object'];
    }

    return null;
  }

  async getFederalEspelhosDagua(): Promise<string> {
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
            'id',         "id",
            'geometry',   ST_AsGeoJSON(geom)::json,
            'properties', json_build_object(            
                'type', 'federal_espelhos_dagua',
                'title', 'Federal Espelhos D Agua',
                'name', "NOME_RESER"
            )
        )
    )
)
FROM federal_espelhos_dagua`,
      []);

    const result = await fileQuery;

    if (result && result[0] && result[0]['json_build_object']) {
      return result[0]['json_build_object'];
    }

    return null;
  }

  async getBacias(): Promise<string> {
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
            'id',         "id",
            'geometry',   ST_AsGeoJSON(geom)::json,
            'properties', json_build_object(            
                'type', 'bacias',
                'title', 'Bacias',
                'name', "Name"
            )
        )
    )
)
FROM bacias`,
      []);

    const result = await fileQuery;

    if (result && result[0] && result[0]['json_build_object']) {
      return result[0]['json_build_object'];
    }

    return null;
  }

  async getFederalTerrasIndigenasPe(): Promise<string> {
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
            'id',         "id",
            'geometry',   ST_AsGeoJSON(geom)::json,
            'properties', json_build_object(            
                'type', 'federal_terras_indigenas_pe',
                'title', 'Federal Terras Indigenas',
                'name', "terrai_nom"
            )
        )
    )
)
FROM federal_terras_indigenas_pe`,
      []);

    const result = await fileQuery;

    if (result && result[0] && result[0]['json_build_object']) {
      return result[0]['json_build_object'];
    }

    return null;
  }

  async getUcProtecaoIntegral(): Promise<string> {
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
            'id',         "id",
            'geometry',   ST_AsGeoJSON(geom)::json,
            'properties', json_build_object(            
                'type', 'uc_protecao_integral',
                'title', 'UC Protecao Integral',
                'name', "Name"
            )
        )
    )
)
FROM uc_protecao_integral`,
      []);

    const result = await fileQuery;

    if (result && result[0] && result[0]['json_build_object']) {
      return result[0]['json_build_object'];
    }

    return null;
  }
}
