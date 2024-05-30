
import getterfunctions from './salaryData.js'; // same as import {default as getterfunctions} from './salaryData';

// Destructuring the object
const { getRoles, getCompanies, getDataByRole, getDataByCompany, salaryData } = getterfunctions;


const getAverageSalaryByRole = role => {
    let roleData = getDataByRole();
    let salariesOfRole = roleData.map(obj => obj.salary);
    return calculateAverage(salariesOfRole);
}

const getAverageSalaryByCompany = company => {
    const companyData = getDataByCompany();
    const salariesAtCompany = companyData.map(obj => obj.salary);
    return calculateAverage(salariesAtCompany);
  }

const getSalaryAtCompany = (role, company) => {
    const companyData = salaryData ;
    const target = salaryData.find(obj => {
        if (obj.company === company && obj.role === role) {
            return obj;
        }
    });
    return target.salary;

}

const getIndustryAverageSalary = () => {
    const allSalaries = salaryData.map(obj => obj.salary);
    return calculateAverage(allSalaries);
}

const calculateAverage = (arrayOfNumbers) => {
    const sum = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return (sum / arrayOfNumbers.length).toFixed(2);
}

