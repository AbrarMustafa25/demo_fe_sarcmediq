import React from 'react';

const VisitTable = ({visits}) =>{
    return (
        <div>
            <h2>
                Patient Visits
            </h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            MR Number
                        </th>
                        <th>
                            Patient Name
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Reason
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {visits}
                    {visits.map((visit_item) => (
                        <tr key={visit_item.id}>
                            <td>{visit_item.patient.mr_number}</td>
                            <td>{visit_item.patient.first_name} {visit_item.patient.last_name}</td>
                            <td>{new Date(visit_item.date).toLocaleString()}</td>
                            <td>{visit_item.reason}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default VisitTable;