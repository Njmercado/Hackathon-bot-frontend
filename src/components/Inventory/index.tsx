const Inventory = ({ medications }: any) => {
  return (
    <div className="inventory">
      <h2>Inventario</h2>
      <ul>
        {medications.map((med: any) => (
          <li key={med.id}>
            {med.name}: {med.quantity} unidades
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
