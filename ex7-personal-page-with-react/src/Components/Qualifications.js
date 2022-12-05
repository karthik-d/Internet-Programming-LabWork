import React from 'react';


const Qualifications = () => {
    return (
        <div id="Qualif__content">
            <table class="Qualif__table">
                <tr>
                    <th colspan="2" class="Qualif__tableHead" style={{ width: "180px" }}>Period</th>
                    <th rowspan="2" class="Qualif__tableHead" style={{ width: "180px" }}>Certification</th>
                    <th rowspan="2" class="Qualif__tableHead" style={{ width: "180px" }}>Board/University</th>
                    <th rowspan="2" class="Qualif__tableHead" style={{ width: "400px" }}>Organization</th>
                </tr>
                <tr>
                    <th class="Qualif__tableHead">From</th>
                    <th class="Qualif__tableHead">To</th>
                </tr>
                <tr>
                    <td class="Qualif__tableCell">2007</td>
                    <td>2016</td>
                    <td>AISSCE</td>
                    <td>CBSE</td>
                    <td>Kendriya Vidyalaya DRDO, Bangalore</td>
                </tr>
                <tr>
                    <td class="Qualif__tableCell">2017</td>
                    <td>2019</td>
                    <td>AISSE</td>
                    <td>CBSE</td>
                    <td>National Public School, Bangalore</td>
                </tr>
                <tr>
                    <td class="Qualif__tableCell">2019</td>
                    <td>Present</td>
                    <td>B.E.(CSE)</td>
                    <td>Anna University</td>
                    <td>SSN College of Engineering, Chennai</td>
                </tr>
            </table>
        </div>
    );
}

export default Qualifications;