import React from 'react';
function Header() {
    return (
      <header className="bg-teal-500 shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold">ระบบบริหารจัดการ</h1>
        <div>
          <button className="text-gray-700">Logout</button>
        </div>
      </header>
    );
  }
  
  export default Header;
  
