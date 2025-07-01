// Creacion de colecciones con $jsonSchema e indices

// USUARIOS

db.createCollection("usuarios"), {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "nombre",
                "correo",
                "telefono",
                "rol"
            ],
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "identificador unico"
                },
                nombre: {
                    bsonType: "string",
                    pattern: "^[A-Z]",
                    description: "Nombre que contenga mayuscula inicial"
                },
                email: {
                    bsonType: "string",
                    pattern: "^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$",
                    description: "campo que valida formato email obligatorio"
                },
                telefono: {
                    bsonType: "string",
                    pattern: "^[0-9]{7,10}$"
                }
            }
        }
    }
}

// VEHICULOS

db.createCollection("vehiculos"), {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "tipo_vehiculo",
                "marca",
                "modelo",
                "color",
                "propietario_id"
            ],
            properties: {
                placa: {
                    bsonType: "string",
                    description: "Placa del vehículo",
                    maxLength: 10,
                    pattern: "^[A-Z0-9]+$"
                },
                tipo_vehiculo: {
                    bsonType: "string",
                    description: "Tipo de vehículo (carro, moto, bicicleta, camión)"
                },
                marca: {
                    bsonType: "string",
                    description: "Marca del vehículo",
                    maxLength: 50
                },
                modelo: {
                    bsonType: "string",
                    description: "Modelo del vehículo",
                    maxLength: 50
                },
                color: {
                    bsonType: "string",
                    description: "Color del vehículo",
                    maxLength: 30
                },
                propietario_id: {
                    bsonType: "objectId",
                    description: "ID del usuario propietario del vehículo"
                }
            }
        }
    }
}


// SEDES

db.createCollection("sedes"), {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "nombre",
                "ciudad",
                "direccion"
            ],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Nombre de la sede",
                    maxLength: 100
                },
                ciudad: {
                    bsonType: "string",
                    description: "Ciudad donde se ubica la sede",
                    maxLength: 50
                },
                direccion: {
                    bsonType: "string",
                    description: "Dirección exacta de la sede",
                    maxLength: 200
                },
                telefono: {
                    bsonType: "string",
                    description: "Número de teléfono de la sede",
                    maxLength: 15
                },
                "capacidad_total": {
                    bsonType: "int",
                    description: "Capacidad total de la sede (suma de zonas)",
                    minimum: 0
                }
            }
        }
    }
}

// ZONAS

db.createCollection("zonas"), {
    validator: {
        "$jsonSchema": {
            bsonType: "object",
            required: [
                "nombre",
                "sede_id",
                "capacidad_maxima",
                "cupos_disponibles",
                "tarifas",
                "tipos_vehiculo_permitidos"
            ],
            properties: {
                "nombre": {
                    bsonType: "string",
                    description: "Nombre de la zona (ej. A1, B2)",
                    maxLength: 50
                },
                sede_id: {
                    bsonType: "objectId",
                    description: "ID de la sede a la que pertenece la zona"
                },
                capacidad_maxima: {
                    bsonType: "int",
                    description: "Capacidad máxima de vehículos en la zona",
                    minimum: 1
                },
                cupos_disponibles: {
                    bsonType: "int",
                    description: "Número de cupos disponibles actualmente",
                    minimum: 0
                },
                tarifas: {
                    bsonType: "object",
                    description: "Tarifas por minuto por tipo de vehículo",
                    patternProperties: {
                        "^(carro|moto|bicicleta|camion|otro)$": {
                            bsonType: "double",
                            description: "Tarifa por minuto para el tipo de vehículo",
                            minimum: 0
                        }
                    },
                    additionalProperties: false
                },
                tipos_vehiculo_permitidos: {
                    bsonType: "array",
                    description: "Tipos de vehículos permitidos en esta zona",
                    items: {
                        bsonType: "string",
                        enum: ["carro", "moto", "bicicleta", "camion", "otro"]
                    },
                    minItems: 1
                },
                estado: {
                    bsonType: "string",
                    description: "Estado actual de la zona (activa, mantenimiento)",
                    enum: ["activa", "mantenimiento"],
                    default: "activa"
                }
            }
        }
    }
}


// parqueaderos

db.createCollection("parqueaderos"), {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "vehiculo_id", 
                "cliente_id", 
                "sede_id", 
                "zona_id", 
                "hora_entrada", 
                "tipo_vehiculo_parqueado"
            ],
            properties: {
                vehiculo_id: { 
                    bsonType: "objectId", 
                    description: "ID del vehículo parqueado" 
                },
                cliente_id: { 
                    bsonType: "objectId", 
                    description: "ID del cliente propietario del vehículo" 
                },
                sede_id: { 
                    bsonType: "objectId", 
                    description: "ID de la sede donde se parqueó" 
                },
                zona_id: { 
                    bsonType: "objectId", 
                    description: "ID de la zona donde se parqueó" 
                },
                hora_entrada: { 
                    bsonType: "date", 
                    description: "Marca de tiempo de entrada"
                },
                hora_salida: { 
                    bsonType: "date", 
                    description: "Marca de tiempo de salida (null si está activo)", 
                    nullable: true 
                },
                tiempo_parqueo_minutos: { 
                    bsonType: "int", 
                    description: "Tiempo total de parqueo en minutos", 
                    minimum: 0, 
                    nullable: true 
                },
                costo_total: { 
                    bsonType: "double", 
                    description: "Costo total del parqueo", 
                    minimum: 0, 
                    nullable: true 
                },
                tipo_vehiculo_parqueado: {
                    bsonType: "string",
                    description: "Tipo de vehículo parqueado (redundante para eficiencia)",
                    enum: [
                        "carro", 
                        "moto", 
                        "bicicleta", 
                        "camion", 
                        "otro"
                    ]
                },
                activo: { 
                    bsonType: "bool", 
                    description: "Indica si el parqueo está activo (true) o finalizado (false)", 
                    default: true 
                }
            }
        }
    }
}


