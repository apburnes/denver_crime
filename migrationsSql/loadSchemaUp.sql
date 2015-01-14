CREATE TABLE offense_codes (
  offense_code VARCHAR(4) NOT NULL,
  offense_code_extension INTEGER NOT NULL,
  offense_type_id VARCHAR(30) NOT NULL,
  offense_type_name VARCHAR(76) NOT NULL,
  offense_category_id VARCHAR(28) NOT NULL,
  offense_category_name VARCHAR(28) NOT NULL,
  is_crime INTEGER NOT NULL,
  is_traffic INTEGER NOT NULL
);

CREATE TABLE crime (
  incident_id FLOAT NOT NULL,
  offense_id BIGINT NOT NULL,
  offense_code VARCHAR(4) NOT NULL,
  offense_code_extension INTEGER NOT NULL,
  offense_type_id VARCHAR(30) NOT NULL,
  offense_category_id VARCHAR(28) NOT NULL,
  first_occurence_date TIMESTAMP WITHOUT TIME ZONE NOT NULL,
  last_occurence_date TIMESTAMP WITHOUT TIME ZONE,
  reported_date TIMESTAMP WITHOUT TIME ZONE NOT NULL,
  incident_address VARCHAR(73),
  geo_x FLOAT NOT NULL,
  geo_y FLOAT NOT NULL,
  geo_lon FLOAT,
  geo_lat FLOAT,
  district_id INTEGER NOT NULL,
  precinct_id INTEGER NOT NULL,
  neighborhood_id VARCHAR(26) NOT NULL,
  is_crime INTEGER NOT NULL,
  is_traffic INTEGER NOT NULL
);
