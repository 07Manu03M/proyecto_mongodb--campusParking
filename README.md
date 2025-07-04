# 📦 Campus Parking - Proyecto MongoDB

## 🚀 Introducción al proyecto

Campus Parking es una solución de backend basada en MongoDB para administrar múltiples parqueaderos distribuidos en distintas ciudades. El sistema centraliza información de usuarios, vehículos, sedes, zonas y parqueos activos, permitiendo operaciones seguras, consistentes y rápidas.

## 🧠 Justificación del uso de MongoDB

Se optó por MongoDB debido a:

- Su **estructura flexible** para manejar distintos tipos de datos (vehículos, tarifas, zonas...).
- Su capacidad de usar **documentos embebidos o referencias**, optimizando lecturas según necesidad.
- Soporte nativo para **transacciones, validaciones y agregaciones** complejas.
- Facilidad para escalar horizontalmente si el sistema crece.

## 🗃️ Diseño del modelo de datos

### 📁 Colecciones creadas

- `usuarios`
- `vehiculos`
- `sedes`
- `zonas`
- `parqueaderos`

### 🔗 Decisiones de uso: Referencias vs Embebidos

Se usaron **referencias** para mantener independencia entre entidades y evitar duplicidad:

- `vehiculo_id`, `cliente_id`, `sede_id`, `zona_id` en `parqueaderos` son referencias a otras colecciones.

Esto permite mayor integridad, evita inconsistencias, y mejora el manejo de relaciones entre documentos.

### ✅ Validaciones con `$jsonSchema`

Se implementaron validaciones para garantizar integridad de los datos:

#### 📄 `usuarios`

- Validación de correo electrónico.
- Teléfonos con entre 7 y 10 dígitos.
- Nombre con inicial mayúscula.

#### 📄 `vehiculos`

- Placa en mayúsculas y números.
- Marca, modelo, color y tipo obligatorios.
- `propietario_id` como referencia válida.

#### 📄 `sedes`

- Datos básicos como ciudad, dirección, teléfono.
- Capacidad total como entero positivo.

#### 📄 `zonas`

- Relación con sede (`sede_id`).
- Cupos disponibles y capacidad máxima como enteros ≥ 0.
- Tarifas diferenciadas por tipo de vehículo.
- Validación estricta de tipos de vehículos permitidos.

#### 📄 `parqueaderos`

- Referencias a otras colecciones (`vehiculo_id`, `zona_id`, etc.).
- Campos como `hora_entrada`, `activo`, y `tipo_vehiculo_parqueado`.
- Validaciones para garantizar que no haya parqueos sin referencia.

### 🔍 Índices

Se crearon índices para optimizar búsquedas:

- `parqueaderos.activo` (para consultas de parqueos activos).
- `usuarios.correo` (para autenticación).
- `vehiculos.placa` (para identificación rápida).
- `zonas.sede_id` (para búsquedas agrupadas por sede).
- `parqueaderos.hora_entrada` (para reportes históricos).

**Justificación técnica**:
- Aumentan el rendimiento de búsquedas frecuentes.
- Mejoran reportes y visualizaciones por filtros.
- Facilitan validación de unicidad en algunos campos clave.

## 🧪 Estructura de los datos de prueba

Los datos insertados en cada colección simulan un entorno real:

## Estructura de los datos de prueba

Se insertaron datos en todas las colecciones:

- **Sedes añadidas:** 3 sede principal.
- **Zonas añadidas:** 5 zonas en total con distintas capacidades y tipos de vehículo permitidos.
- **Usuarios añadidos:** 3 administradores, 7 operarios y 15 clientes.
- **Vehículos añadidos:** 30 vehículos (carros, motos y bicicletas), todos asociados a usuarios cliente.
- **Parqueaderos añadidos:** 50 registros (activos e históricos), con referencias válidas y variedad de combinaciones sede/zona/vehículo.


## Explicación de cada agregación

(Nota: Aquí se omite el código exacto por brevedad. Se asume que en el proyecto se incluyeron las siguientes consultas con agregaciones):

* Consulta de parqueaderos activos por sede y tipo de vehículo.
* Consulta de disponibilidad por zona.
* Consulta de ingresos totales por día/mes.
* Consulta de parqueos más frecuentes por cliente.

Cada agregación fue diseñada con `$lookup`, `$group`, `$match`, `$project` y operadores como `$sum`, `$avg` o `$sort` para responder a requerimientos analíticos.

## Transacción MongoDB

### Escenario utilizado

Registrar un nuevo parqueo y disminuir el cupo disponible de la zona correspondiente. Se utilizó una transacción para asegurar la consistencia de ambas operaciones.

### Código explicado paso a paso

```js
use("campus_parking")

const session = db.getMongo().startSession();
const dbSession = session.getDatabase("campus_parking");

session.startTransaction();

try {
  const ingreso = {
    vehiculo_id: ObjectId("668397a7a5b6c7d8e9f01013"),
    cliente_id: ObjectId("668395e2f3d14e7a8b6c5d07"),
    sede_id: ObjectId("66838b97c0f823a0d9b6e4d2"),
    zona_id: ObjectId("66838b97c0f823a0d9b6e4e3"),
    hora_entrada: new Date(),
    hora_salida: null,
    tiempo_parqueo_minutos: null,
    costo_total: null,
    tipo_vehiculo_parqueado: "moto",
    activo: true
  };

  dbSession.parqueos.insertOne(ingreso);

  dbSession.zonas.updateOne(
    { _id: ObjectId("66838b97c0f823a0d9b6e4e3"), cupos_disponibles: { $gt: 0 } },
    { $inc: { cupos_disponibles: -1 } }
  );

  session.commitTransaction();
  print("Ingreso registrado con éxito.");
} catch (error) {
  session.abortTransaction();
  print("Error en la transacción:", error);
} finally {
  session.endSession();
}
```

La transacción asegura que si una de las operaciones falla, ninguna de las dos se aplicará.

## 🔐 Roles y control de acceso

### Descripción de cada rol

* **Administrador** (`administrador`):

  * Permisos completos sobre todas las colecciones.
  * Puede gestionar usuarios y roles del sistema (`system.users`, `system.roles`).
  * Hereda los roles `readWrite` y `userAdmin` sobre la base de datos.

* **Empleado de sede** (`empleadoSede`):

  * Puede leer usuarios y vehículos.
  * Puede insertar y actualizar registros en la colección `parqueos`.
  * Puede leer información de `sedes` y `zonas`.
  * Hereda el rol `read` para consultas generales.

* **Cliente** (`cliente`):

  * Puede consultar su propia información en `usuarios`, `parqueos`, `sedes` y `zonas`.
  * Hereda el rol `read` para consultas básicas.

### Ejemplo de creación de usuarios con roles personalizados

```js
// Crear usuario administrador
use campus_parking;
db.createUser({
  user: "gabrielAdmin",
  pwd: passwordPrompt(),
  roles: [{ role: "administrador", db: "campus_parking" }]
});

// Crear usuario empleado de sede
use campus_parking;
db.createUser({
  user: "paolaEmpleadoMedellin",
  pwd: passwordPrompt(),
  roles: [{ role: "empleadoSede", db: "campus_parking" }]
});

// Crear usuario cliente
use campus_parking;
db.createUser({
  user: "carolinaCliente",
  pwd: passwordPrompt(),
  roles: [{ role: "cliente", db: "campus_parking" }]
});
```

## 🧩 Conclusiones y mejoras posibles

* MongoDB permite un diseño flexible y validado para aplicaciones como Campus Parking.
* Las transacciones permiten consistencia fuerte en operaciones críticas.
* Se recomienda crear una API RESTful para exponer estos datos.
* Es posible escalar a múltiples sedes y ciudades sin alterar el modelo.
* Se podría implementar autenticación JWT y paneles de control visuales.

---

Este proyecto demuestra la capacidad de MongoDB para gestionar información compleja y relacionada, asegurando consistencia, rendimiento y flexibilidad.

## proyecto echo por
- Manuel :3

