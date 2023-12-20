import '../../css/dashboard/dataTile.css';
import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Chart1 from './Chart1';
import Chart2 from './Chart2';


export default function DataTile(props) {
  const [selectedTechnology, setSelectedTechnology] = useState('');
  const handleTechnologyChange = (technology) => {
    setSelectedTechnology(technology);
  };
  
  const dataTilesRef = useRef(null);
  const chartsRef = useRef(null);

  const handleDownload = async () => {
    const options = {
      margin: 10,
      filename: 'report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
    };

    const dataTilesContent = dataTilesRef.current;
    const chartsContent = chartsRef.current;

    try {
      const dataTilesCanvas = await html2canvas(dataTilesContent);
      const chartsCanvas = await html2canvas(chartsContent);
    
      const pdf = new jsPDF({ unit: 'mm', format: 'a5', orientation: 'lam' });
      
      pdf.setTextColor(3, 133, 98);
      pdf.setFont("helvetica", "bold"); 
      pdf.setFontSize(18);
      pdf.text('PROGRESS REPORT', 75, 12);

      pdf.setFontSize(16);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(0, 0, 0);
      pdf.text('Questions Status:', 20, 27);
      pdf.addImage(dataTilesCanvas.toDataURL('image/jpeg'), 'JPEG', 10, 32, 190, 27);
    
      pdf.text('Progress Chart:', 20, 77);
      pdf.addImage(chartsCanvas.toDataURL('image/jpeg'), 'JPEG', 10, 79, 190, 75);
    
      pdf.save(options.filename);
    } catch (error) {
      console.error('Error creating PDF:', error);
    }
  };

  return (
    <>
      <div className='row pre-data'>
        <h4 id='welcome-back'>Welcome back {props.userName} :)</h4>
        <Button variant='success' id='download-report-btn' onClick={handleDownload}>
          Download Report
        </Button>
      </div>
      <div className="data-tiles row" ref={dataTilesRef}>
        <div className="col-sm-2 data-tile">
          <h5 className='data-tile-heading'>Total Questions</h5>
          <h4 className='data-tile-data'>{props.data}</h4>
        </div>
        <div className="col-sm-2 data-tile">
          <h5 className='data-tile-heading'>Questions Attempted</h5>
          <h4 className='data-tile-data'>{props.data1}</h4>
        </div>
        <div className="col-sm-2 data-tile">
          <h5 className='data-tile-heading'>Questions Unattempted</h5>
          <h4 className='data-tile-data'>{props.data2}</h4>
        </div>
        <div className="col-sm-2 data-tile">
          <h5 className='data-tile-heading'>Proficiency</h5>
          <h4 className='data-tile-data'>{props.data3}</h4>
        </div>
      </div>
      <div className='row report' ref={chartsRef}>
        <div className='col-md-5 chart'>
          <Chart1 onTechnologyChange={handleTechnologyChange} />
        </div>
        <div className='col-md-5 chart' id='chart2'>
          <Chart2 selectedTechnology={selectedTechnology} />
        </div>
      </div>
    </>
  );
}
