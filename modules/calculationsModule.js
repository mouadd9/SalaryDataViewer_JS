
import ressources from './salaryData.js'; // same as import {default as getterfunctions} from './salaryData';

// Destructuring the object
const { getDataByRole, getDataByCompany, salaryData } = ressources;


const averageSalaries = {

    getAverageSalaryByRole: role => {
        let roleData = getDataByRole(role);
        let salariesOfRole = roleData.map(obj => obj.salary);
        return calculateAverage(salariesOfRole);
    },

    getAverageSalaryByCompany: company => {
        const companyData = getDataByCompany(company);
        const salariesAtCompany = companyData.map(obj => obj.salary);
        return calculateAverage(salariesAtCompany);
    },

    getSalaryAtCompany: (role, company) => {
        const target = ressources.salaryData.find(obj => {
            if (obj.company === company && obj.role === role) {
                return obj;
            }
        });
        return target.salary;

    },

    getIndustryAverageSalary: () => {
        const allSalaries = salaryData.map(obj => obj.salary);
        return calculateAverage(allSalaries);
    }

}


const calculateAverage = (arrayOfNumbers) => {
    const sum = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return (sum / arrayOfNumbers.length).toFixed(2);
}

export default averageSalaries; 