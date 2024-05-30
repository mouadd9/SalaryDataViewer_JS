// this simulates a data base 
// each time we gather data from our checkboxes in main.js
// we should fetch for the right object in this array 
// and return it (it will contain our salary)
const salaryData = [
    { role: 'CTO', company: 'Big Data Inc.', salary: 320000 },
    { role: 'Technical Lead', company: 'Big Data Inc.', salary: 230000 },
    { role: 'Software Engineer II', company: 'Big Data Inc.', salary: 180000 },
    { role: 'Software Engineer I', company: 'Big Data Inc.', salary: 140000 },
    { role: 'CTO', company: 'Medium Data Inc.', salary: 215000 },
    { role: 'Technical Lead', company: 'Medium Data Inc.', salary: 165000 },
    { role: 'Software Engineer II', company: 'Medium Data Inc.', salary: 140000 },
    { role: 'Software Engineer I', company: 'Medium Data Inc.', salary: 115000 },
    { role: 'CTO', company: 'Small Data Inc.', salary: 175000 },
    { role: 'Technical Lead', company: 'Small Data Inc.', salary: 135000 },
    { role: 'Software Engineer II', company: 'Small Data Inc.', salary: 115000 },
    { role: 'Software Engineer I', company: 'Small Data Inc.', salary: 95000 },
];

const getters = {

    // before all this we need to get all the roles and companies to register them in our arrays back in main.js
    getRoles: () => {
        let roles = [];
        salaryData.forEach(data => {
            if (!roles.includes(data.role)) {
                roles.push(data.role);
            }
        });
        return roles;
    },

    getCompanies: () => {
        let companies = [];
        salaryData.forEach(data => {
            if (!companies.includes(data.company)) {
                companies.push(data.company);
            }
        });
        return companies;
    },

    // let's get an array of objects that has a common passed role
    getDataByRole: role => {
        return salaryData.filter(obj => obj.role === role);
    },
    // let's get an array of objects that has a common passed company
    getDataByCompany: company => {
        return salaryData.filter(obj => obj.company === company);
    }
}

export default getters; // same as export {getters as default}