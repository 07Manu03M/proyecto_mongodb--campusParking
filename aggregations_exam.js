use("campus_parking");

// 1. Mostrar la cantidad de parqueos realizados por tipo de vehiculo en cada sede

const motoid = new ObjectId("668397a7a5b6c7d8e9f0101D")

db.parqueaderos.aggregate([
  {
    $match: {
      vehiculo_id: motoid
    }
  },
  {
    $group: {
      _id: "$sede_id",
      total_parqueos: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "sedes",
      localField: "sede_id",
      foreignField: "_id",
      as: "info_sede"
    }
  },
  {
    $unwind: "$info_sede"
  },
  {
    $lookup: {
      from: "zonas",
      localField: "zona_id",
      foreignField: "_id",
      as: "info_zona"
    }
  },
  {
    $unwind: "$info_zona"
  },
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo_id",
      foreignField: "_id",
      as: "info_vehiculo"
    }
  },
  {
    $unwind: "$info_vehiculo"
  },
  {
    $project: {
      _id: 0,
      sede: "$info_sede.nombre",
      tipo_vehiculo: "$tipo_vehiculo_parqueado",
    }
  },
  {
    $sort: { fecha_entrada: -1 }
  }
])

// 2. Listar los clientes que han utilizado mas de 5 veces el parqueadero en el ultimo mes.

db.parqueaderos.aggregate([
  {
    $match: {
      hora_entrada: {$gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),},
    },
  },
  {
    $group: {
      _id: "$cliente_id",
      cantidad_parqueos: { $sum: 1 },
    },
  },
  {
    $sort: { cantidad_parqueos: -1 },
  },
  {
    $limit: 4, 
  },
  {
    $lookup: {
      from: "usuarios",
      localField: "_id",
      foreignField: "_id",
      as: "info_cliente",
    },
  },
  {
    $unwind: "$info_cliente",
  },
  {
    $project: {
      _id: 0,
      cliente: {
        $concat: ["$info_cliente.nombre", " ", "$info_cliente.apellido"],
      },
      cantidad_parqueos: 1,
    },
  },
]);

// 3. Calcular el promedio de tiempo de parqueo por tipo de vehiculo en una sede especifica

db.parqueaderos.aggregate([
  {
    $group: {
      _id: { sede: "$sede_id", tipo_vehiculo: "$tipo_vehiculo_parqueado" },
      cantidad: { $sum: 1 }
    }
  },
  {
    $sort: { "_id.sede": -1, cantidad: 1 }
  },
  {
    $group: {
      _id: "$_id.sede",
      tipo_mas_frecuente: { $first: "$_id.tipo_vehiculo" },
      cantidad_tipo_mas_frecuente: { $first: "$cantidad" }
    }
  },
  {
    $lookup: {
      from: "sedes",
      localField: "_id",
      foreignField: "_id",
      as: "info_sede"
    }
  },
  {
    $unwind: "$info_sede"
  },
  {
    $project: {
      _id: 0,
      sede: "$info_sede.nombre",
      tipo_vehiculo_mas_frecuente: "$tipo_mas_frecuente",
      cantidad: "$cantidad_tipo_mas_frecuente"
    }
  }
])
