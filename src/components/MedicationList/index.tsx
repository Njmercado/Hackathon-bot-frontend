const MedicationList = ({ medications, onEdit, onDelete }: any) => {
  return (
    <div className="medication-list">
      <h2>Lista de Medicamentos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {medications.map((med: any) => (
            <tr key={med.id}>
              <td>{med.name}</td>
              <td>{med.description}</td>
              <td>{med.quantity}</td>
              <td>
                <button onClick={() => onEdit(med)}>Editar</button>
                <button onClick={() => onDelete(med.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicationList;
