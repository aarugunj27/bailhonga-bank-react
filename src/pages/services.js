import React from "react";
import './static/css/style.css';
import NavBar from '../components/NavBar.js';
import Footer from "../components/footer";


function Services() {
    return (
        <div>
            <NavBar />
            <title>Services</title>
            <h1>Services</h1>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <h3>Loans 1</h3>
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th>Loans</th>
                                    <th>Percent</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Land Load</td>
                                    <td>15.00%</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Plege Loan</td>
                                    <td>13.00%</td>
                                </tr>
                                <tr>
                                    <td>Vehicle Loan</td>
                                    <td>11.00%</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Gold Loan</td>
                                    <td>10.50%</td>
                                </tr>
                                <tr>
                                    <td>Cash Loan</td>
                                    <td>12.00%</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Pay Loan</td>
                                    <td>12.00%</td>
                                </tr>
                                <tr>
                                    <td>Building Loan</td>
                                    <td>10.50%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <h3>Loans 2</h3>
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th>Loans</th>
                                    <th>Percent</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Land Load</td>
                                    <td>15.00%</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Plege Loan</td>
                                    <td>13.00%</td>
                                </tr>
                                <tr>
                                    <td>Vehicle Loan</td>
                                    <td>11.00%</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Gold Loan</td>
                                    <td>10.50%</td>
                                </tr>
                                <tr>
                                    <td>Cash Loan</td>
                                    <td>12.00%</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Pay Loan</td>
                                    <td>12.00%</td>
                                </tr>
                                <tr>
                                    <td>Building Loan</td>
                                    <td>10.50%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <h3>Loans 3</h3>
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th>Loans</th>
                                    <th>Percent</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Land Load</td>
                                    <td>15.00%</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Plege Loan</td>
                                    <td>13.00%</td>
                                </tr>
                                <tr>
                                    <td>Vehicle Loan</td>
                                    <td>11.00%</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Gold Loan</td>
                                    <td>10.50%</td>
                                </tr>
                                <tr>
                                    <td>Cash Loan</td>
                                    <td>12.00%</td>
                                </tr>
                                <tr class="active-row">
                                    <td>Pay Loan</td>
                                    <td>12.00%</td>
                                </tr>
                                <tr>
                                    <td>Building Loan</td>
                                    <td>10.50%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services;