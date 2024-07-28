const Sidebar = ({ onMenuSelect }:any) => {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => onMenuSelect('dashboard')}>Dashboard</li>
        <li onClick={() => onMenuSelect('medications')}>Medicamentos</li>
        <li onClick={() => onMenuSelect('inventory')}>Inventario</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
