// Definicion de roles y control de acceso

use("campus_parking")

// --- 1. Rol de Administrador ---
// Este rol tiene permisos completos sobre todas las colecciones y puede administrar usuarios y roles.
db.createRole({
    role: "administrador",
    privileges: [
        {
            resource: { db: "campus_parking", collection: "" }, // "" significa todas las colecciones en la DB
            actions: ["find", "insert", "update", "remove"]
        },
        // Privilegios para administrar usuarios y roles del sistema
        {
            resource: { db: "campus_parking", collection: "system.users" },
            actions: ["insert", "update", "remove", "find"]
        },
        {
            resource: { db: "campus_parking", collection: "system.roles" },
            actions: ["insert", "update", "remove", "find"]
        }
    ],
    // Roles heredados para simplificar: readWrite para la DB y userAdmin para la gestión de usuarios
    roles: [
        { role: "readWrite", db: "campus_parking" },
        { role: "userAdmin", db: "campus_parking" }
    ]
});

// --- 2. Rol de Empleado de Sede ---
// Este rol tiene permisos para gestionar parqueos y consultar información necesaria para su trabajo.
db.createRole({
    role: "empleadoSede",
    privileges: [
        // Puede leer clientes y vehículos registrados
        {
            resource: { db: "campus_parking", collection: "usuarios" },
            actions: ["find"]
        },
        {
            resource: { db: "campus_parking", collection: "vehiculos" },
            actions: ["find"]
        },
        // Puede registrar ingresos (insert) y marcar salidas (update) en la colección 'parqueos'
        {
            resource: { db: "campus_parking", collection: "parqueos" },
            actions: ["insert", "update"]
        },
        // Puede leer información de sedes y zonas para orientar a los clientes o verificar cupos.
        // La visualización de datos de su sede específica se controlará en la aplicación.
        {
            resource: { db: "campus_parking", collection: "sedes" },
            actions: ["find"]
        },
        {
            resource: { db: "campus_parking", collection: "zonas" },
            actions: ["find"]
        }
    ],
    // Hereda el rol 'read' para la base de datos para facilitar consultas generales.
    roles: [
        { role: "read", db: "campus_parking" }
    ]
});

// --- 3. Rol de Cliente ---
// Este rol tiene acceso limitado a su propia información y a la disponibilidad general.
// Las consultas para "su propia información" e "historial de parqueos" se filtrarán
// por 'cliente_id' o '_id' del usuario en la lógica de la aplicación.
db.createRole({
    role: "cliente",
    privileges: [
        // Permiso para leer su propio documento de usuario (la aplicación lo filtrará por el ID del usuario logueado)
        {
            resource: { db: "campus_parking", collection: "usuarios" },
            actions: ["find"]
        },
        // Permiso para leer su historial de parqueos (la aplicación lo filtrará por el ID del cliente)
        {
            resource: { db: "campus_parking", collection: "parqueos" },
            actions: ["find"]
        },
        // Permiso para ver la disponibilidad general de zonas y tarifas
        {
            resource: { db: "campus_parking", collection: "zonas" },
            actions: ["find"]
        },
        {
            resource: { db: "campus_parking", collection: "sedes" },
            actions: ["find"]
        }
    ],
    // Hereda el rol 'read' para la base de datos para consultas básicas.
    roles: [
        { role: "read", db: "campus_parking" }
    ]
});

// --- Ejemplos de Creación y Asignación de Usuarios con estos Roles ---

// Para la seguridad, en un entorno de producción, las contraseñas deben ser hash y no texto plano.
// 'passwordPrompt()' es útil en la shell de MongoDB para pedir la contraseña de forma segura.

// 1. Crear un usuario administrador
// Asignamos a "Gabriel Silva" (ID: 66839352e4b01e3e0e9f1a01) el rol de administrador.
// Para que este usuario sea funcional con este rol, el '_id' del usuario
// en la colección 'usuarios' debe coincidir con el 'user' aquí si la app lo usa para lookup.
// Sin embargo, para la gestión de roles internos de MongoDB, se crea un nuevo usuario de DB.
db.createUser({
    user: "gabrielAdmin", // Nombre de usuario para la autenticación en MongoDB
    pwd: passwordPrompt(), // Solicita la contraseña de forma segura en la shell
    roles: [{ role: "administrador", db: "campus_parking" }]
});
print("Usuario 'gabrielAdmin' creado con el rol 'administrador'.");


// 2. Crear un usuario empleado de sede
// Asignamos a "Paola Restrepo" (ID: 66839352e4b01e3e0e9f1a04) el rol de empleadoSede.
// La 'sede_asignada_id' en la colección 'usuarios' se usará en la lógica de la aplicación.
db.createUser({
    user: "paolaEmpleadoMedellin",
    pwd: passwordPrompt(),
    roles: [{ role: "empleadoSede", db: "campus_parking" }]
    // La customData no se usa directamente para la aplicación de roles de MongoDB
    // pero podría ser un campo de referencia para tu backend.
    // customData: { usuario_id_referencia: new ObjectId("66839352e4b01e3e0e9f1a04") }
});
print("Usuario 'paolaEmpleadoMedellin' creado con el rol 'empleadoSede'.");


// 3. Crear un usuario cliente
// Asignamos a "Carolina Martínez" (ID: 668395e2f3d14e7a8b6c5d01) el rol de cliente.
// El 'cliente_id' en la lógica de tu aplicación permitirá filtrar su información.
db.createUser({
    user: "carolinaCliente",
    pwd: passwordPrompt(),
    roles: [{ role: "cliente", db: "campus_parking" }]
    // customData: { cliente_id_referencia: new ObjectId("668395e2f3d14e7a8b6c5d01") }
});
print("Usuario 'carolinaCliente' creado con el rol 'cliente'.");