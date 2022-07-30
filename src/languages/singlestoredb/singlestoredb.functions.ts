import { flatKeywordList } from '../../utils';

export const functions = flatKeywordList({
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference.html
  // https://docs.singlestore.com/managed-service/en/reference/sql-reference/restricted-keywords/list-of-restricted-keywords.html
  all: [
    'ABS',
    'ACOS',
    'ADDDATE',
    'ADDTIME',
    'AES_DECRYPT',
    'AES_ENCRYPT',
    'ANY_VALUE',
    'APPROX_COUNT_DISTINCT',
    'APPROX_COUNT_DISTINCT_ACCUMULATE',
    'APPROX_COUNT_DISTINCT_COMBINE',
    'APPROX_COUNT_DISTINCT_ESTIMATE',
    'APPROX_GEOGRAPHY_INTERSECTS',
    'APPROX_PERCENTILE',
    'ASCII',
    'ASIN',
    'ATAN',
    'ATAN2',
    'AVG',
    'BIN',
    'BINARY',
    'BIT_AND',
    'BIT_COUNT',
    'BIT_OR',
    'BIT_XOR',
    'CAST',
    'CEIL',
    'CEILING',
    'CHAR',
    'CHARACTER_LENGTH',
    'CHAR_LENGTH',
    'CHARSET',
    'COALESCE',
    'COERCIBILITY',
    'COLLATION',
    'COLLECT',
    'CONCAT',
    'CONCAT_WS',
    'CONNECTION_ID',
    'CONV',
    'CONVERT',
    'CONVERT_TZ',
    'COS',
    'COT',
    'COUNT',
    'CUME_DIST',
    'CURDATE',
    'CURRENT_DATE',
    'CURRENT_ROLE',
    'CURRENT_TIME',
    'CURRENT_TIMESTAMP',
    'CURRENT_USER',
    'CURTIME',
    'DATABASE',
    'DATE',
    'DATE_ADD',
    'DATEDIFF',
    'DATE_FORMAT',
    'DATE_SUB',
    'DATE_TRUNC',
    'DAY',
    'DAYNAME',
    'DAYOFMONTH',
    'DAYOFWEEK',
    'DAYOFYEAR',
    'DECODE',
    'DEFAULT',
    'DEGREES',
    'DENSE_RANK',
    'DIV',
    'DOT_PRODUCT',
    'ELT',
    'EUCLIDEAN_DISTANCE',
    'EXP',
    'EXTRACT',
    'FIELD',
    'FIND_IN_SET',
    'FIRST_VALUE',
    'FLOOR',
    'FORMAT',
    'FORMAT_BYTES',
    'FORMAT_PICO_TIME',
    'FOUND_ROWS',
    'FROM_BASE64',
    'FROM_DAYS',
    'FROM_UNIXTIME',
    'GEOMCOLLECTION',
    'GEOMETRYCOLLECTION',
    'GET_DD_COLUMN_PRIVILEGES',
    'GET_DD_CREATE_OPTIONS',
    'GET_DD_INDEX_SUB_PART_LENGTH',
    'GET_FORMAT',
    'GET_LOCK',
    'GREATEST',
    'GROUP_CONCAT',
    'GROUPING',
    'GTID_SUBSET',
    'GTID_SUBTRACT',
    'HEX',
    'HOUR',
    'ICU_VERSION',
    'IF',
    'IFNULL',
    // 'IN',
    'INET_ATON',
    'INET_NTOA',
    'INET6_ATON',
    'INET6_NTOA',
    'INSERT',
    'INSTR',
    'INTERNAL_AUTO_INCREMENT',
    'INTERNAL_AVG_ROW_LENGTH',
    'INTERNAL_CHECK_TIME',
    'INTERNAL_CHECKSUM',
    'INTERNAL_DATA_FREE',
    'INTERNAL_DATA_LENGTH',
    'INTERNAL_DD_CHAR_LENGTH',
    'INTERNAL_GET_COMMENT_OR_ERROR',
    'INTERNAL_GET_ENABLED_ROLE_JSON',
    'INTERNAL_GET_HOSTNAME',
    'INTERNAL_GET_USERNAME',
    'INTERNAL_GET_VIEW_WARNING_OR_ERROR',
    'INTERNAL_INDEX_COLUMN_CARDINALITY',
    'INTERNAL_INDEX_LENGTH',
    'INTERNAL_IS_ENABLED_ROLE',
    'INTERNAL_IS_MANDATORY_ROLE',
    'INTERNAL_KEYS_DISABLED',
    'INTERNAL_MAX_DATA_LENGTH',
    'INTERNAL_TABLE_ROWS',
    'INTERNAL_UPDATE_TIME',
    'INTERVAL',
    'IS',
    'IS_FREE_LOCK',
    'IS_IPV4',
    'IS_IPV4_COMPAT',
    'IS_IPV4_MAPPED',
    'IS_IPV6',
    'IS NOT',
    'IS NOT NULL',
    'IS NULL',
    'IS_USED_LOCK',
    'IS_UUID',
    'ISNULL',
    'JSON_ARRAY',
    'JSON_ARRAY_APPEND',
    'JSON_ARRAY_INSERT',
    'JSON_ARRAYAGG',
    'JSON_CONTAINS',
    'JSON_CONTAINS_PATH',
    'JSON_DEPTH',
    'JSON_EXTRACT',
    'JSON_INSERT',
    'JSON_KEYS',
    'JSON_LENGTH',
    'JSON_MERGE',
    'JSON_MERGE_PATCH',
    'JSON_MERGE_PRESERVE',
    'JSON_OBJECT',
    'JSON_OBJECTAGG',
    'JSON_OVERLAPS',
    'JSON_PRETTY',
    'JSON_QUOTE',
    'JSON_REMOVE',
    'JSON_REPLACE',
    'JSON_SCHEMA_VALID',
    'JSON_SCHEMA_VALIDATION_REPORT',
    'JSON_SEARCH',
    'JSON_SET',
    'JSON_STORAGE_FREE',
    'JSON_STORAGE_SIZE',
    'JSON_TABLE',
    'JSON_TYPE',
    'JSON_UNQUOTE',
    'JSON_VALID',
    'JSON_VALUE',
    'LAG',
    'LAST_DAY',
    'LAST_INSERT_ID',
    'LAST_VALUE',
    'LCASE',
    'LEAD',
    'LEAST',
    'LEFT',
    'LENGTH',
    'LIKE',
    'LINESTRING',
    'LN',
    'LOAD_FILE',
    'LOCALTIME',
    'LOCALTIMESTAMP',
    'LOCATE',
    'LOG',
    'LOG10',
    'LOG2',
    'LOWER',
    'LPAD',
    'LTRIM',
    'MAKE_SET',
    'MAKEDATE',
    'MAKETIME',
    'MASTER_POS_WAIT',
    'MATCH',
    'MAX',
    'MBRCONTAINS',
    'MBRCOVEREDBY',
    'MBRCOVERS',
    'MBRDISJOINT',
    'MBREQUALS',
    'MBRINTERSECTS',
    'MBROVERLAPS',
    'MBRTOUCHES',
    'MBRWITHIN',
    'MD5',
    'MEMBER OF',
    'MICROSECOND',
    'MID',
    'MIN',
    'MINUTE',
    'MOD',
    'MONTH',
    'MONTHNAME',
    'MULTILINESTRING',
    'MULTIPOINT',
    'MULTIPOLYGON',
    'NAME_CONST',
    'NOT',
    'NOT IN',
    'NOT LIKE',
    'NOT REGEXP',
    'NOW',
    'NTH_VALUE',
    'NTILE',
    'NULLIF',
    'OCT',
    'OCTET_LENGTH',
    // 'OR',
    'ORD',
    'PERCENT_RANK',
    'PERIOD_ADD',
    'PERIOD_DIFF',
    'PI',
    'POINT',
    'POLYGON',
    'POSITION',
    'POW',
    'POWER',
    'PS_CURRENT_THREAD_ID',
    'PS_THREAD_ID',
    'QUARTER',
    'QUOTE',
    'RADIANS',
    'RAND',
    'RANDOM_BYTES',
    'RANK',
    'REGEXP',
    'REGEXP_INSTR',
    'REGEXP_LIKE',
    'REGEXP_REPLACE',
    'REGEXP_SUBSTR',
    'RELEASE_ALL_LOCKS',
    'RELEASE_LOCK',
    'REPEAT',
    'REPLACE',
    'REVERSE',
    'RIGHT',
    'RLIKE',
    'ROLES_GRAPHML',
    'ROUND',
    'ROW_COUNT',
    'ROW_NUMBER',
    'RPAD',
    'RTRIM',
    'SCHEMA',
    'SEC_TO_TIME',
    'SECOND',
    'SESSION_USER',
    'SHA1',
    'SHA2',
    'SIGN',
    'SIN',
    'SLEEP',
    'SOUNDEX',
    'SOUNDS LIKE',
    'SOURCE_POS_WAIT',
    'SPACE',
    'SQRT',
    'ST_AREA',
    'ST_ASBINARY',
    'ST_ASGEOJSON',
    'ST_ASTEXT',
    'ST_BUFFER',
    'ST_BUFFER_STRATEGY',
    'ST_CENTROID',
    'ST_COLLECT',
    'ST_CONTAINS',
    'ST_CONVEXHULL',
    'ST_CROSSES',
    'ST_DIFFERENCE',
    'ST_DIMENSION',
    'ST_DISJOINT',
    'ST_DISTANCE',
    'ST_DISTANCE_SPHERE',
    'ST_ENDPOINT',
    'ST_ENVELOPE',
    'ST_EQUALS',
    'ST_EXTERIORRING',
    'ST_FRECHETDISTANCE',
    'ST_GEOHASH',
    'ST_GEOMCOLLFROMTEXT',
    'ST_GEOMCOLLFROMWKB',
    'ST_GEOMETRYN',
    'ST_GEOMETRYTYPE',
    'ST_GEOMFROMGEOJSON',
    'ST_GEOMFROMTEXT',
    'ST_GEOMFROMWKB',
    'ST_HAUSDORFFDISTANCE',
    'ST_INTERIORRINGN',
    'ST_INTERSECTION',
    'ST_INTERSECTS',
    'ST_ISCLOSED',
    'ST_ISEMPTY',
    'ST_ISSIMPLE',
    'ST_ISVALID',
    'ST_LATFROMGEOHASH',
    'ST_LATITUDE',
    'ST_LENGTH',
    'ST_LINEFROMTEXT',
    'ST_LINEFROMWKB',
    'ST_LINEINTERPOLATEPOINT',
    'ST_LINEINTERPOLATEPOINTS',
    'ST_LONGFROMGEOHASH',
    'ST_LONGITUDE',
    'ST_MAKEENVELOPE',
    'ST_MLINEFROMTEXT',
    'ST_MLINEFROMWKB',
    'ST_MPOINTFROMTEXT',
    'ST_MPOINTFROMWKB',
    'ST_MPOLYFROMTEXT',
    'ST_MPOLYFROMWKB',
    'ST_NUMGEOMETRIES',
    'ST_NUMINTERIORRING',
    'ST_NUMPOINTS',
    'ST_OVERLAPS',
    'ST_POINTATDISTANCE',
    'ST_POINTFROMGEOHASH',
    'ST_POINTFROMTEXT',
    'ST_POINTFROMWKB',
    'ST_POINTN',
    'ST_POLYFROMTEXT',
    'ST_POLYFROMWKB',
    'ST_SIMPLIFY',
    'ST_SRID',
    'ST_STARTPOINT',
    'ST_SWAPXY',
    'ST_SYMDIFFERENCE',
    'ST_TOUCHES',
    'ST_TRANSFORM',
    'ST_UNION',
    'ST_VALIDATE',
    'ST_WITHIN',
    'ST_X',
    'ST_Y',
    'STATEMENT_DIGEST',
    'STATEMENT_DIGEST_TEXT',
    'STD',
    'STDDEV',
    'STDDEV_POP',
    'STDDEV_SAMP',
    'STR_TO_DATE',
    'STRCMP',
    'SUBDATE',
    'SUBSTR',
    'SUBSTRING',
    'SUBSTRING_INDEX',
    'SUBTIME',
    'SUM',
    'SYSDATE',
    'SYSTEM_USER',
    'TAN',
    'TIME',
    'TIME_FORMAT',
    'TIME_TO_SEC',
    'TIMEDIFF',
    'TIMESTAMP',
    'TIMESTAMPADD',
    'TIMESTAMPDIFF',
    'TO_BASE64',
    'TO_DAYS',
    'TO_SECONDS',
    'TRIM',
    'TRUNCATE',
    'UCASE',
    'UNCOMPRESS',
    'UNCOMPRESSED_LENGTH',
    'UNHEX',
    'UNIX_TIMESTAMP',
    'UPDATEXML',
    'UPPER',
    'USER',
    'UTC_DATE',
    'UTC_TIME',
    'UTC_TIMESTAMP',
    'UUID',
    'UUID_SHORT',
    'UUID_TO_BIN',
    'VALIDATE_PASSWORD_STRENGTH',
    'VALUES',
    'VAR_POP',
    'VAR_SAMP',
    'VARIANCE',
    'VERSION',
    'WAIT_FOR_EXECUTED_GTID_SET',
    'WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS',
    'WEEK',
    'WEEKDAY',
    'WEEKOFYEAR',
    'WEIGHT_STRING',
    // 'XOR',
    'YEAR',
    'YEARWEEK',
    // Data types with parameters
    // https://dev.mysql.com/doc/refman/8.0/en/data-types.html
    'BIT',
    'TINYINT',
    'SMALLINT',
    'MEDIUMINT',
    'INT',
    'INTEGER',
    'BIGINT',
    'DECIMAL',
    'DEC',
    'NUMERIC',
    'FIXED',
    'FLOAT',
    'DOUBLE',
    'DOUBLE PRECISION',
    'REAL',
    'DATETIME',
    'TIMESTAMP',
    'TIME',
    'YEAR',
    'CHAR',
    'NATIONAL CHAR',
    'VARCHAR',
    'NATIONAL VARCHAR',
    'BINARY',
    'VARBINARY',
    'BLOB',
    'TEXT',
    'ENUM',
    // 'SET' // handled as special-case in postProcess
  ],
});
