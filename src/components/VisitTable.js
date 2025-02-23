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
                        <tr>
                            <th>
                                ...
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default VisitTable;