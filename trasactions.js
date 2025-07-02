const session = db.getMongo().startSession();
const dbSession = session.getDatabase("test");

session.startTransaction();
try {
  dbSession.usuarios.insertOne({
    _id: 11,
    clienteId: 11,
    productos: [{productoId: 1, cantidad: 2}],
    fecha: ISODate("2025-06-22"),
    total: 10000
  });
  dbSession.productos.updateOne({_id: 1}, {$inc: {stock: -2}});
  session.commitTransaction();
  print("Venta confirmada");
} catch (error) {
  session.abortTransaction();
  print("Error:", error);
} finally {
  session.endSession();
}