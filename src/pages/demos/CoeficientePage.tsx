import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Cell, Tooltip, CartesianGrid } from 'recharts';

// Mock data for different industries and positions
const data = {
  "TI": {
    "Finanzas": { videosIndCargo: 80, testAprobado: 80 },
    "Marketing": { videosIndCargo: 75, testAprobado: 85 },
    "Cargo de Interes": { videosIndCargo: 78, testAprobado: 82 }
  },
  "Turismo": {
    "Finanzas": { videosIndCargo: 70, testAprobado: 75 },
    "Marketing": { videosIndCargo: 85, testAprobado: 90 },
    "Cargo de Interes": { videosIndCargo: 80, testAprobado: 85 }
  },
  "Area de Interes": {
    "Finanzas": { videosIndCargo: 85, testAprobado: 90 },
    "Marketing": { videosIndCargo: 80, testAprobado: 85 },
    "Cargo de Interes": { videosIndCargo: 90, testAprobado: 95 }
  }
};

// Fixed KPIs that do not change with filters
const fixedKPIs = {
  videosSuperPoderes: 80,
  testDisc: 100,
  testBelbin: 100
};

// Labels for the KPIs (4 labels for 4 KPIs)
const labels = [
  "Cantidad de Videos al 100%",
  "Cantidad de SuperPoderes al 100%",
  "Cantidad Test aprobado a la primera",
  "Tests de RRHH",
];

// Colors for each KPI bar (4 colors for 4 bars)
const colors = [
  '#001a57',
  '#0f6a08',
  '#87CEEB',
  '#955f20',
];

const CoeficientePage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("TI");
  const [selectedPosition, setSelectedPosition] = useState("Finanzas");

  // Retrieve dynamic KPI values based on selected filters
  const videosIndCargo = data[selectedIndustry as keyof typeof data][selectedPosition as keyof typeof data[keyof typeof data]].videosIndCargo;
  const testAprobado = data[selectedIndustry as keyof typeof data][selectedPosition as keyof typeof data[keyof typeof data]].testAprobado;

  // Calculate "Tests de RRHH" as the average of testDisc and testBelbin
  const testsRRHH = Math.round((fixedKPIs.testDisc + fixedKPIs.testBelbin) / 2);

  // Combine dynamic and fixed KPI values (4 KPIs)
  const dataPoints = [
    videosIndCargo,
    fixedKPIs.videosSuperPoderes,
    testAprobado,
    testsRRHH
  ];

  // Calculate Coeficiente Prelaboral as the average of the 4 KPIs
  const coeficientePrelaboral = Math.round(dataPoints.reduce((sum, value) => sum + value, 0) / dataPoints.length);

  // Prepare data for the chart (4 KPIs)
  const chartData = labels.map((label, index) => ({ name: label, value: dataPoints[index] }));

  const handleCertificarCV = () => {
    window.location.href = '/certificar-cv'; // Redirige a la página de certificación
  };

  return (
    <div className="max-w-8xl mx-auto p-4 flex flex-col md:flex-row">
      {/* Coeficiente Prelaboral Section */}
      <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-md md:w-1/3">
        <p className="text-lg font-semibold text-gray-700 mb-2">Tu coeficiente en Prelaboral es:</p>
        <h2 className="text-5xl font-bold text-blue-600">{coeficientePrelaboral}%</h2>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Un coeficiente mayor al 85% te permite ser elegible para ofertas laborales.
        </p>
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleCertificarCV}
        >
          Certifica tu CV ahora
        </button>
      </div>

      {/* Filters and Chart Section */}
      <div className="flex flex-col md:w-2/3">
        <h1 className="text-3xl font-bold mb-6 mt-5 text-center">Detalles del Coeficiente Prelaboral</h1>
        <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Industria:</label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="TI">TI</option>
              <option value="Turismo">Turismo</option>
              <option value="Area de Interes">Area de Interes</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Cargo:</label>
            <select
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Finanzas">Finanzas</option>
              <option value="Marketing">Marketing</option>
              <option value="Cargo de Interes">Cargo de Interes</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <BarChart
            width={1000}  // Increased width for prominence
            height={450}  // Increased height for prominence
            data={chartData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 250, bottom: 20 }}  // Increased left margin for labels
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="name" type="category" width={250} />  // Increased width for labels
            <Tooltip />
            <Bar dataKey="value">
              {chartData.map((entry, index) => (
                <Cell key={index} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default CoeficientePage;