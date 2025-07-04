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

  dbSession.parqueaderos.insertOne(ingreso);

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
