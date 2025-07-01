// Poblamiento de la base con datos de prueba realistas


// 3 SEDES DISTINTAS

db.sedes.insertMany([
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4d1"),
        nombre: "Sede Centro - Medellín",
        ciudad: "Medellín",
        direccion: "Carrera 45 # 50-10, La Candelaria",
        telefono: "3101234567",
        capacidad_total: 250
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4d2"),
        nombre: "Sede Norte - Bogotá",
        ciudad: "Bogotá",
        direccion: "Avenida 19 # 100-25, Usaquén",
        telefono: "3209876543",
        capacidad_total: 200
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4d3"),
        nombre: "Sede Sur - Cali",
        ciudad: "Cali",
        direccion: "Calle 13 # 66-80, Ciudad Jardín",
        telefono: "3005551234",
        capacidad_total: 180
    }
])

// 5 Zonas por SVGDefsElement, con CSSSupportsRule, precios y tipos de vehiculos

db.zonas.insertMany([
    // Zonas para Sede Centro - Medellín (ID: 66838b97c0f823a0d9b6e4d1)
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4e1"),
        nombre: "Zona A - Carros Cubierta",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"),
        capacidad_maxima: 80,
        cupos_disponibles: 75,
        tarifas: { carro: 150, camion: 250 },
        tipos_vehiculo_permitidos: ["carro", "camion"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4e2"),
        nombre: "Zona B - Motos Techada",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"),
        capacidad_maxima: 60,
        cupos_disponibles: 55,
        tarifas: { moto: 100 },
        tipos_vehiculo_permitidos: ["moto"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4e3"),
        nombre: "Zona C - Bicicletas",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"),
        capacidad_maxima: 40,
        cupos_disponibles: 40,
        tarifas: { bicicleta: 50 },
        tipos_vehiculo_permitidos: ["bicicleta"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4e8"), // Nueva ID
        nombre: "Zona D - Carga y Descarga", // Nueva zona para Medellín
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"),
        capacidad_maxima: 10,
        cupos_disponibles: 8,
        tarifas: { camion: 300, otro: 280 },
        tipos_vehiculo_permitidos: ["camion", "otro"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4e9"), // Nueva ID
        nombre: "Zona E - Visitantes (Corta Estancia)", // Nueva zona para Medellín
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"),
        capacidad_maxima: 20,
        cupos_disponibles: 15,
        tarifas: { carro: 180, moto: 130 },
        tipos_vehiculo_permitidos: ["carro", "moto"],
        estado: "activa"
    },

    // Zonas para Sede Norte - Bogotá (ID: 66838b97c0f823a0d9b6e4d2)
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4e4"),
        nombre: "Zona Premium - Carros",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"),
        capacidad_maxima: 70,
        cupos_disponibles: 60,
        tarifas: { carro: 200 },
        tipos_vehiculo_permitidos: ["carro"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4e5"),
        nombre: "Zona Descubierta - Mixta",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"),
        capacidad_maxima: 130,
        cupos_disponibles: 120,
        tarifas: { carro: 180, moto: 120, camion: 300 },
        tipos_vehiculo_permitidos: ["carro", "moto", "camion"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4ea"), // Nueva ID
        nombre: "Zona Motos Exclusiva", // Nueva zona para Bogotá
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"),
        capacidad_maxima: 50,
        cupos_disponibles: 45,
        tarifas: { moto: 110 },
        tipos_vehiculo_permitidos: ["moto"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4eb"), // Nueva ID
        nombre: "Zona Bicicletas Norte", // Nueva zona para Bogotá
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"),
        capacidad_maxima: 30,
        cupos_disponibles: 30,
        tarifas: { bicicleta: 60 },
        tipos_vehiculo_permitidos: ["bicicleta"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4ec"), // Nueva ID
        nombre: "Zona VIP - Sede Norte", // Nueva zona para Bogotá
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"),
        capacidad_maxima: 20,
        cupos_disponibles: 18,
        tarifas: { carro: 250 },
        tipos_vehiculo_permitidos: ["carro"],
        estado: "activa"
    },

    // Zonas para Sede Sur - Cali (ID: 66838b97c0f823a0d9b6e4d3)
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4e6"),
        nombre: "Zona Principal - Cali",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"),
        capacidad_maxima: 90,
        cupos_disponibles: 85,
        tarifas: { carro: 160, moto: 90 },
        tipos_vehiculo_permitidos: ["carro", "moto"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4e7"),
        nombre: "Zona Económica - Cali",
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"),
        capacidad_maxima: 90,
        cupos_disponibles: 90,
        tarifas: { carro: 140, bicicleta: 40 },
        tipos_vehiculo_permitidos: ["carro", "bicicleta"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4ed"), // Nueva ID
        nombre: "Zona Camiones - Cali", // Nueva zona para Cali
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"),
        capacidad_maxima: 15,
        cupos_disponibles: 12,
        tarifas: { camion: 280 },
        tipos_vehiculo_permitidos: ["camion"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4ee"), // Nueva ID
        nombre: "Zona Patio Trasero", // Nueva zona para Cali
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"),
        capacidad_maxima: 50,
        cupos_disponibles: 48,
        tarifas: { carro: 150, moto: 80 },
        tipos_vehiculo_permitidos: ["carro", "moto"],
        estado: "activa"
    },
    {
        _id: new ObjectId("66838b97c0f823a0d9b6e4ef"), // Nueva ID
        nombre: "Zona de Motos Expresa", // Nueva zona para Cali
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"),
        capacidad_maxima: 35,
        cupos_disponibles: 30,
        tarifas: { moto: 110 },
        tipos_vehiculo_permitidos: ["moto"],
        estado: "activa"
    }
])

db.usuarios.insertMany([
    // --- Administradores (3) ---
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1a01"), // ID de ejemplo
        nombre: "Gabriel",
        apellido: "Silva",
        email: "gabriel.admin@campus.com",
        cedula: "1000101010",
        telefono: "3001010101",
        tipo_usuario: "Administrador",
        password: "hashed_password_gabriel"
    },
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1a02"), // ID de ejemplo
        nombre: "Natalia",
        apellido: "Pinzón",
        email: "natalia.admin@campus.com",
        cedula: "1000202020",
        telefono: "3002020202",
        tipo_usuario: "Administrador",
        password: "hashed_password_natalia"
    },
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1a03"), // ID de ejemplo
        nombre: "Jorge",
        apellido: "Cárdenas",
        email: "jorge.admin@campus.com",
        cedula: "1000303030",
        telefono: "3003030303",
        tipo_usuario: "Administrador",
        password: "hashed_password_jorge"
    },

    // --- Empleados de Sede (7) ---
    // Empleados para Sede Centro - Medellín (ID: 66838b97c0f823a0d9b6e4d1)
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1a04"), // ID de ejemplo
        nombre: "Paola",
        apellido: "Restrepo",
        email: "paola.medellin@campus.com",
        cedula: "1000404040",
        telefono: "3004040404",
        tipo_usuario: "Empleado de Sede",
        password: "hashed_password_paola",
        sede_asignada_id: new ObjectId("66838b97c0f823a0d9b6e4d1") // Sede Centro - Medellín
    },
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1a05"), // ID de ejemplo
        nombre: "Fabián",
        apellido: "Quintero",
        email: "fabian.medellin@campus.com",
        cedula: "1000505050",
        telefono: "3005050505",
        tipo_usuario: "Empleado de Sede",
        password: "hashed_password_fabian",
        sede_asignada_id: new ObjectId("66838b97c0f823a0d9b6e4d1") // Sede Centro - Medellín
    },

    // Empleados para Sede Norte - Bogotá (ID: 66838b97c0f823a0d9b6e4d2)
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1a06"), // ID de ejemplo
        nombre: "Daniela",
        apellido: "Beltrán",
        email: "daniela.bogota@campus.com",
        cedula: "1000606060",
        telefono: "3006060606",
        tipo_usuario: "Empleado de Sede",
        password: "hashed_password_daniela",
        sede_asignada_id: new ObjectId("66838b97c0f823a0d9b6e4d2") // Sede Norte - Bogotá
    },
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1a07"), // ID de ejemplo
        nombre: "Roberto",
        apellido: "Duque",
        email: "roberto.bogota@campus.com",
        cedula: "1000707070",
        telefono: "3007070707",
        tipo_usuario: "Empleado de Sede",
        password: "hashed_password_roberto",
        sede_asignada_id: new ObjectId("66838b97c0f823a0d9b6e4d2") // Sede Norte - Bogotá
    },
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1a08"), // ID de ejemplo
        nombre: "Liliana",
        apellido: "Valencia",
        email: "liliana.bogota@campus.com",
        cedula: "1000808080",
        telefono: "3008080808",
        tipo_usuario: "Empleado de Sede",
        password: "hashed_password_liliana",
        sede_asignada_id: new ObjectId("66838b97c0f823a0d9b6e4d2") // Sede Norte - Bogotá
    },

    // Empleados para Sede Sur - Cali (ID: 66838b97c0f823a0d9b6e4d3)
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1a09"), // ID de ejemplo
        nombre: "Ricardo",
        apellido: "Mora",
        email: "ricardo.cali@campus.com",
        cedula: "1000909090",
        telefono: "3009090909",
        tipo_usuario: "Empleado de Sede",
        password: "hashed_password_ricardo",
        sede_asignada_id: new ObjectId("66838b97c0f823a0d9b6e4d3") // Sede Sur - Cali
    },
    {
        _id: new ObjectId("66839352e4b01e3e0e9f1a0a"), // ID de ejemplo
        nombre: "Sofía",
        apellido: "Montoya",
        email: "sofia.cali@campus.com",
        cedula: "1001010101",
        telefono: "3010101010",
        tipo_usuario: "Empleado de Sede",
        password: "hashed_password_sofia",
        sede_asignada_id: new ObjectId("66838b97c0f823a0d9b6e4d3") // Sede Sur - Cali
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d01"), // ID de ejemplo
        nombre: "Carolina",
        apellido: "Martínez",
        email: "carolina.martinez@example.com",
        cedula: "1012345678",
        telefono: "3001234567",
        tipo_usuario: "Cliente",
        password: "hashed_password_carolina"
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d02"), // ID de ejemplo
        nombre: "Roberto",
        apellido: "Gómez",
        email: "roberto.gomez@example.com",
        cedula: "1023456789",
        telefono: "3012345678",
        tipo_usuario: "Cliente",
        password: "hashed_password_roberto"
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d03"), // ID de ejemplo
        nombre: "Laura",
        apellido: "Hernández",
        email: "laura.hernandez@example.com",
        cedula: "1034567890",
        telefono: "3023456789",
        tipo_usuario: "Cliente",
        password: "hashed_password_laura"
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d04"), // ID de ejemplo
        nombre: "Miguel",
        apellido: "Díaz",
        email: "miguel.diaz@example.com",
        cedula: "1045678901",
        telefono: "3034567890",
        tipo_usuario: "Cliente",
        password: "hashed_password_miguel"
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d05"), // ID de ejemplo
        nombre: "Sofía",
        apellido: "Rojas",
        email: "sofia.rojas@example.com",
        cedula: "1056789012",
        telefono: "3045678901",
        tipo_usuario: "Cliente",
        password: "hashed_password_sofia"
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d06"), // ID de ejemplo
        nombre: "Andrés",
        apellido: "Castro",
        email: "andres.castro@example.com",
        cedula: "1067890123",
        telefono: "3056789012",
        tipo_usuario: "Cliente",
        password: "hashed_password_andres"
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d07"), // ID de ejemplo
        nombre: "Valentina",
        apellido: "Muñoz",
        email: "valentina.munoz@example.com",
        cedula: "1078901234",
        telefono: "3067890123",
        tipo_usuario: "Cliente",
        password: "hashed_password_valentina"
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d08"), // ID de ejemplo
        nombre: "Juan Camilo",
        apellido: "Vargas",
        email: "juancamilo.vargas@example.com",
        cedula: "1089012345",
        telefono: "3078901234",
        tipo_usuario: "Cliente",
        password: "hashed_password_juancamilo"
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d09"), // ID de ejemplo
        nombre: "Isabella",
        apellido: "Ramírez",
        email: "isabella.ramirez@example.com",
        cedula: "1090123456",
        telefono: "3089012345",
        tipo_usuario: "Cliente",
        password: "hashed_password_isabella"
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d0a"), // ID de ejemplo
        nombre: "Daniel",
        apellido: "Torres",
        email: "daniel.torres@example.com",
        cedula: "1101234567",
        telefono: "3090123456",
        tipo_usuario: "Cliente",
        password: "hashed_password_daniel"
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d0b"), // ID de ejemplo
        nombre: "Camila",
        apellido: "Prieto",
        email: "camila.prieto@example.com",
        cedula: "1112345678",
        telefono: "3101234567",
        tipo_usuario: "Cliente",
        password: "hashed_password_camila"
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d0c"), // ID de ejemplo
        nombre: "Santiago",
        apellido: "Suárez",
        email: "santiago.suarez@example.com",
        cedula: "1123456789",
        telefono: "3112345678",
        tipo_usuario: "Cliente",
        password: "hashed_password_santiago"
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d0d"), // ID de ejemplo
        nombre: "Mariana",
        apellido: "Acosta",
        email: "mariana.acosta@example.com",
        cedula: "1134567890",
        telefono: "3123456789",
        tipo_usuario: "Cliente",
        password: "hashed_password_mariana"
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d0e"), // ID de ejemplo
        nombre: "Pablo",
        apellido: "Rivera",
        email: "pablo.rivera@example.com",
        cedula: "1145678901",
        telefono: "3134567890",
        tipo_usuario: "Cliente",
        password: "hashed_password_pablo"
    },
    {
        _id: new ObjectId("668395e2f3d14e7a8b6c5d0f"), // ID de ejemplo
        nombre: "Valeria",
        apellido: "Lara",
        email: "valeria.lara@example.com",
        cedula: "1156789012",
        telefono: "3145678901",
        tipo_usuario: "Cliente",
        password: "hashed_password_valeria"
    }
])


db.vehiculos.insertMany([
    // --- Carros (15 vehículos) ---
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01001"),
        placa: "ABC123",
        tipo_vehiculo: "carro",
        marca: "Chevrolet",
        modelo: "Onix",
        color: "Gris",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d01") // Carolina Martínez
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01002"),
        placa: "XYZ789",
        tipo_vehiculo: "carro",
        marca: "Renault",
        modelo: "Sandero",
        color: "Blanco",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d02") // Roberto Gómez
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01003"),
        placa: "DEF456",
        tipo_vehiculo: "carro",
        marca: "Mazda",
        modelo: "3",
        color: "Rojo",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d03") // Laura Hernández
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01004"),
        placa: "GHI012",
        tipo_vehiculo: "carro",
        marca: "Nissan",
        modelo: "Versa",
        color: "Negro",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d04") // Miguel Díaz
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01005"),
        placa: "JKL345",
        tipo_vehiculo: "carro",
        marca: "Volkswagen",
        modelo: "Jetta",
        color: "Azul",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d05") // Sofía Rojas
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01006"),
        placa: "MNO678",
        tipo_vehiculo: "carro",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Plata",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d06") // Andrés Castro
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01007"),
        placa: "PQR901",
        tipo_vehiculo: "carro",
        marca: "Hyundai",
        modelo: "Elantra",
        color: "Blanco",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d07") // Valentina Muñoz
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01008"),
        placa: "STU234",
        tipo_vehiculo: "carro",
        marca: "Kia",
        modelo: "Picanto",
        color: "Rojo",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d08") // Juan Camilo Vargas
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01009"),
        placa: "VWX567",
        tipo_vehiculo: "carro",
        marca: "Ford",
        modelo: "Fiesta",
        color: "Verde",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d09") // Isabella Ramírez
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0100A"),
        placa: "YZA890",
        tipo_vehiculo: "carro",
        marca: "Chevrolet",
        modelo: "Tracker",
        color: "Gris",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d01") // Carolina Martínez (segundo carro)
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0100B"),
        placa: "BCD123",
        tipo_vehiculo: "carro",
        marca: "Renault",
        modelo: "Duster",
        color: "Naranja",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d0A") // Daniel Torres
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0100C"),
        placa: "EFG456",
        tipo_vehiculo: "carro",
        marca: "Nissan",
        modelo: "Kicks",
        color: "Azul",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d0B") // Camila Prieto
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0100D"),
        placa: "HIJ789",
        tipo_vehiculo: "carro",
        marca: "Mazda",
        modelo: "CX-5",
        color: "Blanco",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d0C") // Santiago Suárez
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0100E"),
        placa: "KLM012",
        tipo_vehiculo: "carro",
        marca: "Toyota",
        modelo: "Hilux",
        color: "Negro",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d0D") // Mariana Acosta
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0100F"),
        placa: "NOP345",
        tipo_vehiculo: "carro",
        marca: "Hyundai",
        modelo: "Tucson",
        color: "Gris Oscuro",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d0E") // Pablo Rivera
    },

    // --- Motos (8 vehículos) ---
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01010"),
        placa: "MTO10A",
        tipo_vehiculo: "moto",
        marca: "Yamaha",
        modelo: "FZ25",
        color: "Negro",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d02") // Roberto Gómez
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01011"),
        placa: "MOT20B",
        tipo_vehiculo: "moto",
        marca: "AKT",
        modelo: "NKD",
        color: "Azul",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d04") // Miguel Díaz
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01012"),
        placa: "MTC30C",
        tipo_vehiculo: "moto",
        marca: "Honda",
        modelo: "CB190R",
        color: "Rojo",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d06") // Andrés Castro
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01013"),
        placa: "MTD40D",
        tipo_vehiculo: "moto",
        marca: "Suzuki",
        modelo: "Gixxer",
        color: "Blanco",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d08") // Juan Camilo Vargas
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01014"),
        placa: "MTE50E",
        tipo_vehiculo: "moto",
        marca: "Bajaj",
        modelo: "Pulsar 180",
        color: "Amarillo",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d0A") // Daniel Torres
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01015"),
        placa: "MTF60F",
        tipo_vehiculo: "moto",
        marca: "KTM",
        modelo: "Duke 200",
        color: "Naranja",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d0C") // Santiago Suárez
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01016"),
        placa: "MTG70G",
        tipo_vehiculo: "moto",
        marca: "TVS",
        modelo: "Apache 160",
        color: "Negro",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d0E") // Pablo Rivera
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01017"),
        placa: "MTH80H",
        tipo_vehiculo: "moto",
        marca: "Hero",
        modelo: "Ignitor",
        color: "Gris",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d0F") // Valeria Lara
    },

    // --- Bicicletas (5 vehículos) ---
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01018"),
        placa: "BIC01", // Placa simbólica para bicicletas
        tipo_vehiculo: "bicicleta",
        marca: "Specialized",
        modelo: "Hardrock",
        color: "Azul",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d01") // Carolina Martínez
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f01019"),
        placa: "BIC02",
        tipo_vehiculo: "bicicleta",
        marca: "GW",
        modelo: "Alligator",
        color: "Verde",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d03") // Laura Hernández
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0101A"),
        placa: "BIC03",
        tipo_vehiculo: "bicicleta",
        marca: "Scott",
        modelo: "Aspect",
        color: "Negro",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d05") // Sofía Rojas
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0101B"),
        placa: "BIC04",
        tipo_vehiculo: "bicicleta",
        marca: "Giant",
        modelo: "Talon",
        color: "Rojo",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d07") // Valentina Muñoz
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0101C"),
        placa: "BIC05",
        tipo_vehiculo: "bicicleta",
        marca: "Cannondale",
        modelo: "Trail",
        color: "Gris",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d09") // Isabella Ramírez
    },

    // --- Camiones (2 vehículos) ---
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0101D"),
        placa: "TRK50E",
        tipo_vehiculo: "camion",
        marca: "Freightliner",
        modelo: "M2 106",
        color: "Blanco",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d0B") // Camila Prieto
    },
    {
        _id: new ObjectId("668397a7a5b6c7d8e9f0101E"),
        placa: "CAM60F",
        tipo_vehiculo: "camion",
        marca: "Hino",
        modelo: "Dutro",
        color: "Verde",
        propietario_id: new ObjectId("668395e2f3d14e7a8b6c5d0D") // Mariana Acosta
    }
])

db.parqueaderos.insertMany([
    // --- Parqueos Activos (aproximadamente 15-20) ---
    // Activo - Sede Centro - Carro (Carolina Martínez - ABC123)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54001"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01001"), // ABC123 (Carolina M.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d01"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e1"), // Zona A - Carros Cubierta
        hora_entrada: ISODate("2025-07-01T11:00:00.000Z"), // Hoy
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Norte - Moto (Miguel Díaz - MOT20B)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54002"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01011"), // MOT20B (Miguel D.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d04"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4ea"), // Zona Motos Exclusiva
        hora_entrada: ISODate("2025-07-01T10:30:00.000Z"), // Hoy
        tipo_vehiculo_parqueado: "moto",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Sur - Bicicleta (Isabella Ramírez - BIC05)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54003"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0101C"), // BIC05 (Isabella R.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d09"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e7"), // Zona Económica - Cali
        hora_entrada: ISODate("2025-07-01T09:45:00.000Z"), // Hoy
        tipo_vehiculo_parqueado: "bicicleta",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Centro - Camión (Camila Prieto - TRK50E)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54004"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0101D"), // TRK50E (Camila P.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0B"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e8"), // Zona D - Carga y Descarga
        hora_entrada: ISODate("2025-07-01T11:30:00.000Z"), // Hoy
        tipo_vehiculo_parqueado: "camion",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Norte - Carro (Santiago Suárez - EFG456)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54005"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0100C"), // EFG456 (Santiago S.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0C"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e4"), // Zona Premium - Carros
        hora_entrada: ISODate("2025-07-01T10:00:00.000Z"), // Hoy
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Sur - Moto (Valeria Lara - MTH80H)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54006"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01017"), // MTH80H (Valeria L.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0F"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4ef"), // Zona de Motos Expresa
        hora_entrada: ISODate("2025-07-01T11:15:00.000Z"), // Hoy
        tipo_vehiculo_parqueado: "moto",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Centro - Carro (Laura Hernández - DEF456)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54007"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01003"), // DEF456 (Laura H.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d03"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e1"), // Zona A - Carros Cubierta
        hora_entrada: ISODate("2025-07-01T08:00:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Norte - Carro (Miguel Díaz - GHI012)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54008"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01004"), // GHI012 (Miguel D.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d04"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e5"), // Zona Descubierta - Mixta
        hora_entrada: ISODate("2025-07-01T09:10:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Sur - Carro (Mariana Acosta - KLM012)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54009"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0100E"), // KLM012 (Mariana A.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0D"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e6"), // Zona Principal - Cali
        hora_entrada: ISODate("2025-07-01T07:40:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Centro - Moto (Roberto Gómez - MTO10A)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5400A"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01010"), // MTO10A (Roberto G.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d02"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e2"), // Zona B - Motos Techada
        hora_entrada: ISODate("2025-07-01T12:00:00.000Z"),
        tipo_vehiculo_parqueado: "moto",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Norte - Bicicleta (Sofía Rojas - BIC03)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5400B"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0101A"), // BIC03 (Sofía R.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d05"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4eb"), // Zona Bicicletas Norte
        hora_entrada: ISODate("2025-07-01T08:30:00.000Z"),
        tipo_vehiculo_parqueado: "bicicleta",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Sur - Camión (Mariana Acosta - CAM60F)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5400C"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0101E"), // CAM60F (Mariana A.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0D"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4ed"), // Zona Camiones - Cali
        hora_entrada: ISODate("2025-07-01T09:00:00.000Z"),
        tipo_vehiculo_parqueado: "camion",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Norte - Carro (Andrés Castro - MNO678)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5400D"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01006"), // MNO678 (Andrés C.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d06"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e4"), // Zona Premium - Carros
        hora_entrada: ISODate("2025-07-01T11:45:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Centro - Bicicleta (Carolina Martínez - BIC01)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5400E"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01018"), // BIC01 (Carolina M.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d01"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e3"), // Zona C - Bicicletas
        hora_entrada: ISODate("2025-07-01T09:00:00.000Z"),
        tipo_vehiculo_parqueado: "bicicleta",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Cali - Carro (Daniel Torres - BCD123)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5400F"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0100B"), // BCD123 (Daniel T.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0A"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e6"), // Zona Principal - Cali
        hora_entrada: ISODate("2025-07-01T10:15:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Bogotá - Moto (Santiago Suárez - MTF60F)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54010"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01015"), // MTF60F (Santiago S.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0C"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4ea"), // Zona Motos Exclusiva
        hora_entrada: ISODate("2025-07-01T07:30:00.000Z"),
        tipo_vehiculo_parqueado: "moto",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Medellín - Carro (Juan Camilo Vargas - STU234)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54011"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01008"), // STU234 (Juan C. V.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d08"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e1"), // Zona A - Carros Cubierta
        hora_entrada: ISODate("2025-07-01T09:50:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Bogotá - Carro (Sofía Rojas - JKL345)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54012"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01005"), // JKL345 (Sofía R.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d05"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e4"), // Zona Premium - Carros
        hora_entrada: ISODate("2025-07-01T10:40:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Cali - Moto (Pablo Rivera - MTG70G)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54013"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01016"), // MTG70G (Pablo R.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0E"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e6"), // Zona Principal - Cali
        hora_entrada: ISODate("2025-07-01T08:10:00.000Z"),
        tipo_vehiculo_parqueado: "moto",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Medellín - Camión (Carolina Martínez - CAM60F - ¡otro camión!)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54014"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0101E"), // CAM60F (Mariana A.) - OJO: Este id de vehículo se usó arriba. Usaremos un nuevo ID de vehículo.
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0D"), // Mariana Acosta
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e8"), // Zona D - Carga y Descarga
        hora_entrada: ISODate("2025-07-01T12:05:00.000Z"),
        tipo_vehiculo_parqueado: "camion",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Activo - Sede Bogotá - Carro (Valeria Lara - NOP345)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54015"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0100F"), // NOP345 (Valeria L.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0F"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e5"), // Zona Descubierta - Mixta
        hora_entrada: ISODate("2025-07-01T09:20:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },

    // --- Parqueos Finalizados (aproximadamente 30-35) ---
    // Finalizado - Sede Centro - Carro (Roberto Gómez - XYZ789)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54016"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01002"), // XYZ789 (Roberto G.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d02"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e1"), // Zona A - Carros Cubierta
        hora_entrada: ISODate("2025-06-28T08:00:00.000Z"),
        hora_salida: ISODate("2025-06-28T10:30:00.000Z"),
        tiempo_parqueo_minutos: 150, // 2 horas y 30 minutos
        costo_total: 22500, // 150 * 150 (tarifa de Zona A)
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Finalizado - Sede Norte - Moto (Andrés Castro - MTC30C)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54017"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01012"), // MTC30C (Andrés C.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d06"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4ea"), // Zona Motos Exclusiva
        hora_entrada: ISODate("2025-06-29T14:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T15:45:00.000Z"),
        tiempo_parqueo_minutos: 105, // 1 hora y 45 minutos
        costo_total: 11550, // 105 * 110 (tarifa de Zona Motos Exclusiva)
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    // Finalizado - Sede Sur - Bicicleta (Valentina Muñoz - BIC04)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54018"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0101B"), // BIC04 (Valentina M.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d07"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e7"), // Zona Económica - Cali
        hora_entrada: ISODate("2025-06-30T07:00:00.000Z"),
        hora_salida: ISODate("2025-06-30T07:45:00.000Z"),
        tiempo_parqueo_minutos: 45,
        costo_total: 1800, // 45 * 40 (tarifa de Zona Económica)
        tipo_vehiculo_parqueado: "bicicleta",
        activo: false
    },
    // Finalizado - Sede Centro - Carro (Carolina Martínez - ABC123, segundo uso)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54019"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01001"), // ABC123 (Carolina M.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d01"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e9"), // Zona E - Visitantes
        hora_entrada: ISODate("2025-06-27T11:00:00.000Z"),
        hora_salida: ISODate("2025-06-27T11:50:00.000Z"),
        tiempo_parqueo_minutos: 50,
        costo_total: 9000, // 50 * 180 (tarifa de Zona E)
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Finalizado - Sede Norte - Carro (Roberto Gómez - XYZ789, segundo uso)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5401A"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01002"), // XYZ789 (Roberto G.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d02"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e4"), // Zona Premium - Carros
        hora_entrada: ISODate("2025-06-26T09:00:00.000Z"),
        hora_salida: ISODate("2025-06-26T12:00:00.000Z"),
        tiempo_parqueo_minutos: 180,
        costo_total: 36000, // 180 * 200 (tarifa de Zona Premium)
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Finalizado - Sede Sur - Carro (Laura Hernández - DEF456)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5401B"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01003"), // DEF456 (Laura H.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d03"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e6"), // Zona Principal - Cali
        hora_entrada: ISODate("2025-06-25T13:00:00.000Z"),
        hora_salida: ISODate("2025-06-25T14:30:00.000Z"),
        tiempo_parqueo_minutos: 90,
        costo_total: 14400, // 90 * 160 (tarifa de Zona Principal)
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Finalizado - Sede Centro - Moto (Miguel Díaz - MOT20B, segundo uso)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5401C"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01011"), // MOT20B (Miguel D.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d04"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e2"), // Zona B - Motos Techada
        hora_entrada: ISODate("2025-06-24T10:00:00.000Z"),
        hora_salida: ISODate("2025-06-24T11:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 6000, // 60 * 100 (tarifa de Zona B)
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    // Finalizado - Sede Norte - Carro (Sofía Rojas - JKL345)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5401D"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01005"), // JKL345 (Sofía R.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d05"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e5"), // Zona Descubierta - Mixta
        hora_entrada: ISODate("2025-06-23T16:00:00.000Z"),
        hora_salida: ISODate("2025-06-23T17:15:00.000Z"),
        tiempo_parqueo_minutos: 75,
        costo_total: 13500, // 75 * 180 (tarifa de Zona Descubierta)
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Finalizado - Sede Sur - Camión (Camila Prieto - TRK50E, segundo uso)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5401E"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0101D"), // TRK50E (Camila P.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0B"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4ed"), // Zona Camiones - Cali
        hora_entrada: ISODate("2025-06-22T09:00:00.000Z"),
        hora_salida: ISODate("2025-06-22T10:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 16800, // 60 * 280 (tarifa de Zona Camiones)
        tipo_vehiculo_parqueado: "camion",
        activo: false
    },
    // Finalizado - Sede Centro - Bicicleta (Laura Hernández - BIC02)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5401F"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01019"), // BIC02 (Laura H.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d03"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e3"), // Zona C - Bicicletas
        hora_entrada: ISODate("2025-06-21T08:00:00.000Z"),
        hora_salida: ISODate("2025-06-21T08:40:00.000Z"),
        tiempo_parqueo_minutos: 40,
        costo_total: 2000, // 40 * 50 (tarifa de Zona C)
        tipo_vehiculo_parqueado: "bicicleta",
        activo: false
    },
    // ... Y así sucesivamente, para llegar a 50 parqueos, mezclando activos y finalizados, y variando:
    // - Sedes (Medellín, Bogotá, Cali)
    // - Zonas (todas las que creaste)
    // - Tipos de vehículo (carro, moto, bicicleta, camion)
    // - Clientes (asigna a los 15 clientes de forma variada)
    // - Fechas (una mezcla de fechas recientes en junio y julio para pruebas de reportes)

    // Ejemplo de más parqueos para alcanzar los 50
    // Parqueo 17
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54020"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01006"), // MNO678 (Andrés C.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d06"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e5"), // Zona Descubierta - Mixta
        hora_entrada: ISODate("2025-06-29T10:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T10:55:00.000Z"),
        tiempo_parqueo_minutos: 55,
        costo_total: 9900,
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Parqueo 18
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54021"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01007"), // PQR901 (Valentina M.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d07"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e6"), // Zona Principal - Cali
        hora_entrada: ISODate("2025-06-30T14:30:00.000Z"),
        hora_salida: ISODate("2025-06-30T16:00:00.000Z"),
        tiempo_parqueo_minutos: 90,
        costo_total: 14400,
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Parqueo 19 (Activo)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54022"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01009"), // VWX567 (Isabella R.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d09"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e1"), // Zona A - Carros Cubierta
        hora_entrada: ISODate("2025-07-01T09:15:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Parqueo 20
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54023"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01010"), // MTO10A (Roberto G.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d02"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4ea"), // Zona Motos Exclusiva
        hora_entrada: ISODate("2025-06-28T11:00:00.000Z"),
        hora_salida: ISODate("2025-06-28T12:30:00.000Z"),
        tiempo_parqueo_minutos: 90,
        costo_total: 9900,
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    // Parqueo 21 (Activo)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54024"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01018"), // BIC01 (Carolina M.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d01"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e7"), // Zona Económica - Cali
        hora_entrada: ISODate("2025-07-01T08:50:00.000Z"),
        tipo_vehiculo_parqueado: "bicicleta",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Parqueo 22
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54025"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0100A"), // YZA890 (Carolina M.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d01"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e1"), // Zona A - Carros Cubierta
        hora_entrada: ISODate("2025-06-27T15:00:00.000Z"),
        hora_salida: ISODate("2025-06-27T16:20:00.000Z"),
        tiempo_parqueo_minutos: 80,
        costo_total: 12000,
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Parqueo 23
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54026"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0100B"), // BCD123 (Daniel T.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0A"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e4"), // Zona Premium - Carros
        hora_entrada: ISODate("2025-06-26T07:00:00.000Z"),
        hora_salida: ISODate("2025-06-26T08:10:00.000Z"),
        tiempo_parqueo_minutos: 70,
        costo_total: 14000,
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Parqueo 24 (Activo)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54027"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0100C"), // EFG456 (Santiago S.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0C"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e6"), // Zona Principal - Cali
        hora_entrada: ISODate("2025-07-01T10:00:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Parqueo 25
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54028"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01014"), // MTE50E (Daniel T.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0A"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e2"), // Zona B - Motos Techada
        hora_entrada: ISODate("2025-06-25T11:00:00.000Z"),
        hora_salida: ISODate("2025-06-25T12:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 6000,
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    // Parqueo 26
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54029"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01019"), // BIC02 (Laura H.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d03"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4eb"), // Zona Bicicletas Norte
        hora_entrada: ISODate("2025-06-24T09:30:00.000Z"),
        hora_salida: ISODate("2025-06-24T10:30:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 3600,
        tipo_vehiculo_parqueado: "bicicleta",
        activo: false
    },
    // Parqueo 27
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5402A"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0100E"), // KLM012 (Mariana A.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0D"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e6"), // Zona Principal - Cali
        hora_entrada: ISODate("2025-06-23T10:00:00.000Z"),
        hora_salida: ISODate("2025-06-23T11:40:00.000Z"),
        tiempo_parqueo_minutos: 100,
        costo_total: 16000,
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Parqueo 28
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5402B"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01015"), // MTF60F (Santiago S.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0C"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e2"), // Zona B - Motos Techada
        hora_entrada: ISODate("2025-06-22T08:00:00.000Z"),
        hora_salida: ISODate("2025-06-22T08:50:00.000Z"),
        tiempo_parqueo_minutos: 50,
        costo_total: 5000,
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    // Parqueo 29 (Activo)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5402C"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0100F"), // NOP345 (Valeria L.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0F"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e4"), // Zona Premium - Carros
        hora_entrada: ISODate("2025-07-01T10:20:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Parqueo 30
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5402D"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0101D"), // TRK50E (Camila P.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0B"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4ed"), // Zona Camiones - Cali
        hora_entrada: ISODate("2025-06-21T13:00:00.000Z"),
        hora_salida: ISODate("2025-06-21T13:50:00.000Z"),
        tiempo_parqueo_minutos: 50,
        costo_total: 14000,
        tipo_vehiculo_parqueado: "camion",
        activo: false
    },
    // Parqueo 31 (Activo)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5402E"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01001"), // ABC123 (Carolina M.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d01"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e9"), // Zona E - Visitantes
        hora_entrada: ISODate("2025-07-01T11:00:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Parqueo 32
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5402F"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01002"), // XYZ789 (Roberto G.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d02"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e5"), // Zona Descubierta - Mixta
        hora_entrada: ISODate("2025-06-30T10:00:00.000Z"),
        hora_salida: ISODate("2025-06-30T12:00:00.000Z"),
        tiempo_parqueo_minutos: 120,
        costo_total: 21600,
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Parqueo 33
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54030"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01003"), // DEF456 (Laura H.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d03"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e6"), // Zona Principal - Cali
        hora_entrada: ISODate("2025-06-29T14:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T15:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 9600,
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Parqueo 34 (Activo)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54031"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01011"), // MOT20B (Miguel D.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d04"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e2"), // Zona B - Motos Techada
        hora_entrada: ISODate("2025-07-01T09:30:00.000Z"),
        tipo_vehiculo_parqueado: "moto",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Parqueo 35
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54032"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0101A"), // BIC03 (Sofía R.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d05"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4eb"), // Zona Bicicletas Norte
        hora_entrada: ISODate("2025-06-28T07:00:00.000Z"),
        hora_salida: ISODate("2025-06-28T07:45:00.000Z"),
        tiempo_parqueo_minutos: 45,
        costo_total: 2700,
        tipo_vehiculo_parqueado: "bicicleta",
        activo: false
    },
    // Parqueo 36
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54033"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0101E"), // CAM60F (Mariana A.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0D"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4ed"), // Zona Camiones - Cali
        hora_entrada: ISODate("2025-06-27T10:00:00.000Z"),
        hora_salida: ISODate("2025-06-27T11:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 16800,
        tipo_vehiculo_parqueado: "camion",
        activo: false
    },
    // Parqueo 37 (Activo)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54034"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01007"), // PQR901 (Valentina M.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d07"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e1"), // Zona A - Carros Cubierta
        hora_entrada: ISODate("2025-07-01T08:00:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Parqueo 38
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54035"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01013"), // MTD40D (Juan C. V.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d08"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4ea"), // Zona Motos Exclusiva
        hora_entrada: ISODate("2025-06-26T14:00:00.000Z"),
        hora_salida: ISODate("2025-06-26T15:30:00.000Z"),
        tiempo_parqueo_minutos: 90,
        costo_total: 9900,
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    // Parqueo 39
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54036"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01009"), // VWX567 (Isabella R.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d09"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e6"), // Zona Principal - Cali
        hora_entrada: ISODate("2025-06-25T08:00:00.000Z"),
        hora_salida: ISODate("2025-06-25T09:10:00.000Z"),
        tiempo_parqueo_minutos: 70,
        costo_total: 11200,
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Parqueo 40 (Activo)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54037"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0101B"), // BIC04 (Valentina M.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d07"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e3"), // Zona C - Bicicletas
        hora_entrada: ISODate("2025-07-01T07:00:00.000Z"),
        tipo_vehiculo_parqueado: "bicicleta",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Parqueo 41
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54038"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0100A"), // YZA890 (Carolina M.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d01"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e4"), // Zona Premium - Carros
        hora_entrada: ISODate("2025-06-24T10:00:00.000Z"),
        hora_salida: ISODate("2025-06-24T11:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 12000,
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Parqueo 42
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54039"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0101E"), // CAM60F (Mariana A.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0D"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e8"), // Zona D - Carga y Descarga
        hora_entrada: ISODate("2025-06-23T11:00:00.000Z"),
        hora_salida: ISODate("2025-06-23T12:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 18000, // 60 * 300
        tipo_vehiculo_parqueado: "camion",
        activo: false
    },
    // Parqueo 43 (Activo)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5403A"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01004"), // GHI012 (Miguel D.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d04"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e6"), // Zona Principal - Cali
        hora_entrada: ISODate("2025-07-01T09:40:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Parqueo 44
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5403B"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0100F"), // NOP345 (Valeria L.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0F"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e5"), // Zona Descubierta - Mixta
        hora_entrada: ISODate("2025-06-22T08:00:00.000Z"),
        hora_salida: ISODate("2025-06-22T09:00:00.000Z"),
        tiempo_parqueo_minutos: 60,
        costo_total: 10800,
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Parqueo 45
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5403C"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01017"), // MTH80H (Valeria L.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0F"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4ef"), // Zona de Motos Expresa
        hora_entrada: ISODate("2025-06-21T10:00:00.000Z"),
        hora_salida: ISODate("2025-06-21T10:45:00.000Z"),
        tiempo_parqueo_minutos: 45,
        costo_total: 4950,
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    // Parqueo 46 (Activo)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5403D"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0100B"), // BCD123 (Daniel T.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0A"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e1"), // Zona A - Carros Cubierta
        hora_entrada: ISODate("2025-07-01T08:30:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Parqueo 47
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5403E"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0100C"), // EFG456 (Santiago S.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0C"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e4"), // Zona Premium - Carros
        hora_entrada: ISODate("2025-06-30T10:00:00.000Z"),
        hora_salida: ISODate("2025-06-30T10:40:00.000Z"),
        tiempo_parqueo_minutos: 40,
        costo_total: 8000,
        tipo_vehiculo_parqueado: "carro",
        activo: false
    },
    // Parqueo 48 (Activo)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a5403F"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f0100D"), // HIJ789 (Santiago S.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d0C"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d3"), // Sede Sur - Cali
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e6"), // Zona Principal - Cali
        hora_entrada: ISODate("2025-07-01T11:00:00.000Z"),
        tipo_vehiculo_parqueado: "carro",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    },
    // Parqueo 49
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54040"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01012"), // MTC30C (Andrés C.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d06"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d1"), // Sede Centro - Medellín
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4e2"), // Zona B - Motos Techada
        hora_entrada: ISODate("2025-06-29T13:00:00.000Z"),
        hora_salida: ISODate("2025-06-29T13:55:00.000Z"),
        tiempo_parqueo_minutos: 55,
        costo_total: 5500,
        tipo_vehiculo_parqueado: "moto",
        activo: false
    },
    // Parqueo 50 (Activo)
    {
        _id: new ObjectId("668398e1f0e9d8c7b6a54041"),
        vehiculo_id: new ObjectId("668397a7a5b6c7d8e9f01019"), // BIC02 (Laura H.)
        cliente_id: new ObjectId("668395e2f3d14e7a8b6c5d03"),
        sede_id: new ObjectId("66838b97c0f823a0d9b6e4d2"), // Sede Norte - Bogotá
        zona_id: new ObjectId("66838b97c0f823a0d9b6e4eb"), // Zona Bicicletas Norte
        hora_entrada: ISODate("2025-07-01T09:05:00.000Z"),
        tipo_vehiculo_parqueado: "bicicleta",
        activo: true,
        hora_salida: null,
        tiempo_parqueo_minutos: null,
        costo_total: null
    }
])